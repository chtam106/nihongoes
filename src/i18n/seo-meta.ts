import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { isCourseLevel } from '@/constants/courses/levels.ts';
import { getCourseSeo } from '@/constants/courses/seo.ts';
import { KANJI_TRACK_META } from '@/constants/kanji/track-meta.ts';
import { getSeoRouteKey, type SeoRouteKey } from '@/constants/routes.ts';
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/constants/site.ts';
import type { Locale } from '@/i18n/translations.ts';
import { toLocale } from '@/i18n/route-helpers.ts';
import { getPathname } from '@/i18n/navigation.tsx';

type SeoText = {
  title: string;
  description: string;
};

const COURSE_LESSON_PATH =
  /^\/(n5|n4|n3|n2|n1|frontend)\/(lesson-\d+)(?:\/(vocabulary|grammar|reading|writing))?$/;
const COURSE_EXTRA_PATH = /^\/(n5|n4|n3|n2|n1|frontend)\/(intro|reference)$/;
const KANJI_PAGE_PATH = /^\/kanji\/([^/]+)(?:\/([^/]+)(?:\/(quiz|writing))?)?$/;
const KANJI_TRACK_SLUGS = new Set(KANJI_TRACK_META.map((track) => track.slug));

type AlphabetPageSeo = {
  titleKey: string;
  descriptionKey: string;
  exercise?: boolean;
};

const ALPHABET_PAGES: Record<string, AlphabetPageSeo> = {
  '/alphabet/hiragana': {
    titleKey: 'nav.hiragana',
    descriptionKey: 'alphabet.hiraganaPageDescription'
  },
  '/alphabet/katakana': {
    titleKey: 'nav.katakana',
    descriptionKey: 'alphabet.katakanaPageDescription'
  },
  '/alphabet/combined': {
    titleKey: 'nav.combined',
    descriptionKey: 'alphabet.combinedPageDescription'
  },
  '/alphabet/exercise': {
    titleKey: 'exercise.title',
    descriptionKey: 'exercise.hubSubtitle'
  },
  '/alphabet/exercise/romaji': {
    titleKey: 'exercise.guessRomaji',
    descriptionKey: 'exercise.romajiDescription',
    exercise: true
  },
  '/alphabet/exercise/character': {
    titleKey: 'exercise.chooseCharacter',
    descriptionKey: 'exercise.characterDescription',
    exercise: true
  },
  '/alphabet/exercise/script-pair': {
    titleKey: 'exercise.scriptPair',
    descriptionKey: 'exercise.scriptPairDescription',
    exercise: true
  },
  '/alphabet/exercise/writing': {
    titleKey: 'exercise.writing',
    descriptionKey: 'exercise.writingDescription',
    exercise: true
  },
  '/alphabet/exercise/sentence': {
    titleKey: 'exercise.sentenceTitle',
    descriptionKey: 'exercise.sentenceDescription',
    exercise: true
  }
};

async function getCourseExtraSeo(
  logicalPath: string,
  locale: Locale
): Promise<SeoText | undefined> {
  const match = COURSE_EXTRA_PATH.exec(logicalPath);

  if (!match) {
    return undefined;
  }

  const [, level, page] = match;

  if (!isCourseLevel(level)) {
    return undefined;
  }

  const { getCourse } = await import('@/constants/courses/index.ts');
  const prefix = `JLPT ${getCourse(level).code}`;
  const content =
    page === 'intro' && level === 'n5'
      ? (await import('@/constants/courses/n5/intro.ts')).n5Intro
      : page === 'reference' && level === 'n5'
        ? (await import('@/constants/courses/n5/reference/index.ts')).n5Reference
        : undefined;

  if (!content) {
    return undefined;
  }

  return {
    title: `${SITE_NAME} | ${prefix} | ${content.title[locale]}`,
    description: content.intro[locale]
  };
}

async function getCourseLessonSeo(
  logicalPath: string,
  locale: Locale
): Promise<SeoText | undefined> {
  const match = COURSE_LESSON_PATH.exec(logicalPath);

  if (!match) {
    return undefined;
  }

  const [, level, lessonId, section] = match;

  if (!isCourseLevel(level)) {
    return undefined;
  }

  const { getCourse, getLesson } = await import('@/constants/courses/index.ts');
  const lesson = getLesson(level, lessonId);

  if (!lesson) {
    return undefined;
  }

  const t = await getTranslations({ locale, namespace: 'course' });
  const lessonHeading = `${t('lessonLabel', { number: lesson.number })}: ${lesson.title[locale]}`;
  const heading = section ? `${t(section)} | ${lessonHeading}` : lessonHeading;

  return {
    title: `${SITE_NAME} | JLPT ${getCourse(level).code} | ${heading}`,
    description: lesson.focus[locale]
  };
}

