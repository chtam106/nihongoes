import { describe, expect, it } from 'vitest';
import { getCourse } from '@/constants/courses/index.ts';
import { buildGrammarClozes, createGrammarSession } from './grammar-quiz.ts';

const course = getCourse('n5');
const lesson = course.lessons[0]!;

describe('buildGrammarClozes', () => {
  it('creates a blank whose answer is a grammar piece from the sentence', () => {
    const clozes = buildGrammarClozes(lesson, 'en');

    expect(clozes.length).toBeGreaterThan(0);
    for (const cloze of clozes) {
      // The blanked answer plus the surrounding text rebuilds the full sentence.
      expect(cloze.before + cloze.answer + cloze.after).toBe(cloze.fullText);
      expect(cloze.answer.length).toBeGreaterThan(0);
    }
  });

  it('blanks the topic particle は somewhere in the lesson', () => {
    const clozes = buildGrammarClozes(lesson, 'en');

    expect(clozes.some((cloze) => cloze.answer === 'は')).toBe(true);
  });

  it('never blanks a grammar piece that sits inside a demonstrative (e.g. の in あの)', () => {
    const clozes = buildGrammarClozes(lesson, 'en');

    const splitsDemonstrative = clozes.some(
      (cloze) => cloze.answer === 'の' && /[こそあど]$/.test(cloze.before)
    );

    expect(splitsDemonstrative).toBe(false);
  });
});

describe('createGrammarSession', () => {
  it('builds well-formed questions with the answer among the options', () => {
    const session = createGrammarSession(lesson, 'en');

    for (let i = 0; i < session.total; i += 1) {
      const question = session.next();
      const ids = question.options.map((option) => option.id);

      expect(ids).toContain(question.correctId);
      expect(question.options.some((option) => option.label === question.answer)).toBe(true);
      expect(question.options.length).toBeGreaterThan(1);
    }
  });
});
