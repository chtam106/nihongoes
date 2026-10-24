import { FLASHCARDS_PATH } from '@/constants/courses/levels.ts';

/**
 * Routes that require Google sign-in for cloud flashcard sync. Only these paths
 * auto-redirect to `/login` (via `FlashcardAuthGate`) and show header auth icons.
 */
export function isFlashcardAuthRoute(pathname: string) {
  const path = pathname.replace(/\/$/, '') || '/';

  return path === FLASHCARDS_PATH || path.startsWith(`${FLASHCARDS_PATH}/`);
}
