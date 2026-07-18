import type { Metadata } from 'next';
import { isCourseLevel } from '@/constants/courses/levels.ts';
import { getCourseSeo } from '@/constants/courses/seo.ts';
import { getSeoRouteKey, type SeoRouteKey } from '@/constants/routes.ts';
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/constants/site.ts';
import { enTranslations, type Locale, type TranslationTree } from '@/i18n/translations.ts';
import { viTranslations } from '@/i18n/translations-vi.ts';
import { withLocale } from '@/i18n/locale-routing.ts';

const trees: Record<Locale, TranslationTree> = {
  en: enTranslations,
  vi: viTranslations
};

function getNestedValue(tree: TranslationTree, key: string): string | undefined {
  const value = key.split('.').reduce<unknown>((current, part) => {
    if (current && typeof current === 'object' && part in current) {
      return (current as Record<string, unknown>)[part];
    }

    return undefined;
  }, tree);

  return typeof value === 'string' ? value : undefined;
}

function translate(locale: Locale, key: string): string {
  return getNestedValue(trees[locale], key) ?? getNestedValue(enTranslations, key) ?? key;
}

type SeoText = {
  title: string;
  description: string;
};

function getSeoText(routeKey: SeoRouteKey, locale: Locale): SeoText {
  if (isCourseLevel(routeKey)) {
    const courseSeo = getCourseSeo(routeKey);

    return {
      title: `${SITE_NAME} | ${courseSeo.seoTitle[locale]}`,
      description: courseSeo.seoDescription[locale]
    };
  }

  const description = translate(locale, `seo.${routeKey}.description`);

  if (routeKey === 'home') {
    return { title: `${SITE_NAME} | ${SITE_TAGLINE}`, description };
  }

  return { title: `${SITE_NAME} | ${translate(locale, `seo.${routeKey}.title`)}`, description };
}

function buildUrl(logicalPath: string, locale: Locale) {
  const path = withLocale(logicalPath, locale);

  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

const OG_IMAGE = `${SITE_URL}/og-image.png?v=20260626`;

/** Compute Next.js `Metadata` for a locale-agnostic ("logical") path + locale. */
export function getSeoMetadata(logicalPath: string, locale: Locale): Metadata {
  const routeKey = getSeoRouteKey(logicalPath);
  const text = getSeoText(routeKey, locale);
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

/** JSON-LD structured data for a logical path + locale (rendered as a script). */
export function getStructuredData(logicalPath: string, locale: Locale): unknown {
  const routeKey = getSeoRouteKey(logicalPath);
  const text = getSeoText(routeKey, locale);
  const canonicalUrl = buildUrl(logicalPath, locale);

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: text.title,
    description: text.description,
    url: canonicalUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL
    },
    inLanguage: ['en', 'vi']
  };

  if (routeKey !== 'home') {
    return webPage;
  }

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      description: text.description,
      inLanguage: ['en', 'vi']
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: SITE_NAME,
      url: SITE_URL,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      },
      description: text.description,
      inLanguage: ['en', 'vi']
    },
    webPage
  ];
}
