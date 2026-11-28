import { describe, expect, it } from 'vitest';
import { googleTranslateUrl } from './study-menu.ts';

function params(url: string) {
  return new URL(url).searchParams;
}

describe('googleTranslateUrl', () => {
  it('translates Japanese into the page language', () => {
    const vi = params(googleTranslateUrl('私は学生です', 'vi'));
    expect(vi.get('sl')).toBe('ja');
    expect(vi.get('tl')).toBe('vi');
    expect(vi.get('text')).toBe('私は学生です');

    expect(params(googleTranslateUrl('アメリカ', 'en')).get('tl')).toBe('en');
  });

  it('translates a meaning (no Japanese) into Japanese', () => {
    const url = params(googleTranslateUrl('bạn, anh/chị', 'vi'));
    expect(url.get('sl')).toBe('auto');
    expect(url.get('tl')).toBe('ja');
    expect(url.get('text')).toBe('bạn, anh/chị');
  });
});
