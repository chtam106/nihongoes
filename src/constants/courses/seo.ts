import type { Bilingual, CourseLevel } from './types.ts';

// SEO title/description per course, used by `page-meta.tsx` (loaded on every
// route). Like `summaries.ts`, this intentionally DUPLICATES the `seoTitle` /
// `seoDescription` of each `Course` in `<level>/index.ts` rather than deriving
// from them, to keep the heavy per-level lesson data out of the main bundle.
// Keep these strings in sync with the matching `Course` objects.

export type CourseSeo = {
  seoTitle: Bilingual;
  seoDescription: Bilingual;
};

const courseSeoByLevel: Record<CourseLevel, CourseSeo> = {
  n5: {
    seoTitle: {
      en: 'JLPT N5 Course - Vocabulary & Grammar',
      vi: 'Khóa học JLPT N5 - Từ vựng & Ngữ pháp'
    },
    seoDescription: {
      en: 'A free, structured JLPT N5 course. Each lesson teaches essential Japanese vocabulary and grammar with example sentences and reading practice in English and Vietnamese.',
      vi: 'Khóa học JLPT N5 miễn phí, có lộ trình. Mỗi bài dạy từ vựng và ngữ pháp tiếng Nhật cốt lõi kèm câu ví dụ và bài đọc hiểu song ngữ Anh - Việt.'
    }
  }
};

export function getCourseSeo(level: CourseLevel): CourseSeo {
  return courseSeoByLevel[level];
}
