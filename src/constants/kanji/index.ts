import { grade1Lessons, grade2Lessons, grade3Lessons, grade4Lessons } from './lessons.ts';
import { radicals, type Radical } from './radicals.ts';
import type { Bilingual, KanjiLesson } from './types.ts';

export * from './types.ts';
export { grade1Lessons, grade2Lessons, grade3Lessons, grade4Lessons } from './lessons.ts';
export { radicals };
export type { Radical };

export const KANJI_BASE_PATH = '/kanji';

export const KANJI_RADICALS_PATH = `${KANJI_BASE_PATH}/radicals`;

/** A named collection of kanji lessons (e.g. the Grade 1 Jōyō kanji). */
export type KanjiTrack = {
  slug: string;
  name: Bilingual;
  subtitle: Bilingual;
  intro: Bilingual;
  lessons: KanjiLesson[];
};

const grade1Track: KanjiTrack = {
  slug: 'grade-1',
  name: { en: 'Grade 1 kanji', vi: 'Kanji lớp 1' },
  subtitle: {
    en: 'The 80 first-grade Jōyō kanji, 10 characters per lesson.',
    vi: '80 chữ kanji Jōyō lớp 1, mỗi bài 10 chữ.'
  },
  intro: {
    en: 'The 80 kanji taught in first grade in Japan: numbers, nature, the body, and other everyday basics. Work through them in small, ordered lessons of 10 characters, each with meanings, on and kun readings, and example words you can tap to hear.',
    vi: '80 chữ kanji được dạy ở lớp 1 tại Nhật: con số, thiên nhiên, cơ thể và những điều cơ bản hằng ngày. Học theo từng bài nhỏ, có thứ tự, mỗi bài 10 chữ, kèm nghĩa, âm ON và KUN, và các từ ví dụ có thể bấm để nghe.'
  },
  lessons: grade1Lessons
};

const grade2Track: KanjiTrack = {
  slug: 'grade-2',
  name: { en: 'Grade 2 kanji', vi: 'Kanji lớp 2' },
  subtitle: {
    en: 'The 160 second-grade Jōyō kanji, 10 characters per lesson.',
    vi: '160 chữ kanji Jōyō lớp 2, mỗi bài 10 chữ.'
  },
  intro: {
    en: 'The 160 kanji taught in second grade in Japan: time, family, directions, verbs, and more. Work through them in small, ordered lessons of 10 characters, each with meanings, on and kun readings, and example words you can tap to hear.',
    vi: '160 chữ kanji được dạy ở lớp 2 tại Nhật: thời gian, gia đình, phương hướng, động từ và nhiều hơn nữa. Học theo từng bài nhỏ, có thứ tự, mỗi bài 10 chữ, kèm nghĩa, âm ON và KUN, và các từ ví dụ có thể bấm để nghe.'
  },
  lessons: grade2Lessons
};

const grade3Track: KanjiTrack = {
  slug: 'grade-3',
  name: { en: 'Grade 3 kanji', vi: 'Kanji lớp 3' },
  subtitle: {
    en: 'The 200 third-grade Jōyō kanji, 10 characters per lesson.',
    vi: '200 chữ kanji Jōyō lớp 3, mỗi bài 10 chữ.'
  },
  intro: {
    en: 'The 200 kanji taught in third grade in Japan: feelings, study, society, travel, and more. Work through them in small, ordered lessons of 10 characters, each with meanings, on and kun readings, and example words you can tap to hear.',
    vi: '200 chữ kanji được dạy ở lớp 3 tại Nhật: cảm xúc, học tập, xã hội, đi lại và nhiều hơn nữa. Học theo từng bài nhỏ, có thứ tự, mỗi bài 10 chữ, kèm nghĩa, âm ON và KUN, và các từ ví dụ có thể bấm để nghe.'
  },
  lessons: grade3Lessons
};

const grade4Track: KanjiTrack = {
  slug: 'grade-4',
  name: { en: 'Grade 4 kanji', vi: 'Kanji lớp 4' },
  subtitle: {
    en: 'The 202 fourth-grade Jōyō kanji, 10 characters per lesson.',
    vi: '202 chữ kanji Jōyō lớp 4, mỗi bài 10 chữ.'
  },
  intro: {
    en: 'The 202 kanji taught in fourth grade in Japan: feelings, society, nature, and more abstract ideas. Work through them in small, ordered lessons of 10 characters, each with meanings, on and kun readings, and example words you can tap to hear.',
    vi: '202 chữ kanji được dạy ở lớp 4 tại Nhật: cảm xúc, xã hội, thiên nhiên và nhiều khái niệm trừu tượng hơn. Học theo từng bài nhỏ, có thứ tự, mỗi bài 10 chữ, kèm nghĩa, âm ON và KUN, và các từ ví dụ có thể bấm để nghe.'
  },
  lessons: grade4Lessons
};

export const kanjiTracks: KanjiTrack[] = [grade1Track, grade2Track, grade3Track, grade4Track];

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
