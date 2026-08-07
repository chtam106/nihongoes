import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { renderJapaneseText } from '@/utils/japanese-text.tsx';

function renderNode(node: Parameters<typeof renderToStaticMarkup>[0]): string {
  return renderToStaticMarkup(node);
}

const yamadaJimushoRuby = [
  { base: '山', reading: 'やま' },
  { base: '田', reading: 'だ' },
  { base: '事', reading: 'じ' },
  { base: '務', reading: 'む' },
  { base: '所', reading: 'しょ' }
] as const;

describe('renderJapaneseText', () => {
  it('returns plain text when there is no ruby data', () => {
    expect(renderJapaneseText('hello world')).toBe('hello world');
    expect(renderJapaneseText('山田さんは事務所です。')).toBe('山田さんは事務所です。');
  });

  it('renders per-kanji ruby from authored segments', () => {
    const rendered = renderNode(
      <>{renderJapaneseText('山田さんは事務所です。', [...yamadaJimushoRuby])}</>
    );

    expect(rendered).toBe(
      '<ruby>山<rt>やま</rt></ruby><ruby>田<rt>だ</rt></ruby>さんは<ruby>事<rt>じ</rt></ruby><ruby>務<rt>む</rt></ruby><ruby>所<rt>しょ</rt></ruby>です。'
    );
  });

  it('strips learner spacing before matching ruby segments', () => {
    const rendered = renderNode(
      <>{renderJapaneseText('山田さんは 事務所です。', [...yamadaJimushoRuby])}</>
    );

    expect(rendered).toBe(
      '<ruby>山<rt>やま</rt></ruby><ruby>田<rt>だ</rt></ruby>さんは<ruby>事<rt>じ</rt></ruby><ruby>務<rt>む</rt></ruby><ruby>所<rt>しょ</rt></ruby>です。'
    );
  });

  it('renders plain kana when a ruby segment does not match', () => {
    const rendered = renderNode(
      <>{renderJapaneseText('こんにちは', [{ base: '今', reading: 'こん' }])}</>
    );

    expect(rendered).toBe('こんにちは');
  });
});
