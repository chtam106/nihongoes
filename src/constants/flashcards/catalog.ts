import { getAllCourseLessons } from '@/constants/courses/index.ts';
import {
  flashcardCardId,
  flashcardCardType,
  type FlashcardCard,
  type FlashcardCardType
} from '@/constants/flashcards/collections.ts';
import type { CourseLevel, Lesson, VocabItem } from '@/types/course.ts';

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

/** Resolve stored ids to course-vocab cards, dropping unknown or duplicate ids. */
export function flashcardsByIds(ids: readonly string[]): FlashcardEntry[] {
  return createFlashcardResolver([])(ids).flatMap((card) => {
    const entry = cardMap().get(card.id);

    return entry ? [entry] : [];
  });
}
