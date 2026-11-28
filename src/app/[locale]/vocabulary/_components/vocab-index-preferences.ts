import { storageKey } from '@/constants/site.ts';

export type VocabIndexPreferences = {
  from: number;
  to: number;
};

export const VOCAB_INDEX_STORAGE_KEY = storageKey('VOCAB_INDEX');

function nearestLessonNumber(value: number, lessonNumbers: number[]): number {
  if (lessonNumbers.includes(value)) {
    return value;
  }

  const next = lessonNumbers.find((number) => number >= value);

  return next ?? lessonNumbers[lessonNumbers.length - 1] ?? value;
}

export function defaultVocabIndexPreferences(lessonNumbers: number[]): VocabIndexPreferences {
  const from = lessonNumbers[0] ?? 1;
  const to = lessonNumbers[lessonNumbers.length - 1] ?? from;

  return { from, to };
}

export function sanitizeVocabIndexPreferences(
  value: unknown,
  lessonNumbers: number[]
): VocabIndexPreferences {
  const fallback = defaultVocabIndexPreferences(lessonNumbers);

  if (!value || typeof value !== 'object') {
    return fallback;
  }

  const record = value as Record<string, unknown>;
  const from = nearestLessonNumber(
    typeof record.from === 'number' ? record.from : fallback.from,
    lessonNumbers
  );
  let to = nearestLessonNumber(
    typeof record.to === 'number' ? record.to : fallback.to,
    lessonNumbers
  );

  if (from > to) {
    to = from;
  }

  return { from, to };
}
