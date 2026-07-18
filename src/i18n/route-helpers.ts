import {
  getCourse,
  lessonHasGrammar,
  lessonHasKanji,
  lessonHasReading
} from '@/constants/courses/index.ts';
import { COURSE_LEVELS } from '@/constants/courses/levels.ts';
import type { Lesson } from '@/constants/courses/types.ts';
import { kanjiTracks } from '@/constants/kanji/index.ts';
import { LOCALES } from '@/i18n/locale-routing.ts';
import type { Locale } from '@/i18n/translations.ts';

export type LangParam = { lang: Locale };

/** Static params for the `[lang]` segment (both locales). */
export const langParams: LangParam[] = LOCALES.map((lang) => ({ lang }));

/** Narrow a raw `[lang]` route param to a `Locale` (defaults to English). */
export function toLocale(lang: string): Locale {
  return lang === 'vi' ? 'vi' : 'en';
}

/** `{ lang, jlptLevel }` for every locale and course level (`[jlptLevel]` segment). */
export function courseLevelParams() {
  return LOCALES.flatMap((lang) => COURSE_LEVELS.map((level) => ({ lang, jlptLevel: level })));
}

function courseLessonParamsWhere(predicate?: (lesson: Lesson) => boolean) {
  return LOCALES.flatMap((lang) =>
    COURSE_LEVELS.flatMap((level) =>
      getCourse(level)
        .lessons.filter((lesson) => (predicate ? predicate(lesson) : true))
        .map((lesson) => ({ lang, jlptLevel: level, lessonId: lesson.id }))
    )
  );
}

/** `{ lang, level, lessonId }` for every lesson (detail, vocabulary, listening). */
export const courseLessonParams = () => courseLessonParamsWhere();
/** Only lessons that have grammar points. */
export const courseGrammarParams = () => courseLessonParamsWhere(lessonHasGrammar);
/** Only lessons that have a reading passage. */
export const courseReadingParams = () => courseLessonParamsWhere(lessonHasReading);
/** Only lessons that contain kanji words (writing practice). */
export const courseWritingParams = () => courseLessonParamsWhere(lessonHasKanji);

/** `{ lang, track }` for every locale and kanji track. */
export function kanjiTrackParams() {
  return LOCALES.flatMap((lang) => kanjiTracks.map((track) => ({ lang, track: track.slug })));
}

/** `{ lang, track, lessonId }` for every kanji lesson. */
export function kanjiLessonParams() {
  return LOCALES.flatMap((lang) =>
    kanjiTracks.flatMap((track) =>
      track.lessons.map((lesson) => ({ lang, track: track.slug, lessonId: lesson.id }))
    )
  );
}
