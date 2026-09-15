import { withSequentialNumbers, type Course } from '@/constants/courses/types.ts';
import { n4Lesson26 } from '@/constants/courses/n4/lessons-26.ts';
import { n4Lesson27 } from '@/constants/courses/n4/lessons-27.ts';
import { n4Lesson28 } from '@/constants/courses/n4/lessons-28.ts';
import { n4Lesson29 } from '@/constants/courses/n4/lessons-29.ts';
import { n4Lesson30 } from '@/constants/courses/n4/lessons-30.ts';
import { n4Lesson31 } from '@/constants/courses/n4/lessons-31.ts';
import { n4Lesson32 } from '@/constants/courses/n4/lessons-32.ts';
import { n4Lesson32 } from '@/constants/courses/n4/lessons-32.ts';
import { n4Lesson33 } from '@/constants/courses/n4/lessons-33.ts';
import { n4Lesson34 } from '@/constants/courses/n4/lessons-34.ts';
import { n4Lesson35 } from '@/constants/courses/n4/lessons-35.ts';
import { n4Lesson36 } from '@/constants/courses/n4/lessons-36.ts';
import { n4Lesson37 } from '@/constants/courses/n4/lessons-37.ts';
import { n4Lesson38 } from '@/constants/courses/n4/lessons-38.ts';
import { n4Lesson39 } from '@/constants/courses/n4/lessons-39.ts';
import { n4Lesson40 } from '@/constants/courses/n4/lessons-40.ts';
import { n4Lesson41 } from '@/constants/courses/n4/lessons-41.ts';
import { n4Lesson42 } from '@/constants/courses/n4/lessons-42.ts';
import { n4Lesson43 } from '@/constants/courses/n4/lessons-43.ts';
import { n4Lesson44 } from '@/constants/courses/n4/lessons-44.ts';
import { n4Lesson45 } from '@/constants/courses/n4/lessons-45.ts';
import { n4Lesson46 } from '@/constants/courses/n4/lessons-46.ts';
import { n4Lesson47 } from '@/constants/courses/n4/lessons-47.ts';
import { n4Lesson48 } from '@/constants/courses/n4/lessons-48.ts';
import { n4Lesson49 } from '@/constants/courses/n4/lessons-49.ts';
import { n4Lesson50 } from '@/constants/courses/n4/lessons-50.ts';

/** Minna no Nihongo Shokyu II - lessons 26-50 (N4). */
export const n4Course: Course = {
  level: 'n4',
  code: 'N4',
  name: { en: 'JLPT N4 Course', vi: 'Khóa học JLPT N4' },
  subtitle: {
    en: 'Minna no Nihongo Shokyu II - lessons 26 through 50.',
    vi: 'Minna no Nihongo Sơ cấp II - bài 26 đến 50.'
  },
  intro: {
    en: 'Continue from N5 with Minna no Nihongo Elementary II, covering JLPT N4 grammar and vocabulary.',
    vi: 'Tiếp nối N5 với Minna Sơ cấp II, bao phủ ngữ pháp và từ vựng JLPT N4.'
  },
  seoTitle: {
    en: 'JLPT N4 Course - Vocabulary & Grammar',
    vi: 'Khóa học JLPT N4 - Từ vựng & Ngữ pháp'
  },
  seoDescription: {
    en: 'A structured JLPT N4 course based on Minna no Nihongo Shokyu II. Lessons 26-50 with vocabulary, grammar, and reading practice in English and Vietnamese.',
    vi: 'Khóa học JLPT N4 theo Minna Sơ cấp II. Bài 26-50 với từ vựng, ngữ pháp và bài đọc hiểu song ngữ Anh - Việt.'
  },
  lessons: withSequentialNumbers(
    [
      n4Lesson26,
      n4Lesson27,
      n4Lesson28,
      n4Lesson29,
      n4Lesson30,
      n4Lesson31,
      n4Lesson32,
      n4Lesson33,
      n4Lesson34,
      n4Lesson35,
      n4Lesson36,
      n4Lesson37,
      n4Lesson38,
      n4Lesson39,
      n4Lesson40,
      n4Lesson41,
      n4Lesson42,
      n4Lesson43,
      n4Lesson44,
      n4Lesson45,
      n4Lesson46,
      n4Lesson47,
      n4Lesson48,
      n4Lesson49,
      n4Lesson50
    ],
    26
  )
};
