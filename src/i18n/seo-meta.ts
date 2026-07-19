import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { isCourseLevel } from '@/constants/courses/levels.ts';
import { getCourseSeo } from '@/constants/courses/seo.ts';
import { getSeoRouteKey, type SeoRouteKey } from '@/constants/routes.ts';
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/constants/site.ts';
import type { Locale } from '@/i18n/translations.ts';
import { toLocale } from '@/i18n/route-helpers.ts';
import { getPathname } from '@/i18n/navigation.tsx';

type SeoText = {
  title: string;
  description: string;
};

async function getSeoText(routeKey: SeoRouteKey, locale: Locale): Promise<SeoText> {
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
  const text = await getSeoText(routeKey, locale);
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
