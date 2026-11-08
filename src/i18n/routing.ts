import { defineRouting } from 'next-intl/routing';
import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE } from '@/constants/site.ts';

/**
 * Single source of truth for locale routing. Mirrors the app's URL scheme:
 * English (default) at the root, Vietnamese under `/vi` (`localePrefix:
 * 'as-needed'` hides the default-locale prefix). `routing.locales` /
 * `routing.defaultLocale` are reused by the proxy, navigation, request
 * config, and static-param helpers.
 */
export const routing = defineRouting({
  locales: ['en', 'vi'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  // A session cookie disappears when the window closes, so a chosen locale
  // would fall back to English on the next visit.
  localeCookie: {
    name: LOCALE_COOKIE,
    maxAge: LOCALE_COOKIE_MAX_AGE
  }
});
