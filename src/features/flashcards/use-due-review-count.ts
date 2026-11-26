'use client';

import { dayNumber, dueCardIds } from '@/constants/flashcards/srs.ts';
import { useFlashcardReviews } from '@/features/flashcards/use-flashcard-reviews.ts';

/** Cards due for review today. 0 during server rendering and hydration. */
export function useDueReviewCount() {
  const { store } = useFlashcardReviews();

  return dueCardIds(store, dayNumber()).length;
}
