import {
  EMPTY_FLASHCARD_STORE,
  FLASHCARD_COLLECTIONS_KEY,
  sanitizeFlashcardStore,
  type FlashcardStore
} from '@/constants/flashcards/collections.ts';
import { ApiError, api } from '@/features/auth/api.ts';
import { readPersistedValue } from '@/utils/use-persistent-state.ts';

export type CollectionSnapshot = {
  status: 'idle' | 'loading' | 'ready' | 'error';
  userId: string | null;
  store: FlashcardStore;
};

const IDLE: CollectionSnapshot = {
  status: 'idle',
  userId: null,
  store: EMPTY_FLASHCARD_STORE
};

let snapshot: CollectionSnapshot = IDLE;
let generation = 0;
let persistTimer: ReturnType<typeof setTimeout> | null = null;
let persistAbort: AbortController | null = null;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) {
    listener();
  }
}

function isEmptyStore(store: FlashcardStore) {
  return store.overrides.length === 0 && store.hidden.length === 0;
}

export function subscribeCollections(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

export function getCollectionSnapshot() {
  return snapshot;
}

export function getServerCollectionSnapshot(): CollectionSnapshot {
  return IDLE;
}

export function resetCollectionStore() {
  generation += 1;

  if (persistTimer) {
    clearTimeout(persistTimer);
    persistTimer = null;
  }

  persistAbort?.abort();
  persistAbort = null;
  snapshot = IDLE;
  emit();
}

export async function loadCollectionStore(userId: string) {
  const id = ++generation;
  snapshot = { status: 'loading', userId, store: EMPTY_FLASHCARD_STORE };
  emit();

  try {
    let store = sanitizeFlashcardStore(await api<unknown>('/api/collections'));

    if (id !== generation) {
      return;
    }

    if (isEmptyStore(store)) {
      const local = readPersistedValue(
        FLASHCARD_COLLECTIONS_KEY,
        EMPTY_FLASHCARD_STORE,
        sanitizeFlashcardStore
      );

      if (!isEmptyStore(local)) {
        store = sanitizeFlashcardStore(
          await api<unknown>('/api/collections', {
            method: 'PUT',
            body: JSON.stringify(local)
          })
        );
      }
    }

    if (id !== generation) {
      return;
    }

    snapshot = { status: 'ready', userId, store };
    emit();
  } catch (error) {
    if (id !== generation) {
      return;
    }

    if (error instanceof ApiError && error.status === 401) {
      return;
    }

    snapshot = { status: 'error', userId, store: EMPTY_FLASHCARD_STORE };
    emit();
  }
}

export function writeCollectionStore(store: FlashcardStore) {
  if (snapshot.status !== 'ready' || !snapshot.userId) {
    return;
  }

  const userId = snapshot.userId;
  snapshot = { status: 'ready', userId, store };
  emit();

  if (persistTimer) {
    clearTimeout(persistTimer);
  }

  persistTimer = setTimeout(() => {
    persistTimer = null;
    const id = generation;
    persistAbort?.abort();
    persistAbort = new AbortController();
    const signal = persistAbort.signal;

    void api('/api/collections', {
      method: 'PUT',
      body: JSON.stringify(store),
      signal
    }).catch((error: unknown) => {
      if (id !== generation || signal.aborted) {
        return;
      }

      if (error instanceof ApiError && error.status === 401) {
        return;
      }

      snapshot = { status: 'error', userId, store };
      emit();
    });
  }, 200);
}

export async function flushCollectionStore() {
  if (persistTimer) {
    clearTimeout(persistTimer);
    persistTimer = null;
  }

  if (snapshot.status !== 'ready') {
    return;
  }

  persistAbort?.abort();
  persistAbort = new AbortController();

  try {
    await api('/api/collections', {
      method: 'PUT',
      body: JSON.stringify(snapshot.store),
      signal: persistAbort.signal
    });
  } catch {
    // Signing out still clears the local session.
  }
}
