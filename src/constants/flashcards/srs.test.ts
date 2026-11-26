import { describe, expect, it } from 'vitest';
import {
  applyGrade,
  buildReviewQueue,
  dayNumber,
  dueCardIds,
  EMPTY_REVIEW_STORE,
  gradeCard,
  mergeReviewStores,
  suspendCard,
  newCardsLeft,
  nextInterval,
  sanitizeReviewStore,
  type ReviewCard,
  type ReviewStore
} from '@/constants/flashcards/srs.ts';

const TODAY = 20_000;

function card(overrides: Partial<ReviewCard> = {}): ReviewCard {
  return {
    due: TODAY,
    interval: 10,
    ease: 2.5,
    reps: 3,
    lapses: 0,
    last: TODAY - 10,
    ...overrides
  };
}

describe('dayNumber', () => {
  it('counts local calendar days, ignoring the time of day', () => {
    const morning = new Date(2026, 10, 27, 0, 5);
    const night = new Date(2026, 10, 27, 23, 55);
    const next = new Date(2026, 10, 28, 0, 1);

    expect(dayNumber(morning)).toBe(dayNumber(night));
    expect(dayNumber(next)).toBe(dayNumber(night) + 1);
  });
});

describe('gradeCard', () => {
  it('schedules a new card', () => {
    expect(gradeCard(undefined, 'again', TODAY)).toMatchObject({
      due: TODAY + 1,
      interval: 0,
      reps: 0
    });
    expect(gradeCard(undefined, 'good', TODAY)).toMatchObject({ due: TODAY + 3, reps: 1 });
  });

  it('spaces a remembered card out: 3, 8, 20, 50 days', () => {
    let current: ReviewCard | undefined;
    const intervals: number[] = [];

    for (let index = 0; index < 4; index += 1) {
      current = gradeCard(current, 'good', TODAY);
      intervals.push(current.interval);
    }

    expect(intervals).toEqual([3, 8, 20, 50]);
  });

  it('brings a forgotten card back tomorrow and lowers its ease', () => {
    const forgotten = gradeCard(card(), 'again', TODAY);

    expect(forgotten).toMatchObject({ due: TODAY + 1, interval: 0, ease: 2.3, reps: 0, lapses: 1 });
    expect(gradeCard(forgotten, 'good', TODAY)).toMatchObject({ due: TODAY + 3, interval: 3 });
  });

  it('never lets the ease drop below 1.3', () => {
    let current = card({ ease: 1.35 });

    for (let index = 0; index < 5; index += 1) {
      current = gradeCard(gradeCard(current, 'good', TODAY), 'again', TODAY);
    }

    expect(current.ease).toBe(1.3);
  });

  it('waits 3 days whether a card is remembered on first sight or after Not yet', () => {
    const missed = gradeCard(undefined, 'again', TODAY);

    expect(gradeCard(missed, 'good', TODAY)).toMatchObject({ due: TODAY + 3, interval: 3 });
  });

  it('always moves a remembered card at least one day further out', () => {
    expect(nextInterval(card({ interval: 2, ease: 1.3 }), 'good')).toBe(3);
  });
});

describe('applyGrade', () => {
  it('counts only first-time grades toward today’s new cards', () => {
    let store = applyGrade(EMPTY_REVIEW_STORE, 'a', 'good', TODAY);
    store = applyGrade(store, 'b', 'again', TODAY);
    store = applyGrade(store, 'b', 'good', TODAY);

    expect(store.newCount).toBe(2);
    expect(newCardsLeft(store, TODAY, 10)).toBe(8);
    expect(newCardsLeft(store, TODAY + 1, 10)).toBe(10);
  });

  it('restarts the new-card count on a new day', () => {
    const yesterday: ReviewStore = { cards: {}, newDay: TODAY - 1, newCount: 7 };

    expect(applyGrade(yesterday, 'a', 'good', TODAY)).toMatchObject({ newDay: TODAY, newCount: 1 });
  });
});

