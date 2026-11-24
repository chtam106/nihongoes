import { describe, expect, it, vi } from 'vitest';
import * as courses from '@/constants/courses/index.ts';
import { getAllCourseLessons, getCourse, type VocabItem } from '@/constants/courses/index.ts';
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

function item(
  surface: string,
  meaning: string,
  partOfSpeech: VocabItem['partOfSpeech']
): VocabItem {
  return { kana: surface, romaji: surface, meaning: { en: meaning, vi: meaning }, partOfSpeech };
}

describe('buildVocabEntries', () => {
  it('uses the kanji form when the word has one, otherwise kana', () => {
    const entries = buildVocabEntries(lesson1, 'en');

    expect(entries).toHaveLength(lesson1.vocab.length + (lesson1.phrases?.length ?? 0));
    expect(entries.some((entry) => entry.surface === '私')).toBe(true);
    expect(entries.some((entry) => entry.surface === 'わたし')).toBe(false);
    expect(entries.some((entry) => entry.surface === 'はい')).toBe(true);
  });

  it('excludes reference vocabulary by default', () => {
    const entries = buildVocabEntries(lesson1, 'en');

    expect(entries.some((entry) => entry.surface === '公務員')).toBe(false);
  });

  it('includes quiz-eligible reference vocabulary when opted in', () => {
    const entries = buildVocabEntries(lesson1, 'en', true);

    expect(entries.some((entry) => entry.surface === '公務員')).toBe(true);
  });

  it('never includes reference-only groups such as surname lists', () => {
    const entries = buildVocabEntries(lesson2, 'en', true);

    expect(entries.some((entry) => entry.surface === '佐藤')).toBe(false);
    expect(entries.some((entry) => entry.surface === '消しゴム')).toBe(true);
  });

  it('includes useful phrases in the quiz pool', () => {
    const entries = buildVocabEntries(lesson1, 'en');

    expect(lesson1.phrases?.length).toBeGreaterThan(0);
    expect(entries.some((entry) => entry.surface === 'はじめまして。')).toBe(true);
    expect(entries.some((entry) => entry.surface === 'お名前は何ですか。')).toBe(true);
  });
});

