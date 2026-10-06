/**
 * Re-export N5 lesson-2 public clips from the Kotoba source with padded edges.
 *
 * Usage:
 *   node scripts/reexport-l2-audio.mjs <kotoba.mp3> [padHeadSec=0.12] [padTailSec=0.2]
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const mp3 = process.argv[2];
const padHead = Number(process.argv[3] || '0.12');
const padTail = Number(process.argv[4] || '0.2');
const manifestPath = path.join(root, 'tmp/kotoba-l2-s0.8/manifest.json');
const outDir = path.join(root, 'public/audio/course/n5/lesson-2');

if (!mp3) {
  console.error('Usage: node scripts/reexport-l2-audio.mjs <kotoba.mp3> [padHead] [padTail]');
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

/**
 * CD 単語 order after the 第2課 / ことば titles (clips 3-41).
 * Matches silence-split + ASR anchors (コンピューター@30, チョコレート@34, なん@39, …).
 * Not on this track: くるま, CD, 〜ご (lesson data may still list them without audio).
 */
const vocabCdOrder = [
  { clip: 3, slug: 'kore', kana: 'これ' },
  { clip: 4, slug: 'sore', kana: 'それ' },
  { clip: 5, slug: 'are', kana: 'あれ' },
  { clip: 6, slug: 'kono', kana: 'この' },
  { clip: 7, slug: 'sono', kana: 'その' },
  { clip: 8, slug: 'ano', kana: 'あの' },
  { clip: 9, slug: 'hon', kana: 'ほん' },
  { clip: 10, slug: 'jisho', kana: 'じしょ' },
  { clip: 11, slug: 'zasshi', kana: 'ざっし' },
  { clip: 12, slug: 'shinbun', kana: 'しんぶん' },
  { clip: 13, slug: 'noto', kana: 'ノート' },
  { clip: 14, slug: 'techo', kana: 'てちょう' },
  { clip: 15, slug: 'meishi', kana: 'めいし' },
  { clip: 16, slug: 'kado', kana: 'カード' },
  { clip: 17, slug: 'terehon-kado', kana: 'テレホンカード' },
  { clip: 18, slug: 'enpitsu', kana: 'えんぴつ' },
  { clip: 19, slug: 'boru-pen', kana: 'ボールペン' },
  { clip: 20, slug: 'sharp-pen', kana: 'シャープペンシル' },
  { clip: 21, slug: 'kagi', kana: 'かぎ' },
  { clip: 22, slug: 'tokei', kana: 'とけい' },
  { clip: 23, slug: 'kasa', kana: 'かさ' },
  { clip: 24, slug: 'kaban', kana: 'かばん' },
  { clip: 25, slug: 'tepu', kana: 'テープ' },
  { clip: 26, slug: 'tepu-rekoda', kana: 'テープレコーダー' },
  { clip: 27, slug: 'terebi', kana: 'テレビ' },
  { clip: 28, slug: 'rajio', kana: 'ラジオ' },
  { clip: 29, slug: 'kamera', kana: 'カメラ' },
  { clip: 30, slug: 'konpyuta', kana: 'コンピューター' },
  { clip: 31, slug: 'jidisha', kana: 'じどうしゃ' },
  { clip: 32, slug: 'tsukue', kana: 'つくえ' },
  { clip: 33, slug: 'isu', kana: 'いす' },
  { clip: 34, slug: 'chokoreto', kana: 'チョコレート' },
  { clip: 35, slug: 'kohi', kana: 'コーヒー' },
  { clip: 36, slug: 'omiyage', kana: 'おみやげ' },
  { clip: 37, slug: 'nihongo', kana: 'にほんご' },
  { clip: 38, slug: 'eigo', kana: 'えいご' },
  { clip: 39, slug: 'nan', kana: 'なん' },
  { clip: 40, slug: 'so', kana: 'そう' },
  { clip: 41, slug: 'chigaimasu', kana: 'ちがいます' }
];

/**
 * CD 表現 order (clips 42-49). Clip 50 is the end bell.
 * Lesson phrases えっ / あ have no dedicated clips on this track.
 */
const phraseCdOrder = [
  { clip: 42, slug: 'so-desu-ka', file: 'phrase-so-desu-ka.mp3', kana: 'そうですか。' },
  { clip: 43, slug: 'ano-sumimasen', file: 'phrase-ano-sumimasen.mp3', kana: 'あのう、すみません。' },
  { clip: 44, slug: 'kore-wa-nan', file: 'phrase-kore-wa-nan.mp3', kana: 'これは なんですか。' },
  { clip: 45, slug: 'dozo', file: 'phrase-dozo.mp3', kana: 'どうぞ。' },
  // clip 46 is a short どうも breath/false-split before the full thanks line
  { clip: 47, slug: 'arigato', file: 'phrase-arigato.mp3', kana: 'どうも ありがとうございます。' },
  { clip: 48, slug: 'osewa', file: 'phrase-osewa.mp3', kana: 'これから おせわに なります。' },
  { clip: 49, slug: 'kochira-koso', file: 'phrase-kochira-koso.mp3', kana: 'こちらこそ どうぞ よろしく おねがいします。' }
];

fs.mkdirSync(outDir, { recursive: true });

function exportClip(clipIndex, file) {
  const clip = byIndex.get(clipIndex);
  if (!clip) {
    throw new Error(`Missing clip ${clipIndex}`);
  }
  const ss = Math.max(0, clip.start - padHead);
  const ee = Math.min(duration, clip.end + padTail);
  const t = Math.max(0.05, ee - ss);
  const outPath = path.join(outDir, file);
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
  console.log(`${file}  clip-${String(clipIndex).padStart(2, '0')}  ${ss.toFixed(2)}-${ee.toFixed(2)}s`);
  return `/audio/course/n5/lesson-2/${file}`;
}

/** @type {Record<string, string>} */
const audioByKana = {};

for (let i = 0; i < vocabCdOrder.length; i++) {
  const item = vocabCdOrder[i];
  const file = `vocab-${String(i + 1).padStart(2, '0')}-${item.slug}.mp3`;
  audioByKana[item.kana] = exportClip(item.clip, file);
}

for (const item of phraseCdOrder) {
  audioByKana[item.kana] = exportClip(item.clip, item.file);
}

const mapPath = path.join(outDir, 'audio-by-kana.json');
fs.writeFileSync(mapPath, `${JSON.stringify(audioByKana, null, 2)}\n`);
console.log(JSON.stringify({ padHead, padTail, vocab: vocabCdOrder.length, phrases: phraseCdOrder.length, mapPath }, null, 2));