async function getKanjiPageSeo(logicalPath: string, locale: Locale): Promise<SeoText | undefined> {
  if (!logicalPath.startsWith('/kanji/')) {
    return undefined;
  }

  const t = await getTranslations({ locale, namespace: 'kanji' });

  if (logicalPath === '/kanji/radicals') {
    return {
      title: `${SITE_NAME} | ${t('overviewTitle')} | ${t('radicalsTitle')}`,
      description: t('radicalsIntro')
    };
  }

  if (logicalPath === '/kanji/radicals/quiz') {
    return {
      title: `${SITE_NAME} | ${t('overviewTitle')} | ${t('radicalsQuizTitle')}`,
      description: t('radicalsIntro')
    };
  }

  const match = KANJI_PAGE_PATH.exec(logicalPath);

  if (!match) {
    return undefined;
  }

  const [, trackSlug, lessonId, section] = match;
  const track = KANJI_TRACK_META.find((item) => item.slug === trackSlug);

  if (!track || !KANJI_TRACK_SLUGS.has(trackSlug)) {
    return undefined;
  }

  if (!lessonId) {
    return {
      title: `${SITE_NAME} | ${t('overviewTitle')} | ${track.name[locale]}`,
      description: track.intro[locale]
    };
  }

  const { getKanjiLesson } = await import('@/constants/kanji/tracks.ts');
  const lesson = getKanjiLesson(track.slug, lessonId);

  if (!lesson) {
    return undefined;
  }

  const lessonHeading = `${t('lessonLabel', { number: lesson.number })}: ${lesson.title[locale]}`;
  const sectionTitle =
    section === 'quiz' ? t('quizTitle') : section === 'writing' ? t('writing') : undefined;
  const heading = sectionTitle ? `${sectionTitle} | ${lessonHeading}` : lessonHeading;

  return {
    title: `${SITE_NAME} | ${track.name[locale]} | ${heading}`,
    description: track.intro[locale]
  };
}

async function getAlphabetPageSeo(
  logicalPath: string,
  locale: Locale
): Promise<SeoText | undefined> {
  const page = ALPHABET_PAGES[logicalPath];

  if (!page) {
    return undefined;
  }

  const t = await getTranslations({ locale });
  const exercise = page.exercise ? ` | ${t('exercise.title')}` : '';

  return {
    title: `${SITE_NAME} | ${t('alphabet.title')}${exercise} | ${t(page.titleKey)}`,
    description: t(page.descriptionKey)
  };
}

async function getSeoText(
  routeKey: SeoRouteKey,
  locale: Locale,
  logicalPath: string
): Promise<SeoText> {
  const courseExtraSeo = await getCourseExtraSeo(logicalPath, locale);

  if (courseExtraSeo) {
    return courseExtraSeo;
  }

  const courseLessonSeo = await getCourseLessonSeo(logicalPath, locale);

  if (courseLessonSeo) {
    return courseLessonSeo;
  }

  const kanjiPageSeo = await getKanjiPageSeo(logicalPath, locale);

  if (kanjiPageSeo) {
    return kanjiPageSeo;
  }

  const alphabetPageSeo = await getAlphabetPageSeo(logicalPath, locale);

  if (alphabetPageSeo) {
    return alphabetPageSeo;
  }

  if (isCourseLevel(routeKey)) {
    const courseSeo = getCourseSeo(routeKey);

    return {
      title: `${SITE_NAME} | ${courseSeo.seoTitle[locale]}`,
      description: courseSeo.seoDescription[locale]
    };
  }

  const t = await getTranslations({ locale, namespace: 'seo' });
  const description = t(`${routeKey}.description`);

  if (routeKey === 'home') {
    return { title: `${SITE_NAME} | ${SITE_TAGLINE}`, description };
  }

  return { title: `${SITE_NAME} | ${t(`${routeKey}.title`)}`, description };
}

function buildUrl(logicalPath: string, locale: Locale) {
  const path = getPathname({ href: logicalPath, locale });

  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

const OG_IMAGE = `${SITE_URL}/og-image.png?v=20260626`;

type MetadataParams = { locale: string } & Record<string, string>;

/**
 * Factory for a route's `generateMetadata`, so pages don't each repeat the
 * `await params` + `toLocale` + `getSeoMetadata` boilerplate. Pass a static
 * logical path, or a function deriving it from the route params.
 *
 * @example export const generateMetadata = createMetadata('/alphabet');
 * @example export const generateMetadata = createMetadata((p) => lessonPath(p.jlptLevel as CourseLevel, p.lessonId));
 */
export function createMetadata(path: string | ((params: MetadataParams) => string)) {
  return async function generateMetadata({
    params
  }: {
    params: Promise<MetadataParams>;
  }): Promise<Metadata> {
    const resolved = await params;
    const logicalPath = typeof path === 'function' ? path(resolved) : path;

    return getSeoMetadata(logicalPath, toLocale(resolved.locale));
  };
}

/** Compute Next.js `Metadata` for a locale-agnostic ("logical") path + locale. */
export async function getSeoMetadata(logicalPath: string, locale: Locale): Promise<Metadata> {
  const routeKey = getSeoRouteKey(logicalPath);
  const text = await getSeoText(routeKey, locale, logicalPath);
  const canonicalUrl = buildUrl(logicalPath, locale);
  const viUrl = buildUrl(logicalPath, 'vi');
  const enUrl = buildUrl(logicalPath, 'en');
  const ogLocale = locale === 'vi' ? 'vi_VN' : 'en_US';

  return {
    title: text.title,
    description: text.description,
    applicationName: SITE_NAME,
    robots:
      routeKey === 'notFound'
        ? { index: false, follow: true }
        : { index: true, follow: true, 'max-image-preview': 'large' },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        vi: viUrl,
        en: enUrl,
        'x-default': enUrl
      }
    },
    openGraph: {
      title: text.title,
      description: text.description,
      url: canonicalUrl,
      type: 'website',
      siteName: SITE_NAME,
      locale: ogLocale,
      alternateLocale: locale === 'vi' ? 'en_US' : 'vi_VN',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }]
    },
    twitter: {
      card: 'summary_large_image',
      title: text.title,
      description: text.description,
      images: [OG_IMAGE]
    }
  };
}