describe('buildReviewQueue', () => {
  const store: ReviewStore = {
    cards: {
      later: card({ due: TODAY + 3 }),
      due: card({ due: TODAY }),
      overdue: card({ due: TODAY - 5 })
    },
    newDay: TODAY,
    newCount: 8
  };

  it('returns due cards most overdue first, and caps new cards', () => {
    expect(
      buildReviewQueue(['n1', 'later', 'due', 'n2', 'n3', 'overdue', 'n1'], store, TODAY, 10)
    ).toEqual({
      due: ['overdue', 'due'],
      fresh: ['n1', 'n2'],
      spare: ['n3']
    });
  });

  it('lists every due card across collections', () => {
    expect(dueCardIds(store, TODAY)).toEqual(['overdue', 'due']);
  });
});

describe('sanitizeReviewStore', () => {
  it('drops malformed cards and fields', () => {
    expect(
      sanitizeReviewStore({
        cards: { ok: card(), bad: { due: 'x' }, '': card() },
        newDay: -1,
        newCount: 2.5
      })
    ).toEqual({ cards: { ok: card() }, newDay: 0, newCount: 0 });
    expect(sanitizeReviewStore(null)).toEqual(EMPTY_REVIEW_STORE);
    expect(sanitizeReviewStore([])).toEqual(EMPTY_REVIEW_STORE);
  });
});

describe('mergeReviewStores', () => {
  it('keeps the most recently reviewed copy of each card', () => {
    const local: ReviewStore = {
      cards: { a: card({ last: TODAY, due: TODAY + 20 }), b: card({ last: TODAY - 5 }) },
      newDay: TODAY,
      newCount: 3
    };
    const remote: ReviewStore = {
      cards: {
        a: card({ last: TODAY - 2 }),
        b: card({ last: TODAY - 1, due: TODAY + 9 }),
        c: card()
      },
      newDay: TODAY,
      newCount: 5
    };
    const merged = mergeReviewStores(local, remote);

    expect(merged.cards.a.due).toBe(TODAY + 20);
    expect(merged.cards.b.due).toBe(TODAY + 9);
    expect(merged.cards.c).toEqual(card());
    expect(merged).toMatchObject({ newDay: TODAY, newCount: 5 });
  });

  it('ignores a new-card count from an older day', () => {
    const merged = mergeReviewStores(
      { cards: {}, newDay: TODAY - 1, newCount: 9 },
      { cards: {}, newDay: TODAY, newCount: 2 }
    );

    expect(merged).toMatchObject({ newDay: TODAY, newCount: 2 });
  });
});

describe('suspendCard', () => {
  it('never brings a stopped card back, and keeps today’s new cards free', () => {
    const store: ReviewStore = {
      cards: { due: card({ due: TODAY - 1 }) },
      newDay: TODAY,
      newCount: 2
    };
    const stopped = suspendCard(suspendCard(store, 'due', TODAY), 'new', TODAY);

    expect(stopped).toMatchObject({ newDay: TODAY, newCount: 2 });
    expect(dueCardIds(stopped, TODAY + 1000)).toEqual([]);
    expect(buildReviewQueue(['due', 'new', 'other'], stopped, TODAY + 1000)).toEqual({
      due: [],
      fresh: ['other'],
      spare: []
    });
  });

  it('survives storage and keeps the most recent choice when merging', () => {
    const stopped = suspendCard(EMPTY_REVIEW_STORE, 'a', TODAY);
    const reviewedLater: ReviewStore = {
      cards: { a: card({ last: TODAY + 1 }) },
      newDay: 0,
      newCount: 0
    };

    expect(sanitizeReviewStore(JSON.parse(JSON.stringify(stopped)))).toEqual(stopped);
    expect(mergeReviewStores(stopped, reviewedLater).cards.a.suspended).toBeUndefined();
    expect(mergeReviewStores(stopped, EMPTY_REVIEW_STORE).cards.a.suspended).toBe(true);
  });
});
