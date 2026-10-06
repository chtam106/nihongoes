/**
 * Re-export N5 lesson-1 public clips from the Kotoba source with padded edges.
 *
 * Usage:
 *   node scripts/reexport-l1-audio.mjs <kotoba.mp3> [padHeadSec=0.12] [padTailSec=0.2]
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const mp3 = process.argv[2];
const padHead = Number(process.argv[3] || '0.12');
const padTail = Number(process.argv[4] || '0.2');
const manifestPath = path.join(root, 'tmp/kotoba-l1-s0.8/manifest.json');
const outDir = path.join(root, 'public/audio/course/n5/lesson-1');

if (!mp3) {
  console.error('Usage: node scripts/reexport-l1-audio.mjs <kotoba.mp3> [padHead] [padTail]');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const byIndex = new Map(manifest.map((c) => [c.index, c]));

const duration = Number(
  execFileSync(
    'ffprobe',
    ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=noprint_wrappers=1:nokey=1', mp3],
    { encoding: 'utf8' }
  ).trim()
);

/** @type {{ clip: number; file: string }[]} */
const exports = [
  // vocab: clips 3..31 -> vocab-01..29
  ...Array.from({ length: 29 }, (_, i) => ({
    clip: i + 3,
    file: null
  })),
  // Kotoba 表現 order on the CD (not the lesson `phrases[]` array order):
  // しつれい -> おなまえは -> はじめまして -> どうぞよろしく -> こちらは -> からきました
  // clip 38 is the end-of-track bell/chime - do NOT use it for a phrase.
  { clip: 34, file: 'phrase-01-hajimemashite.mp3' },
  { clip: 35, file: 'phrase-02-yoroshiku.mp3' },
  { clip: 33, file: 'phrase-03-onamae.mp3' },
  { clip: 32, file: 'phrase-04-shitsurei.mp3' },
  { clip: 37, file: 'phrase-05-amerika-kara.mp3' },
  { clip: 36, file: 'phrase-06-kochira-wa.mp3' }
];

/**
 * Optional absolute-time overrides (finer splits than the coarse manifest).
 * phrase-06 merges two speech bursts (こちらは + アレックスさんです).
 * phrase-05 is the short 〜からきました before the end bell.
 */
const timeOverrides = {
  'phrase-05-amerika-kara.mp3': { start: 74.143, end: 74.891 },
  'phrase-06-kochira-wa.mp3': { start: 71.297, end: 73.07 }
};

const vocabSlugs = [
  'watashi',
  'watashitachi',
  'anata',
  'ano-hito',
  'ano-kata',
  'minasan',
  'san',
  'chan',
  'kun',
  'jin',
  'sensei',
  'kyoshi',
  'gakusei',
  'kaishain',
  'shain',
  'ginkoin',
  'isha',
  'kenkyusha',
  'enjinia',
  'daigaku',
  'byoin',
  'denki',
  'dare',
  'donata',
  'sai',
  'nansai',
  'oikutsu',
  'hai',
  'iie'
];

for (let i = 0; i < 29; i++) {
  exports[i].file = `vocab-${String(i + 1).padStart(2, '0')}-${vocabSlugs[i]}.mp3`;
}

fs.mkdirSync(outDir, { recursive: true });

for (const item of exports) {
  const override = timeOverrides[item.file];
  const clip = byIndex.get(item.clip);
  if (!override && !clip) {
    throw new Error(`Missing clip ${item.clip} in manifest`);
  }

  const start = override?.start ?? clip.start;
  const end = override?.end ?? clip.end;
  const ss = Math.max(0, start - padHead);
  const ee = Math.min(duration, end + padTail);
  const t = Math.max(0.05, ee - ss);
  const outPath = path.join(outDir, item.file);

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
  const srcLabel = override ? 'time-override' : `clip-${String(item.clip).padStart(2, '0')}`;
  console.log(`${item.file}  ${srcLabel}  ${ss.toFixed(2)}-${ee.toFixed(2)}s`);
}

console.log(JSON.stringify({ padHead, padTail, count: exports.length }, null, 2));