describe('createVocabSession', () => {
  it.each(['word-meaning', 'meaning-word'] as const)(
    'uses the current lesson and equally close neighboring lessons first in %s mode',
    (mode) => {
      const makeLesson = (number: number, vocab: VocabItem[]) => ({
        ...lesson1,
        id: `lesson-${number}`,
        number,
        vocab,
        phrases: [],
        reference: []
      });
      const current = makeLesson(3, [
        item('target', 'target meaning', 'noun'),
        item('local', 'local meaning', 'noun')
      ]);
      const lessons = [
        { level: 'n5' as const, lesson: makeLesson(1, [item('far', 'far meaning', 'noun')]) },
        { level: 'n5' as const, lesson: makeLesson(2, [item('before', 'before meaning', 'noun')]) },
        { level: 'n4' as const, lesson: current },
        { level: 'n4' as const, lesson: makeLesson(4, [item('after', 'after meaning', 'noun')]) },
        {
          level: 'n4' as const,
          lesson: makeLesson(5, [item('farther', 'farther meaning', 'noun')])
        }
      ];
      const spy = vi.spyOn(courses, 'getAllCourseLessons').mockReturnValue(lessons);
      try {
        const session = createVocabSession(current, 'en', mode, 'n4');
        const questions = Array.from({ length: session.total }, () => session.next());
        const question = questions.find(
          (value) => value.promptText === (mode === 'word-meaning' ? 'target' : 'target meaning')
        )!;
        expect(question.options.map((option) => option.label).sort()).toEqual(
          (mode === 'word-meaning'
            ? ['target meaning', 'local meaning', 'before meaning', 'after meaning']
            : ['target', 'local', 'before', 'after']
          ).sort()
        );
      } finally {
        spy.mockRestore();
      }
    }
  );

  it('uses more distant lessons only after both closest lessons are exhausted', () => {
    const makeLesson = (number: number, vocab: VocabItem[]) => ({
      ...lesson1,
      id: `lesson-${number}`,
      number,
      vocab,
      phrases: [],
      reference: []
    });
    const current = makeLesson(3, [item('target', 'target meaning', 'noun')]);
    const lessons = [
      { level: 'n5' as const, lesson: makeLesson(1, [item('far', 'far meaning', 'noun')]) },
      { level: 'n5' as const, lesson: makeLesson(2, [item('before', 'before meaning', 'noun')]) },
      { level: 'n4' as const, lesson: current },
      { level: 'n4' as const, lesson: makeLesson(4, [item('after', 'after meaning', 'noun')]) },
      { level: 'n4' as const, lesson: makeLesson(5, [item('farther', 'farther meaning', 'noun')]) }
    ];
    const spy = vi.spyOn(courses, 'getAllCourseLessons').mockReturnValue(lessons);
    try {
      const question = createVocabSession(current, 'en', 'word-meaning', 'n4').next();
      const labels = question.options.map((option) => option.label);
      expect(labels).toContain('before meaning');
      expect(labels).toContain('after meaning');
      expect(
        labels.filter((label) => label === 'far meaning' || label === 'farther meaning')
      ).toHaveLength(1);
    } finally {
      spy.mockRestore();
    }
  });

  it('identifies the current lesson by level when lesson IDs repeat', () => {
    const makeLesson = (number: number, vocab: VocabItem[]) => ({
      ...lesson1,
      id: `lesson-${number}`,
      number,
      vocab,
      phrases: [],
      reference: []
    });
    const current = makeLesson(1, [item('target', 'target meaning', 'noun')]);
    const lessons = [
      { level: 'n5' as const, lesson: makeLesson(1, [item('far', 'far meaning', 'noun')]) },
      {
        level: 'n5' as const,
        lesson: makeLesson(2, [
          item('before1', 'before 1', 'noun'),
          item('before2', 'before 2', 'noun')
        ])
      },
      { level: 'n4' as const, lesson: current },
      {
        level: 'n4' as const,
        lesson: makeLesson(2, [
          item('after1', 'after 1', 'noun'),
          item('after2', 'after 2', 'noun')
        ])
      }
    ];
    const spy = vi.spyOn(courses, 'getAllCourseLessons').mockReturnValue(lessons);
    try {
      const question = createVocabSession(current, 'en', 'word-meaning', 'n4').next();
      expect(question.options.map((option) => option.label)).not.toContain('far meaning');
    } finally {
      spy.mockRestore();
    }
  });

  it('provides four same-class choices for every lesson, locale and quiz mode', () => {
    for (const locale of ['en', 'vi'] as const) {
      for (const includeReference of [false, true]) {
        const allLessons = getAllCourseLessons();
        const allEntries = allLessons.flatMap(({ lesson }) =>
          buildVocabEntries(lesson, locale, includeReference)
        );
        const meaningLabels = new Map<VocabItem['partOfSpeech'], Set<string>>();
        const surfaceLabels = new Map<VocabItem['partOfSpeech'], Set<string>>();
        for (const entry of allEntries) {
          const meanings = meaningLabels.get(entry.meaningPartOfSpeech) ?? new Set<string>();
          meanings.add(entry.meaning);
          meaningLabels.set(entry.meaningPartOfSpeech, meanings);
          const surfaces = surfaceLabels.get(entry.partOfSpeech) ?? new Set<string>();
          surfaces.add(entry.surface);
          surfaceLabels.set(entry.partOfSpeech, surfaces);
        }
        for (const { lesson, level } of allLessons) {
          const entries = buildVocabEntries(lesson, locale, includeReference);
          for (const mode of ['word-meaning', 'meaning-word'] as const) {
            const session = createVocabSession(lesson, locale, mode, level, includeReference);
            for (let index = 0; index < session.total; index += 1) {
              const question = session.next();
              const answer = question.options.find((option) => option.id === question.correctId);
              expect(answer, `${lesson.id}: missing correct option`).toBeDefined();
              expect(question.options, `${lesson.id}: ${question.promptText}`).toHaveLength(4);
              expect(new Set(question.options.map((option) => option.label)).size).toBe(4);

              const matchingEntries = entries.filter(
                (entry) =>
                  (!question.cardId || entry.cardId === question.cardId) &&
                  (mode === 'word-meaning'
                    ? entry.surface === question.promptText && entry.meaning === answer!.label
                    : entry.meaning === question.promptText && entry.surface === answer!.label)
              );
              expect(matchingEntries, `${lesson.id}: ${question.promptText}`).not.toHaveLength(0);
              const sameClass = matchingEntries.some((correct) => {
                const labels =
                  mode === 'word-meaning'
                    ? meaningLabels.get(correct.meaningPartOfSpeech)!
                    : surfaceLabels.get(correct.partOfSpeech)!;
                return question.options.every((option) => labels.has(option.label));
              });
              expect(sameClass, `${lesson.id}: ${question.promptText}`).toBe(true);
            }
          }
        }
      }
    }
  }, 120_000);

  it.each(['word-meaning', 'meaning-word'] as const)(
    'prefers same-class choices from the lesson in %s mode',
    (mode) => {
      const lesson = {
        ...lesson1,
        vocab: [
          item('n1', 'noun 1', 'noun'),
          item('n2', 'noun 2', 'noun'),
          item('n3', 'noun 3', 'noun'),
          item('n4', 'noun 4', 'noun'),
          item('v1', 'verb 1', 'verb')
        ],
        phrases: [],
        reference: []
      };
      const session = createVocabSession(lesson, 'en', mode, 'n5');
      const questions = Array.from({ length: session.total }, () => session.next());
      const question = questions.find(
        (value) => value.promptText === (mode === 'word-meaning' ? 'n1' : 'noun 1')
      )!;

      expect(question.options).toHaveLength(4);
      expect(question.options.map((option) => option.label).sort()).toEqual(
        (mode === 'word-meaning'
          ? ['noun 1', 'noun 2', 'noun 3', 'noun 4']
          : ['n1', 'n2', 'n3', 'n4']
        ).sort()
      );
    }
  );

  it.each(['word-meaning', 'meaning-word'] as const)(
    'fills missing same-class choices from other lessons in %s mode',
    (mode) => {
      const lesson = {
        ...lesson1,
        vocab: [
          item('n1', 'noun 1', 'noun'),
          item('n2', 'noun 2', 'noun'),
          item('v1', 'verb 1', 'verb')
        ],
        phrases: [],
        reference: []
      };
      const session = createVocabSession(lesson, 'en', mode, 'n5');
      const questions = Array.from({ length: session.total }, () => session.next());
      const question = questions.find(
        (value) => value.promptText === (mode === 'word-meaning' ? 'n1' : 'noun 1')
      )!;
      const nounLabels = new Set(
        getAllCourseLessons()
          .flatMap(({ lesson: other }) => buildVocabEntries(other, 'en'))
          .filter((entry) =>
            mode === 'word-meaning'
              ? entry.meaningPartOfSpeech === 'noun'
              : entry.partOfSpeech === 'noun'
          )
          .map((entry) => (mode === 'word-meaning' ? entry.meaning : entry.surface))
      );
      nounLabels.add(mode === 'word-meaning' ? 'noun 1' : 'n1');
      nounLabels.add(mode === 'word-meaning' ? 'noun 2' : 'n2');

      expect(question.options).toHaveLength(4);
      expect(new Set(question.options.map((option) => option.label)).size).toBe(4);
      expect(question.options.map((option) => option.label)).toContain(
        mode === 'word-meaning' ? 'noun 2' : 'n2'
      );
      expect(question.options.every((option) => nounLabels.has(option.label))).toBe(true);
    }
  );

  it.each(['en', 'vi'] as const)('uses noun meanings for 歯 in %s', (locale) => {
    const lesson = course.lessons[15]!;
    const session = createVocabSession(lesson, locale, 'word-meaning', 'n5');
    const questions = Array.from({ length: session.total }, () => session.next());
    const question = questions.find((value) => value.promptText === '歯')!;
    const nounMeanings = new Set(
      getAllCourseLessons()
        .flatMap(({ lesson: other }) => buildVocabEntries(other, locale))
        .filter((entry) => entry.meaningPartOfSpeech === 'noun')
        .map((entry) => entry.meaning)
    );

    expect(question.options).toHaveLength(4);
    expect(question.options.every((option) => nounMeanings.has(option.label))).toBe(true);
  });

  it('uses the displayed language word class when a translation differs from Japanese', () => {
    const lesson = {
      ...lesson1,
      vocab: [
        {
          ...item('好き', 'to like', 'adjective'),
          meaningPartOfSpeech: { en: 'verb', vi: 'verb' } as const
        },
        item('食べる', 'to eat', 'verb'),
        item('飲む', 'to drink', 'verb'),
        item('行く', 'to go', 'verb'),
        item('高い', 'expensive', 'adjective'),
        item('長い', 'long', 'adjective'),
        item('若い', 'young', 'adjective')
      ],
      phrases: [],
      reference: []
    };

    for (const mode of ['word-meaning', 'meaning-word'] as const) {
      const session = createVocabSession(lesson, 'en', mode, 'n5');
      const questions = Array.from({ length: session.total }, () => session.next());
      const question = questions.find(
        (value) => value.promptText === (mode === 'word-meaning' ? '好き' : 'to like')
      )!;
      expect(question.options.map((option) => option.label).sort()).toEqual(
        (mode === 'word-meaning'
          ? ['to like', 'to eat', 'to drink', 'to go']
          : ['好き', '高い', '長い', '若い']
        ).sort()
      );
    }
  });

  it.each(['word-meaning', 'meaning-word'] as const)(
    'does not use a duplicate surface or meaning as a distractor in %s mode',
    (mode) => {
      const lesson = {
        ...lesson1,
        vocab: [
          item('shared', 'first meaning', 'noun'),
          item('shared', 'second meaning', 'noun'),
          item('synonym', 'first meaning', 'noun'),
          item('synonym', 'another meaning', 'noun'),
          item('other', 'second meaning', 'noun')
        ],
        phrases: [],
        reference: []
      };
      const session = createVocabSession(lesson, 'en', mode, 'n5');
      const questions = Array.from({ length: session.total }, () => session.next());
      const question = questions.find((value) => {
        const answer = value.options.find((option) => option.id === value.correctId);
        return mode === 'word-meaning'
          ? value.promptText === 'shared' && answer?.label === 'first meaning'
          : value.promptText === 'first meaning' && answer?.label === 'shared';
      })!;

      expect(question.options).toHaveLength(4);
      expect(question.options.map((option) => option.label)).not.toContain(
        mode === 'word-meaning' ? 'second meaning' : 'synonym'
      );
    }
  );

  it('uses the correct reading when two entries share a surface', () => {
    const lesson = {
      ...lesson1,
      vocab: [
        {
          ...item('first-reading', 'first meaning', 'noun'),
          kanji: 'X',
          ruby: [{ base: 'X', reading: 'first-reading' }]
        },
        {
          ...item('second-reading', 'second meaning', 'noun'),
          kanji: 'X',
          ruby: [{ base: 'X', reading: 'second-reading' }]
        }
      ],
      phrases: [],
      reference: []
    };
    const session = createVocabSession(lesson, 'en', 'meaning-word', 'n5');
    const questions = Array.from({ length: session.total }, () => session.next());
    const question = questions.find((value) => value.promptText === 'second meaning')!;
    const answer = question.options.find((option) => option.id === question.correctId);

    expect(answer?.ruby).toEqual([{ base: 'X', reading: 'second-reading' }]);
  });

  it('draws every surface once before repeating (no-repeat cycle)', () => {
    const entries = buildVocabEntries(lesson1, 'en');
    const session = createVocabSession(lesson1, 'en', 'word-meaning', 'n5');

    const drawn = Array.from({ length: session.total }, () => session.next().promptText);

    expect([...drawn].sort()).toEqual(entries.map((entry) => entry.surface).sort());
  });

  it('reshuffles into a new cycle once the pool is exhausted', () => {
    const entries = buildVocabEntries(lesson1, 'en');
    const surfaces = new Set(entries.map((entry) => entry.surface));
    const session = createVocabSession(lesson1, 'en', 'word-meaning', 'n5');

    for (let i = 0; i < session.total; i += 1) {
      session.next();
    }

    expect(surfaces.has(session.next().promptText)).toBe(true);
  });

  it('builds well-formed word-meaning questions', () => {
    const session = createVocabSession(lesson1, 'en', 'word-meaning', 'n5');
    const question = session.next();

    expect(question.promptJa).toBe(true);
    expect(question.options.every((option) => option.ja === false)).toBe(true);
    expect(question.options.map((option) => option.id)).toContain(question.correctId);
  });

  it('builds well-formed meaning-word questions', () => {
    const session = createVocabSession(lesson1, 'en', 'meaning-word', 'n5');
    const question = session.next();

    expect(question.promptJa).toBe(false);
    expect(question.options.every((option) => option.ja === true)).toBe(true);
    expect(question.options.map((option) => option.id)).toContain(question.correctId);
  });

  it('asks each meaning once, using the kanji surface when the word has one', () => {
    const session = createVocabSession(lesson1, 'en', 'meaning-word', 'n5');
    const surfaces = Array.from({ length: session.total }, () => session.next().options)
      .flat()
      .filter((option) => option.label === '私' || option.label === 'わたし');

    expect(surfaces.some((option) => option.label === 'わたし')).toBe(false);
  });
});

describe('createVocabMatchSession', () => {
  it('fills up to five visible slots', () => {
    const session = createVocabMatchSession(lesson1, 'en');
    const slots = session.fill(initialVocabMatchSlotCount(session.totalPairs));

    expect(slots.length).toBeLessThanOrEqual(VOCAB_MATCH_BATCH_SIZE);
    expect(slots.length).toBeGreaterThan(0);
    expect(slots.every((pair) => pair.id && pair.surface && pair.meaning)).toBe(true);
  });

  it('draws every entry once before the pool runs dry', () => {
    const entries = buildVocabEntries(lesson1, 'en');
    const session = createVocabMatchSession(lesson1, 'en');
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
    const session = createVocabMatchSession(lesson1, 'en');

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
    const session = createVocabMatchSession(lesson1, 'en');
    const slots = session.fill(initialVocabMatchSlotCount(session.totalPairs));
    const shuffled = shuffleMatchMeanings(slots);

    expect(shuffled).toHaveLength(slots.length);
    expect(new Set(shuffled.map((pair) => pair.id)).size).toBe(slots.length);
    expect(shuffled.every((pair, index) => pair.id !== slots[index]!.id)).toBe(true);
  });
});
