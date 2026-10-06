/**
 * Insert `audio:` fields into a lesson file from an audio-by-kana.json map.
 *
 * Usage:
 *   node scripts/attach-lesson-audio.mjs <lessons-N.ts> <audio-by-kana.json>
 */
import fs from 'node:fs';

const lessonFile = process.argv[2];
const mapFile = process.argv[3];

if (!lessonFile || !mapFile) {
  console.error('Usage: node scripts/attach-lesson-audio.mjs <lesson.ts> <audio-by-kana.json>');
  process.exit(1);
}

const map = JSON.parse(fs.readFileSync(mapFile, 'utf8'));
let src = fs.readFileSync(lessonFile, 'utf8');

// Idempotent: drop prior audio lines for this course audio tree.
src = src.replace(/\n\s*audio: '\/audio\/course\/n5\/lesson-\d+\/[^']+',/g, '');

let added = 0;
const missing = [];

for (const [kana, audio] of Object.entries(map)) {
  const escaped = kana.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  let hit = false;

  // Multi-line object: kana on its own line.
  const multi = new RegExp(`(kana: '${escaped}',\\n)(?!\\s*audio:)`, 'g');
  src = src.replace(multi, (full, p1) => {
    hit = true;
    added += 1;
    return `${p1}      audio: '${audio}',\n`;
  });

  // One-line object: { kana: 'X', romaji: ...
  if (!hit) {
    const single = new RegExp(`(\\{ kana: '${escaped}',)(?!\\s*audio:)`, 'g');
    src = src.replace(single, (full, p1) => {
      hit = true;
      added += 1;
      return `${p1} audio: '${audio}',`;
    });
  }

  if (!hit) {
    missing.push(kana);
  }
}

fs.writeFileSync(lessonFile, src);
console.log(JSON.stringify({ added, total: Object.keys(map).length, missing }, null, 2));
