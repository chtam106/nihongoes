import { storageKey } from '@/constants/site.ts';
import type { Bilingual } from '@/types/course.ts';
import type { Locale } from '@/types/i18n.ts';

export const FLASHCARD_COLLECTIONS_KEY = storageKey('FLASHCARD_COLLECTIONS');

export const FLASHCARD_COLLECTIONS_FRONT_KEY = storageKey('FLASHCARD_COLLECTIONS_FRONT');

export type CollectionFront = 'ja' | 'meaning';

/**
 * One Word first / Meaning first choice for every collection.
 * Older builds stored a map of collection id to front; the last saved choice wins.
 */
export function sanitizeCollectionFront(value: unknown): CollectionFront {
  if (value === 'ja' || value === 'meaning') {
    return value;
  }

  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return 'ja';
  }

  let front: CollectionFront = 'ja';

  for (const entry of Object.values(value)) {
    if (entry === 'ja' || entry === 'meaning') {
      front = entry;
    }
  }

  return front;
}

const MAX_NAME_LENGTH = 80;

const VOCAB_CARD_ID = /^\d+:\d+$/;
const KANA_CARD_ID = /^kana:[hk]:.+$/u;
const RADICAL_CARD_ID = /^radical:\d+$/;
const KANJI_CARD_ID = /^kanji:(?:grade-[1-6]|kanken-(?:4|3|pre-2|2)):.+$/u;
const CLIP_CARD_ID = /^clip:[0-9a-f]{16}$/;
const MAX_CLIP_LENGTH = 300;

export type FlashcardCardType = 'vocab' | 'phrase' | 'kana' | 'radical' | 'kanji';

