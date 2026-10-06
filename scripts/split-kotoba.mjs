/**
 * Split a Minna-style Kotoba MP3 into per-word clips by silence gaps.
 *
 * Usage:
 *   node scripts/split-kotoba.mjs <mp3> <outDir> [minSilenceSec=0.9] [padHeadSec=0.12] [padTailSec=0.2]
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const mp3 = process.argv[2];
const outDir = process.argv[3];
const minSilence = Number(process.argv[4] || '0.9');
/** Extra silence kept before the detected speech onset (seconds). */
const padHead = Number(process.argv[5] || '0.12');
/** Extra silence kept after the detected speech offset (seconds). */
const padTail = Number(process.argv[6] || '0.2');

if (!mp3 || !outDir) {
  console.error(
    'Usage: node scripts/split-kotoba.mjs <mp3> <outDir> [minSilenceSec] [padHeadSec] [padTailSec]'
  );
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });

const logPath = path.join(outDir, 'silence.log');
execFileSync(
  'ffmpeg',
  ['-hide_banner', '-i', mp3, '-af', 'silencedetect=noise=-35dB:d=0.2', '-f', 'null', '-'],
  { stdio: ['ignore', 'ignore', fs.openSync(logPath, 'w')] }
);

const probe = execFileSync(
  'ffprobe',
  ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=noprint_wrappers=1:nokey=1', mp3],
  { encoding: 'utf8' }
);
const duration = Number(probe.trim());

const text = fs.readFileSync(logPath, 'utf8');
const starts = [...text.matchAll(/silence_start: ([\d.]+)/g)].map((m) => Number(m[1]));
const ends = [...text.matchAll(/silence_end: ([\d.]+)/g)].map((m) => Number(m[1]));

/** @type {{ start: number; end: number; dur: number }[]} */
const longSilences = [];
for (let i = 0; i < Math.min(starts.length, ends.length); i++) {
  const dur = ends[i] - starts[i];
  if (dur >= minSilence) {
    longSilences.push({ start: starts[i], end: ends[i], dur });
  }
}

/** @type {{ start: number; end: number; dur: number }[]} */
const words = [];
let cursor = 0;
for (const s of longSilences) {
  if (s.start > cursor + 0.08) {
    words.push({ start: cursor, end: s.start, dur: s.start - cursor });
  }
  cursor = s.end;
}
if (duration > cursor + 0.08) {
  words.push({ start: cursor, end: duration, dur: duration - cursor });
}

// Trim leading silence on first clip if present
const clips = words
  .map((w) => ({
    start: Math.max(0, w.start),
    end: Math.min(duration, w.end),
    dur: w.dur
  }))
  .filter((w) => w.dur >= 0.15);

const manifest = [];
for (let i = 0; i < clips.length; i++) {
  const clip = clips[i];
  const name = `clip-${String(i + 1).padStart(2, '0')}.mp3`;
  const outPath = path.join(outDir, name);
  // Keep a little lead-in/out silence so onsets/offsets aren't clipped on playback.
  const ss = Math.max(0, clip.start - padHead);
  const ee = Math.min(duration, clip.end + padTail);
  const t = Math.max(0.05, ee - ss);
  execFileSync(
    'ffmpeg',
    [
      '-y',
      '-hide_banner',
      '-loglevel',
      'error',
      '-ss',
      String(ss),
      '-t',
      String(t),
      '-i',
      mp3,
      '-c:a',
      'libmp3lame',
      '-q:a',
      '4',
      outPath
    ],
    { stdio: 'inherit' }
  );
  manifest.push({
    index: i + 1,
    file: name,
    start: clip.start,
    end: clip.end,
    exportStart: Number(ss.toFixed(3)),
    exportEnd: Number(ee.toFixed(3)),
    dur: Number(clip.dur.toFixed(3))
  });
}

fs.writeFileSync(path.join(outDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(
  JSON.stringify(
    { duration, minSilence, padHead, padTail, clipCount: manifest.length, clips: manifest },
    null,
    2
  )
);
