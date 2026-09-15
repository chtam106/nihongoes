import fs from 'fs';

const kanji = /[\u4e00-\u9fff]/;
const kanaWord =
  /(?:がくせい|せんせい|かいしゃいん|なんですか|なんさい|おなまえ|しつれい|にほんご|にほんの|わたしの|あのひと|あのかた|ほん|じしょ|とけい|かさ|かぎ|えんぴつ|ざっし|きょうしつ|じむしょ|しょくどう|かいぎしつ|うけつけ|べんきょう|でんわ|なんじ)/;

function parseBases(s) {
  return s ? [...s.matchAll(/base:\s*'([^']+)'/g)].map((m) => m[1]) : [];
}

function auditJp(text, bases) {
  const miss = [];
  const stuck = [];
  let pos = 0;
  let si = 0;
  while (pos < text.length) {
    const seg = bases[si];
    if (seg && text.startsWith(seg, pos)) {
      pos += seg.length;
      si += 1;
      continue;
    }
    if (kanji.test(text[pos])) miss.push(text[pos]);
    pos += 1;
  }
  for (; si < bases.length; si += 1) stuck.push(bases[si]);
  return { miss: [...new Set(miss)], stuck };
}

function objectBounds(text, fromIndex) {
  let i = fromIndex;
  while (i >= 0 && text[i] !== '{') i -= 1;
  const objStart = i;
  let depth = 0;
  for (i = objStart; i < text.length; i += 1) {
    if (text[i] === '{') depth += 1;
    else if (text[i] === '}') {
      depth -= 1;
      if (depth === 0) return [objStart, i + 1];
    }
  }
  return [objStart, text.length];
}

function objectBoundsContaining(text, fromIndex, needle) {
  let searchFrom = fromIndex;
  while (searchFrom >= 0) {
    let i = searchFrom;
    while (i >= 0 && text[i] !== '{') i -= 1;
    if (i < 0) break;
    const bounds = objectBounds(text, i);
    const obj = text.slice(bounds[0], bounds[1]);
    if (obj.includes(needle)) return bounds;
    searchFrom = i - 1;
  }
  return objectBounds(text, fromIndex);
}

function scanChunk(chunk, label) {
  const issues = [];

  for (const m of chunk.matchAll(/jp:\s*'((?:\\'|[^'])*)'/g)) {
    const jp = m[1].replace(/\\'/g, "'");
    const needle = m[0];
    const [objStart, objEnd] = objectBoundsContaining(chunk, m.index, needle);
    const obj = chunk.slice(objStart, objEnd);

    if (kanaWord.test(jp)) issues.push({ file: label, kind: 'kana-jp', jp });
    if (!kanji.test(jp)) continue;

    const rm = obj.match(/ruby:\s*\[([\s\S]*?)\]/);
    const bases = parseBases(rm?.[1]);
    if (!bases.length) issues.push({ file: label, kind: 'kanji-no-ruby', jp });
    else {
      const { miss, stuck } = auditJp(jp, bases);
      if (miss.length || stuck.length) {
        issues.push({ file: label, kind: 'ruby-mismatch', jp, miss, stuck });
      }
    }
  }

  for (const m of chunk.matchAll(/pattern:\s*'([^']*)'/g)) {
    const pattern = m[1];
    const [objStart, objEnd] = objectBounds(chunk, m.index);
    const obj = chunk.slice(objStart, objEnd);
    // A pattern that contrasts both readings of 何 is about the readings themselves, so kana is intended.
    const contrastsNanReadings = pattern.includes('なん') && pattern.includes('なに');
    if (/なん[^']/.test(pattern) && !contrastsNanReadings) {
      issues.push({ file: label, kind: 'pattern-kana', pattern });
    }
    if (kanji.test(pattern) && !obj.includes('patternRuby')) {
      issues.push({ file: label, kind: 'pattern-no-ruby', pattern });
    }
  }

  for (const m of chunk.matchAll(
    /explanation:\s*\{\s*en:\s*'((?:\\'|[^'])*)',\s*vi:\s*'((?:\\'|[^'])*)'\s*\}/g
  )) {
    // By convention `explanationRuby` is authored directly after its `explanation`.
    const after = chunk.slice(m.index + m[0].length);
    for (const [loc, raw] of [
      ['en', m[1]],
      ['vi', m[2]]
    ]) {
      const text = raw.replace(/\\'/g, "'");
      if (!kanji.test(text)) continue;
      const rm = after.match(/^\s*,\s*explanationRuby:\s*\[([\s\S]*?)\]/);
      if (!rm) {
        issues.push({ file: label, kind: 'explanation-no-ruby', loc, text: text.slice(0, 100) });
      } else {
        const { miss } = auditJp(text, parseBases(rm[1]));
        if (miss.length) {
          issues.push({
            file: label,
            kind: 'explanation-ruby-mismatch',
            loc,
            text: text.slice(0, 100),
            miss
          });
        }
      }
    }
  }

  return issues;
}

const index = fs.readFileSync('src/constants/courses/n5/index.ts', 'utf8');
const l5 = fs.readFileSync('src/constants/courses/n5/lessons-5.ts', 'utf8');
const l6 = fs.readFileSync('src/constants/courses/n5/lessons-6.ts', 'utf8');
const l7 = fs.readFileSync('src/constants/courses/n5/lessons-7.ts', 'utf8');
const end = index.lastIndexOf('    n5Lesson5');
const all = [
  ...scanChunk(end > 0 ? index.slice(0, end) : index, 'L1-4'),
  ...scanChunk(l5, 'L5'),
  ...scanChunk(l6, 'L6'),
  ...scanChunk(l7, 'L7')
];
console.log(JSON.stringify(all, null, 2));
console.error('count', all.length);
