import { describe, expect, it } from 'vitest';
import {
  getRadicalStrokeIndex,
  groupRadicalsByStrokes,
  radicals,
  radicalsInStrokeOrder
} from '@/constants/kanji/index.ts';
import {
  DEFAULT_RADICAL_QUIZ_RANGE,
  radicalQuizFromOptions,
  radicalQuizPrompts,
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

describe('getRadicalStrokeIndex', () => {
  it('labels cards by stroke-order position, not Kangxi number', () => {
    const ordered = radicalsInStrokeOrder();

    expect(getRadicalStrokeIndex(ordered[79]!)).toBe(80);
    expect(ordered[79]!.char).toBe('比');
    expect(getRadicalStrokeIndex(80)).toBe(94);
  });
});

describe('radicalsForQuizRange', () => {
  it('matches the default radicals-page order (flatten stroke groups)', () => {
    const pageOrder = groupRadicalsByStrokes().flatMap((group) => group.items);

    expect(pageOrder.map((radical) => radical.number)).toEqual(
      radicalsInStrokeOrder().map((radical) => radical.number)
    );

    const pool = radicalsForQuizRange({ from: 71, to: 80 });

    expect(pool).toEqual(pageOrder.slice(70, 80));
    expect(pool.map((radical) => radical.char)).not.toContain('母');
    expect(pool.at(-1)?.char).toBe('比');
  });

  it('uses every radical for the default range', () => {
    expect(radicalsForQuizRange(DEFAULT_RADICAL_QUIZ_RANGE)).toHaveLength(radicals.length);
  });
});

describe('radicalQuizPrompts', () => {
  it('adds each combining variant as its own prompt with the same radical', () => {
    const person = radicals.find((radical) => radical.char === '人');
    const water = radicals.find((radical) => radical.char === '水');

    expect(person?.variants).toEqual(['亻']);
    expect(water?.variants).toEqual(['氵']);

    const prompts = radicalQuizPrompts([person!, water!]);

    expect(prompts.map((prompt) => prompt.glyph)).toEqual(['人', '亻', '水', '氵']);
    expect(prompts.filter((prompt) => prompt.radical.char === '人')).toHaveLength(2);
    expect(
      prompts.every(
        (prompt) =>
          prompt.radical.variants?.includes(prompt.glyph) || prompt.glyph === prompt.radical.char
      )
    ).toBe(true);
  });
});
