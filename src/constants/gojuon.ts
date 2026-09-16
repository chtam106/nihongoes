import { DAKUTEN_MARK, HANDAKUTEN_MARK } from '@/constants/kana-terminology.ts';
import { getYoonBaseRomaji } from '@/utils/yoon-display.ts';

type TranslateFn = (key: string, params?: Record<string, string | number>) => string;

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

/** Leading consonant of a seion row, e.g. か→"k", さ→"s", あ→"-". */
export function consonantLabel(cells: (AlphabetCell | null)[]) {
  const cell = firstCell(cells);
  if (!cell) return '';
  const match = cell.romaji.toLowerCase().match(/^[^aeiou]+/);
  return match ? match[0] : '-';
}

/** Yoon row label: base mora romaji (ki, shi), not the combined prefix (ky, sh). */
export function yoonRowLabel(cells: (AlphabetCell | null)[]) {
  const cell = firstCell(cells);
  if (!cell) return '';

  return getYoonBaseRomaji(cell.romaji) ?? consonantLabel(cells);
}

/** Script-correct example for the dakuten explanation, e.g. か→が (or カ→ガ). */
export function getVoicedExample(rows: AlphabetChartRow[]) {
  const row = rows.find((item) => item.dakuten && firstCell(item.dakuten));
  return {
    base: row ? firstCell(row.seion) : undefined,
    voiced: row?.dakuten ? firstCell(row.dakuten) : undefined
  };
}

/** Script-correct example for the yoon explanation, e.g. き + ゃ = きゃ (or キ + ャ = キャ). */
export function getYoonExample(rows: AlphabetChartRow[]) {
  const cells = (rows[0]?.seion ?? []).filter((cell): cell is AlphabetCell => cell !== null);
  return {
    smalls: cells.map((cell) => cell.yoonSuffix ?? ''),
    example: cells[0]
  };
}

/** Dakuten/handakuten explanation with a script-correct worked example. */
export function getVoicedDescription(t: TranslateFn, rows: AlphabetChartRow[]) {
  const { base, voiced } = getVoicedExample(rows);
  return t('chart.voicedDescription', {
    dakuten: DAKUTEN_MARK,
    handakuten: HANDAKUTEN_MARK,
    base: base?.char ?? '',
    baseRomaji: base?.romaji ?? '',
    voiced: voiced?.char ?? '',
    voicedRomaji: voiced?.romaji ?? ''
  });
}

/** Yoon grid rows: seion plus dakuten/handakuten yoon, with null placeholders removed. */
export function toYoonGridRows(rows: AlphabetChartRow[]): GridRow<AlphabetCell>[] {
  const seion = rows
    .filter((row) => firstCell(row.seion))
    .map((row) => ({ label: yoonRowLabel(row.seion), cells: row.seion }));

  const dakuten = rows
    .filter((row) => row.dakuten && firstCell(row.dakuten))
    .map((row) => ({ label: yoonRowLabel(row.dakuten!), cells: row.dakuten! }));

  const handakuten = rows
    .filter((row) => row.handakuten && firstCell(row.handakuten))
    .map((row) => ({ label: yoonRowLabel(row.handakuten!), cells: row.handakuten! }));

  return [...seion, ...dakuten, ...handakuten].map((row) => ({
    label: row.label,
    cells: row.cells.filter((cell) => cell !== null)
  }));
}

/** Yoon explanation with a script-correct worked example. */
export function getYoonDescription(t: TranslateFn, rows: AlphabetChartRow[]) {
  const { smalls, example } = getYoonExample(rows);
  return t('chart.yoonDescription', {
    small1: smalls[0] ?? '',
    small2: smalls[1] ?? '',
    small3: smalls[2] ?? '',
    base: example?.yoonBase ?? '',
    result: example?.char ?? '',
    romaji: example?.romaji ?? ''
  });
}
