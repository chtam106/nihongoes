import { describe, expect, it } from 'vitest';
import { getCourse } from '@/constants/courses/index.ts';
import { buildVocabEntries, createVocabSession } from './vocab-quiz.ts';

const course = getCourse('n5');
const lesson = course.lessons[0]!;

describe('buildVocabEntries', () => {
  it('adds a kana entry, and an extra entry when the word has a distinct kanji (all)', () => {
    const entries = buildVocabEntries(lesson, 'en', 'all');

    expect(entries.length).toBeGreaterThan(lesson.vocab.length);
    expect(entries.some((entry) => entry.surface === '私')).toBe(true);
    expect(entries.some((entry) => entry.surface === 'わたし')).toBe(true);
  });

  it('includes reference-group vocabulary in the pool', () => {
    const entries = buildVocabEntries(lesson, 'en', 'all');

    expect(entries.some((entry) => entry.surface === 'アメリカ')).toBe(true);
  });

  it('kana script uses only kana surfaces', () => {
    const entries = buildVocabEntries(lesson, 'en', 'kana');

    expect(entries.some((entry) => entry.surface === 'わたし')).toBe(true);
    expect(entries.every((entry) => entry.surface !== '私')).toBe(true);
  });

  it('kanji script uses only words that have a kanji form', () => {
    const entries = buildVocabEntries(lesson, 'en', 'kanji');

    expect(entries.length).toBeGreaterThan(0);
    expect(entries.some((entry) => entry.surface === '私')).toBe(true);
    // アメリカ has no kanji form, so it is excluded from kanji practice.
    expect(entries.every((entry) => entry.surface !== 'アメリカ')).toBe(true);
    expect(entries.every((entry) => entry.surface !== 'わたし')).toBe(true);
  });
});

describe('createVocabSession', () => {
  it('draws every surface once before repeating (no-repeat cycle)', () => {
    const entries = buildVocabEntries(lesson, 'en', 'all');
    const session = createVocabSession(lesson, 'en', 'word-meaning', 'all');

    const drawn = Array.from({ length: session.total }, () => session.next().promptText);

    expect([...drawn].sort()).toEqual(entries.map((entry) => entry.surface).sort());
  });

  it('reshuffles into a new cycle once the pool is exhausted', () => {
    const entries = buildVocabEntries(lesson, 'en', 'all');
    const surfaces = new Set(entries.map((entry) => entry.surface));
    const session = createVocabSession(lesson, 'en', 'word-meaning', 'all');

    for (let i = 0; i < session.total; i += 1) {
      session.next();
    }

    expect(surfaces.has(session.next().promptText)).toBe(true);
  });

  it('builds well-formed word-meaning questions', () => {
    const session = createVocabSession(lesson, 'en', 'word-meaning', 'all');
    const question = session.next();

    expect(question.promptJa).toBe(true);
    expect(question.options.every((option) => option.ja === false)).toBe(true);
    expect(question.options.map((option) => option.id)).toContain(question.correctId);
  });

  it('builds well-formed meaning-word questions', () => {
    const session = createVocabSession(lesson, 'en', 'meaning-word', 'all');
    const question = session.next();

    expect(question.promptJa).toBe(false);
    expect(question.options.every((option) => option.ja === true)).toBe(true);
    expect(question.options.map((option) => option.id)).toContain(question.correctId);
  });

  it('never offers a kana + kanji twin as two correct meaning-word options', () => {
    const session = createVocabSession(lesson, 'en', 'meaning-word', 'all');

    // Draw several full cycles so every meaning (incl. 私/わたし = "I, me") shows up.
    for (let i = 0; i < session.total * 3; i += 1) {
      const question = session.next();

      if (question.promptText === 'I, me') {
        const twins = question.options.filter((option) => ['私', 'わたし'].includes(option.label));
        expect(twins).toHaveLength(1);
      }
    }
  });
});
