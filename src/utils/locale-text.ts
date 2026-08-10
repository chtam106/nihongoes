/** Wrap embedded Japanese in EN/VI UI copy. Rendered with `lang="ja"` via `renderLocaleText`. */
export const LOCALE_JA_TAG = 'ja' as const;

export const LOCALE_JA_OPEN = `<${LOCALE_JA_TAG}>`;
export const LOCALE_JA_CLOSE = `</${LOCALE_JA_TAG}>`;

const japaneseScriptChar =
  /[\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff\u31f0-\u31ff\uFF66-\uFF9f\u3001-\u303f\u301c\uff5e]/;

const localeLetterChar = /[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]/;

function isJapaneseScriptChar(char: string): boolean {
  return japaneseScriptChar.test(char);
}

/** True when the string mixes locale letters with Japanese script (needs `<ja>` markers). */
export function localeTextNeedsJaMarkers(text: string): boolean {
  let hasJapanese = false;
  let hasLocaleLetters = false;

  for (const char of text) {
    if (isJapaneseScriptChar(char)) {
      hasJapanese = true;
    } else if (localeLetterChar.test(char)) {
      hasLocaleLetters = true;
    }

    if (hasJapanese && hasLocaleLetters) {
      return true;
    }
  }

  return false;
}

/** Authoring helper: wrap Japanese script runs in `<ja>...</ja>`. Idempotent. */
export function markJapaneseInLocaleText(text: string): string {
  if (!localeTextNeedsJaMarkers(text) || text.includes(LOCALE_JA_OPEN)) {
    return text;
  }

  let result = '';
  let index = 0;

  while (index < text.length) {
    const isJapanese = isJapaneseScriptChar(text[index]!);
    let end = index + 1;

    while (end < text.length && isJapaneseScriptChar(text[end]!) === isJapanese) {
      end += 1;
    }

    const slice = text.slice(index, end);

    if (isJapanese) {
      result += `${LOCALE_JA_OPEN}${slice}${LOCALE_JA_CLOSE}`;
    } else {
      result += slice;
    }

    index = end;
  }

  return result;
}
