import { storageKey } from '@/constants/site.ts';

/**
 * Spaced repetition (SRS) for flashcards: a small SM-2 variant with two
 * grades. "again" (not remembered) brings the card back tomorrow; "good"
 * (remembered) multiplies the gap by the card's ease: 3, 8, 20, 50... days.
 * A card can also be taken out of the schedule (`removeCard`).
 *
 * Dates are whole local days (`dayNumber`), not timestamps, so a card due
 * "tomorrow" turns due at local midnight whatever time it was reviewed.
 */

export const FLASHCARD_REVIEWS_KEY = storageKey('FLASHCARD_REVIEWS');

/** Day the "cards due today" prompt was last dismissed. */
export const REVIEW_PROMPT_DAY_KEY = storageKey('REVIEW_PROMPT_DAY');

export const REVIEW_GRADES = ['again', 'good'] as const;

export type ReviewGrade = (typeof REVIEW_GRADES)[number];

export type ReviewCard = {
  /** Day the card is next due. */
  due: number;
  /** Days between the last review and `due`. 0 after "again", until the card is remembered. */
  interval: number;
  /** SM-2 ease factor. */
  ease: number;
  /** Successful reviews in a row. */
  reps: number;
  /** Times the card was forgotten after it was learned. */
  lapses: number;
  /** Day of the last review. Merging keeps the copy reviewed most recently. */
  last: number;
};

export type ReviewStore = {
  cards: Record<string, ReviewCard>;
  /** Day `newCount` counts for. */
  newDay: number;
  /** New cards started on `newDay`. */
  newCount: number;
};

export const EMPTY_REVIEW_STORE: ReviewStore = { cards: {}, newDay: 0, newCount: 0 };

const START_EASE = 2.5;
/** Days before a card comes back the first time it is remembered: when new, or after "again". */
const FIRST_INTERVAL = 3;
/** Days before a card not remembered comes back. */
const AGAIN_INTERVAL = 1;
const MIN_EASE = 1.3;
const MAX_EASE = 3.5;
const MAX_INTERVAL = 3650;
const DAY_MS = 86_400_000;

/** Whole local days since 1970-01-01. */
export function dayNumber(date: Date = new Date()): number {
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / DAY_MS);
}

function clampEase(ease: number) {
  return Math.min(MAX_EASE, Math.max(MIN_EASE, Math.round(ease * 100) / 100));
}

function clampInterval(interval: number) {
  return Math.min(MAX_INTERVAL, Math.max(0, Math.round(interval)));
}

/** Days until the next review for each grade, before the card is graded. */
export function nextInterval(card: ReviewCard | undefined, grade: ReviewGrade): number {
  if (grade === 'again') {
    return AGAIN_INTERVAL;
  }

  if (!card || card.interval === 0) {
    return FIRST_INTERVAL;
  }

  return clampInterval(Math.max(card.interval + 1, card.interval * card.ease));
}

export function gradeCard(
  card: ReviewCard | undefined,
  grade: ReviewGrade,
  today: number
): ReviewCard {
  const ease = card?.ease ?? START_EASE;

  if (grade === 'again') {
    const learned = card !== undefined && card.reps > 0;

    return {
      due: today + AGAIN_INTERVAL,
      interval: 0,
      ease: clampEase(learned ? ease - 0.2 : ease),
      reps: 0,
      lapses: (card?.lapses ?? 0) + (learned ? 1 : 0),
      last: today
    };
  }

  const interval = nextInterval(card, grade);

  return {
    due: today + interval,
    interval,
    ease,
    reps: (card?.reps ?? 0) + 1,
    lapses: card?.lapses ?? 0,
    last: today
  };
}

/** Save a grade. A card graded for the first time counts toward today's new cards. */
export function applyGrade(
  store: ReviewStore,
  cardId: string,
  grade: ReviewGrade,
  today: number
): ReviewStore {
  const previous = store.cards[cardId];
  const isNew = previous === undefined;
  const newCount = isNew ? (store.newDay === today ? store.newCount : 0) + 1 : store.newCount;

  return {
    cards: { ...store.cards, [cardId]: gradeCard(previous, grade, today) },
    newDay: isNew ? today : store.newDay,
    newCount
  };
}

/**
 * A quiz answer was wrong: treat it like "again", so the card comes back
 * tomorrow. Unlike a review grade it does not use up one of today's new cards.
 */
export function recordMiss(store: ReviewStore, cardId: string, today: number): ReviewStore {
  const previous = store.cards[cardId];

  // Already waiting to come back by tomorrow after a miss: nothing to change.
  if (previous && previous.interval === 0 && previous.due <= today + 1) {
    return store;
  }

  return { ...store, cards: { ...store.cards, [cardId]: gradeCard(previous, 'again', today) } };
}

/**
 * Take a card out of the review schedule ("no need to review"): it is no longer
 * due, and it counts as never reviewed again. Its collection keeps it.
 */
export function removeCard(store: ReviewStore, cardId: string): ReviewStore {
  if (!(cardId in store.cards)) {
    return store;
  }

  const cards = { ...store.cards };
  delete cards[cardId];

  return { ...store, cards };
}

