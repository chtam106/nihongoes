import type { Bilingual, CourseLevel } from './types.ts';
import { COURSE_LEVELS } from './levels.ts';

// Lightweight course metadata (name + subtitle) used by always-loaded surfaces:
// the home page, the nav drawer, etc. It intentionally DUPLICATES the `name` /
// `subtitle` of each `Course` in `<level>/index.ts` instead of deriving from
// them - importing the course objects here would statically pull every level's
// (heavy) lesson data into the main bundle and defeat code-splitting. Keep these
// strings in sync with the matching `Course` objects.

export type CourseSummary = {
  level: CourseLevel;
  name: Bilingual;
  subtitle: Bilingual;
};

const summaryByLevel: Record<CourseLevel, CourseSummary> = {
  n5: {
    level: 'n5',
    name: { en: 'JLPT N5 Course', vi: 'Khóa học JLPT N5' },
    subtitle: {
      en: 'Build a solid foundation, one lesson at a time.',
      vi: 'Xây nền tảng vững chắc, từng bài một.'
    }
  }
};

export const COURSE_SUMMARIES: CourseSummary[] = COURSE_LEVELS.map(
  (level) => summaryByLevel[level]
);
