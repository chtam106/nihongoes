import { describe, expect, it } from 'vitest';
import { getCourse } from '@/constants/courses/index.ts';
import {
  VOCAB_MATCH_BATCH_SIZE,
  buildVocabEntries,
  createVocabMatchSession,
  createVocabSession,
  initialVocabMatchSlotCount,
  shuffleMatchMeanings
} from './vocab-quiz.ts';

const course = getCourse('n5');
const lesson1 = course.lessons[0]!;
const lesson2 = course.lessons[1]!;

describe('buildVocabEntries', () => {
  it('adds a kana entry, and an extra entry when the word has a distinct kanji (all)', () => {
    const entries = buildVocabEntries(lesson1, 'en', 'all');

    expect(entries.length).toBeGreaterThan(lesson1.vocab.length);
    expect(entries.some((entry) => entry.surface === '私')).toBe(true);
    expect(entries.some((entry) => entry.surface === 'わたし')).toBe(true);
  });

  it('excludes reference vocabulary by default', () => {
    const entries = buildVocabEntries(lesson1, 'en', 'all');

    expect(entries.some((entry) => entry.surface === '公務員')).toBe(false);
  });

  it('includes quiz-eligible reference vocabulary when opted in', () => {
    const entries = buildVocabEntries(lesson1, 'en', 'all', true);

    expect(entries.some((entry) => entry.surface === '公務員')).toBe(true);
  });

  it('never includes reference-only groups such as surname lists', () => {
    const entries = buildVocabEntries(lesson2, 'en', 'all', true);

    expect(entries.some((entry) => entry.surface === '佐藤')).toBe(false);
    expect(entries.some((entry) => entry.surface === '消しゴム')).toBe(true);
  });

  it('kana script uses only kana surfaces', () => {
    const entries = buildVocabEntries(lesson1, 'en', 'kana');

    expect(entries.some((entry) => entry.surface === 'わたし')).toBe(true);
    expect(entries.every((entry) => entry.surface !== '私')).toBe(true);
  });

  it('kanji script uses only words that have a kanji form', () => {
    const entries = buildVocabEntries(lesson1, 'en', 'kanji');

    expect(entries.length).toBeGreaterThan(0);
    expect(entries.some((entry) => entry.surface === '私')).toBe(true);
    expect(entries.every((entry) => entry.surface !== 'わたし')).toBe(true);
  });

  it('excludes useful phrases from the quiz pool', () => {
    const entries = buildVocabEntries(lesson1, 'en', 'all');

    expect(lesson1.phrases?.length).toBeGreaterThan(0);
    expect(entries.some((entry) => entry.surface === 'はじめまして。')).toBe(false);
    expect(entries.some((entry) => entry.surface === 'お名前は何ですか。')).toBe(false);
  });
});

describe('createVocabSession', () => {
  it('draws every surface once before repeating (no-repeat cycle)', () => {
    const entries = buildVocabEntries(lesson1, 'en', 'all');
    const session = createVocabSession(lesson1, 'en', 'word-meaning', 'all');

    const drawn = Array.from({ length: session.total }, () => session.next().promptText);

    expect([...drawn].sort()).toEqual(entries.map((entry) => entry.surface).sort());
  });

  it('reshuffles into a new cycle once the pool is exhausted', () => {
    const entries = buildVocabEntries(lesson1, 'en', 'all');
    const surfaces = new Set(entries.map((entry) => entry.surface));
    const session = createVocabSession(lesson1, 'en', 'word-meaning', 'all');

    for (let i = 0; i < session.total; i += 1) {
      session.next();
    }

    expect(surfaces.has(session.next().promptText)).toBe(true);
  });

  it('builds well-formed word-meaning questions', () => {
    const session = createVocabSession(lesson1, 'en', 'word-meaning', 'all');
    const question = session.next();

    expect(question.promptJa).toBe(true);
    expect(question.options.every((option) => option.ja === false)).toBe(true);
    expect(question.options.map((option) => option.id)).toContain(question.correctId);
  });

  it('builds well-formed meaning-word questions', () => {
    const session = createVocabSession(lesson1, 'en', 'meaning-word', 'all');
    const question = session.next();

    expect(question.promptJa).toBe(false);
    expect(question.options.every((option) => option.ja === true)).toBe(true);
    expect(question.options.map((option) => option.id)).toContain(question.correctId);
  });

  it('never offers a kana + kanji twin as two correct meaning-word options', () => {
    const session = createVocabSession(lesson1, 'en', 'meaning-word', 'all');

    for (let i = 0; i < session.total * 3; i += 1) {
      const question = session.next();

      if (question.promptText === 'I, me') {
        const twins = question.options.filter((option) => ['私', 'わたし'].includes(option.label));
        expect(twins).toHaveLength(1);
      }
    }
  });
});

describe('createVocabMatchSession', () => {
  it('fills up to five visible slots', () => {
    const session = createVocabMatchSession(lesson1, 'en', 'all');
    const slots = session.fill(initialVocabMatchSlotCount(session.totalPairs));

    expect(slots.length).toBeLessThanOrEqual(VOCAB_MATCH_BATCH_SIZE);
    expect(slots.length).toBeGreaterThan(0);
    expect(slots.every((pair) => pair.id && pair.surface && pair.meaning)).toBe(true);
  });

  it('draws every entry once before the pool runs dry', () => {
    const entries = buildVocabEntries(lesson1, 'en', 'all');
    const session = createVocabMatchSession(lesson1, 'en', 'all');
    const drawn = session
      .fill(initialVocabMatchSlotCount(session.totalPairs))
      .map((pair) => pair.surface);

    while (drawn.length < session.totalPairs) {
      const pair = session.drawNext();
      if (!pair) {
        break;
      }
      drawn.push(pair.surface);
    }

    expect([...drawn].sort()).toEqual(entries.map((entry) => entry.surface).sort());
    expect(session.drawNext()).toBeNull();
  });

  it('can start a new cycle after reshuffling', () => {
    const session = createVocabMatchSession(lesson1, 'en', 'all');

    session.fill(initialVocabMatchSlotCount(session.totalPairs));
    while (session.drawNext()) {
      // drain pool
    }

    session.reshufflePool();
    expect(session.fill(1).length).toBe(1);
  });
});

describe('shuffleMatchMeanings', () => {
  it('returns a derangement when there are at least two pairs', () => {
    const session = createVocabMatchSession(lesson1, 'en', 'kana');
    const slots = session.fill(initialVocabMatchSlotCount(session.totalPairs));
    const shuffled = shuffleMatchMeanings(slots);

    expect(shuffled).toHaveLength(slots.length);
    expect(new Set(shuffled.map((pair) => pair.id)).size).toBe(slots.length);
    expect(shuffled.every((pair, index) => pair.id !== slots[index]!.id)).toBe(true);
  });
});
