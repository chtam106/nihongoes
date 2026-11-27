'use client';

import { useCallback } from 'react';
import {
  addAllToReview,
  addToReview,
  applyGrade,
  dayNumber,
  EMPTY_REVIEW_STORE,
  FLASHCARD_REVIEWS_KEY,
  recordMiss,
  removeAllFromReview,
  removeCard,
  restoreCard,
  sanitizeReviewStore,
  type ReviewCard,
  type ReviewGrade
} from '@/constants/flashcards/srs.ts';
import { notifyReviewAdded } from '@/features/flashcards/review-toast.tsx';
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

  const remove = useCallback(
    (cardId: string) => {
      setStore((previous) => removeCard(previous, cardId));
    },
    [setStore]
  );

  const add = useCallback(
    (cardId: string) => {
      notifyReviewAdded(cardId in store.cards ? 0 : 1);
      setStore((previous) => addToReview(previous, cardId, dayNumber()));
    },
    [setStore, store]
  );

  const addAll = useCallback(
    (cardIds: readonly string[]) => {
      notifyReviewAdded(new Set(cardIds.filter((cardId) => !(cardId in store.cards))).size);
      setStore((previous) => addAllToReview(previous, cardIds, dayNumber()));
    },
    [setStore, store]
  );

  const restore = useCallback(
    (cardId: string, card: ReviewCard | undefined) => {
      setStore((previous) => restoreCard(previous, cardId, card));
    },
    [setStore]
  );

  const removeAll = useCallback(
    (cardIds: readonly string[]) => {
      setStore((previous) => removeAllFromReview(previous, cardIds));
    },
    [setStore]
  );

  return { store, grade, recordMisses, remove, add, addAll, removeAll, restore };
}
