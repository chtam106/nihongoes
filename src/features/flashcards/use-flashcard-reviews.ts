'use client';

import { useCallback } from 'react';
import {
  applyGrade,
  dayNumber,
  EMPTY_REVIEW_STORE,
  FLASHCARD_REVIEWS_KEY,
  sanitizeReviewStore,
  suspendCard,
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

  const skip = useCallback(
    (cardId: string) => {
      setStore((previous) => suspendCard(previous, cardId, dayNumber()));
    },
    [setStore]
  );

  return { store, grade, skip };
}
