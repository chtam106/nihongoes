import { storageKey } from '@/constants/site.ts';

export type SentenceWritingPreferences = {
  lesson: number;
  showInput: boolean;
};

export const SENTENCE_WRITING_STORAGE_KEY = storageKey('SENTENCE_WRITING');

/** URL query key for the selected Minna lesson number on `/sentences`. */
export const SENTENCE_WRITING_LESSON_QUERY = 'lesson';

export function parseSentenceWritingLessonParam(
  value: string | null,
  lessonNumbers: number[]
): number | null {
  if (value === null || value === '') {
    return null;
  }

  const parsed = Number(value);

  if (!Number.isInteger(parsed) || !lessonNumbers.includes(parsed)) {
    return null;
  }

  return parsed;
}

function sanitizeLesson(value: unknown, lessonNumbers: number[]): number {
  const fallback = lessonNumbers[0] ?? 1;

  if (typeof value !== 'number' || !lessonNumbers.includes(value)) {
    return fallback;
  }

  return value;
}

export function defaultSentenceWritingPreferences(
  lessonNumbers: number[]
): SentenceWritingPreferences {
  return {
    lesson: lessonNumbers[0] ?? 1,
    showInput: false
  };
}

export function sanitizeSentenceWritingPreferences(
  value: unknown,
  lessonNumbers: number[]
): SentenceWritingPreferences {
  const fallback = defaultSentenceWritingPreferences(lessonNumbers);

  if (typeof value === 'number') {
    return { lesson: sanitizeLesson(value, lessonNumbers), showInput: false };
  }

  if (!value || typeof value !== 'object') {
    return fallback;
  }

  const record = value as Record<string, unknown>;

  return {
    lesson: sanitizeLesson(record.lesson, lessonNumbers),
    showInput: record.showInput === true
  };
}
