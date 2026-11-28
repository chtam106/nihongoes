'use client';

import { useEffect } from 'react';
import { storageKey } from '@/constants/site.ts';
import type { Bilingual } from '@/types/course.ts';
import { updatePersistedValue, usePersistentState } from '@/utils/use-persistent-state.ts';

export const CURRENT_LESSON_KEY = storageKey('CURRENT_LESSON');

/** A JLPT course level (`n5`) or `kanji:` plus a kanji track slug (`kanji:grade-1`). */
export type LessonTrackKey = string;

export function kanjiTrackKey(slug: string): LessonTrackKey {
  return `kanji:${slug}`;
}

/**
 * The lesson last opened in one course or kanji track. The names and path are
 * kept with it so the home page can show the row without loading lesson data.
 */
export type CurrentLesson = {
  trackKey: LessonTrackKey;
  /** `JLPT N5`, `Kanji lớp 1`, ... */
  course: Bilingual;
  lessonId: string;
  number: number;
  title: Bilingual;
  /** Locale-agnostic path of the lesson page. */
  path: string;
  /** `Date.now()` when it was last opened. */
  at: number;
};

export type CurrentLessonStore = Record<LessonTrackKey, CurrentLesson>;

export const EMPTY_CURRENT_LESSON_STORE: CurrentLessonStore = {};

const TRACK_KEY = /^(?:[a-z0-9]+|kanji:[a-z0-9-]+)$/;

function isBilingual(value: unknown): value is Bilingual {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const { en, vi } = value as Record<string, unknown>;

  return typeof en === 'string' && typeof vi === 'string';
}

function sanitizeEntry(trackKey: string, value: unknown): CurrentLesson | undefined {
  if (typeof value !== 'object' || value === null) {
    return undefined;
  }

  const { course, lessonId, number, title, path, at } = value as Record<string, unknown>;

  if (
    !isBilingual(course) ||
    typeof lessonId !== 'string' ||
    typeof number !== 'number' ||
    !isBilingual(title) ||
    typeof path !== 'string' ||
    !path.startsWith('/') ||
    path.startsWith('//') ||
    typeof at !== 'number'
  ) {
    return undefined;
  }

  return {
    trackKey,
    course: { en: course.en, vi: course.vi },
    lessonId,
    number,
    title: { en: title.en, vi: title.vi },
    path,
    at
  };
}

export function sanitizeCurrentLessonStore(value: unknown): CurrentLessonStore {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return EMPTY_CURRENT_LESSON_STORE;
  }

  const store: CurrentLessonStore = {};

  for (const [trackKey, entry] of Object.entries(value)) {
    if (!TRACK_KEY.test(trackKey)) {
      continue;
    }

    const sanitized = sanitizeEntry(trackKey, entry);

    if (sanitized) {
      store[trackKey] = sanitized;
    }
  }

  return store;
}

export function isKanjiTrackKey(trackKey: LessonTrackKey): boolean {
  return trackKey.startsWith('kanji:');
}

/**
 * The home page "Continue" rows: the JLPT lesson and the kanji lesson opened
 * most recently (one of each at most), the more recent one first.
 */
export function latestLessonPerKind(store: CurrentLessonStore): CurrentLesson[] {
  const byRecency = Object.values(store).sort((a, b) => b.at - a.at);
  const course = byRecency.find((entry) => !isKanjiTrackKey(entry.trackKey));
  const kanji = byRecency.find((entry) => isKanjiTrackKey(entry.trackKey));

  return byRecency.filter((entry) => entry === course || entry === kanji);
}

export function useCurrentLessons() {
  const [store] = usePersistentState(
    CURRENT_LESSON_KEY,
    EMPTY_CURRENT_LESSON_STORE,
    sanitizeCurrentLessonStore
  );

  return store;
}

export type TrackedLesson = Omit<CurrentLesson, 'at'>;

/**
 * Marks a lesson as the one being studied in its course or kanji track.
 * Called from the lesson page and every practice page of that lesson.
 */
export function useTrackCurrentLesson({
  trackKey,
  course,
  lessonId,
  number,
  title,
  path
}: TrackedLesson) {
  const { en: courseEn, vi: courseVi } = course;
  const { en: titleEn, vi: titleVi } = title;

  useEffect(() => {
    updatePersistedValue(
      CURRENT_LESSON_KEY,
      EMPTY_CURRENT_LESSON_STORE,
      sanitizeCurrentLessonStore,
      (previous) => ({
        ...previous,
        [trackKey]: {
          trackKey,
          course: { en: courseEn, vi: courseVi },
          lessonId,
          number,
          title: { en: titleEn, vi: titleVi },
          path,
          at: Date.now()
        }
      })
    );
  }, [trackKey, courseEn, courseVi, lessonId, number, titleEn, titleVi, path]);
}
