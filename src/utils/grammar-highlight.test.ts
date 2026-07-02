import { describe, expect, it } from 'vitest';
import {
  formatGrammarPatternDisplay,
  getGrammarHighlightTermGroups,
  getGrammarHighlightTerms,
  splitGrammarHighlightedText
} from '@/utils/grammar-highlight.ts';

describe('getGrammarHighlightTerms', () => {
  it('returns terms in pattern order for N は N です', () => {
    expect(getGrammarHighlightTerms('N は N です')).toEqual(['は', 'です']);
  });

  it('keeps じゃありません as one grammar ending', () => {
    expect(getGrammarHighlightTerms('N は N じゃありません')).toEqual(['は', 'じゃありません']);
  });

  it('keeps question ending as one term when written together', () => {
    expect(getGrammarHighlightTerms('N は N ですか')).toEqual(['は', 'ですか']);
  });

  it('extracts possessive particle', () => {
    expect(getGrammarHighlightTerms('N の N')).toEqual(['の']);
  });

  it('merges slash alternatives in order', () => {
    expect(getGrammarHighlightTerms('V る まえに / N の まえに')).toEqual(['まえに', 'の']);
  });

  it('merges slash prefix alternatives into one color group', () => {
    expect(getGrammarHighlightTermGroups('これ / それ / あれ は N です')).toEqual([
      ['これ', 'それ', 'あれ'],
      ['は'],
      ['です']
    ]);
  });

  it('keeps slash verb alternatives as separate color groups', () => {
    expect(getGrammarHighlightTermGroups('N は ばしょ に あります / います')).toEqual([
      ['は'],
      ['に'],
      ['あります'],
      ['います']
    ]);
  });

  it('drops spaces between attached grammar in pattern display', () => {
    expect(formatGrammarPatternDisplay('N は ばしょ に あります / います')).toBe(
      'N はばしょにあります/います'
    );
    expect(formatGrammarPatternDisplay('ばしょ に N が あります / います')).toBe(
      'ばしょに N があります/います'
    );
    expect(formatGrammarPatternDisplay('N は N です')).toBe('N は N です');
  });
});

describe('splitGrammarHighlightedText', () => {
  it('assigns a distinct color index per grammar term in an example sentence', () => {
    expect(splitGrammarHighlightedText('わたしは がくせいです。', 'N は N です')).toEqual([
      { text: 'わたし', termIndex: null },
      { text: 'は', termIndex: 0 },
      { text: ' がくせい', termIndex: null },
      { text: 'です', termIndex: 1 },
      { text: '。', termIndex: null }
    ]);
  });

  it('highlights grammar terms in bilingual explanation text', () => {
    expect(
      splitGrammarHighlightedText(
        'は (read "wa") marks the topic; です ends a polite statement.',
        'N は N です'
      )
    ).toEqual([
      { text: 'は', termIndex: 0 },
      { text: ' (read "wa") marks the topic; ', termIndex: null },
      { text: 'です', termIndex: 1 },
      { text: ' ends a polite statement.', termIndex: null }
    ]);
  });

  it('highlights は and じゃありません as whole units in negative examples', () => {
    expect(
      splitGrammarHighlightedText('わたしは せんせいじゃありません。', 'N は N じゃありません')
    ).toEqual([
      { text: 'わたし', termIndex: null },
      { text: 'は', termIndex: 0 },
      { text: ' せんせい', termIndex: null },
      { text: 'じゃありません', termIndex: 1 },
      { text: '。', termIndex: null }
    ]);
  });

  it('highlights negative grammar intro without matching は inside では', () => {
    expect(
      splitGrammarHighlightedText(
        'Replace です with じゃありません (or the more formal ではありません) to make it negative.',
        'N は N じゃありません'
      )
    ).toEqual([
      { text: 'Replace です with ', termIndex: null },
      { text: 'じゃありません', termIndex: 1 },
      { text: ' (or the more formal ではありません) to make it negative.', termIndex: null }
    ]);
  });

  it('gives これ, は, and です distinct colors in demonstrative examples', () => {
    expect(
      splitGrammarHighlightedText('これは ほんです。', 'これ / それ / あれ は N です')
    ).toEqual([
      { text: 'これ', termIndex: 0 },
      { text: 'は', termIndex: 1 },
      { text: ' ほん', termIndex: null },
      { text: 'です', termIndex: 2 },
      { text: '。', termIndex: null }
    ]);

    expect(
      splitGrammarHighlightedText('これ/それ/あれはNです', 'これ / それ / あれ は N です')
    ).toEqual([
      { text: 'これ', termIndex: 0 },
      { text: '/', termIndex: null },
      { text: 'それ', termIndex: 0 },
      { text: '/', termIndex: null },
      { text: 'あれ', termIndex: 0 },
      { text: 'は', termIndex: 1 },
      { text: 'N', termIndex: null },
      { text: 'です', termIndex: 2 }
    ]);
  });

  it('uses separate colors for あります and います in location examples', () => {
    expect(
      splitGrammarHighlightedText(
        'ねこは いすの したにいます。',
        'N は ばしょ に あります / います'
      )
    ).toEqual([
      { text: 'ねこ', termIndex: null },
      { text: 'は', termIndex: 0 },
      { text: ' いすの した', termIndex: null },
      { text: 'に', termIndex: 1 },
      { text: 'います', termIndex: 3 },
      { text: '。', termIndex: null }
    ]);

    expect(
      splitGrammarHighlightedText(
        'ほんは つくえの うえにあります。',
        'N は ばしょ に あります / います'
      )
    ).toEqual([
      { text: 'ほん', termIndex: null },
      { text: 'は', termIndex: 0 },
      { text: ' つくえの うえ', termIndex: null },
      { text: 'に', termIndex: 1 },
      { text: 'あります', termIndex: 2 },
      { text: '。', termIndex: null }
    ]);
  });
});
