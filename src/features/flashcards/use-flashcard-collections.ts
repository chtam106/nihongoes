'use client';

import { useCallback, useMemo, useSyncExternalStore } from 'react';
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
  type FlashcardCardType,
  type FlashcardCollection,
  type FlashcardStore
} from '@/constants/flashcards/collections.ts';
import { isFlashcardAuthEnabled } from '@/features/auth/api.ts';
import { useFlashcardDefaults } from '@/features/flashcards/flashcard-defaults.tsx';
import {
  getCollectionSnapshot,
  getServerCollectionSnapshot,
  subscribeCollections,
  writeCollectionStore
} from '@/features/flashcards/collection-store.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { usePersistentState } from '@/utils/use-persistent-state.ts';

type CollectionsApi = {
  collections: FlashcardCollection[];
  defaults: ReturnType<typeof useFlashcardDefaults>['defaults'];
  toggleCard: (collectionId: string, cardId: string, type?: FlashcardCardType) => void;
  create: (name: string, cardId?: string, cardType?: FlashcardCardType) => string | null;
  rename: (collectionId: string, name: string) => void;
  remove: (collectionId: string) => void;
};

function useResolvedCollections(store: FlashcardStore) {
  const { locale } = useTranslation();
  const { defaults } = useFlashcardDefaults();

  const collections = useMemo(
    () => resolveCollections(store, defaults, locale),
    [store, defaults, locale]
  );

  return { collections, defaults, locale };
}

function useLocalFlashcardCollections(active: boolean): CollectionsApi {
  const { store, setStore } = usePersistentStore();
  const effectiveStore = active ? store : EMPTY_FLASHCARD_STORE;
  const { collections, defaults, locale } = useResolvedCollections(effectiveStore);

  const update = useCallback(
    (reducer: (current: FlashcardCollection[]) => FlashcardCollection[]) => {
      if (!active) {
        return;
      }

      setStore((previous) => {
        const current = resolveCollections(previous, defaults, locale);
        const next = reducer(current);

        if (next === current) {
          return previous;
        }

        return storeFromResolved(previous, next, defaults);
      });
    },
    [active, setStore, defaults, locale]
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

      if (!trimmed || !active) {
        return null;
      }

      const id = crypto.randomUUID();
      update((current) => createCollection(current, trimmed, { id, cardId, cardType }));

      return id;
    },
    [active, update]
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

function usePersistentStore() {
  const [store, setStore] = usePersistentState(
    FLASHCARD_COLLECTIONS_KEY,
    EMPTY_FLASHCARD_STORE,
    sanitizeFlashcardStore
  );

  return { store, setStore };
}

function useRemoteFlashcardCollections(active: boolean): CollectionsApi {
  const snapshot = useSyncExternalStore(
    subscribeCollections,
    getCollectionSnapshot,
    getServerCollectionSnapshot
  );
  const store = snapshot.status === 'ready' ? snapshot.store : EMPTY_FLASHCARD_STORE;
  const { collections, defaults, locale } = useResolvedCollections(store);

  const update = useCallback(
    (reducer: (current: FlashcardCollection[]) => FlashcardCollection[]) => {
      if (!active || snapshot.status !== 'ready') {
        return;
      }

      const current = resolveCollections(snapshot.store, defaults, locale);
      const next = reducer(current);

      if (next === current) {
        return;
      }

      writeCollectionStore(storeFromResolved(snapshot.store, next, defaults));
    },
    [active, snapshot.status, snapshot.store, defaults, locale]
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

      if (!trimmed || !active) {
        return null;
      }

      const id = crypto.randomUUID();
      update((current) => createCollection(current, trimmed, { id, cardId, cardType }));

      return id;
    },
    [active, update]
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

export function useFlashcardCollections(): CollectionsApi {
  const authEnabled = isFlashcardAuthEnabled();
  const local = useLocalFlashcardCollections(!authEnabled);
  const remote = useRemoteFlashcardCollections(authEnabled);

  if (authEnabled) {
    return remote;
  }

  return local;
}
