import { n5Course } from './n5/index.ts';
import type { Course, CourseLevel, Lesson, VocabItem } from './types.ts';
import {
  COURSE_LEVELS,
  coursePath,
  lessonGrammarPath,
  lessonListeningPath,
  lessonPath,
  lessonReadingPath,
  lessonVocabularyPath,
  lessonWritingPath
} from './levels.ts';

const KANJI_RE = /[\u4E00-\u9FFF]/;

export * from './types.ts';
export * from './levels.ts';
export * from './summaries.ts';
export * from './seo.ts';

const courses: Record<CourseLevel, Course> = {
  n5: n5Course
};

export function getCourse(level: CourseLevel): Course {
  return courses[level];
}

export function getLesson(level: CourseLevel, id: string): Lesson | undefined {
  return courses[level].lessons.find((lesson) => lesson.id === id);
}

export function lessonHasReading(lesson: Lesson): boolean {
  return Boolean(lesson.reading && lesson.reading.length > 0);
}

/** Lesson vocabulary/reference words that have a kanji form (deduped by kanji), for writing practice. */
export function lessonKanjiWords(lesson: Lesson): VocabItem[] {
  const sources: VocabItem[] = [
    ...lesson.vocab,
    ...(lesson.reference?.flatMap((group) => group.items) ?? [])
  ];

  const seen = new Set<string>();
  const result: VocabItem[] = [];

  for (const item of sources) {
    const kanji = item.kanji;

    if (kanji && KANJI_RE.test(kanji) && !seen.has(kanji)) {
      seen.add(kanji);
      result.push(item);
    }
  }

  return result;
}

export function lessonHasKanji(lesson: Lesson): boolean {
  return lessonKanjiWords(lesson).length > 0;
}

export const COURSE_SITEMAP_PATHS: string[] = COURSE_LEVELS.flatMap((level) => {
  const { lessons } = courses[level];

  return [
    coursePath(level),
    ...lessons.map((lesson) => lessonPath(level, lesson.id)),
    ...lessons.map((lesson) => lessonVocabularyPath(level, lesson.id)),
    ...lessons.map((lesson) => lessonGrammarPath(level, lesson.id)),
    ...lessons.map((lesson) => lessonListeningPath(level, lesson.id)),
    ...lessons.filter(lessonHasReading).map((lesson) => lessonReadingPath(level, lesson.id)),
    ...lessons.filter(lessonHasKanji).map((lesson) => lessonWritingPath(level, lesson.id))
  ];
});
