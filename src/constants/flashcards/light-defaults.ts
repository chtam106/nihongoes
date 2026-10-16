import { getAlphabetItems } from '@/constants/alphabet-charts.ts';
import { flashcardRefsForLevel, type ResolvableFlashcard } from '@/constants/flashcards/catalog.ts';
import type { DefaultCollection } from '@/constants/flashcards/collections.ts';
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

let cached: LightFlashcardDefaults | null = null;

/**
 * Built-in collections that do not need the kanji lesson dataset: the kana
 * charts, JLPT N5/N4 vocabulary and phrases, and the 214 radicals.
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
        {
          id: 'default-n5',
          name: {
            en: 'JLPT N5 vocabulary and phrases',
            vi: 'Từ vựng và mẫu câu JLPT N5'
          },
          cards: flashcardRefsForLevel('n5')
        },
        {
          id: 'default-n4',
          name: {
            en: 'JLPT N4 vocabulary and phrases',
            vi: 'Từ vựng và mẫu câu JLPT N4'
          },
          cards: flashcardRefsForLevel('n4')
        },
        {
          id: 'default-radicals',
          name: { en: 'Kanji radicals', vi: 'Bộ thủ kanji' },
          cards: radicals.map((card) => ({ id: card.id, type: card.type }))
        }
      ]
    };
  }

  return cached;
}
