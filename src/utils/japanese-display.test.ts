import { describe, expect, it } from 'vitest';
import { formatJapaneseDisplay, spokenJapanese } from '@/utils/japanese-display.ts';

describe('formatJapaneseDisplay', () => {
  it('removes spaces between Japanese words in examples', () => {
    expect(formatJapaneseDisplay('この かばんは わたしのです。')).toBe(
      'このかばんはわたしのです。'
    );
    expect(formatJapaneseDisplay('これは ほんです。')).toBe('これはほんです。');
  });

  it('leaves non-Japanese pattern notation unchanged', () => {
    expect(formatJapaneseDisplay('N は N です')).toBe('N は N です');
  });

  it('passes through text without Japanese', () => {
    expect(formatJapaneseDisplay('hello world')).toBe('hello world');
  });
});

describe('spokenJapanese', () => {
  it('drops the na-adjective tag so TTS does not say な', () => {
    expect(spokenJapanese('すき [な]')).toBe('すき');
    expect(spokenJapanese('じょうぶ[な]')).toBe('じょうぶ');
    expect(formatJapaneseDisplay('すき [な]')).toBe('すき [な]');
  });
});
