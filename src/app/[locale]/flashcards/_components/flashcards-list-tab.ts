import { FLASHCARDS_PATH } from '@/constants/courses/levels.ts';

export type FlashcardsListTab = 'mine' | 'default';

/** URL query key for the collections list tab on `/flashcards`. */
export const FLASHCARDS_LIST_TAB_QUERY = 'tab';

export function parseFlashcardsListTabParam(value: string | null): FlashcardsListTab | null {
  if (value === 'mine' || value === 'default') {
    return value;
  }

  return null;
}

export function flashcardsListPath(tab: FlashcardsListTab) {
  return `${FLASHCARDS_PATH}?${FLASHCARDS_LIST_TAB_QUERY}=${tab}`;
}
