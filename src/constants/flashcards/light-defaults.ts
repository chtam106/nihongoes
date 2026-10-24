import { getAlphabetItems } from '@/constants/alphabet-charts.ts';
import { getAllCourseLessons } from '@/constants/courses/index.ts';
import {
  flashcardRefsForLesson,
  type ResolvableFlashcard
} from '@/constants/flashcards/catalog.ts';
import type { DefaultCollection } from '@/constants/flashcards/collections.ts';
import type { CourseLevel } from '@/types/course.ts';
import { formatRadicalMeaning, radicalsInStrokeOrder } from '@/constants/kanji/index.ts';

export type LightFlashcardDefaults = {
  collections: DefaultCollection[];
  cards: ResolvableFlashcard[];
};

function kanaCards(script: 'hiragana' | 'katakana', mark: 'h' | 'k'): ResolvableFlashcard[] {
  const seen = new Set<string>();
  const cards: ResolvableFlashcard[] = [];

  for (const cell of getAlphabetItems(script, 'all')) {
    if (seen.has(cell.char)) {
      continue;
    }

    seen.add(cell.char);
    cards.push({
      id: `kana:${mark}:${cell.char}`,
      type: 'kana',
      item: {
        kana: cell.char,
        romaji: cell.romaji,
        meaning: { en: cell.romaji, vi: cell.romaji }
      }
    });
  }

  return cards;
}

export const RADICALS_PER_FLASHCARD_COLLECTION = 20;

function radicalCards(): ResolvableFlashcard[] {
  return radicalsInStrokeOrder().map((radical) => ({
    id: `radical:${radical.number}`,
    type: 'radical',
    item: {
      kana: radical.char,
      romaji: radical.hanViet,
      meaning: {
        en: radical.meaning.en,
        vi: formatRadicalMeaning(radical, 'vi')
      }
    }
  }));
}

function radicalCollections(cards: ResolvableFlashcard[]): DefaultCollection[] {
  const collections: DefaultCollection[] = [];

  for (let start = 0; start < cards.length; start += RADICALS_PER_FLASHCARD_COLLECTION) {
    const chunk = cards.slice(start, start + RADICALS_PER_FLASHCARD_COLLECTION);
    const from = start + 1;
    const to = start + chunk.length;

    collections.push({
      id: `default-radicals-${from}-${to}`,
      name: {
        en: `Kanji radicals | ${from}-${to}`,
        vi: `Bộ thủ kanji | ${from}-${to}`
      },
      cards: chunk.map((card) => ({ id: card.id, type: card.type }))
    });
  }

  return collections;
}

function jlptLessonCollections(level: CourseLevel): DefaultCollection[] {
  const label = level.toUpperCase();

  return getAllCourseLessons()
    .filter((entry) => entry.level === level)
    .map(({ lesson }) => ({
      id: `default-${level}-${lesson.id}`,
      name: {
        en: `${label} | Lesson ${lesson.number}: ${lesson.title.en}`,
        vi: `${label} | Bài ${lesson.number}: ${lesson.title.vi}`
      },
      cards: flashcardRefsForLesson(lesson)
    }));
}

let cached: LightFlashcardDefaults | null = null;

/**
 * Built-in collections that do not need the kanji lesson dataset: the kana
 * charts, one JLPT collection per lesson (N5, N4), and radicals in blocks of 20.
 */
export function getLightFlashcardDefaults(): LightFlashcardDefaults {
  if (!cached) {
    const hiragana = kanaCards('hiragana', 'h');
    const katakana = kanaCards('katakana', 'k');
    const radicals = radicalCards();

    cached = {
      cards: [...hiragana, ...katakana, ...radicals],
      collections: [
        {
          id: 'default-hiragana',
          name: { en: 'Hiragana alphabet', vi: 'Bảng chữ cái Hiragana' },
          cards: hiragana.map((card) => ({ id: card.id, type: card.type }))
        },
        {
          id: 'default-katakana',
          name: { en: 'Katakana alphabet', vi: 'Bảng chữ cái Katakana' },
          cards: katakana.map((card) => ({ id: card.id, type: card.type }))
        },
        ...jlptLessonCollections('n5'),
        ...jlptLessonCollections('n4'),
        ...radicalCollections(radicals)
      ]
    };
  }

  return cached;
}