/**
 * Put a card on the review list, due today. A card already on the list keeps
 * its schedule.
 */
export function addToReview(store: ReviewStore, cardId: string, today: number): ReviewStore {
  if (cardId in store.cards) {
    return store;
  }

  return {
    ...store,
    cards: {
      ...store.cards,
      [cardId]: { due: today, interval: 0, ease: START_EASE, reps: 0, lapses: 0, last: today }
    }
  };
}

/** Put every card of a list on the review list. Cards already there keep their schedule. */
export function addAllToReview(
  store: ReviewStore,
  cardIds: readonly string[],
  today: number
): ReviewStore {
  return cardIds.reduce((next, cardId) => addToReview(next, cardId, today), store);
}

/** Take every card of a list off the review list. */
export function removeAllFromReview(store: ReviewStore, cardIds: readonly string[]): ReviewStore {
  return cardIds.reduce((next, cardId) => removeCard(next, cardId), store);
}

/** Put a card back the way it was before a grade, to undo it. `undefined` takes it off the list. */
export function restoreCard(
  store: ReviewStore,
  cardId: string,
  card: ReviewCard | undefined
): ReviewStore {
  if (card === undefined) {
    return removeCard(store, cardId);
  }

  return { ...store, cards: { ...store.cards, [cardId]: card } };
}

/** The next day after today with cards due, and how many fall due that day. */
export function nextReview(
  store: ReviewStore,
  today: number
): { day: number; count: number } | null {
  let day = Infinity;
  let count = 0;

  for (const card of Object.values(store.cards)) {
    if (card.due <= today || card.due > day) {
      continue;
    }

    if (card.due < day) {
      day = card.due;
      count = 0;
    }

    count += 1;
  }

  return count > 0 ? { day, count } : null;
}

export function isDue(card: ReviewCard | undefined, today: number) {
  return card !== undefined && card.due <= today;
}

/** Ids of every reviewed card that is due today. */
export function dueCardIds(store: ReviewStore, today: number): string[] {
  return Object.entries(store.cards)
    .filter(([, card]) => isDue(card, today))
    .sort(([, left], [, right]) => left.due - right.due)
    .map(([id]) => id);
}

const MAX_CARD_ID_LENGTH = 48;

function isWholeNumber(value: unknown, min: number): value is number {
  return typeof value === 'number' && Number.isInteger(value) && value >= min;
}

function sanitizeReviewCard(value: unknown): ReviewCard | null {
  if (!value || typeof value !== 'object') {
    return null;
  }

  const card = value as Record<string, unknown>;

  if (
    !isWholeNumber(card.due, 0) ||
    !isWholeNumber(card.interval, 0) ||
    typeof card.ease !== 'number' ||
    !Number.isFinite(card.ease) ||
    !isWholeNumber(card.reps, 0) ||
    !isWholeNumber(card.lapses, 0) ||
    !isWholeNumber(card.last, 0)
  ) {
    return null;
  }

  // An early build marked "no need to review" cards as `suspended`: they are
  // out of the schedule now, as removeCard would leave them.
  if (card.suspended === true) {
    return null;
  }

  return {
    due: card.due,
    interval: Math.min(card.interval, MAX_INTERVAL),
    ease: clampEase(card.ease),
    reps: card.reps,
    lapses: card.lapses,
    last: card.last
  };
}

export function sanitizeReviewStore(value: unknown): ReviewStore {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return EMPTY_REVIEW_STORE;
  }

  const record = value as Record<string, unknown>;
  const cards: Record<string, ReviewCard> = {};

  if (record.cards && typeof record.cards === 'object' && !Array.isArray(record.cards)) {
    for (const [id, raw] of Object.entries(record.cards)) {
      const card = sanitizeReviewCard(raw);

      if (card && id.length > 0 && id.length <= MAX_CARD_ID_LENGTH) {
        cards[id] = card;
      }
    }
  }

  return {
    cards,
    newDay: isWholeNumber(record.newDay, 0) ? record.newDay : 0,
    newCount: isWholeNumber(record.newCount, 0) ? record.newCount : 0
  };
}

function newerCard(left: ReviewCard, right: ReviewCard) {
  if (left.last !== right.last) {
    return left.last > right.last ? left : right;
  }

  return left.reps + left.lapses >= right.reps + right.lapses ? left : right;
}

/** Merge two devices: per card, keep the copy reviewed most recently. */
export function mergeReviewStores(local: ReviewStore, remote: ReviewStore): ReviewStore {
  const cards: Record<string, ReviewCard> = { ...remote.cards };

  for (const [id, card] of Object.entries(local.cards)) {
    const other = cards[id];
    cards[id] = other ? newerCard(card, other) : card;
  }

  const newDay = Math.max(local.newDay, remote.newDay);
  const newCount = Math.max(
    local.newDay === newDay ? local.newCount : 0,
    remote.newDay === newDay ? remote.newCount : 0
  );

  return { cards, newDay, newCount };
}
