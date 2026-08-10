import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { renderJapaneseText, renderLocaleText } from '@/utils/japanese-text.tsx';
import { LOCALE_JA_CLOSE, LOCALE_JA_OPEN } from '@/utils/locale-text.ts';

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
  it('wraps plain text in lang="ja" when there is no ruby data', () => {
    expect(renderNode(<>{renderJapaneseText('hello world')}</>)).toBe(
      '<span lang="ja">hello world</span>'
    );
    expect(renderNode(<>{renderJapaneseText('山田さんは事務所です。')}</>)).toBe(
      '<span lang="ja">山田さんは事務所です。</span>'
    );
  });

  it('renders per-kanji ruby from authored segments', () => {
    const rendered = renderNode(
      <>{renderJapaneseText('山田さんは事務所です。', [...yamadaJimushoRuby])}</>
    );

    expect(rendered).toContain('<ruby lang="ja">山<rt style=');
    expect(rendered).toContain('>やま</rt></ruby><ruby lang="ja">田<rt style=');
    expect(rendered).toContain('>だ</rt></ruby><span lang="ja">さんは</span>');
    expect(rendered).toContain('<ruby lang="ja">所<rt style=');
    expect(rendered.match(/<rt style=/g)?.length).toBe(5);
  });

  it('strips learner spacing before matching ruby segments', () => {
    const rendered = renderNode(
      <>{renderJapaneseText('山田さんは 事務所です。', [...yamadaJimushoRuby])}</>
    );

    expect(rendered).toContain('<ruby lang="ja">山<rt style=');
    expect(rendered).toContain('>しょ</rt></ruby><span lang="ja">です。</span>');
    expect(rendered.match(/<rt style=/g)?.length).toBe(5);
  });

  it('colors a lone ruby segment with the default blue tone', () => {
    const rendered = renderNode(
      <>{renderJapaneseText('日本語', [{ base: '日', reading: 'に' }])}</>
    );

    expect(rendered).toContain('<ruby lang="ja">日<rt style="color:#1565c0">に</rt></ruby>');
    expect(rendered).toContain('<span lang="ja">本語</span>');
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

    expect(rendered).toContain('<ruby lang="ja">定<rt style="color:#1565c0">じょう</rt></ruby>');
    expect(rendered).toContain('<ruby lang="ja">規<rt style="color:#e65100">ぎ</rt></ruby>');
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

    expect(rendered).toContain('<ruby lang="ja">日<rt style="color:#1565c0">に</rt></ruby>');
    expect(rendered).toContain('<span lang="ja">本</span>');
    expect(rendered).toContain('<ruby lang="ja">人<rt style="color:#1565c0">じん</rt></ruby>');
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
      '<ruby lang="ja">山<rt>やま</rt></ruby><ruby lang="ja">田<rt>だ</rt></ruby><span lang="ja">さんは</span><ruby lang="ja">事<rt>じ</rt></ruby><ruby lang="ja">務<rt>む</rt></ruby><ruby lang="ja">所<rt>しょ</rt></ruby><span lang="ja">です。</span>'
    );
  });

  it('renders plain kana when a ruby segment does not match', () => {
    const rendered = renderNode(
      <>{renderJapaneseText('こんにちは', [{ base: '今', reading: 'こん' }])}</>
    );

    expect(rendered).toBe('<span lang="ja">こんにちは</span>');
  });
});

describe('renderLocaleText', () => {
  it('wraps marked Japanese in lang="ja" spans', () => {
    const rendered = renderNode(
      <>
        {renderLocaleText(
          `Typical floor layout in a Japanese department store (${LOCALE_JA_OPEN}デパート${LOCALE_JA_CLOSE}).`
        )}
      </>
    );

    expect(rendered).toBe(
      'Typical floor layout in a Japanese department store (<span lang="ja">デパート</span>).'
    );
  });

  it('applies ruby to kanji inside marked spans', () => {
    const rendered = renderNode(
      <>
        {renderLocaleText(
          `${LOCALE_JA_OPEN}何${LOCALE_JA_CLOSE} (${LOCALE_JA_OPEN}なん${LOCALE_JA_CLOSE}) means "what".`,
          [{ base: '何', reading: 'なん' }]
        )}
      </>
    );

    expect(rendered).toContain('<ruby lang="ja">何<rt>なん</rt></ruby>');
    expect(rendered).toContain('(<span lang="ja">なん</span>) means');
  });
});
