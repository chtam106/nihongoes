import fs from 'fs';

const kanjiRe = /[\u4e00-\u9fff]/;

function isKanjiChar(char) {
  return kanjiRe.test(char);
}

function inferVocabRuby(kanjiForm, kanaReading) {
  const ruby = [];
  let surfaceIndex = 0;
  let readingIndex = 0;

  while (surfaceIndex < kanjiForm.length) {
    const char = kanjiForm[surfaceIndex];

    if (!isKanjiChar(char)) {
      if (!kanaReading.startsWith(char, readingIndex)) {
        return undefined;
      }
      surfaceIndex += char.length;
      readingIndex += char.length;
      continue;
    }

    let kanjiEnd = surfaceIndex;
    while (kanjiEnd < kanjiForm.length && isKanjiChar(kanjiForm[kanjiEnd])) {
      kanjiEnd += 1;
    }

    const base = kanjiForm.slice(surfaceIndex, kanjiEnd);

    let okuriganaEnd = kanjiEnd;
    while (okuriganaEnd < kanjiForm.length && !isKanjiChar(kanjiForm[okuriganaEnd])) {
      okuriganaEnd += 1;
    }

    const okurigana = kanjiForm.slice(kanjiEnd, okuriganaEnd);

    if (okurigana) {
      const okuriStart = kanaReading.indexOf(okurigana, readingIndex);
      if (okuriStart === -1) {
        return undefined;
      }
      ruby.push({ base, reading: kanaReading.slice(readingIndex, okuriStart) });
      readingIndex = okuriStart + okurigana.length;
    } else {
      ruby.push({ base, reading: kanaReading.slice(readingIndex) });
      readingIndex = kanaReading.length;
    }

    surfaceIndex = okuriganaEnd;
  }

  if (readingIndex !== kanaReading.length) {
    return undefined;
  }

  return ruby.length ? ruby : undefined;
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

function parseField(obj, name) {
  const m = obj.match(new RegExp(`${name}:\\s*'((?:\\\\'|[^'])*)'`));
  return m ? m[1].replace(/\\'/g, "'") : undefined;
}

function formatRuby(ruby) {
  if (ruby.length === 1) {
    return `ruby: [{ base: '${ruby[0].base}', reading: '${ruby[0].reading}' }],`;
  }

  const lines = ruby.map((seg) => `{ base: '${seg.base}', reading: '${seg.reading}' }`);
  return `ruby: [\n        ${lines.join(',\n        ')}\n      ],`;
}

function patchVocabArray(text, arrayStart, arrayEnd) {
  let result = text;
  let offset = 0;
  const chunk = text.slice(arrayStart, arrayEnd);
  let pos = 0;

  while (pos < chunk.length) {
    const idx = chunk.indexOf('{', pos);
    if (idx === -1) break;

    const [relStart, relEnd] = objectBounds(chunk, idx);
    const obj = chunk.slice(relStart, relEnd);
    const kana = parseField(obj, 'kana');
    const kanji = parseField(obj, 'kanji');
    const hasRuby = /ruby:\s*\[/.test(obj);

    if (kanji && kanji !== kana && !hasRuby) {
      const inferred = inferVocabRuby(kanji, kana);
      if (!inferred) {
        console.error('failed:', kanji, kana);
      } else {
        const rubyLine = formatRuby(inferred);
        const meaningIdx = obj.indexOf('meaning:');
        if (meaningIdx === -1) {
          console.error('no meaning:', kanji);
        } else {
          const absObjStart = arrayStart + relStart;
          const insertAt = absObjStart + meaningIdx + offset;
          const indent = obj.slice(0, meaningIdx).match(/\n([ \t]*)meaning:/)?.[1] ?? '      ';
          const insertion = `${rubyLine}\n${indent}`;
          result = result.slice(0, insertAt) + insertion + result.slice(insertAt);
          offset += insertion.length;
        }
      }
    }

    pos = relEnd;
  }

  return result;
}

function patchFile(path) {
  let text = fs.readFileSync(path, 'utf8');

  for (const label of ['vocab: [', "items: ["]) {
    let searchFrom = 0;
    while (searchFrom < text.length) {
      const idx = text.indexOf(label, searchFrom);
      if (idx === -1) break;

      if (label === "items: [") {
        const blockStart = text.lastIndexOf('{', idx);
        const block = text.slice(blockStart, idx);
        if (!block.includes("kind: 'vocab'")) {
          searchFrom = idx + label.length;
          continue;
        }
      }

      let depth = 1;
      let i = idx + label.length;
      while (i < text.length && depth > 0) {
        if (text[i] === '[') depth += 1;
        else if (text[i] === ']') depth -= 1;
        i += 1;
      }

      const arrayStart = idx + label.length;
      const arrayEnd = i - 1;
      text = patchVocabArray(text, arrayStart, arrayEnd);
      searchFrom = i;
    }
  }

  fs.writeFileSync(path, text, 'utf8');
  console.log('patched', path);
}

for (const file of ['src/constants/courses/n5/index.ts']) {
  patchFile(file);
}
