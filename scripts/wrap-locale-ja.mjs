/**
 * One-shot helper: wrap embedded Japanese in course EN/VI strings with `<ja>...</ja>`.
 * Run: pnpm exec tsx scripts/wrap-locale-ja.mjs
 */
import fs from 'fs';
import { markJapaneseInLocaleText } from '../src/utils/locale-text.ts';

const files = ['src/constants/courses/n5/index.ts', 'src/constants/courses/n5/lessons-5.ts'];

function transformQuotedString(raw) {
  const quote = raw[0];
  let inner = raw.slice(1, -1).replace(/\\'/g, "'").replace(/\\\\/g, '\\');

  const marked = markJapaneseInLocaleText(inner);

  if (marked === inner) {
    return raw;
  }

  const escaped = marked.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  return `${quote}${escaped}${quote}`;
}

function transformFile(path) {
  const source = fs.readFileSync(path, 'utf8');
  let changes = 0;

  const next = source.replace(/(\ben|\bvi):\s*('(?:\\'|[^'])*')/g, (full, _key, quoted) => {
    const replaced = transformQuotedString(quoted);

    if (replaced !== quoted) {
      changes += 1;
    }

    return full.replace(quoted, replaced);
  });

  if (changes > 0) {
    fs.writeFileSync(path, next);
  }

  return changes;
}

let total = 0;

for (const file of files) {
  total += transformFile(file);
  console.log(`${file}: ${total} strings updated so far`);
}

console.error('total updated strings', total);
