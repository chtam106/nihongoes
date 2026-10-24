import { describe, expect, it } from 'vitest';
import { parseSentenceWritingLessonParam } from './sentence-writing-preferences.ts';

describe('parseSentenceWritingLessonParam', () => {
  const lessons = [1, 2, 26, 50];

  it('returns null for missing or invalid values', () => {
    expect(parseSentenceWritingLessonParam(null, lessons)).toBeNull();
    expect(parseSentenceWritingLessonParam('', lessons)).toBeNull();
    expect(parseSentenceWritingLessonParam('abc', lessons)).toBeNull();
    expect(parseSentenceWritingLessonParam('3.5', lessons)).toBeNull();
    expect(parseSentenceWritingLessonParam('99', lessons)).toBeNull();
  });

  it('returns the lesson number when it is in the pool', () => {
    expect(parseSentenceWritingLessonParam('26', lessons)).toBe(26);
    expect(parseSentenceWritingLessonParam('1', lessons)).toBe(1);
  });
});
