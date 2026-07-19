import {
  grade1Lessons,
  grade2Lessons,
  grade3Lessons,
  grade4Lessons,
  grade5Lessons,
  grade6Lessons,
  kanken4Lessons,
  kanken3Lessons,
  kankenPre2Lessons,
  kanken2Lessons
} from './lessons.ts';
import type { KanjiLesson } from './types.ts';
import { KANJI_TRACK_META, type KanjiTrackMeta } from './track-meta.ts';
import {
  getRadicalByChar,
  kanjiLessonPath,
  kanjiQuizPath,
  kanjiTrackPath,
  kanjiWritingPath,
  KANJI_BASE_PATH,
  KANJI_RADICALS_PATH
} from './index.ts';

/**
 * A named collection of kanji lessons (e.g. the Grade 1 Jōyō kanji): the
 * lightweight `KanjiTrackMeta` plus its full lesson data. This module pulls in
 * the entire kanji dataset (`lessons.ts`), so it must only be imported from
 * SERVER code (route params, sitemap, and server page components). Client
 * components receive the specific lesson they need as props instead.
 */
export type KanjiTrack = KanjiTrackMeta & {
  lessons: KanjiLesson[];
};

const lessonsBySlug: Record<string, KanjiLesson[]> = {
  'grade-1': grade1Lessons,
  'grade-2': grade2Lessons,
  'grade-3': grade3Lessons,
  'grade-4': grade4Lessons,
  'grade-5': grade5Lessons,
  'grade-6': grade6Lessons,
  'kanken-4': kanken4Lessons,
  'kanken-3': kanken3Lessons,
  'kanken-pre-2': kankenPre2Lessons,
  'kanken-2': kanken2Lessons
};

export const kanjiTracks: KanjiTrack[] = KANJI_TRACK_META.map((meta) => ({
  ...meta,
  lessons: lessonsBySlug[meta.slug] ?? []
}));

export function getKanjiTrack(slug: string): KanjiTrack | undefined {
  return kanjiTracks.find((track) => track.slug === slug);
}

export function getKanjiLesson(trackSlug: string, id: string): KanjiLesson | undefined {
  return getKanjiTrack(trackSlug)?.lessons.find((lesson) => lesson.id === id);
}

/** How many kanji across all lessons are headed by each radical (keyed by radical number). */
export function computeRadicalUsage(): Record<number, number> {
  const usage: Record<number, number> = {};

  for (const track of kanjiTracks) {
    for (const lesson of track.lessons) {
      for (const kanji of lesson.kanji) {
        const radicalPart = kanji.parts.find((part) => part.role === 'radical');

        if (!radicalPart) {
          continue;
        }

        const radical = getRadicalByChar(radicalPart.char);

        if (!radical) {
          continue;
        }

        usage[radical.number] = (usage[radical.number] ?? 0) + 1;
      }
    }
  }

  return usage;
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
