import { n5Lesson1 } from '@/constants/courses/n5/lessons-1.ts';
import { n5Lesson2 } from '@/constants/courses/n5/lessons-2.ts';
import { n5Lesson3 } from '@/constants/courses/n5/lessons-3.ts';
import { n5Lesson4 } from '@/constants/courses/n5/lessons-4.ts';
import { n5Lesson5 } from '@/constants/courses/n5/lessons-5.ts';
import { n5Lesson6 } from '@/constants/courses/n5/lessons-6.ts';
import { n5Lesson7 } from '@/constants/courses/n5/lessons-7.ts';
import { n5Lesson8 } from '@/constants/courses/n5/lessons-8.ts';
import { n5Lesson9 } from '@/constants/courses/n5/lessons-9.ts';
import { n5Lesson10 } from '@/constants/courses/n5/lessons-10.ts';
import { n5Lesson11 } from '@/constants/courses/n5/lessons-11.ts';
import { n5Lesson12 } from '@/constants/courses/n5/lessons-12.ts';
import { n5Lesson13 } from '@/constants/courses/n5/lessons-13.ts';
import { n5Lesson14 } from '@/constants/courses/n5/lessons-14.ts';
import { n5Lesson15 } from '@/constants/courses/n5/lessons-15.ts';
import { n5Lesson16 } from '@/constants/courses/n5/lessons-16.ts';
import { n5Lesson17 } from '@/constants/courses/n5/lessons-17.ts';
import { n5Lesson18 } from '@/constants/courses/n5/lessons-18.ts';
import { n5Lesson19 } from '@/constants/courses/n5/lessons-19.ts';
import { n5Lesson20 } from '@/constants/courses/n5/lessons-20.ts';
import { n5Lesson21 } from '@/constants/courses/n5/lessons-21.ts';
import { n5Lesson22 } from '@/constants/courses/n5/lessons-22.ts';
import { n5Lesson23 } from '@/constants/courses/n5/lessons-23.ts';
import { n5Lesson24 } from '@/constants/courses/n5/lessons-24.ts';
import { n5Lesson25 } from '@/constants/courses/n5/lessons-25.ts';
import { withSequentialNumbers, type Course } from '@/constants/courses/types.ts';

export const n5Course: Course = {
  level: 'n5',
  code: 'N5',
  name: { en: 'JLPT N5 Course', vi: 'Khóa học JLPT N5' },
  subtitle: {
    en: 'Build a solid foundation, one lesson at a time.',
    vi: 'Xây nền tảng vững chắc, từng bài một.'
  },
  intro: {
    en: 'A step-by-step JLPT N5 path modeled on Minna no Nihongo Shokyu I.',
    vi: 'Lộ trình JLPT N5 từng bước, bám theo giáo trình Minna no Nihongo Sơ cấp I.'
  },
  seoTitle: {
    en: 'JLPT N5 Course - Vocabulary & Grammar',
    vi: 'Khóa học JLPT N5 - Từ vựng & Ngữ pháp'
  },
  seoDescription: {
    en: 'A free, structured JLPT N5 course modeled on Minna no Nihongo. Each lesson teaches essential Japanese vocabulary, sentence patterns, and reference words with example sentences in English and Vietnamese.',
    vi: 'Khóa học JLPT N5 miễn phí, có lộ trình theo Minna no Nihongo. Mỗi bài dạy từ vựng, mẫu câu và từ tham khảo tiếng Nhật cốt lõi kèm câu ví dụ song ngữ Anh - Việt.'
  },
  lessons: withSequentialNumbers([
    n5Lesson1,
    n5Lesson2,
    n5Lesson3,
    n5Lesson4,
    n5Lesson5,
    n5Lesson6,
    n5Lesson7,
    n5Lesson8,
    n5Lesson9,
    n5Lesson10,
    n5Lesson11,
    n5Lesson12,
    n5Lesson13,
    n5Lesson14,
    n5Lesson15,
    n5Lesson16,
    n5Lesson17,
    n5Lesson18,
    n5Lesson19,
    n5Lesson20,
    n5Lesson21,
    n5Lesson22,
    n5Lesson23,
    n5Lesson24,
    n5Lesson25
  ])
};
