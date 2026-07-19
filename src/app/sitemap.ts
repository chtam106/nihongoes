import type { MetadataRoute } from 'next';
import { routes, SITEMAP_PATHS } from '@/constants/routes.ts';
import { COURSE_SITEMAP_PATHS } from '@/constants/courses/index.ts';
import { KANJI_SITEMAP_PATHS } from '@/constants/kanji/tracks.ts';
import { SITE_URL } from '@/constants/site.ts';
import { getPathname } from '@/i18n/navigation.tsx';

export const dynamic = 'force-static';

const LOGICAL_PATHS = Array.from(
  new Set([...SITEMAP_PATHS, ...COURSE_SITEMAP_PATHS, ...KANJI_SITEMAP_PATHS])
);

function absoluteUrl(logicalPath: string, locale: 'vi' | 'en') {
  const path = getPathname({ href: logicalPath, locale });

  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

function priorityFor(logicalPath: string) {
  if (logicalPath === routes.home) {
    return 1;
  }

  return logicalPath === routes.alphabet.index ? 0.9 : 0.8;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return LOGICAL_PATHS.flatMap((logicalPath) => {
    const viUrl = absoluteUrl(logicalPath, 'vi');
    const enUrl = absoluteUrl(logicalPath, 'en');
    const priority = priorityFor(logicalPath);
    const changeFrequency = logicalPath.startsWith(`${routes.alphabet.exercise.index}/`)
      ? 'monthly'
      : 'weekly';
    const languages = { vi: viUrl, en: enUrl, 'x-default': enUrl };

    return [enUrl, viUrl].map((url) => ({
      url,
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages }
    }));
  });
}
