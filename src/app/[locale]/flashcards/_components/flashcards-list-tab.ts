import { FLASHCARDS_PATH, flashcardCollectionPath } from '@/constants/courses/levels.ts';

export type FlashcardsListTab = 'mine' | 'default';

/** URL query key for the collections list tab on `/flashcards`. */
export const FLASHCARDS_LIST_TAB_QUERY = 'tab';

/** Query on `/flashcards/:id` so Back returns to the same list tab. */
export const FLASHCARDS_RETURN_TAB_QUERY = 'list';

export function parseFlashcardsListTabParam(value: string | null): FlashcardsListTab | null {
  if (value === 'mine' || value === 'default') {
    return value;
  }

  return null;
}

export function flashcardsListPath(tab: FlashcardsListTab) {
  return `${FLASHCARDS_PATH}?${FLASHCARDS_LIST_TAB_QUERY}=${tab}`;
}

export function flashcardCollectionHref(collectionId: string, listTab: FlashcardsListTab) {
  return `${flashcardCollectionPath(collectionId)}?${FLASHCARDS_RETURN_TAB_QUERY}=${listTab}`;
}
