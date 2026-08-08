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

    expect(rendered).toContain('<ruby>山<rt style=');
    expect(rendered).toContain('>やま</rt></ruby><ruby>田<rt style=');
    expect(rendered).toContain('>だ</rt></ruby>さんは');
    expect(rendered).toContain('<ruby>所<rt style=');
    expect(rendered.match(/<rt style=/g)?.length).toBe(5);
  });

  it('strips learner spacing before matching ruby segments', () => {
    const rendered = renderNode(
      <>{renderJapaneseText('山田さんは 事務所です。', [...yamadaJimushoRuby])}</>
    );

    expect(rendered).toContain('<ruby>山<rt style=');
    expect(rendered).toContain('>しょ</rt></ruby>です。');
    expect(rendered.match(/<rt style=/g)?.length).toBe(5);
  });

  it('colors a lone ruby segment with the default blue tone', () => {
    const rendered = renderNode(
      <>{renderJapaneseText('日本語', [{ base: '日', reading: 'に' }])}</>
    );

    expect(rendered).toContain('<ruby>日<rt style="color:#1565c0">に</rt></ruby>本語');
  });

  it('alternates two furigana colors on consecutive kanji', () => {
    const rendered = renderNode(
      <>
        {renderJapaneseText('定規', [
          { base: '定', reading: 'じょう' },
          { base: '規', reading: 'ぎ' }
        ])}
      </>
    );

    expect(rendered).toContain('<ruby>定<rt style="color:#1565c0">じょう</rt></ruby>');
    expect(rendered).toContain('<ruby>規<rt style="color:#e65100">ぎ</rt></ruby>');
  });

  it('colors separated ruby segments each with the default blue tone', () => {
    const rendered = renderNode(
      <>
        {renderJapaneseText('日本人', [
          { base: '日', reading: 'に' },
          { base: '人', reading: 'じん' }
        ])}
      </>
    );

    expect(rendered).toContain('<ruby>日<rt style="color:#1565c0">に</rt></ruby>本');
    expect(rendered).toContain('<ruby>人<rt style="color:#1565c0">じん</rt></ruby>');
  });

  it('can disable furigana colors explicitly', () => {
    const rendered = renderNode(
      <>
        {renderJapaneseText('山田さんは事務所です。', [...yamadaJimushoRuby], {
          colorizeRuby: false
        })}
      </>
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
