'use client';

import { useCallback, useMemo } from 'react';
import {
  createCollection,
  deleteCollection,
  EMPTY_FLASHCARD_STORE,
  FLASHCARD_COLLECTIONS_KEY,
  renameCollection,
  resolveCollections,
  sanitizeFlashcardStore,
  storeFromResolved,
  toggleCardInCollection,
  type FlashcardCollection
} from '@/constants/flashcards/collections.ts';
import { useFlashcardDefaults } from '@/features/flashcards/flashcard-defaults.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { usePersistentState } from '@/utils/use-persistent-state.ts';

export function useFlashcardCollections() {
  const { locale } = useTranslation();
  const { defaults } = useFlashcardDefaults();
  const [store, setStore] = usePersistentState(
    FLASHCARD_COLLECTIONS_KEY,
    EMPTY_FLASHCARD_STORE,
    sanitizeFlashcardStore
  );
  const collections = useMemo(
    () => resolveCollections(store, defaults, locale),
    [store, defaults, locale]
  );

  const update = useCallback(
    (reducer: (current: FlashcardCollection[]) => FlashcardCollection[]) => {
      setStore((previous) => {
        const current = resolveCollections(previous, defaults, locale);
        const next = reducer(current);

        if (next === current) {
          return previous;
        }

        return storeFromResolved(previous, next, defaults);
      });
    },
    [setStore, defaults, locale]
  );

  const toggleCard = useCallback(
    (collectionId: string, cardId: string) => {
      update((current) => toggleCardInCollection(current, collectionId, cardId));
    },
    [update]
  );

  const create = useCallback(
    (name: string, cardId?: string) => {
      const trimmed = name.trim();

      if (!trimmed) {
        return null;
      }

      const id = crypto.randomUUID();
      update((current) => createCollection(current, trimmed, { id, cardId }));

      return id;
    },
    [update]
  );

  const rename = useCallback(
    (collectionId: string, name: string) => {
      update((current) => renameCollection(current, collectionId, name));
    },
    [update]
  );

  const remove = useCallback(
    (collectionId: string) => {
      update((current) => deleteCollection(current, collectionId));
    },
    [update]
  );

  return { collections, defaults, toggleCard, create, rename, remove };
}
