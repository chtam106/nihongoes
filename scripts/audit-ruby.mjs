import fs from 'fs';

const kanji = /[\u4e00-\u9fff]/;
/** Iteration mark 々 needs its own ruby segment (same as a kanji) for display. */
const needsRuby = /[\u4e00-\u9fff々]/;
const kanaWord =
  /(?:がくせい|せんせい|かいしゃいん|なんですか|なんさい|おなまえ|しつれい|にほんご|にほんの|わたしの|あのひと|あのかた|ほん|じしょ|とけい|かさ|かぎ|えんぴつ|ざっし|きょうしつ|じむしょ|しょくどう|かいぎしつ|うけつけ|べんきょう|でんわ|なんじ)/;

function parseBases(s) {
  return s ? [...s.matchAll(/base:\s*'([^']+)'/g)].map((m) => m[1]) : [];
}

function parseSegments(s) {
  return s
    ? [...s.matchAll(/base:\s*'([^']+)',\s*reading:\s*'([^']+)'/g)].map((m) => ({
        base: m[1],
        reading: m[2]
      }))
    : [];
}

/**
 * Rebuild a word's reading by swapping each rubied kanji/々 for its reading and
 * keeping the kana in between. Catches a truncated reading (間 as あい instead
 * of あいだ) that a base-coverage check cannot see. Author an explicit
 * `{ base: '々', reading }` segment (rendaku e.g. 時々 -> とき/どき); do not
 * rely on auto-repeat here.
 */
function spellOut(surface, segments) {
  let out = '';
  let pos = 0;
  let si = 0;
  while (pos < surface.length) {
    const seg = segments[si];
    if (seg && surface.startsWith(seg.base, pos)) {
      out += seg.reading;
      pos += seg.base.length;
      si += 1;
      continue;
    }
    out += surface[pos];
    pos += 1;
  }
  return out;
}

const digit = /[0-9\uff10-\uff19]/;
const stripSpace = (s) => s.replace(/[\s\u3000]/g, '');

/**
 * A headword may list interchangeable kanji forms (速い、早い) while `kana`
 * holds the single shared reading, so accept any one alternative.
 */
