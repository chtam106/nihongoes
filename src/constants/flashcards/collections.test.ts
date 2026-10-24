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
import { getCourse } from '@/constants/courses/index.ts';
import { getKanjiGradeFlashcards } from '@/constants/flashcards/kanji-defaults.ts';
import {
  getLightFlashcardDefaults,
  RADICALS_PER_FLASHCARD_COLLECTION
} from '@/constants/flashcards/light-defaults.ts';

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
  it('seeds an empty untitled custom collection when the store has none', () => {
    expect(resolveCollections(EMPTY_FLASHCARD_STORE, [], 'en')).toEqual([
      { id: 'untitled', name: 'Untitled collection', cards: [] }
    ]);
    expect(resolveCollections(EMPTY_FLASHCARD_STORE, [], 'vi')[0]?.name).toBe(
      'Bộ sưu tập chưa đặt tên'
    );
    expect(
      storeFromResolved(
        EMPTY_FLASHCARD_STORE,
        resolveCollections(EMPTY_FLASHCARD_STORE, [], 'en'),
        []
      ).overrides
    ).toEqual([]);
  });

  it('shows defaults for the active locale and ignores legacy hidden ids', () => {
    const resolvedVi = resolveCollections(EMPTY_FLASHCARD_STORE, [hiraganaDefault], 'vi');

    expect(resolvedVi[0]?.id).toBe('untitled');
    expect(resolvedVi.find((collection) => collection.id === 'default-hiragana')?.name).toBe(
      'Bảng chữ cái Hiragana'
    );

    expect(
      resolveCollections({ overrides: [], hidden: ['default-hiragana'] }, [hiraganaDefault], 'en')
    ).toHaveLength(2);

    const resolved = resolveCollections(EMPTY_FLASHCARD_STORE, [hiraganaDefault], 'en');
    const afterDelete = deleteCollection(resolved, 'default-hiragana');

    expect(afterDelete).toEqual(resolved);
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
    expect(
      resolveCollections(stored, [hiraganaDefault], 'en').find(
        (collection) => collection.id === 'default-hiragana'
      )?.name
    ).toBe('Hiragana alphabet');
  });

  it('reads an older collection list as custom collections', () => {
    expect(sanitizeFlashcardStore([{ id: 'a', name: 'Verbs', cardIds: ['1:0'] }])).toEqual({
      overrides: [{ id: 'a', name: 'Verbs', cards: [{ id: '1:0', type: 'vocab' }] }],
      hidden: []
    });
  });

  it('seeds kana, per-lesson JLPT vocab, radicals, and per-lesson kanji tracks', () => {
    const light = getLightFlashcardDefaults();
    const kanji = getKanjiGradeFlashcards();
    const n5Lessons = getCourse('n5').lessons.length;
    const n4Lessons = getCourse('n4').lessons.length;

    const hiragana = light.collections.find((collection) => collection.id === 'default-hiragana');
    const katakana = light.collections.find((collection) => collection.id === 'default-katakana');
    const radicalCollections = light.collections.filter((collection) =>
      collection.id.startsWith('default-radicals-')
    );
    const n5Lesson1 = light.collections.find(
      (collection) => collection.id === 'default-n5-lesson-1'
    );

    expect(hiragana?.cards.map((card) => card.id)).toContain('kana:h:あ');
    expect(hiragana?.cards.every((card) => card.type === 'kana')).toBe(true);
    expect(katakana?.cards.map((card) => card.id)).toContain('kana:k:ア');
    expect(
      light.collections.filter((collection) => collection.id.startsWith('default-n5-'))
    ).toHaveLength(n5Lessons);
    expect(
      light.collections.filter((collection) => collection.id.startsWith('default-n4-'))
    ).toHaveLength(n4Lessons);
    expect(n5Lesson1?.cards.some((card) => card.type === 'vocab')).toBe(true);
    expect(radicalCollections[0]?.id).toBe('default-radicals-1-20');
    expect(radicalCollections.at(-1)?.id).toBe('default-radicals-201-214');
    expect(radicalCollections).toHaveLength(Math.ceil(214 / RADICALS_PER_FLASHCARD_COLLECTION));
    expect(radicalCollections.flatMap((collection) => collection.cards)).toHaveLength(214);
    expect(
      radicalCollections.every((collection) =>
        collection.cards.every((card) => card.type === 'radical')
      )
    ).toBe(true);

    const grade1Lesson1 = kanji.collections.find(
      (collection) => collection.id === 'default-grade-1-lesson-1'
    );

    expect(grade1Lesson1?.cards.every((card) => card.type === 'kanji')).toBe(true);
    expect(grade1Lesson1?.name.en).toContain('Grade 1 kanji');
    expect(grade1Lesson1?.name.en).toContain('Lesson 1');
    expect(kanji.cards[0]?.item.kanji).toBe('一');

    const kanken4Lessons = kanji.collections.filter((collection) =>
      collection.id.startsWith('default-kanken-4-')
    );
    const kanken4Cards = kanken4Lessons.flatMap((collection) => collection.cards);

    expect(kanken4Lessons.length).toBeGreaterThan(1);
    expect(kanken4Cards).toHaveLength(313);
    expect(kanken4Lessons[0]?.name.en).toContain('Kanken level 4 kanji');
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
