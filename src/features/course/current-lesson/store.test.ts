import { describe, expect, it } from 'vitest';
import { latestLessonPerKind, sanitizeCurrentLessonStore } from './store.ts';

const entry = {
  course: { en: 'JLPT N5', vi: 'JLPT N5' },
  lessonId: 'lesson-3',
  number: 3,
  title: { en: 'Places', vi: 'Địa điểm' },
  path: '/n5/lesson-3',
  at: 100
};

const kanjiEntry = {
  ...entry,
  course: { en: 'Grade 1 kanji', vi: 'Kanji lớp 1' },
  path: '/kanji/grade-1/lesson-3'
};

describe('sanitizeCurrentLessonStore', () => {
  it('keeps valid entries and stamps the track key', () => {
    expect(sanitizeCurrentLessonStore({ n5: entry, 'kanji:grade-1': kanjiEntry })).toEqual({
      n5: { ...entry, trackKey: 'n5' },
      'kanji:grade-1': { ...kanjiEntry, trackKey: 'kanji:grade-1' }
    });
  });

  it('drops bad keys and malformed entries', () => {
    expect(
      sanitizeCurrentLessonStore({
        'N 5': entry,
        n4: { ...entry, number: '3' },
        n5: { ...entry, path: '//evil.example' },
        'kanji:grade-2': { ...entry, title: { en: 'Places' } }
      })
    ).toEqual({});
  });

  it('falls back to empty for non-objects', () => {
    expect(sanitizeCurrentLessonStore(null)).toEqual({});
    expect(sanitizeCurrentLessonStore([entry])).toEqual({});
  });
});

describe('latestLessonPerKind', () => {
  it('keeps the latest JLPT lesson and the latest kanji lesson, newest first', () => {
    const store = sanitizeCurrentLessonStore({
      n5: entry,
      n4: { ...entry, lessonId: 'lesson-27', path: '/n4/lesson-27', at: 300 },
      'kanji:grade-1': { ...kanjiEntry, at: 200 },
      'kanji:grade-2': { ...kanjiEntry, at: 400 }
    });

    expect(latestLessonPerKind(store).map((item) => item.trackKey)).toEqual([
      'kanji:grade-2',
      'n4'
    ]);
  });
});
