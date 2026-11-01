'use client';

import { useCallback, useMemo } from 'react';
import {
  createCollection,
  deleteCollection,
  renameCollection,
  resolveCollections,
  storeFromResolved,
  toggleCardInCollection,
  type FlashcardCardType,
  type FlashcardCollection
} from '@/constants/flashcards/collections.ts';
import { useFlashcardDrive } from '@/features/flashcards/flashcard-drive.tsx';
import { useFlashcardDefaults } from '@/features/flashcards/flashcard-defaults.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';

export function useFlashcardCollections() {
  const { locale } = useTranslation();
  const { defaults } = useFlashcardDefaults();
  const { status, store, signIn, updateStore } = useFlashcardDrive();
  const ready = status === 'ready';
  const collections = useMemo(
    () => (ready ? resolveCollections(store, defaults, locale) : []),
    [ready, store, defaults, locale]
  );

  const update = useCallback(
    (reducer: (current: FlashcardCollection[]) => FlashcardCollection[]) => {
      updateStore((previous) => {
        const current = resolveCollections(previous, defaults, locale);
        const next = reducer(current);

        if (next === current) {
          return previous;
        }

        return storeFromResolved(previous, next, defaults);
      });
    },
    [updateStore, defaults, locale]
  );

  const toggleCard = useCallback(
    (collectionId: string, cardId: string, type?: FlashcardCardType) => {
      update((current) => toggleCardInCollection(current, collectionId, cardId, type));
    },
    [update]
  );

  const create = useCallback(
    (name: string, cardId?: string, cardType?: FlashcardCardType) => {
      const trimmed = name.trim();

      if (!trimmed) {
        return null;
      }

      const id = crypto.randomUUID();
      update((current) => createCollection(current, trimmed, { id, cardId, cardType }));

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

  return { collections, defaults, status, signIn, toggleCard, create, rename, remove };
}
