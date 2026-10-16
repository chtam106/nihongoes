import { STORAGE_PREFIX } from '@/constants/site.ts';
import type { Bilingual } from '@/types/course.ts';
import type { Locale } from '@/types/i18n.ts';

export const FLASHCARD_COLLECTIONS_KEY = `${STORAGE_PREFIX}-flashcard-collections`;

export const FLASHCARD_COLLECTIONS_FRONT_KEY = `${STORAGE_PREFIX}-flashcard-collections-front`;

const MAX_NAME_LENGTH = 80;

const VOCAB_CARD_ID = /^\d+:\d+$/;
const KANA_CARD_ID = /^kana:[hk]:.+$/u;
const RADICAL_CARD_ID = /^radical:\d+$/;
const KANJI_CARD_ID = /^kanji:(?:grade-[1-6]|kanken-(?:4|3|pre-2|2)):.+$/u;

export type FlashcardCollection = {
  id: string;
  /** Empty when a built-in collection was edited but not renamed. */
  name: string;
  cardIds: string[];
};

export type DefaultCollection = {
  id: string;
  name: Bilingual;
  cardIds: string[];
};

export type FlashcardStore = {
  /** Custom collections, plus built-in ones whose name or cards the user changed. */
  overrides: FlashcardCollection[];
  /** Built-in collection ids the user deleted. */
  hidden: string[];
};

export const EMPTY_FLASHCARD_STORE: FlashcardStore = { overrides: [], hidden: [] };

export function isDefaultCollectionId(id: string) {
  return id.startsWith('default-');
}

export function isFlashcardCardId(value: string) {
  return (
    value.length <= 48 &&
    (VOCAB_CARD_ID.test(value) ||
      KANA_CARD_ID.test(value) ||
      RADICAL_CARD_ID.test(value) ||
      KANJI_CARD_ID.test(value))
  );
}

export function flashcardCardId(lessonNumber: number, index: number) {
  return `${lessonNumber}:${index}`;
}

export function sanitizeFlashcardCollections(value: unknown): FlashcardCollection[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const seenIds = new Set<string>();
  const collections: FlashcardCollection[] = [];

  for (const entry of value) {
    if (!entry || typeof entry !== 'object') {
      continue;
    }

    const record = entry as Record<string, unknown>;
    const id = typeof record.id === 'string' ? record.id.trim() : '';
    const name =
      typeof record.name === 'string' ? record.name.trim().slice(0, MAX_NAME_LENGTH) : '';

    if (!id || seenIds.has(id) || (!name && !isDefaultCollectionId(id))) {
      continue;
    }

    const cardIds = Array.isArray(record.cardIds)
      ? [
          ...new Set(
            record.cardIds.filter(
              (cardId): cardId is string => typeof cardId === 'string' && isFlashcardCardId(cardId)
            )
          )
        ]
      : [];

    seenIds.add(id);
    collections.push({ id, name, cardIds });
  }

  return collections;
}

export function toggleCardInCollection(
  collections: FlashcardCollection[],
  collectionId: string,
  cardId: string
): FlashcardCollection[] {
  if (!isFlashcardCardId(cardId)) {
    return collections;
  }

  return collections.map((collection) => {
    if (collection.id !== collectionId) {
      return collection;
    }

    const hasCard = collection.cardIds.includes(cardId);

    return {
      ...collection,
      cardIds: hasCard
        ? collection.cardIds.filter((id) => id !== cardId)
        : [...collection.cardIds, cardId]
    };
  });
}

export function createCollection(
  collections: FlashcardCollection[],
  name: string,
  options: { id: string; cardId?: string }
): FlashcardCollection[] {
  const trimmed = name.trim().slice(0, MAX_NAME_LENGTH);
  const id = options.id.trim();

  if (!trimmed || !id || collections.some((collection) => collection.id === id)) {
    return collections;
  }

  const cardIds = options.cardId && isFlashcardCardId(options.cardId) ? [options.cardId] : [];

  return [{ id, name: trimmed, cardIds }, ...collections];
}

export function renameCollection(
  collections: FlashcardCollection[],
  collectionId: string,
  name: string
): FlashcardCollection[] {
  const trimmed = name.trim().slice(0, MAX_NAME_LENGTH);

  if (!trimmed) {
    return collections;
  }

  return collections.map((collection) =>
    collection.id === collectionId ? { ...collection, name: trimmed } : collection
  );
}

export function deleteCollection(
  collections: FlashcardCollection[],
  collectionId: string
): FlashcardCollection[] {
  return collections.filter((collection) => collection.id !== collectionId);
}

export function sanitizeFlashcardStore(value: unknown): FlashcardStore {
  if (Array.isArray(value)) {
    return { overrides: sanitizeFlashcardCollections(value), hidden: [] };
  }

  if (!value || typeof value !== 'object') {
    return EMPTY_FLASHCARD_STORE;
  }

  const record = value as Record<string, unknown>;
  const hidden = Array.isArray(record.hidden)
    ? [
        ...new Set(
          record.hidden.filter(
            (id): id is string => typeof id === 'string' && isDefaultCollectionId(id)
          )
        )
      ]
    : [];

  return {
    overrides: sanitizeFlashcardCollections(record.overrides),
    hidden
  };
}

function sameCardSet(left: readonly string[], right: readonly string[]) {
  if (left.length !== right.length) {
    return false;
  }

  const ids = new Set(left);

  return right.every((id) => ids.has(id));
}

function isBuiltinName(name: string, builtin: DefaultCollection) {
  return name === builtin.name.en || name === builtin.name.vi;
}

/** Built-in collections, with the user's renames, edits, and deletions applied. */
export function resolveCollections(
  store: FlashcardStore,
  defaults: readonly DefaultCollection[],
  locale: Locale
): FlashcardCollection[] {
  const hidden = new Set(store.hidden);
  const overrides = new Map(store.overrides.map((collection) => [collection.id, collection]));
  const defaultIds = new Set(defaults.map((collection) => collection.id));
  const custom = store.overrides.filter((collection) => !defaultIds.has(collection.id));
  const builtin = defaults
    .filter((collection) => !hidden.has(collection.id))
    .map((collection) => {
      const override = overrides.get(collection.id);

      if (!override) {
        return { id: collection.id, name: collection.name[locale], cardIds: collection.cardIds };
      }

      return {
        id: collection.id,
        name: override.name || collection.name[locale],
        cardIds: override.cardIds
      };
    });

  return [...custom, ...builtin];
}

/** Persist only what differs from the built-in collections. */
export function storeFromResolved(
  previous: FlashcardStore,
  resolved: readonly FlashcardCollection[],
  defaults: readonly DefaultCollection[]
): FlashcardStore {
  const defaultsById = new Map(defaults.map((collection) => [collection.id, collection]));
  const resolvedIds = new Set(resolved.map((collection) => collection.id));
  const hidden = new Set(previous.hidden);

  for (const id of defaultsById.keys()) {
    if (resolvedIds.has(id)) {
      hidden.delete(id);
    } else {
      hidden.add(id);
    }
  }

  const overrides: FlashcardCollection[] = [];

  for (const collection of resolved) {
    const builtin = defaultsById.get(collection.id);

    if (!builtin) {
      overrides.push(collection);
      continue;
    }

    if (
      isBuiltinName(collection.name, builtin) &&
      sameCardSet(collection.cardIds, builtin.cardIds)
    ) {
      continue;
    }

    overrides.push({
      id: collection.id,
      name: isBuiltinName(collection.name, builtin) ? '' : collection.name,
      cardIds: collection.cardIds
    });
  }

  return { overrides, hidden: [...hidden] };
}
