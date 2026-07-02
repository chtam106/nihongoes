import type { CourseLevel } from './types.ts';

export const COURSE_LEVELS: CourseLevel[] = ['n5'];

export function isCourseLevel(value: string): value is CourseLevel {
  return (COURSE_LEVELS as string[]).includes(value);
}

export function coursePath(level: CourseLevel): string {
  return `/${level}`;
}

export function lessonPath(level: CourseLevel, id: string): string {
  return `/${level}/lesson/${id}`;
}

export function lessonVocabularyPath(level: CourseLevel, id: string): string {
  return `/${level}/lesson/${id}/vocabulary`;
}

export function lessonGrammarPath(level: CourseLevel, id: string): string {
  return `/${level}/lesson/${id}/grammar`;
}

export function lessonListeningPath(level: CourseLevel, id: string): string {
  return `/${level}/lesson/${id}/listening`;
}

export function lessonReadingPath(level: CourseLevel, id: string): string {
  return `/${level}/lesson/${id}/reading`;
}

export function lessonWritingPath(level: CourseLevel, id: string): string {
  return `/${level}/lesson/${id}/writing`;
}
