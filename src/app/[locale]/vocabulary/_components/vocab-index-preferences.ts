import { storageKey } from '@/constants/site.ts';
import { readPersistedValue } from '@/utils/use-persistent-state.ts';

export type FlashcardFront = 'ja' | 'meaning';

export type VocabIndexView = 'list' | 'flashcards';

export type VocabIndexPreferences = {
  view: VocabIndexView;
  front: FlashcardFront;
  from: number;
  to: number;
};

export const FLASHCARD_FRONT_STORAGE_KEY = storageKey('VOCAB_FLASHCARD_FRONT');

export const FLASHCARD_GUIDE_SEEN_KEY = storageKey('VOCAB_FLASHCARD_GUIDE_SEEN');

export function sanitizeFlashcardGuideSeen(value: unknown): boolean {
  return value === true;
}

export const VOCAB_INDEX_STORAGE_KEY = storageKey('VOCAB_INDEX');

export function sanitizeFlashcardFront(value: unknown): FlashcardFront {
  if (value === 'meaning' || value === 'en' || value === 'vi') {
    return 'meaning';
  }

  return 'ja';
}

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

  return {
    view: 'list',
    front: 'ja',
    from,
    to
  };
}

export function sanitizeVocabIndexPreferences(
  value: unknown,
  lessonNumbers: number[]
): VocabIndexPreferences {
  const fallback = defaultVocabIndexPreferences(lessonNumbers);
  const legacyFront = readPersistedValue(
    FLASHCARD_FRONT_STORAGE_KEY,
    fallback.front,
    sanitizeFlashcardFront
  );

  if (!value || typeof value !== 'object') {
    return { ...fallback, front: legacyFront };
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

  const view: VocabIndexView = record.view === 'flashcards' ? 'flashcards' : 'list';
  const front = sanitizeFlashcardFront(record.front ?? legacyFront);

  return { view, front, from, to };
}
