import type { VocabItem } from '@/types/course.ts';

export const VOCAB_PRINT_COLS = 3;
export const VOCAB_PRINT_ROWS = 8;
export const VOCAB_PRINT_CELLS = VOCAB_PRINT_COLS * VOCAB_PRINT_ROWS;

export type VocabPrintCell = VocabItem | null;

export function chunkVocabPrintSheets(
  items: VocabItem[],
  cellsPerSheet = VOCAB_PRINT_CELLS
): VocabPrintCell[][] {
  if (items.length === 0) {
    return [];
  }

  const sheets: VocabPrintCell[][] = [];

  for (let offset = 0; offset < items.length; offset += cellsPerSheet) {
    const cells: VocabPrintCell[] = items.slice(offset, offset + cellsPerSheet);

    while (cells.length < cellsPerSheet) {
      cells.push(null);
    }

    sheets.push(cells);
  }

  return sheets;
}

/** Reverse each row so a long-edge duplex flip lines up word and meaning. */
export function mirrorVocabPrintRows(
  cells: VocabPrintCell[],
  cols = VOCAB_PRINT_COLS
): VocabPrintCell[] {
  const mirrored: VocabPrintCell[] = [];

  for (let offset = 0; offset < cells.length; offset += cols) {
    mirrored.push(...cells.slice(offset, offset + cols).reverse());
  }

  return mirrored;
}
