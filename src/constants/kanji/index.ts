import {
  grade1Lessons,
  grade2Lessons,
  grade3Lessons,
  grade4Lessons,
  grade5Lessons,
  grade6Lessons,
  kanken4Lessons
} from './lessons.ts';
import { radicals, type Radical } from './radicals.ts';
import type { Bilingual, KanjiLesson } from './types.ts';

export * from './types.ts';
export {
  grade1Lessons,
  grade2Lessons,
  grade3Lessons,
  grade4Lessons,
  grade5Lessons,
  grade6Lessons,
  kanken4Lessons
} from './lessons.ts';
export { radicals };
export type { Radical };

export const KANJI_BASE_PATH = '/kanji';

export const KANJI_RADICALS_PATH = `${KANJI_BASE_PATH}/radicals`;

/** A named collection of kanji lessons (e.g. the Grade 1 Jōyō kanji). */
export type KanjiTrack = {
  slug: string;
  name: Bilingual;
  intro: Bilingual;
  lessons: KanjiLesson[];
};

const grade1Track: KanjiTrack = {
  slug: 'grade-1',
  name: { en: 'Grade 1 kanji', vi: 'Kanji lớp 1' },
  intro: {
    en: 'The 80 kanji taught in first grade in Japan: numbers, nature, the body, and other everyday basics.',
    vi: '80 chữ kanji được dạy ở lớp 1 tại Nhật: con số, thiên nhiên, cơ thể và những điều cơ bản hằng ngày.'
  },
  lessons: grade1Lessons
};

const grade2Track: KanjiTrack = {
  slug: 'grade-2',
  name: { en: 'Grade 2 kanji', vi: 'Kanji lớp 2' },
  intro: {
    en: 'The 160 kanji taught in second grade in Japan: time, family, directions, verbs, and more.',
    vi: '160 chữ kanji được dạy ở lớp 2 tại Nhật: thời gian, gia đình, phương hướng, động từ và nhiều hơn nữa.'
  },
  lessons: grade2Lessons
};

const grade3Track: KanjiTrack = {
  slug: 'grade-3',
  name: { en: 'Grade 3 kanji', vi: 'Kanji lớp 3' },
  intro: {
    en: 'The 200 kanji taught in third grade in Japan: feelings, study, society, travel, and more.',
    vi: '200 chữ kanji được dạy ở lớp 3 tại Nhật: cảm xúc, học tập, xã hội, đi lại và nhiều hơn nữa.'
  },
  lessons: grade3Lessons
};

const grade4Track: KanjiTrack = {
  slug: 'grade-4',
  name: { en: 'Grade 4 kanji', vi: 'Kanji lớp 4' },
  intro: {
    en: 'The 202 kanji taught in fourth grade in Japan: feelings, society, nature, and more abstract ideas.',
    vi: '202 chữ kanji được dạy ở lớp 4 tại Nhật: cảm xúc, xã hội, thiên nhiên và nhiều khái niệm trừu tượng hơn.'
  },
  lessons: grade4Lessons
};

const grade5Track: KanjiTrack = {
  slug: 'grade-5',
  name: { en: 'Grade 5 kanji', vi: 'Kanji lớp 5' },
  intro: {
    en: 'The 193 kanji taught in fifth grade in Japan: feelings, society, science, and many abstract concepts.',
    vi: '193 chữ kanji được dạy ở lớp 5 tại Nhật: cảm xúc, xã hội, khoa học và nhiều khái niệm trừu tượng.'
  },
  lessons: grade5Lessons
};

const grade6Track: KanjiTrack = {
  slug: 'grade-6',
  name: { en: 'Grade 6 kanji', vi: 'Kanji lớp 6' },
  intro: {
    en: 'The 191 kanji taught in sixth grade in Japan: the body, character, society, government, and many abstract ideas.',
    vi: '191 chữ kanji được dạy ở lớp 6 tại Nhật: cơ thể, tâm tính, xã hội, chính trị và nhiều khái niệm trừu tượng.'
  },
  lessons: grade6Lessons
};

const kanken4Track: KanjiTrack = {
  slug: 'kanken-4',
  name: { en: 'Kanken level 4 kanji', vi: 'Kanji Kanken 4級' },
  intro: {
    en: 'The first 313 secondary-school jōyō kanji (Kanji Kentei level 4, roughly junior high year 1), learned after the 1026 elementary kanji. Since Japan assigns no fixed grade to these, they follow the widely used Kanken progression: study, society, the body, and abstract ideas, grouped into small themed lessons.',
    vi: '313 chữ jōyō trung học đầu tiên (Kỳ thi năng lực Kanji cấp 4級, tương đương lớp 7), học sau 1026 chữ tiểu học. Vì Nhật không ấn định lớp cố định cho nhóm này, chúng theo lộ trình Kanken thông dụng: học tập, xã hội, cơ thể và các khái niệm trừu tượng, chia thành từng bài nhỏ theo chủ đề.'
  },
  lessons: kanken4Lessons
};

export const kanjiTracks: KanjiTrack[] = [
  grade1Track,
  grade2Track,
  grade3Track,
  grade4Track,
  grade5Track,
  grade6Track,
  kanken4Track
];

export function getKanjiTrack(slug: string): KanjiTrack | undefined {
  return kanjiTracks.find((track) => track.slug === slug);
}

/** Find a radical by its standalone character or any of its combining variants. */
export function getRadicalByChar(char: string): Radical | undefined {
  return radicals.find((radical) => radical.char === char || radical.variants?.includes(char));
}

/**
 * Render a `Hán-Việt - nghĩa` Vietnamese meaning as `[Hán-Việt] nghĩa` (with the
 * Hán-Việt reading capitalized). Strings without the ` - ` separator (e.g. any
 * English meaning) are returned unchanged.
 */
export function formatKanjiMeaning(value: string): string {
  const separator = ' - ';
  const index = value.indexOf(separator);

  if (index === -1) {
    return value;
  }

  const hanViet = value.slice(0, index).trim();
  const rest = value.slice(index + separator.length).trim();

  if (!hanViet || !rest) {
    return value;
  }

  const capitalized = hanViet.charAt(0).toUpperCase() + hanViet.slice(1);

  return `[${capitalized}] ${rest}`;
}

export function kanjiTrackPath(trackSlug: string): string {
  return `${KANJI_BASE_PATH}/${trackSlug}`;
}

export function kanjiLessonPath(trackSlug: string, id: string): string {
  return `${kanjiTrackPath(trackSlug)}/lesson/${id}`;
}

export function kanjiQuizPath(trackSlug: string, id: string): string {
  return `${kanjiLessonPath(trackSlug, id)}/quiz`;
}

export function kanjiWritingPath(trackSlug: string, id: string): string {
  return `${kanjiLessonPath(trackSlug, id)}/writing`;
}

export function getKanjiLesson(trackSlug: string, id: string): KanjiLesson | undefined {
  return getKanjiTrack(trackSlug)?.lessons.find((lesson) => lesson.id === id);
}

export const KANJI_SITEMAP_PATHS: string[] = [
  KANJI_BASE_PATH,
  KANJI_RADICALS_PATH,
  ...kanjiTracks.flatMap((track) => [
    kanjiTrackPath(track.slug),
    ...track.lessons.flatMap((lesson) => [
      kanjiLessonPath(track.slug, lesson.id),
      kanjiQuizPath(track.slug, lesson.id),
      kanjiWritingPath(track.slug, lesson.id)
    ])
  ])
];
