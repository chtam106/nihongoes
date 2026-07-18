import type { KanjiLesson } from '@/types/kanji.ts';

// Kanji domain types are declared in `@/types/kanji.ts`; re-exported here so
// existing `@/constants/kanji` imports keep working.
export * from '@/types/kanji.ts';

/**
 * Renumbers a composed list of kanji lessons sequentially (1..N), mirroring the
 * course `withSequentialNumbers` helper so lessons can be reordered freely.
 */
export function withSequentialNumbers(
  lessons: Omit<KanjiLesson, 'id' | 'number'>[]
): KanjiLesson[] {
  return lessons.map((lesson, index) => ({
    ...lesson,
    number: index + 1,
    id: `lesson-${index + 1}`
  }));
}
