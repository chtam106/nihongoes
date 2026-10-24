import { describe, expect, it } from 'vitest';
import {
  defaultCollectionGroupKey,
  groupDefaultCollections
} from '@/constants/flashcards/default-collection-groups.ts';
import type { FlashcardCollection } from '@/constants/flashcards/collections.ts';
import { getKanjiGradeFlashcards } from '@/constants/flashcards/kanji-defaults.ts';
import { getLightFlashcardDefaults } from '@/constants/flashcards/light-defaults.ts';

function stub(id: string): FlashcardCollection {
  return { id, name: id, cards: [] };
}

describe('defaultCollectionGroupKey', () => {
  it('maps built-in ids to group keys', () => {
    expect(defaultCollectionGroupKey('default-hiragana')).toBe('alphabet');
    expect(defaultCollectionGroupKey('default-katakana')).toBe('alphabet');
    expect(defaultCollectionGroupKey('default-n5-lesson-1')).toBe('n5');
    expect(defaultCollectionGroupKey('default-grade-2-lesson-3')).toBe('grade-2');
    expect(defaultCollectionGroupKey('default-kanken-pre-2-lesson-1')).toBe('kanken-pre-2');
  });
});

describe('groupDefaultCollections', () => {
  it('orders JLPT lessons by lesson number within N5', () => {
    const grouped = groupDefaultCollections(
      [stub('default-n5-lesson-3'), stub('default-n5-lesson-1'), stub('default-n5-lesson-2')],
      'en'
    );

    expect(grouped).toHaveLength(1);
    expect(grouped[0]?.collections.map((c) => c.id)).toEqual([
      'default-n5-lesson-1',
      'default-n5-lesson-2',
      'default-n5-lesson-3'
    ]);
  });

  it('follows the canonical group order for full defaults', () => {
    const light = getLightFlashcardDefaults();
    const kanji = getKanjiGradeFlashcards();
    const all = [...light.collections, ...kanji.collections].map((collection) =>
      stub(collection.id)
    );
    const keys = groupDefaultCollections(all, 'en').map((group) => group.key);

    expect(keys.indexOf('alphabet')).toBeLessThan(keys.indexOf('n5'));
    expect(keys.indexOf('n5')).toBeLessThan(keys.indexOf('n4'));
    expect(keys.indexOf('n4')).toBeLessThan(keys.indexOf('radicals'));
    expect(keys.indexOf('radicals')).toBeLessThan(keys.indexOf('grade-1'));
    expect(keys.indexOf('grade-6')).toBeLessThan(keys.indexOf('kanken-4'));
  });
});
