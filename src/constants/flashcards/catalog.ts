import { getAllCourseLessons } from '@/constants/courses/index.ts';
import {
  flashcardCardId,
  flashcardCardType,
  isClipCard,
  type FlashcardCard,
  type FlashcardCardType
} from '@/constants/flashcards/collections.ts';
import type { Bilingual, CourseLevel, Lesson, VocabItem } from '@/types/course.ts';
import type { Locale } from '@/types/i18n.ts';

export type FlashcardEntry = {
  id: string;
  type: FlashcardCardType;
  lessonNumber: number;
  item: VocabItem;
};

function lessonFlashcards(lesson: Lesson): FlashcardEntry[] {
  const items = [
    ...lesson.vocab.map((item) => ({ item, type: 'vocab' as const })),
    ...(lesson.phrases ?? []).map((item) => ({ item, type: 'phrase' as const }))
  ];

  return items.map(({ item, type }, index) => ({
    id: flashcardCardId(lesson.number, index),
    type,
    lessonNumber: lesson.number,
    item
  }));
}

let catalog: FlashcardEntry[] | null = null;

/** Every course vocab and phrase card. Id is `{lessonNumber}:{index}` in vocab-then-phrases order. */
export function allFlashcards(): FlashcardEntry[] {
  if (!catalog) {
    catalog = getAllCourseLessons().flatMap(({ lesson }) => lessonFlashcards(lesson));
  }

  return catalog;
}

const LOOKUP_EDGE =
  /^(?:[、。！？!?「」『』（）()〜~.．\s]+)|(?:[、。！？!?「」『』（）()〜~.．\s]+)$/g;

function compactLookupKey(text: string) {
  return text.replace(/\s+/g, '').replace(LOOKUP_EDGE, '');
}

/** Chrome puts each furigana reading right after its kanji in a selection. */
function rubySelection(kanji: string, ruby: VocabItem['ruby']) {
  if (!ruby?.length) {
    return '';
  }

  let result = '';
  let position = 0;
  let rubyIndex = 0;

  while (position < kanji.length) {
    const segment = ruby[rubyIndex];

    if (segment && kanji.startsWith(segment.base, position)) {
      result += segment.base + segment.reading;
      position += segment.base.length;
      rubyIndex += 1;
      continue;
    }

    result += kanji[position];
    position += 1;
  }

  return result;
}

let meaningByKey: Map<string, Bilingual> | null = null;

function rememberMeaning(map: Map<string, Bilingual>, key: string, meaning: Bilingual) {
  const compact = compactLookupKey(key);

  if (!compact || map.has(compact)) {
    return;
  }

  map.set(compact, meaning);
}

function meaningMap() {
  if (!meaningByKey) {
    const map = new Map<string, Bilingual>();

    for (const card of allFlashcards()) {
      const { item } = card;
      rememberMeaning(map, item.kana, item.meaning);

      if (item.kanji && item.kanji !== item.kana) {
        rememberMeaning(map, item.kanji, item.meaning);
        rememberMeaning(map, rubySelection(item.kanji, item.ruby), item.meaning);
      }
    }

    meaningByKey = map;
  }

  return meaningByKey;
}

/** Lesson meaning when the highlighted text is a vocab word or phrase. */
export function lookupFlashcardMeaning(text: string, locale: Locale): string | null {
  const meaning = meaningMap().get(compactLookupKey(text));
  const gloss = meaning?.[locale].trim();

  return gloss || null;
}

let cardsById: Map<string, FlashcardEntry> | null = null;

function cardMap() {
  if (!cardsById) {
    cardsById = new Map(allFlashcards().map((card) => [card.id, card]));
  }

  return cardsById;
}

export function flashcardIdsForLevel(level: CourseLevel): string[] {
  return flashcardRefsForLevel(level).map((card) => card.id);
}

export function flashcardRefsForLevel(level: CourseLevel): FlashcardCard[] {
  return getAllCourseLessons()
    .filter((entry) => entry.level === level)
    .flatMap(({ lesson }) => flashcardRefsForLesson(lesson));
}

export function flashcardRefsForLesson(lesson: Lesson): FlashcardCard[] {
  return lessonFlashcards(lesson).map((card) => ({ id: card.id, type: card.type }));
}

export type ResolvableFlashcard = {
  id: string;
  type: FlashcardCardType;
  item: VocabItem;
};

/**
 * Resolve stored ids to cards. `extra` covers kana, radicals, and kanji, which
 * are not part of the course-vocab catalog.
 */
export function createFlashcardResolver(extra: readonly ResolvableFlashcard[]) {
  const extras = new Map(extra.map((card) => [card.id, card]));
  const vocab = cardMap();

  return (ids: readonly string[]): ResolvableFlashcard[] => {
    const seen = new Set<string>();
    const resolved: ResolvableFlashcard[] = [];

    for (const id of ids) {
      if (seen.has(id)) {
        continue;
      }

      const card = vocab.get(id) ?? extras.get(id);

      if (!card || !flashcardCardType(id)) {
        continue;
      }

      seen.add(id);
      resolved.push({ id: card.id, type: card.type, item: card.item });
    }

    return resolved;
  };
}

/** Catalog cards plus phrases saved from a text selection, in stored order. */
export function studyFlashcards(
  stored: readonly FlashcardCard[],
  resolveIds: (ids: readonly string[]) => ResolvableFlashcard[]
): ResolvableFlashcard[] {
  const catalog = new Map(
    resolveIds(stored.filter((card) => !isClipCard(card)).map((card) => card.id)).map((card) => [
      card.id,
      card
    ])
  );
  const cards: ResolvableFlashcard[] = [];

  for (const card of stored) {
    if (isClipCard(card) && card.text) {
      const meaning = card.meaning?.trim() || card.text;

      cards.push({
        id: card.id,
        type: 'phrase',
        item: { kana: card.text, romaji: '', meaning: { en: meaning, vi: meaning } }
      });
      continue;
    }

    const found = catalog.get(card.id);

    if (found) {
      cards.push(found);
    }
  }

  return cards;
}

/** Resolve stored ids to course-vocab cards, dropping unknown or duplicate ids. */
export function flashcardsByIds(ids: readonly string[]): FlashcardEntry[] {
  return createFlashcardResolver([])(ids).flatMap((card) => {
    const entry = cardMap().get(card.id);

    return entry ? [entry] : [];
  });
}
