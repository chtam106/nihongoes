import { STORAGE_PREFIX } from '@/constants/site.ts';
import { radicals, radicalsInStrokeOrder, type Radical } from '@/constants/kanji/index.ts';

/** How far apart the selectable range endpoints are. The last radical is always a "to" option. */
export const RADICAL_QUIZ_POOL_STEP = 10;

export const RADICAL_QUIZ_POOL_STORAGE_KEY = `${STORAGE_PREFIX}-radical-quiz-pool`;

export type RadicalQuizRange = {
  from: number;
  to: number;
};

/** Start of each block of 10: 1, 11, 21, ... */
export function radicalQuizFromOptions(total = radicals.length): number[] {
  const options: number[] = [];

  for (let start = 1; start <= total; start += RADICAL_QUIZ_POOL_STEP) {
    options.push(start);
  }

  return options;
}

/** End of each block of 10: 10, 20, ... then the last radical. */
export function radicalQuizToOptions(total = radicals.length): number[] {
  if (total <= 0) {
    return [];
  }

  const options: number[] = [];

  for (let end = RADICAL_QUIZ_POOL_STEP; end < total; end += RADICAL_QUIZ_POOL_STEP) {
    options.push(end);
  }

  options.push(total);

  return options;
}

/**
 * End of the 10-radical block that starts at `from` (1 → 10, 11 → 20).
 * The last block stops on the final radical (211 → 214).
 */
export function radicalQuizToAfterFrom(from: number, total = radicals.length): number {
  const preferred = from + RADICAL_QUIZ_POOL_STEP - 1;
  const toOptions = radicalQuizToOptions(total);

  return toOptions.find((option) => option >= preferred) ?? toOptions.at(-1) ?? preferred;
}

export const DEFAULT_RADICAL_QUIZ_RANGE: RadicalQuizRange = {
  from: radicalQuizFromOptions()[0] ?? 1,
  to: radicals.length
};

export function sanitizeRadicalQuizRange(value: unknown): RadicalQuizRange {
  const fromOptions = radicalQuizFromOptions();
  const toOptions = radicalQuizToOptions();

  if (!value || typeof value !== 'object') {
    return DEFAULT_RADICAL_QUIZ_RANGE;
  }

  const record = value as Record<string, unknown>;
  const from = record.from;
  const to = record.to;

  if (
    typeof from === 'number' &&
    typeof to === 'number' &&
    fromOptions.includes(from) &&
    toOptions.includes(to) &&
    from <= to
  ) {
    return { from, to };
  }

  return DEFAULT_RADICAL_QUIZ_RANGE;
}

/**
 * Radicals at 1-based positions `from`..`to` in the default stroke-grouped list
 * (same order as the radicals page), not by Kangxi number.
 */
export function radicalsForQuizRange(range: RadicalQuizRange): Radical[] {
  const { from, to } = sanitizeRadicalQuizRange(range);

  return radicalsInStrokeOrder().slice(from - 1, to);
}
