import type { ResolvableFlashcard } from '@/constants/flashcards/catalog.ts';
import {
  flashcardCard,
  type DefaultCollection,
  type FlashcardCard
} from '@/constants/flashcards/collections.ts';
import { formatKanjiMeaning } from '@/constants/kanji/index.ts';
import { kanjiTracks } from '@/constants/kanji/tracks.ts';

export type KanjiGradeFlashcards = {
  collections: DefaultCollection[];
  cards: ResolvableFlashcard[];
};

function readingOf(kunyomi: string[], onyomi: string[], fallback: string) {
  const reading = kunyomi[0] ?? onyomi[0] ?? fallback;

  return reading.replace(/\./g, '');
}

let cached: KanjiGradeFlashcards | null = null;

/**
 * SERVER ONLY. One built-in collection per kanji lesson (elementary grades 1-6
 * and Kanken levels 4, 3, pre-2, 2).
 * Import this from server `page.tsx` files and pass the result as props.
 * Do not import it from a client component: it pulls in `lessons.ts`.
 */
export function getKanjiGradeFlashcards(): KanjiGradeFlashcards {
  if (!cached) {
    const collections: DefaultCollection[] = [];
    const cards: ResolvableFlashcard[] = [];

    for (const track of kanjiTracks) {
      if (!track.slug.startsWith('grade-') && !track.slug.startsWith('kanken-')) {
        continue;
      }

      for (const lesson of track.lessons) {
        const collectionCards: FlashcardCard[] = [];
        const seen = new Set<string>();

        for (const entry of lesson.kanji) {
          const id = `kanji:${track.slug}:${entry.char}`;
          const card = flashcardCard(id);

          if (!card || seen.has(id)) {
            continue;
          }

          seen.add(id);
          collectionCards.push(card);
          const reading = readingOf(entry.kunyomi, entry.onyomi, entry.char);
          cards.push({
            id,
            type: card.type,
            item: {
              kanji: entry.char,
              kana: reading,
              romaji: reading,
              meaning: {
                en: entry.meaning.en,
                vi: formatKanjiMeaning(entry.meaning.vi)
              }
            }
          });
        }

        if (collectionCards.length === 0) {
          continue;
        }

        collections.push({
          id: `default-${track.slug}-${lesson.id}`,
          name: {
            en: `${track.name.en} | Lesson ${lesson.number}: ${lesson.title.en}`,
            vi: `${track.name.vi} | Bài ${lesson.number}: ${lesson.title.vi}`
          },
          cards: collectionCards
        });
      }
    }

    cached = { collections, cards };
  }

  return cached;
}
