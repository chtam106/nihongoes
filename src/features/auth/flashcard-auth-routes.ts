import { FLASHCARDS_PATH } from '@/constants/courses/levels.ts';

/** Routes where flashcard sync requires sign-in (gate + header sign-in affordance). */
export function isFlashcardAuthRoute(pathname: string) {
  return pathname === FLASHCARDS_PATH || pathname.startsWith(`${FLASHCARDS_PATH}/`);
}
