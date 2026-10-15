import { n4SentenceWriting } from '@/constants/courses/n4/sentence-writing/index.ts';
import { n5SentenceWriting } from '@/constants/courses/n5/sentence-writing/index.ts';
import type { CourseLevel, LessonSentenceWriting } from '@/types/course.ts';

const byLevel: Record<CourseLevel, Record<string, LessonSentenceWriting>> = {
  n5: n5SentenceWriting,
  n4: n4SentenceWriting
};

export function getSentenceWriting(
  level: CourseLevel,
  lessonId: string
): LessonSentenceWriting | undefined {
  return byLevel[level][lessonId];
}
