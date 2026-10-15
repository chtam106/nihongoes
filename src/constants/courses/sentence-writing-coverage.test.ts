import { describe, expect, it } from 'vitest';
import { getCourse } from '@/constants/courses/index.ts';
import { auditSentenceWriting } from '@/constants/courses/sentence-writing-coverage.ts';
import { getSentenceWriting } from '@/constants/courses/sentence-writing.ts';

describe('N5 lesson 1 sentence writing', () => {
  it('covers every grammar point, vocab word, and useful phrase', () => {
    const lesson = getCourse('n5').lessons[0];
    const writing = getSentenceWriting('n5', lesson.id);

    expect(auditSentenceWriting(lesson, writing)).toEqual([]);
  });
});

describe('N4 sentence writing', () => {
  const lessons = getCourse('n4').lessons;

  it.each(lessons.map((lesson) => [lesson.id, lesson] as const))(
    '%s covers every grammar point, vocab word, and useful phrase',
    (_id, lesson) => {
      const writing = getSentenceWriting('n4', lesson.id);

      expect(writing).toBeDefined();
      expect(auditSentenceWriting(lesson, writing)).toEqual([]);
    }
  );
});
