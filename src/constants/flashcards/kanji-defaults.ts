import type { ResolvableFlashcard } from '@/constants/flashcards/catalog.ts';
import type { DefaultCollection } from '@/constants/flashcards/collections.ts';
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
 * SERVER ONLY. One built-in collection per elementary grade (Kanji lớp 1-6)
 * and per Kanken level (4級, 3級, 準2級, 2級).
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

      const cardIds: string[] = [];
      const seen = new Set<string>();

      for (const lesson of track.lessons) {
        for (const entry of lesson.kanji) {
          const id = `kanji:${track.slug}:${entry.char}`;

          if (seen.has(id)) {
            continue;
          }

          seen.add(id);
          cardIds.push(id);
          const reading = readingOf(entry.kunyomi, entry.onyomi, entry.char);
          cards.push({
            id,
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
      }

      collections.push({
        id: `default-${track.slug}`,
        name: track.name,
        cardIds
      });
    }

    cached = { collections, cards };
  }

  return cached;
}
