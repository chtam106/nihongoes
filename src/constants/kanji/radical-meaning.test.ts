import { describe, expect, it } from 'vitest';
import {
  formatRadicalComponentMeaning,
  formatRadicalMeaning,
  radicals
} from '@/constants/kanji/index.ts';

describe('formatRadicalMeaning', () => {
  it('formats 犬 with bracketed Hán-Việt in vi and plain gloss in en', () => {
    const dog = radicals.find((radical) => radical.char === '犬');

    expect(dog).toBeDefined();
    expect(dog!.hanViet).toBe('khuyển');
    expect(dog!.meaning).toEqual({ en: 'dog', vi: 'chó' });
    expect(dog!.componentMeaning).toEqual({ en: 'beast, animal', vi: 'thú vật' });

    expect(formatRadicalMeaning(dog!, 'vi')).toBe('[Khuyển] chó');
    expect(formatRadicalMeaning(dog!, 'en')).toBe('dog');
    expect(formatRadicalComponentMeaning(dog!, 'vi')).toBe('thú vật');
    expect(formatRadicalComponentMeaning(dog!, 'en')).toBe('beast, animal');
  });

  it('formats 月 primary and component senses', () => {
    const moon = radicals.find((radical) => radical.char === '月');

    expect(moon).toBeDefined();
    expect(formatRadicalMeaning(moon!, 'vi')).toBe('[Nguyệt] mặt trăng, tháng');
    expect(formatRadicalMeaning(moon!, 'en')).toBe('moon, month');
    expect(formatRadicalComponentMeaning(moon!, 'vi')).toBe('thịt, thân thể');
    expect(formatRadicalComponentMeaning(moon!, 'en')).toBe('flesh/body');
  });

  it('returns undefined component meaning when absent', () => {
    const one = radicals.find((radical) => radical.char === '一');

    expect(one).toBeDefined();
    expect(formatRadicalComponentMeaning(one!, 'en')).toBeUndefined();
    expect(formatRadicalComponentMeaning(one!, 'vi')).toBeUndefined();
  });
});
