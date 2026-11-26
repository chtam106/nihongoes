'use client';

import { useCallback } from 'react';
import {
  applyGrade,
  dayNumber,
  EMPTY_REVIEW_STORE,
  FLASHCARD_REVIEWS_KEY,
  recordMiss,
  sanitizeReviewStore,
  type ReviewGrade
} from '@/constants/flashcards/srs.ts';
import { usePersistentState } from '@/utils/use-persistent-state.ts';

/** Spaced-repetition state for every flashcard, kept in localStorage. */
export function useFlashcardReviews() {
  const [store, setStore] = usePersistentState(
    FLASHCARD_REVIEWS_KEY,
    EMPTY_REVIEW_STORE,
    sanitizeReviewStore
  );

  const grade = useCallback(
    (cardId: string, value: ReviewGrade) => {
      setStore((previous) => applyGrade(previous, cardId, value, dayNumber()));
    },
    [setStore]
  );

  const recordMisses = useCallback(
    (cardIds: readonly string[]) => {
      if (cardIds.length === 0) {
        return;
      }

      setStore((previous) => {
        const today = dayNumber();

        return cardIds.reduce((next, cardId) => recordMiss(next, cardId, today), previous);
      });
    },
    [setStore]
  );

  return { store, grade, recordMisses };
}
