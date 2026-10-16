import { describe, expect, it } from 'vitest';
import { allFlashcards, flashcardsByIds } from '@/constants/flashcards/catalog.ts';
import {
  createCollection,
  deleteCollection,
  EMPTY_FLASHCARD_STORE,
  renameCollection,
  resolveCollections,
  sanitizeCollectionFronts,
  sanitizeFlashcardCollections,
  sanitizeFlashcardStore,
  storeFromResolved,
  toggleCardInCollection,
  type DefaultCollection
} from '@/constants/flashcards/collections.ts';
import { getKanjiGradeFlashcards } from '@/constants/flashcards/kanji-defaults.ts';
import { getLightFlashcardDefaults } from '@/constants/flashcards/light-defaults.ts';

describe('sanitizeFlashcardCollections', () => {
  it('drops malformed entries and duplicate ids', () => {
    expect(
      sanitizeFlashcardCollections([
        { id: 'a', name: '  Verbs  ', cardIds: ['1:0', '1:0', 'nope', 3, '2:1'] },
        { id: 'a', name: 'Again', cardIds: ['3:0'] },
        { id: '', name: 'Blank', cardIds: [] },
        { name: 'Missing id' },
        null
      ])
    ).toEqual([
      {
        id: 'a',
        name: 'Verbs',
        cards: [
          { id: '1:0', type: 'vocab' },
          { id: '2:1', type: 'vocab' }
        ]
      }
    ]);
  });

  it('keeps a typed card and derives type from an older id list', () => {
    expect(
      sanitizeFlashcardCollections([
        {
          id: 'mix',
          name: 'Mix',
          cards: [
            { id: 'kanji:grade-1:一', type: 'vocab' },
            { id: 'radical:1', type: 'radical' },
            { id: '1:8', type: 'phrase' }
          ]
        },
        { id: 'old', name: 'Old', cardIds: ['kana:h:あ', '1:2'] }
      ])
    ).toEqual([
      {
        id: 'mix',
        name: 'Mix',
        cards: [
          { id: 'kanji:grade-1:一', type: 'kanji' },
          { id: 'radical:1', type: 'radical' },
          { id: '1:8', type: 'phrase' }
        ]
      },
      {
        id: 'old',
        name: 'Old',
        cards: [
          { id: 'kana:h:あ', type: 'kana' },
          { id: '1:2', type: 'vocab' }
        ]
      }
    ]);
  });

  it('returns an empty list for non-arrays', () => {
    expect(sanitizeFlashcardCollections({ id: 'a' })).toEqual([]);
  });
});

describe('collection edits', () => {
  const start = [{ id: 'a', name: 'Verbs', cards: [{ id: '1:0', type: 'vocab' as const }] }];

  it('toggles a card in and out', () => {
    const added = toggleCardInCollection(start, 'a', '1:1');

    expect(added[0]?.cards).toEqual([
      { id: '1:0', type: 'vocab' },
      { id: '1:1', type: 'vocab' }
    ]);
    expect(toggleCardInCollection(added, 'a', '1:0')[0]?.cards).toEqual([
      { id: '1:1', type: 'vocab' }
    ]);
  });

  it('ignores a card id that is not lesson:index', () => {
    expect(toggleCardInCollection(start, 'a', 'watashi')).toBe(start);
  });

  it('creates a collection with the current card', () => {
    const next = createCollection(start, '  Food ', { id: 'b', cardId: '4:2' });

    expect(next[0]).toEqual({
      id: 'b',
      name: 'Food',
      cards: [{ id: '4:2', type: 'vocab' }]
    });
  });

  it('does not create a blank name', () => {
    expect(createCollection(start, '   ', { id: 'b' })).toBe(start);
  });

  it('renames and deletes', () => {
    expect(renameCollection(start, 'a', '  Nouns ')[0]?.name).toBe('Nouns');
    expect(renameCollection(start, 'a', '  ')).toBe(start);
    expect(renameCollection(start, 'default-n5', 'Renamed')).toBe(start);
    expect(deleteCollection(start, 'a')).toEqual([]);
  });
});

const hiraganaDefault: DefaultCollection = {
  id: 'default-hiragana',
  name: { en: 'Hiragana alphabet', vi: 'Bảng chữ cái Hiragana' },
  cards: [
    { id: 'kana:h:あ', type: 'kana' },
    { id: 'kana:h:い', type: 'kana' }
  ]
};

