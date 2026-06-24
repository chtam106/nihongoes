export type AlphabetCell = {
  char: string;
  romaji: string;
  yoonBase?: string;
  yoonSuffix?: string;
};

export type AlphabetChartRow = {
  seion: (AlphabetCell | null)[];
  dakuten?: (AlphabetCell | null)[];
  handakuten?: (AlphabetCell | null)[];
};

export type GridRow<T> = {
  label: string;
  cells: (T | null)[];
};

export const VOWEL_HEADERS = ['a', 'i', 'u', 'e', 'o'];
export const YOON_HEADERS = ['ya', 'yu', 'yo'];

export function firstCell(cells: (AlphabetCell | null)[]) {
  return cells.find((cell): cell is AlphabetCell => cell !== null);
}

/** Leading consonant of a row, e.g. か→"k", さ→"s", あ→"–", きゃ→"ky". */
export function consonantLabel(cells: (AlphabetCell | null)[]) {
  const cell = firstCell(cells);
  if (!cell) return '';
  const match = cell.romaji.toLowerCase().match(/^[^aeiou]+/);
  return match ? match[0] : '–';
}
