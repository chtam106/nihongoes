import type { FlashcardCollection } from '@/constants/flashcards/collections.ts';
import { KANJI_TRACK_META } from '@/constants/kanji/track-meta.ts';
import type { Locale } from '@/types/i18n.ts';

const KANJI_TRACK_PREFIX = /^default-(grade-[1-6]|kanken-(?:4|3|pre-2|2))-/;

const GROUP_ORDER: readonly string[] = [
  'alphabet',
  'n5',
  'n4',
  'radicals',
  ...KANJI_TRACK_META.map((track) => track.slug)
];

export type DefaultCollectionGroup = {
  key: string;
  title: string;
  collections: FlashcardCollection[];
};

export function defaultCollectionGroupKey(collectionId: string): string {
  if (collectionId === 'default-hiragana' || collectionId === 'default-katakana') {
    return 'alphabet';
  }

  if (collectionId === 'default-radicals' || collectionId.startsWith('default-radicals-')) {
    return 'radicals';
  }

  if (collectionId.startsWith('default-n5-')) {
    return 'n5';
  }

  if (collectionId.startsWith('default-n4-')) {
    return 'n4';
  }

  const kanjiMatch = collectionId.match(KANJI_TRACK_PREFIX);

  if (kanjiMatch) {
    return kanjiMatch[1];
  }

  return 'other';
}

function lessonSortKey(collectionId: string): number {
  const match = collectionId.match(/-lesson-(\d+)$/);

  return match ? Number(match[1]) : 0;
}

function radicalBlockSortKey(collectionId: string): number {
  if (collectionId === 'default-radicals') {
    return 0;
  }

  const match = collectionId.match(/^default-radicals-(\d+)-\d+$/);

  return match ? Number(match[1]) : 0;
}

function alphabetSortKey(collectionId: string): number {
  if (collectionId === 'default-hiragana') {
    return 0;
  }

  if (collectionId === 'default-katakana') {
    return 1;
  }

  return 2;
}

function defaultCollectionGroupLabel(key: string, locale: Locale): string {
  switch (key) {
    case 'alphabet':
      return locale === 'vi' ? 'Bảng chữ cái' : 'Alphabet';
    case 'n5':
      return 'JLPT N5';
    case 'n4':
      return 'JLPT N4';
    case 'radicals':
      return locale === 'vi' ? 'Bộ thủ kanji' : 'Kanji radicals';
    default: {
      const meta = KANJI_TRACK_META.find((track) => track.slug === key);

      return meta?.name[locale] ?? key;
    }
  }
}

export function groupDefaultCollections(
  collections: FlashcardCollection[],
  locale: Locale
): DefaultCollectionGroup[] {
  const buckets = new Map<string, FlashcardCollection[]>();

  for (const collection of collections) {
    const key = defaultCollectionGroupKey(collection.id);
    const list = buckets.get(key);

    if (list) {
      list.push(collection);
    } else {
      buckets.set(key, [collection]);
    }
  }

  const orderedKeys = GROUP_ORDER.filter((key) => (buckets.get(key)?.length ?? 0) > 0);
  const other = buckets.get('other');

  if (other && other.length > 0) {
    orderedKeys.push('other');
  }

  return orderedKeys.map((key) => {
    const groupCollections = buckets.get(key) ?? [];

    groupCollections.sort((left, right) => {
      if (key === 'alphabet') {
        return alphabetSortKey(left.id) - alphabetSortKey(right.id);
      }

      if (key === 'radicals') {
        return radicalBlockSortKey(left.id) - radicalBlockSortKey(right.id);
      }

      return (
        lessonSortKey(left.id) - lessonSortKey(right.id) ||
        left.name.localeCompare(right.name, locale)
      );
    });

    return {
      key,
      title:
        key === 'other'
          ? locale === 'vi'
            ? 'Khác'
            : 'Other'
          : defaultCollectionGroupLabel(key, locale),
      collections: groupCollections
    };
  });
}
