import type { Lesson } from '@/types/course.ts';

// Course domain types are declared in `@/types/course.ts`; re-exported here so
// existing `@/constants/courses` imports keep working.
export * from '@/types/course.ts';

/**
 * Renumbers a composed list of lessons sequentially (1..N), so course content can be
 * split across part files and reordered freely without worrying about `id`/`number`.
 */
export function withSequentialNumbers(lessons: Lesson[]): Lesson[] {
  return lessons.map((lesson, index) => ({
    ...lesson,
    number: index + 1,
    id: `lesson-${index + 1}`
  }));
}
