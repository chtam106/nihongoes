import { DEFAULT_LOCALE, type Locale } from '@/i18n/translations.ts';

export const LOCALES: readonly Locale[] = ['en', 'vi'];

/**
 * The default locale (English) lives at the root (`/...`); the other locale
 * is carried as a URL path prefix (`/vi/...`). This gives each language a
 * distinct, crawlable URL for SEO.
 */
export const PREFIXED_LOCALE: Locale = 'vi';
const LOCALE_PREFIX = `/${PREFIXED_LOCALE}`;

/** Derive the active locale from a (basename-stripped) pathname. */
export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname === LOCALE_PREFIX || pathname.startsWith(`${LOCALE_PREFIX}/`)) {
    return PREFIXED_LOCALE;
  }

  return DEFAULT_LOCALE;
}

/**
 * Remove any locale prefix, returning the locale-agnostic ("logical") path.
 *
 * This strips the default locale prefix (`/en`) too, not just `/vi`: on the
 * client English lives at the clean root (`/kanji`), but during static prerender
 * the middleware rewrite means English pages render under the internal `/en/...`
 * path. Stripping both keeps SSR and client output identical (e.g. active-nav
 * state), avoiding hydration mismatches.
 */
export function stripLocalePrefix(pathname: string): string {
  for (const locale of LOCALES) {
    const prefix = `/${locale}`;

    if (pathname === prefix) {
      return '/';
    }

    if (pathname.startsWith(`${prefix}/`)) {
      return pathname.slice(prefix.length);
    }
  }

  return pathname;
}

/** Prefix a logical path for the given locale (en stays at root, vi gets `/vi`). */
export function withLocale(logicalPath: string, locale: Locale): string {
  const path = logicalPath.startsWith('/') ? logicalPath : `/${logicalPath}`;

  if (locale === DEFAULT_LOCALE) {
    return path;
  }

  return path === '/' ? LOCALE_PREFIX : `${LOCALE_PREFIX}${path}`;
}