export type FlashcardCard = {
  id: string;
  type: FlashcardCardType;
  /** Selected phrase for a card saved from highlighted text. */
  text?: string;
  /** Meaning typed for a highlighted phrase. Defaults to the phrase itself. */
  meaning?: string;
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

/** Stable id for the initial empty custom collection on `/flashcards?tab=mine`. */
export const UNTITLED_FLASHCARD_COLLECTION_ID = 'untitled';

export const UNTITLED_FLASHCARD_COLLECTION_NAME: Bilingual = {
  en: 'Untitled collection',
  vi: 'Untitled collection'
};

export function untitledFlashcardCollection(locale: Locale): FlashcardCollection {
  return {
    id: UNTITLED_FLASHCARD_COLLECTION_ID,
    name: UNTITLED_FLASHCARD_COLLECTION_NAME[locale],
    cards: []
  };
}

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

function clipHash(text: string, seed: number) {
  let hash = seed;

  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return (hash >>> 0).toString(16).padStart(8, '0');
}

export function clipPhrase(text: string) {
  return text.replace(/\s+/g, ' ').trim().slice(0, MAX_CLIP_LENGTH);
}

/** Stable id for a highlighted phrase. The same phrase is the same card. */
export function clipCardId(text: string) {
  const phrase = clipPhrase(text);

  return `clip:${clipHash(phrase, 2166136261)}${clipHash(phrase, 2166136261 ^ phrase.length)}`;
}

export function isClipCard(card: FlashcardCard) {
  return CLIP_CARD_ID.test(card.id) && typeof card.text === 'string' && card.text.length > 0;
}

/** A phrase saved from a text selection. An empty meaning falls back to the phrase. */
export function clipCard(text: string, meaning: string): FlashcardCard | null {
  const phrase = clipPhrase(text);

  if (!phrase) {
    return null;
  }

  const gloss = clipPhrase(meaning) || phrase;

  return { id: clipCardId(phrase), type: 'phrase', text: phrase, meaning: gloss };
}

function clipCardFromEntry(entry: unknown): FlashcardCard | null {
  if (!entry || typeof entry !== 'object') {
    return null;
  }

  const record = entry as { id?: unknown; text?: unknown; meaning?: unknown };
  const id = typeof record.id === 'string' ? record.id : '';

  if (!CLIP_CARD_ID.test(id) || typeof record.text !== 'string') {
    return null;
  }

  const phrase = clipPhrase(record.text);

  if (!phrase || clipCardId(phrase) !== id) {
    return null;
  }

  const gloss = typeof record.meaning === 'string' ? clipPhrase(record.meaning) || phrase : phrase;

  return { id, type: 'phrase', text: phrase, meaning: gloss };
}

function resolvedCards(cards: readonly FlashcardCard[]): FlashcardCard[] {
  const seen = new Set<string>();
  const next: FlashcardCard[] = [];

  for (const card of cards) {
    const resolved = isClipCard(card)
      ? clipCard(card.text ?? '', card.meaning ?? '')
      : flashcardCard(card.id, card.type);

    if (!resolved || seen.has(resolved.id)) {
      continue;
    }

    seen.add(resolved.id);
    next.push(resolved);
  }

  return next;
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
    const clip = clipCardFromEntry(entry);

    if (clip) {
      if (seen.has(clip.id)) {
        continue;
      }

      seen.add(clip.id);
      cards.push(clip);
      continue;
    }

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

/** Add every card, or remove every card, in one collection. Unknown ids are skipped. */
export function setCardsInCollection(
  collections: FlashcardCollection[],
  collectionId: string,
  cards: readonly FlashcardCard[],
  included: boolean
): FlashcardCollection[] {
  const nextCards = resolvedCards(cards);

  if (nextCards.length === 0) {
    return collections;
  }

  const ids = new Set(nextCards.map((card) => card.id));
  let changed = false;
  const next = collections.map((collection) => {
    if (collection.id !== collectionId) {
      return collection;
    }

    if (!included) {
      const remaining = collection.cards.filter((item) => !ids.has(item.id));

      if (remaining.length === collection.cards.length) {
        return collection;
      }

      changed = true;

      return { ...collection, cards: remaining };
    }

    const present = new Set(collection.cards.map((item) => item.id));
    const incoming = new Map(nextCards.map((card) => [card.id, card]));
    let cardsChanged = false;
    const merged = collection.cards.map((item) => {
      const nextCard = incoming.get(item.id);

      if (!nextCard || (nextCard.text === item.text && nextCard.meaning === item.meaning)) {
        return item;
      }

      cardsChanged = true;

      return nextCard;
    });
    const missing = nextCards.filter((card) => !present.has(card.id));

    if (!cardsChanged && missing.length === 0) {
      return collection;
    }

    changed = true;

    return { ...collection, cards: [...merged, ...missing] };
  });

  return changed ? next : collections;
}

export function createCollection(
  collections: FlashcardCollection[],
  name: string,
  options: {
    id: string;
    cardId?: string;
    cardType?: FlashcardCardType;
    cards?: readonly FlashcardCard[];
  }
): FlashcardCollection[] {
  const trimmed = name.trim().slice(0, MAX_NAME_LENGTH);
  const id = options.id.trim();

  if (!trimmed || !id || collections.some((collection) => collection.id === id)) {
    return collections;
  }

  const single = options.cardId ? flashcardCard(options.cardId, options.cardType) : null;
  const cards = resolvedCards([...(single ? [single] : []), ...(options.cards ?? [])]);

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
  if (isDefaultCollectionId(collectionId)) {
    return collections;
  }

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

function isEphemeralUntitled(collection: FlashcardCollection) {
  return (
    collection.id === UNTITLED_FLASHCARD_COLLECTION_ID &&
    collection.cards.length === 0 &&
    (collection.name === UNTITLED_FLASHCARD_COLLECTION_NAME.en ||
      collection.name === UNTITLED_FLASHCARD_COLLECTION_NAME.vi)
  );
}

/** Custom collections for the save dialog, including the unsaved untitled one. */
export function customCollectionsForSave(
  store: FlashcardStore,
  locale: Locale
): FlashcardCollection[] {
  const custom = store.overrides.filter((collection) => !isDefaultCollectionId(collection.id));

  return custom.length > 0 ? custom : [untitledFlashcardCollection(locale)];
}

/** Write custom collections back without touching built-in overrides. */
export function replaceCustomCollections(
  store: FlashcardStore,
  custom: readonly FlashcardCollection[]
): FlashcardStore {
  const builtins = store.overrides.filter((collection) => isDefaultCollectionId(collection.id));
  const persisted = custom.filter((collection) => !isEphemeralUntitled(collection));

  return { overrides: [...persisted, ...builtins], hidden: store.hidden };
}

/** Built-in collections, with the user's card edits and deletions applied. */
export function resolveCollections(
  store: FlashcardStore,
  defaults: readonly DefaultCollection[],
  locale: Locale
): FlashcardCollection[] {
  const overrides = new Map(store.overrides.map((collection) => [collection.id, collection]));
  const defaultIds = new Set(defaults.map((collection) => collection.id));
  const customOnly = store.overrides.filter((collection) => !defaultIds.has(collection.id));
  const custom = customOnly.length > 0 ? customOnly : [untitledFlashcardCollection(locale)];
  const builtin = defaults.map((collection) => {
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
  _previous: FlashcardStore,
  resolved: readonly FlashcardCollection[],
  defaults: readonly DefaultCollection[]
): FlashcardStore {
  const defaultsById = new Map(defaults.map((collection) => [collection.id, collection]));

  const overrides: FlashcardCollection[] = [];

  for (const collection of resolved) {
    const builtin = defaultsById.get(collection.id);

    if (!builtin) {
      if (!isEphemeralUntitled(collection)) {
        overrides.push(collection);
      }

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

  return { overrides, hidden: [] };
}

function unionCards(primary: readonly FlashcardCard[], extra: readonly FlashcardCard[]) {
  const byId = new Map<string, FlashcardCard>();

  for (const card of extra) {
    byId.set(card.id, card);
  }

  for (const card of primary) {
    byId.set(card.id, card);
  }

  return [...byId.values()];
}

/** Combine a device store with a Drive store. The device copy wins on name and card type. */
export function mergeFlashcardStores(local: FlashcardStore, drive: FlashcardStore): FlashcardStore {
  const driveById = new Map(drive.overrides.map((collection) => [collection.id, collection]));
  const seen = new Set<string>();
  const overrides: FlashcardCollection[] = [];

  for (const collection of local.overrides) {
    seen.add(collection.id);
    const remote = driveById.get(collection.id);

    if (!remote) {
      overrides.push(collection);
      continue;
    }

    overrides.push({
      id: collection.id,
      name: collection.name.trim() ? collection.name : remote.name,
      cards: unionCards(collection.cards, remote.cards)
    });
  }

  for (const collection of drive.overrides) {
    if (seen.has(collection.id)) {
      continue;
    }

    overrides.push(collection);
  }

  return sanitizeFlashcardStore({
    overrides,
    hidden: [...local.hidden, ...drive.hidden]
  });
}
