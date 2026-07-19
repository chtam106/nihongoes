import {
  getCourse,
  lessonHasGrammar,
  lessonHasKanji,
  lessonHasReading
} from '@/constants/courses/index.ts';
import { COURSE_LEVELS } from '@/constants/courses/levels.ts';
import type { Lesson } from '@/constants/courses/types.ts';
import { kanjiTracks } from '@/constants/kanji/index.ts';
import { routing } from '@/i18n/routing.ts';
import type { Locale } from '@/i18n/translations.ts';

const LOCALES = routing.locales;

/**
 * Props for a route `page.tsx`. The `locale` param is always present; pass any
 * extra dynamic segments as the generic, e.g.
 * `PageProps<{ jlptLevel: string; lessonId: string }>`.
 */
export type PageProps<Extra extends Record<string, string> = Record<never, string>> = {
  params: Promise<{ locale: string } & Extra>;
};

export type LocaleParam = { locale: Locale };

/** Static params for the `[locale]` segment (both locales). */
export const localeParams: LocaleParam[] = LOCALES.map((locale) => ({ locale }));

/** Narrow a raw `[locale]` route param to a `Locale` (defaults to English). */
export function toLocale(locale: string): Locale {
  return locale === 'vi' ? 'vi' : 'en';
}

/** `{ locale, jlptLevel }` for every locale and course level (`[jlptLevel]` segment). */
export function courseLevelParams() {
  return LOCALES.flatMap((locale) => COURSE_LEVELS.map((level) => ({ locale, jlptLevel: level })));
}

function courseLessonParamsWhere(predicate?: (lesson: Lesson) => boolean) {
  return LOCALES.flatMap((locale) =>
    COURSE_LEVELS.flatMap((level) =>
      getCourse(level)
        .lessons.filter((lesson) => (predicate ? predicate(lesson) : true))
        .map((lesson) => ({ locale, jlptLevel: level, lessonId: lesson.id }))
    )
  );
}

/** `{ locale, level, lessonId }` for every lesson (detail, vocabulary, listening). */
export const courseLessonParams = () => courseLessonParamsWhere();
/** Only lessons that have grammar points. */
export const courseGrammarParams = () => courseLessonParamsWhere(lessonHasGrammar);
/** Only lessons that have a reading passage. */
export const courseReadingParams = () => courseLessonParamsWhere(lessonHasReading);
/** Only lessons that contain kanji words (writing practice). */
export const courseWritingParams = () => courseLessonParamsWhere(lessonHasKanji);

/** `{ locale, track }` for every locale and kanji track. */
export function kanjiTrackParams() {
  return LOCALES.flatMap((locale) => kanjiTracks.map((track) => ({ locale, track: track.slug })));
}

/** `{ locale, track, lessonId }` for every kanji lesson. */
export function kanjiLessonParams() {
  return LOCALES.flatMap((locale) =>
    kanjiTracks.flatMap((track) =>
      track.lessons.map((lesson) => ({ locale, track: track.slug, lessonId: lesson.id }))
    )
  );
}
