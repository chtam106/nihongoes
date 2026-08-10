import { describe, expect, it } from 'vitest';
import { LOCALE_JA_CLOSE, LOCALE_JA_OPEN, markJapaneseInLocaleText } from '@/utils/locale-text.ts';

describe('markJapaneseInLocaleText', () => {
  it('wraps Japanese script runs in locale copy', () => {
    expect(markJapaneseInLocaleText('Typical floor layout (デパート).')).toBe(
      `Typical floor layout (${LOCALE_JA_OPEN}デパート${LOCALE_JA_CLOSE}).`
    );
  });

  it('is idempotent when markers already exist', () => {
    const marked = `Ask with ${LOCALE_JA_OPEN}何${LOCALE_JA_CLOSE}`;
    expect(markJapaneseInLocaleText(marked)).toBe(marked);
  });

  it('leaves pure Japanese strings unchanged', () => {
    expect(markJapaneseInLocaleText('ここ / そこ / あそこ')).toBe('ここ / そこ / あそこ');
  });
});
