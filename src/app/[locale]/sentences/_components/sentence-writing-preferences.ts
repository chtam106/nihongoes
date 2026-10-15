import { STORAGE_PREFIX } from '@/constants/site.ts';

export type SentenceWritingPreferences = {
  lesson: number;
  showInput: boolean;
};

export const SENTENCE_WRITING_STORAGE_KEY = `${STORAGE_PREFIX}-sentence-writing`;

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
