import { storageKey } from '@/constants/site.ts';
import type { Bilingual } from '@/types/course.ts';
import type { Locale } from '@/types/i18n.ts';

export const FLASHCARD_COLLECTIONS_KEY = storageKey('FLASHCARD_COLLECTIONS');

export const FLASHCARD_COLLECTIONS_FRONT_KEY = storageKey('FLASHCARD_COLLECTIONS_FRONT');

export const EMPTY_COLLECTION_FRONTS: Record<string, 'ja' | 'meaning'> = {};

/** Per-collection Word first / Meaning first choice. A legacy single string is ignored. */
export function sanitizeCollectionFronts(value: unknown): Record<string, 'ja' | 'meaning'> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return EMPTY_COLLECTION_FRONTS;
  }

  const fronts: Record<string, 'ja' | 'meaning'> = {};

  for (const [id, front] of Object.entries(value)) {
    if (front === 'ja' || front === 'meaning') {
      fronts[id] = front;
    }
  }

  return fronts;
}

const MAX_NAME_LENGTH = 80;

const VOCAB_CARD_ID = /^\d+:\d+$/;
const KANA_CARD_ID = /^kana:[hk]:.+$/u;
const RADICAL_CARD_ID = /^radical:\d+$/;
const KANJI_CARD_ID = /^kanji:(?:grade-[1-6]|kanken-(?:4|3|pre-2|2)):.+$/u;

export type FlashcardCardType = 'vocab' | 'phrase' | 'kana' | 'radical' | 'kanji';

export type FlashcardCard = {
  id: string;
  type: FlashcardCardType;
};

export type FlashcardCollection = {
  id: string;
  /** Empty when a built-in collection was edited but not renamed. */
  name: string;
  cards: FlashcardCard[];
};

export type DefaultCollection = {
  id: string;
  name: Bilingual;
  cards: FlashcardCard[];
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

export function flashcardCardType(id: string): FlashcardCardType | null {
  if (id.length > 48) {
    return null;
  }

  if (VOCAB_CARD_ID.test(id)) {
    return 'vocab';
  }

  if (KANA_CARD_ID.test(id)) {
    return 'kana';
  }

  if (RADICAL_CARD_ID.test(id)) {
    return 'radical';
  }

  if (KANJI_CARD_ID.test(id)) {
    return 'kanji';
  }

  return null;
}

export function flashcardCard(id: string, type?: FlashcardCardType): FlashcardCard | null {
  const derived = flashcardCardType(id);

  if (!derived) {
    return null;
  }

  if (derived === 'vocab' && type === 'phrase') {
    return { id, type: 'phrase' };
  }

  return { id, type: derived };
}

export function flashcardCards(ids: readonly string[]): FlashcardCard[] {
  const seen = new Set<string>();
  const cards: FlashcardCard[] = [];

  for (const id of ids) {
    const card = flashcardCard(id);

    if (!card || seen.has(card.id)) {
      continue;
    }

    seen.add(card.id);
    cards.push(card);
  }

  return cards;
}

function sanitizeCards(value: unknown): FlashcardCard[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const seen = new Set<string>();
  const cards: FlashcardCard[] = [];

  for (const entry of value) {
    const id = typeof entry === 'string' ? entry : readCardId(entry);
    const hinted = readCardType(entry);
    const card = id ? flashcardCard(id, hinted) : null;

    if (!card || seen.has(card.id)) {
      continue;
    }

    seen.add(card.id);
    cards.push(card);
  }

  return cards;
}

function readCardId(entry: unknown) {
  if (!entry || typeof entry !== 'object' || typeof (entry as { id?: unknown }).id !== 'string') {
    return null;
  }

  return (entry as { id: string }).id;
}

function readCardType(entry: unknown): FlashcardCardType | undefined {
  if (!entry || typeof entry !== 'object') {
    return undefined;
  }

  const type = (entry as { type?: unknown }).type;

  if (
    type === 'vocab' ||
    type === 'phrase' ||
    type === 'kana' ||
    type === 'radical' ||
    type === 'kanji'
  ) {
    return type;
  }

  return undefined;
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

    const cards = sanitizeCards(record.cards ?? record.cardIds);

    seenIds.add(id);
    collections.push({ id, name, cards });
  }

  return collections;
}

export function toggleCardInCollection(
  collections: FlashcardCollection[],
  collectionId: string,
  cardId: string,
  type?: FlashcardCardType
): FlashcardCollection[] {
  const card = flashcardCard(cardId, type);

  if (!card) {
    return collections;
  }

  return collections.map((collection) => {
    if (collection.id !== collectionId) {
      return collection;
    }

    const hasCard = collection.cards.some((item) => item.id === card.id);

    return {
      ...collection,
      cards: hasCard
        ? collection.cards.filter((item) => item.id !== card.id)
        : [...collection.cards, card]
    };
  });
}

export function createCollection(
  collections: FlashcardCollection[],
  name: string,
  options: { id: string; cardId?: string; cardType?: FlashcardCardType }
): FlashcardCollection[] {
  const trimmed = name.trim().slice(0, MAX_NAME_LENGTH);
  const id = options.id.trim();

  if (!trimmed || !id || collections.some((collection) => collection.id === id)) {
    return collections;
  }

  const card = options.cardId ? flashcardCard(options.cardId, options.cardType) : null;
  const cards = card ? [card] : [];

  return [{ id, name: trimmed, cards }, ...collections];
}

export function renameCollection(
  collections: FlashcardCollection[],
  collectionId: string,
  name: string
): FlashcardCollection[] {
  const trimmed = name.trim().slice(0, MAX_NAME_LENGTH);

  if (!trimmed || isDefaultCollectionId(collectionId)) {
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

function sameCardSet(left: readonly FlashcardCard[], right: readonly FlashcardCard[]) {
  if (left.length !== right.length) {
    return false;
  }

  const ids = new Set(left.map((card) => card.id));

  return right.every((card) => ids.has(card.id));
}

function isBuiltinName(name: string, builtin: DefaultCollection) {
  return name === builtin.name.en || name === builtin.name.vi;
}

/** Built-in collections, with the user's card edits and deletions applied. */
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
        return { id: collection.id, name: collection.name[locale], cards: collection.cards };
      }

      return {
        id: collection.id,
        name: collection.name[locale],
        cards: override.cards
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

    if (isBuiltinName(collection.name, builtin) && sameCardSet(collection.cards, builtin.cards)) {
      continue;
    }

    overrides.push({
      id: collection.id,
      name: isBuiltinName(collection.name, builtin) ? '' : collection.name,
      cards: collection.cards
    });
  }

  return { overrides, hidden: [...hidden] };
}
