const JAPANESE_CHAR = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/;

const BETWEEN_JP_SPACES =
  /([\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])[ \u3000]+([\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/gu;

/** Strip learner spacing from Japanese surface text (e.g. この かばん -> このかばん). */
export function formatJapaneseDisplay(text: string): string {
  if (!JAPANESE_CHAR.test(text)) {
    return text;
  }

  let result = text;
  let previous = '';

  while (result !== previous) {
    previous = result;
    result = result.replace(BETWEEN_JP_SPACES, '$1$2');
  }

  return result;
}
