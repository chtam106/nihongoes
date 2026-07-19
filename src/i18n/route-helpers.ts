import {
  getCourse,
  lessonHasGrammar,
  lessonHasKanji,
  lessonHasReading
} from '@/constants/courses/index.ts';
import { COURSE_LEVELS } from '@/constants/courses/levels.ts';
import type { Lesson } from '@/constants/courses/types.ts';
import { kanjiTracks } from '@/constants/kanji/tracks.ts';
import { routing } from '@/i18n/routing.ts';
import type { Locale } from '@/i18n/translations.ts';

/**
 * When building only for a Lighthouse sample (`LH_SAMPLE=1`, set by
 * `scripts/lighthouse.mjs`), pre-render just the representative pages the audit
 * actually visits - English only, the first course level + lesson, the first
 * kanji track + lesson - instead of the full ~1400-page site. This keeps the
 * audit build fast. Guarded by the env var, so production builds are
 * unaffected; `dynamicParams = false` makes the un-generated pages 404, which
 * the audit script skips.
 */
const LH_SAMPLE = process.env.LH_SAMPLE === '1';
const LOCALES = LH_SAMPLE ? (['en'] as const) : routing.locales;
const sample = <T>(items: readonly T[]): readonly T[] => (LH_SAMPLE ? items.slice(0, 1) : items);

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
  return LOCALES.flatMap((locale) =>
    sample(COURSE_LEVELS).map((level) => ({ locale, jlptLevel: level }))
  );
}

function courseLessonParamsWhere(predicate?: (lesson: Lesson) => boolean) {
  return LOCALES.flatMap((locale) =>
    sample(COURSE_LEVELS).flatMap((level) =>
      sample(
        getCourse(level).lessons.filter((lesson) => (predicate ? predicate(lesson) : true))
      ).map((lesson) => ({ locale, jlptLevel: level, lessonId: lesson.id }))
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
  return LOCALES.flatMap((locale) =>
    sample(kanjiTracks).map((track) => ({ locale, track: track.slug }))
  );
}

/** `{ locale, track, lessonId }` for every kanji lesson. */
export function kanjiLessonParams() {
  return LOCALES.flatMap((locale) =>
    sample(kanjiTracks).flatMap((track) =>
      sample(track.lessons).map((lesson) => ({ locale, track: track.slug, lessonId: lesson.id }))
    )
  );
}
