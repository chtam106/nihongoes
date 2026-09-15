import { withSequentialNumbers, type Course } from '@/constants/courses/types.ts';

/** Minna no Nihongo Shokyu II - lessons 26-50 (N4). Part files appended as authored. */
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
  lessons: withSequentialNumbers([], 26)
};