function readingMatches(surface, kana, segments) {
  const want = stripSpace(kana);
  const candidates = [surface, ...surface.split('、')];
  return candidates.some((candidate) => stripSpace(spellOut(candidate, segments)) === want);
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
    if (needsRuby.test(text[pos])) miss.push(text[pos]);
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

  for (const m of chunk.matchAll(/kanji:\s*'((?:\\'|[^'])*)'/g)) {
    const surface = m[1].replace(/\\'/g, "'");
    if (!kanji.test(surface)) continue;

    const needle = m[0];
    const [objStart, objEnd] = objectBoundsContaining(chunk, m.index, needle);
    const obj = chunk.slice(objStart, objEnd);
    const kanaM = obj.match(/kana:\s*'((?:\\'|[^'])*)'/);
    const kana = kanaM ? kanaM[1].replace(/\\'/g, "'") : '';
    // VocabHeadword skips furigana when kanji === kana; kana must be pure kana.
    if (kana && surface === kana) {
      issues.push({ file: label, kind: 'kanji-eq-kana', kanji: surface, kana });
      continue;
    }

    const rm = obj.match(/ruby:\s*\[([\s\S]*?)\]/);
    const bases = parseBases(rm?.[1]);
    if (!bases.length) issues.push({ file: label, kind: 'kanji-no-ruby', kanji: surface });
    else {
      const { miss, stuck } = auditJp(surface, bases);
      if (miss.length || stuck.length) {
        issues.push({ file: label, kind: 'ruby-mismatch', kanji: surface, miss, stuck });
        continue;
      }

      if (kanji.test(kana)) {
        issues.push({ file: label, kind: 'kana-has-kanji', kanji: surface, kana });
        continue;
      }

      // A digit is spelled out in `kana` (2階 -> にかい), so the surface cannot
      // be reconstructed from ruby alone.
      if (digit.test(surface)) continue;

      const segments = parseSegments(rm?.[1]);
      if (kana && !readingMatches(surface, kana, segments)) {
        issues.push({
          file: label,
          kind: 'reading-mismatch',
          kanji: surface,
          kana,
          spelled: spellOut(surface, segments)
        });
      }
    }
  }

  for (const m of chunk.matchAll(/pattern:\s*'([^']*)'/g)) {
    const pattern = m[1];
    const [objStart, objEnd] = objectBounds(chunk, m.index);
    const obj = chunk.slice(objStart, objEnd);
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

const l1 = fs.readFileSync('src/constants/courses/n5/lessons-1.ts', 'utf8');
const l2 = fs.readFileSync('src/constants/courses/n5/lessons-2.ts', 'utf8');
const l3 = fs.readFileSync('src/constants/courses/n5/lessons-3.ts', 'utf8');
const l4 = fs.readFileSync('src/constants/courses/n5/lessons-4.ts', 'utf8');
const l5 = fs.readFileSync('src/constants/courses/n5/lessons-5.ts', 'utf8');
const l6 = fs.readFileSync('src/constants/courses/n5/lessons-6.ts', 'utf8');
const l7 = fs.readFileSync('src/constants/courses/n5/lessons-7.ts', 'utf8');
const l8 = fs.readFileSync('src/constants/courses/n5/lessons-8.ts', 'utf8');
const l9 = fs.readFileSync('src/constants/courses/n5/lessons-9.ts', 'utf8');
const l10 = fs.readFileSync('src/constants/courses/n5/lessons-10.ts', 'utf8');
const l11 = fs.readFileSync('src/constants/courses/n5/lessons-11.ts', 'utf8');
const l12 = fs.readFileSync('src/constants/courses/n5/lessons-12.ts', 'utf8');
const l13 = fs.readFileSync('src/constants/courses/n5/lessons-13.ts', 'utf8');
const l14 = fs.readFileSync('src/constants/courses/n5/lessons-14.ts', 'utf8');
const l15 = fs.readFileSync('src/constants/courses/n5/lessons-15.ts', 'utf8');
const l16 = fs.readFileSync('src/constants/courses/n5/lessons-16.ts', 'utf8');
const l17 = fs.readFileSync('src/constants/courses/n5/lessons-17.ts', 'utf8');
const l18 = fs.readFileSync('src/constants/courses/n5/lessons-18.ts', 'utf8');
const l19 = fs.readFileSync('src/constants/courses/n5/lessons-19.ts', 'utf8');
const l20 = fs.readFileSync('src/constants/courses/n5/lessons-20.ts', 'utf8');
const l21 = fs.readFileSync('src/constants/courses/n5/lessons-21.ts', 'utf8');
const l22 = fs.readFileSync('src/constants/courses/n5/lessons-22.ts', 'utf8');
const l23 = fs.readFileSync('src/constants/courses/n5/lessons-23.ts', 'utf8');
const l24 = fs.readFileSync('src/constants/courses/n5/lessons-24.ts', 'utf8');
const l25 = fs.readFileSync('src/constants/courses/n5/lessons-25.ts', 'utf8');
const l26 = fs.readFileSync('src/constants/courses/n4/lessons-26.ts', 'utf8');
const l27 = fs.readFileSync('src/constants/courses/n4/lessons-27.ts', 'utf8');
const l28 = fs.readFileSync('src/constants/courses/n4/lessons-28.ts', 'utf8');
const l29 = fs.readFileSync('src/constants/courses/n4/lessons-29.ts', 'utf8');
const l30 = fs.readFileSync('src/constants/courses/n4/lessons-30.ts', 'utf8');
const l31 = fs.readFileSync('src/constants/courses/n4/lessons-31.ts', 'utf8');
const l32 = fs.readFileSync('src/constants/courses/n4/lessons-32.ts', 'utf8');
const l33 = fs.readFileSync('src/constants/courses/n4/lessons-33.ts', 'utf8');
const l34 = fs.readFileSync('src/constants/courses/n4/lessons-34.ts', 'utf8');
const l35 = fs.readFileSync('src/constants/courses/n4/lessons-35.ts', 'utf8');
const l36 = fs.readFileSync('src/constants/courses/n4/lessons-36.ts', 'utf8');
const l37 = fs.readFileSync('src/constants/courses/n4/lessons-37.ts', 'utf8');
const l38 = fs.readFileSync('src/constants/courses/n4/lessons-38.ts', 'utf8');
const l39 = fs.readFileSync('src/constants/courses/n4/lessons-39.ts', 'utf8');
const l40 = fs.readFileSync('src/constants/courses/n4/lessons-40.ts', 'utf8');
const l41 = fs.readFileSync('src/constants/courses/n4/lessons-41.ts', 'utf8');
const l42 = fs.readFileSync('src/constants/courses/n4/lessons-42.ts', 'utf8');
const l43 = fs.readFileSync('src/constants/courses/n4/lessons-43.ts', 'utf8');
const l44 = fs.readFileSync('src/constants/courses/n4/lessons-44.ts', 'utf8');
const l45 = fs.readFileSync('src/constants/courses/n4/lessons-45.ts', 'utf8');
const l46 = fs.readFileSync('src/constants/courses/n4/lessons-46.ts', 'utf8');
const l47 = fs.readFileSync('src/constants/courses/n4/lessons-47.ts', 'utf8');
const l48 = fs.readFileSync('src/constants/courses/n4/lessons-48.ts', 'utf8');
const l49 = fs.readFileSync('src/constants/courses/n4/lessons-49.ts', 'utf8');
const l50 = fs.readFileSync('src/constants/courses/n4/lessons-50.ts', 'utf8');
const all = [
  ...scanChunk(l1, 'L1'),
  ...scanChunk(l2, 'L2'),
  ...scanChunk(l3, 'L3'),
  ...scanChunk(l4, 'L4'),
  ...scanChunk(l5, 'L5'),
  ...scanChunk(l6, 'L6'),
  ...scanChunk(l7, 'L7'),
  ...scanChunk(l8, 'L8'),
  ...scanChunk(l9, 'L9'),
  ...scanChunk(l10, 'L10'),
  ...scanChunk(l11, 'L11'),
  ...scanChunk(l12, 'L12'),
  ...scanChunk(l13, 'L13'),
  ...scanChunk(l14, 'L14'),
  ...scanChunk(l15, 'L15'),
  ...scanChunk(l16, 'L16'),
  ...scanChunk(l17, 'L17'),
  ...scanChunk(l18, 'L18'),
  ...scanChunk(l19, 'L19'),
  ...scanChunk(l20, 'L20'),
  ...scanChunk(l21, 'L21'),
  ...scanChunk(l22, 'L22'),
  ...scanChunk(l23, 'L23'),
  ...scanChunk(l24, 'L24'),
  ...scanChunk(l25, 'L25'),
  ...scanChunk(l26, 'L26'),
  ...scanChunk(l27, 'L27'),
  ...scanChunk(l28, 'L28'),
  ...scanChunk(l29, 'L29'),
  ...scanChunk(l30, 'L30'),
  ...scanChunk(l31, 'L31'),
  ...scanChunk(l32, 'L32'),
  ...scanChunk(l33, 'L33'),
  ...scanChunk(l34, 'L34'),
  ...scanChunk(l35, 'L35'),
  ...scanChunk(l36, 'L36'),
  ...scanChunk(l37, 'L37'),
  ...scanChunk(l38, 'L38'),
  ...scanChunk(l39, 'L39'),
  ...scanChunk(l40, 'L40'),
  ...scanChunk(l41, 'L41'),
  ...scanChunk(l42, 'L42'),
  ...scanChunk(l43, 'L43'),
  ...scanChunk(l44, 'L44'),
  ...scanChunk(l45, 'L45'),
  ...scanChunk(l46, 'L46'),
  ...scanChunk(l47, 'L47'),
  ...scanChunk(l48, 'L48'),
  ...scanChunk(l49, 'L49'),
  ...scanChunk(l50, 'L50')
];
console.log(JSON.stringify(all, null, 2));
console.error('count', all.length);
