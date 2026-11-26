import { storageKey } from '@/constants/site.ts';

/**
 * Spaced repetition (SRS) for flashcards: a small SM-2 variant with three
 * grades. "again" (not remembered) brings the card back tomorrow; "good"
 * (remembered) multiplies the gap by the card's ease: 3, 8, 20, 50... days;
 * "known" (remembered well) waits at least 6 months, then grows the same way.
 *
 * Dates are whole local days (`dayNumber`), not timestamps, so a card due
 * "tomorrow" turns due at local midnight whatever time it was reviewed.
 */

export const FLASHCARD_REVIEWS_KEY = storageKey('FLASHCARD_REVIEWS');

/** Day the "cards due today" prompt was last dismissed. */
export const REVIEW_PROMPT_DAY_KEY = storageKey('REVIEW_PROMPT_DAY');

/** New cards a learner may start per day, across every collection. */
export const NEW_CARDS_PER_DAY = 10;

export const REVIEW_GRADES = ['again', 'good', 'known'] as const;

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
/** Shortest gap after "known": about 6 months. */
export const KNOWN_INTERVAL = 180;
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

  const good =
    !card || card.interval === 0
      ? FIRST_INTERVAL
      : clampInterval(Math.max(card.interval + 1, card.interval * card.ease));

  return grade === 'known' ? Math.max(KNOWN_INTERVAL, good) : good;
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

/** New cards still allowed today. */
export function newCardsLeft(store: ReviewStore, today: number, limit = NEW_CARDS_PER_DAY) {
  const used = store.newDay === today ? store.newCount : 0;

  return Math.max(0, limit - used);
}

/**
 * Save a grade. A card graded for the first time counts toward today's new
 * cards, unless it was already known: that frees the slot for another card.
 */
export function applyGrade(
  store: ReviewStore,
  cardId: string,
  grade: ReviewGrade,
  today: number
): ReviewStore {
  const previous = store.cards[cardId];
  const isNew = previous === undefined && grade !== 'known';
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

export function isDue(card: ReviewCard | undefined, today: number) {
  return card !== undefined && card.due <= today;
}

export type ReviewQueue = {
  /** Cards already learned and due today, most overdue first. */
  due: string[];
  /** Cards never reviewed, in the given order, capped by today's new-card limit. */
  fresh: string[];
  /** The other never-reviewed cards, in order. They refill `fresh` when a new card is known. */
  spare: string[];
};

export function buildReviewQueue(
  cardIds: readonly string[],
  store: ReviewStore,
  today: number,
  limit = NEW_CARDS_PER_DAY
): ReviewQueue {
  const seen = new Set<string>();
  const due: string[] = [];
  const fresh: string[] = [];
  const spare: string[] = [];
  const freshLimit = newCardsLeft(store, today, limit);

  for (const id of cardIds) {
    if (seen.has(id)) {
      continue;
    }

    seen.add(id);
    const card = store.cards[id];

    if (card === undefined) {
      if (fresh.length < freshLimit) {
        fresh.push(id);
      } else {
        spare.push(id);
      }
    } else if (isDue(card, today)) {
      due.push(id);
    }
  }

  due.sort((left, right) => store.cards[left].due - store.cards[right].due);

  return { due, fresh, spare };
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

  // A short-lived build marked cards "no need to review" (`suspended`): they
  // read as known, back in at least `KNOWN_INTERVAL` days.
  const known = card.suspended === true;
  const interval = Math.min(
    known ? Math.max(card.interval, KNOWN_INTERVAL) : card.interval,
    MAX_INTERVAL
  );

  return {
    due: known ? Math.max(card.due, card.last + KNOWN_INTERVAL) : card.due,
    interval,
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