describe('built-in collections', () => {
  it('shows defaults for the active locale and keeps a deletion hidden', () => {
    expect(resolveCollections(EMPTY_FLASHCARD_STORE, [hiraganaDefault], 'vi')[0]?.name).toBe(
      'Bảng chữ cái Hiragana'
    );

    const removed = deleteCollection(
      resolveCollections(EMPTY_FLASHCARD_STORE, [hiraganaDefault], 'en'),
      'default-hiragana'
    );
    const stored = storeFromResolved(EMPTY_FLASHCARD_STORE, removed, [hiraganaDefault]);

    expect(stored.hidden).toEqual(['default-hiragana']);
    expect(resolveCollections(stored, [hiraganaDefault], 'en')).toEqual([]);
  });

  it('remembers a removed card and still translates an unedited name', () => {
    const current = resolveCollections(EMPTY_FLASHCARD_STORE, [hiraganaDefault], 'vi');
    const toggled = toggleCardInCollection(current, 'default-hiragana', 'kana:h:あ');
    const stored = storeFromResolved(EMPTY_FLASHCARD_STORE, toggled, [hiraganaDefault]);

    expect(stored.overrides[0]).toEqual({
      id: 'default-hiragana',
      name: '',
      cards: [{ id: 'kana:h:い', type: 'kana' }]
    });
    expect(resolveCollections(stored, [hiraganaDefault], 'en')[0]?.name).toBe('Hiragana alphabet');
  });

  it('reads an older collection list as custom collections', () => {
    expect(sanitizeFlashcardStore([{ id: 'a', name: 'Verbs', cardIds: ['1:0'] }])).toEqual({
      overrides: [{ id: 'a', name: 'Verbs', cards: [{ id: '1:0', type: 'vocab' }] }],
      hidden: []
    });
  });

  it('seeds kana, JLPT vocab, radicals, elementary grades, and Kanken levels', () => {
    const light = getLightFlashcardDefaults();
    const kanji = getKanjiGradeFlashcards();
    const ids = [...light.collections, ...kanji.collections].map((collection) => collection.id);

    expect(ids).toEqual([
      'default-hiragana',
      'default-katakana',
      'default-n5',
      'default-n4',
      'default-radicals',
      'default-grade-1',
      'default-grade-2',
      'default-grade-3',
      'default-grade-4',
      'default-grade-5',
      'default-grade-6',
      'default-kanken-4',
      'default-kanken-3',
      'default-kanken-pre-2',
      'default-kanken-2'
    ]);
    expect(light.collections[0]?.cards.map((card) => card.id)).toContain('kana:h:あ');
    expect(light.collections[0]?.cards.every((card) => card.type === 'kana')).toBe(true);
    expect(light.collections[1]?.cards.map((card) => card.id)).toContain('kana:k:ア');
    expect(light.collections[2]?.cards.some((card) => card.type === 'vocab')).toBe(true);
    expect(light.collections[2]?.cards.some((card) => card.type === 'phrase')).toBe(true);
    expect(light.collections[3]?.cards.some((card) => card.type === 'phrase')).toBe(true);
    expect(light.collections[4]?.cards).toHaveLength(214);
    expect(light.collections[4]?.cards.every((card) => card.type === 'radical')).toBe(true);
    expect(kanji.collections[0]?.cards).toHaveLength(80);
    expect(kanji.collections[0]?.cards.every((card) => card.type === 'kanji')).toBe(true);
    expect(kanji.collections[0]?.name).toEqual({ en: 'Grade 1 kanji', vi: 'Kanji lớp 1' });
    expect(kanji.cards[0]?.item.kanji).toBe('一');
    expect(
      kanji.collections.find((collection) => collection.id === 'default-kanken-4')?.cards
    ).toHaveLength(313);
    expect(
      kanji.collections.find((collection) => collection.id === 'default-kanken-3')?.cards
    ).toHaveLength(284);
    expect(
      kanji.collections.find((collection) => collection.id === 'default-kanken-pre-2')?.cards
    ).toHaveLength(328);
    expect(
      kanji.collections.find((collection) => collection.id === 'default-kanken-2')?.cards
    ).toHaveLength(185);
    expect(
      kanji.collections.find((collection) => collection.id === 'default-kanken-4')?.name
    ).toEqual({
      en: 'Kanken level 4 kanji',
      vi: 'Kanji Kanken 4級'
    });
  });
});

describe('sanitizeCollectionFronts', () => {
  it('keeps a per-collection choice and drops a legacy single value', () => {
    expect(
      sanitizeCollectionFronts({
        'default-n5': 'meaning',
        'default-hiragana': 'ja',
        nope: 'en'
      })
    ).toEqual({
      'default-n5': 'meaning',
      'default-hiragana': 'ja'
    });
    expect(sanitizeCollectionFronts('meaning')).toEqual({});
  });
});

describe('flashcard catalog', () => {
  it('assigns unique lessonNumber:index ids', () => {
    const cards = allFlashcards();
    const first = cards[0];

    expect(cards.length).toBeGreaterThan(0);
    expect(first).toBeDefined();
    expect(new Set(cards.map((card) => card.id)).size).toBe(cards.length);
    expect(first!.id).toBe(`${first!.lessonNumber}:0`);
    expect(first!.type).toBe('vocab');
    expect(cards.some((card) => card.type === 'phrase')).toBe(true);
    expect(flashcardsByIds([first!.id, first!.id, '999:0'])).toEqual([first]);
  });
});
