import { describe, expect, it } from 'vitest';
import type { VocabItem } from '@/types/course.ts';
import {
  VOCAB_PRINT_CELLS,
  VOCAB_PRINT_COLS,
  chunkVocabPrintSheets,
  mirrorVocabPrintRows
} from './vocab-print-layout.ts';

function word(kana: string): VocabItem {
  return {
    kana,
    romaji: kana,
    meaning: { en: `${kana}-en`, vi: `${kana}-vi` }
  };
}

describe('chunkVocabPrintSheets', () => {
  it('returns no sheets for an empty list', () => {
    expect(chunkVocabPrintSheets([])).toEqual([]);
  });

  it('pads the last sheet so every page has a full grid', () => {
    const sheets = chunkVocabPrintSheets([word('あ'), word('い')], 4);

    expect(sheets).toHaveLength(1);
    expect(sheets[0]).toEqual([word('あ'), word('い'), null, null]);
  });

  it('splits across sheets using the print cell count', () => {
    const items = Array.from({ length: VOCAB_PRINT_CELLS + 1 }, (_, index) => word(`w${index}`));
    const sheets = chunkVocabPrintSheets(items);

    expect(sheets).toHaveLength(2);
    expect(sheets[0]).toHaveLength(VOCAB_PRINT_CELLS);
    expect(sheets[1]?.[0]?.kana).toBe(`w${VOCAB_PRINT_CELLS}`);
    expect(sheets[1]?.filter((cell) => cell !== null)).toHaveLength(1);
  });
});

describe('mirrorVocabPrintRows', () => {
  it('reverses each row for long-edge duplex', () => {
    const cells = [word('a'), word('b'), word('c'), word('d'), word('e'), word('f')];

    expect(mirrorVocabPrintRows(cells, VOCAB_PRINT_COLS).map((cell) => cell?.kana)).toEqual([
      'c',
      'b',
      'a',
      'f',
      'e',
      'd'
    ]);
  });

  it('keeps empty cells so a short last row still lines up after the flip', () => {
    const cells = [word('a'), word('b'), null];

    expect(mirrorVocabPrintRows(cells, VOCAB_PRINT_COLS).map((cell) => cell?.kana)).toEqual([
      undefined,
      'b',
      'a'
    ]);
  });
});
