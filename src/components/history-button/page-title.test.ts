import { describe, expect, it } from 'vitest';
import { viMessages } from '@/i18n/messages/vi/index.ts';
import type { TranslationParams } from '@/types/i18n.ts';
import { barePath, pageTitleFromPath } from './page-title.ts';

function t(key: string, params?: TranslationParams): string {
  const value = key
    .split('.')
    .reduce<unknown>(
      (node, part) => (node as Record<string, unknown> | undefined)?.[part],
      viMessages
    );

  if (typeof value !== 'string') {
    throw new Error(`missing ${key}`);
  }

  return value.replace(/\{(\w+)\}/g, (_, name: string) => String(params?.[name] ?? ''));
}

const title = (path: string) => pageTitleFromPath(path, t, 'vi');

describe('pageTitleFromPath', () => {
  it('names course lessons and their practice pages', () => {
    expect(title('/vi/n5/lesson-2/grammar')).toBe('JLPT N5 / Bài 2 / Luyện ngữ pháp');
    expect(title('/n4/lesson-27')).toBe('JLPT N4 / Bài 27');
    expect(title('/vi/n5/intro')).toBe('JLPT N5 / Mở đầu');
  });

  it('names kanji tracks, lessons and radicals', () => {
    expect(title('/vi/kanji/grade-1/lesson-3/quiz')).toBe('Kanji lớp 1 / Bài 3 / Trắc nghiệm');
    expect(title('/kanji/radicals#radical-12')).toBe('Bộ thủ');
    expect(title('/kanji')).toBe('Kanji');
  });

  it('names flashcard collections and other pages', () => {
    expect(title('/vi/flashcards/default-n5-lesson-4')).toBe('Flashcards / JLPT N5 - Bài 4');
    expect(title('/flashcards?tab=mine')).toBe('Flashcards');
    expect(title('/flashcards/clip-collection')).toBe('Flashcards');
    expect(title('/vi/alphabet/exercise/romaji')).toBe('Bảng chữ cái / Luyện tập / Điền romaji');
    expect(title('/vi')).toBe('Trang chủ');
  });
});

describe('barePath', () => {
  it('drops the locale prefix, query and hash', () => {
    expect(barePath('/vi/n5/lesson-2?x=1#grammar')).toBe('/n5/lesson-2');
    expect(barePath('/n5/lesson-2/sentences')).toBe('/n5/lesson-2/sentences');
    expect(barePath('/vi')).toBe('/');
  });
});
