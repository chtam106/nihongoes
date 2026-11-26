'use client';

import { useEffect, useRef } from 'react';
import type { QuizMiss } from '@/components/quiz-miss-list';
import { useFlashcardReviews } from '@/features/flashcards/use-flashcard-reviews.ts';

/**
 * Put every card a quiz answer got wrong into the review schedule (back
 * tomorrow), as soon as the miss is recorded. Each miss is added once, also
 * when the quiz is retried and the list starts over.
 */
export function useReviewMissedCards(misses: readonly QuizMiss[]) {
  const { recordMisses } = useFlashcardReviews();
  const recorded = useRef(new WeakSet<QuizMiss>());

  useEffect(() => {
    const fresh = misses.filter((miss) => miss.card && !recorded.current.has(miss));

    if (fresh.length === 0) {
      return;
    }

    for (const miss of fresh) {
      recorded.current.add(miss);
    }

    recordMisses(fresh.flatMap((miss) => (miss.card ? [miss.card.id] : [])));
  }, [misses, recordMisses]);
}
