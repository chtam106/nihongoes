import { describe, expect, it } from 'vitest';
import { radicals } from '@/constants/kanji/index.ts';
import {
  DEFAULT_RADICAL_QUIZ_RANGE,
  radicalQuizFromOptions,
  radicalQuizToAfterFrom,
  radicalQuizToOptions,
  radicalsForQuizRange,
  sanitizeRadicalQuizRange
} from './radical-quiz-pool.ts';

describe('radical quiz range options', () => {
  it('steps from and to by 10 and keeps the full list as the default', () => {
    expect(radicalQuizFromOptions()).toEqual(expect.arrayContaining([1, 11, 201, 211]));
    expect(radicalQuizFromOptions().at(-1)).toBe(211);
    expect(radicalQuizToOptions()).toContain(10);
    expect(radicalQuizToOptions()).toContain(210);
    expect(radicalQuizToOptions().at(-1)).toBe(radicals.length);
    expect(DEFAULT_RADICAL_QUIZ_RANGE).toEqual({ from: 1, to: radicals.length });
  });
});

describe('radicalQuizToAfterFrom', () => {
  it('moves to forward by one block of 10, and clamps the last block', () => {
    expect(radicalQuizToAfterFrom(1)).toBe(10);
    expect(radicalQuizToAfterFrom(11)).toBe(20);
    expect(radicalQuizToAfterFrom(201)).toBe(210);
    expect(radicalQuizToAfterFrom(211)).toBe(radicals.length);
  });
});

describe('sanitizeRadicalQuizRange', () => {
  it('keeps a valid range and falls back otherwise', () => {
    expect(sanitizeRadicalQuizRange({ from: 11, to: 20 })).toEqual({ from: 11, to: 20 });
    expect(sanitizeRadicalQuizRange({ from: 1, to: radicals.length })).toEqual(
      DEFAULT_RADICAL_QUIZ_RANGE
    );
    expect(sanitizeRadicalQuizRange({ from: 20, to: 10 })).toEqual(DEFAULT_RADICAL_QUIZ_RANGE);
    expect(sanitizeRadicalQuizRange({ from: 15, to: 20 })).toEqual(DEFAULT_RADICAL_QUIZ_RANGE);
    expect(sanitizeRadicalQuizRange(10)).toEqual(DEFAULT_RADICAL_QUIZ_RANGE);
  });
});

describe('radicalsForQuizRange', () => {
  it('includes only radicals inside the range, in Kangxi order', () => {
    const pool = radicalsForQuizRange({ from: 11, to: 20 });

    expect(pool.map((radical) => radical.number)).toEqual([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });

  it('uses every radical for the default range', () => {
    expect(radicalsForQuizRange(DEFAULT_RADICAL_QUIZ_RANGE)).toHaveLength(radicals.length);
  });
});
