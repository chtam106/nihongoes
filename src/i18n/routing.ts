import { defineRouting } from 'next-intl/routing';

/**
 * Single source of truth for locale routing. Mirrors the app's URL scheme:
 * English (default) at the root, Vietnamese under `/vi` (`localePrefix:
 * 'as-needed'` hides the default-locale prefix). `routing.locales` /
 * `routing.defaultLocale` are reused by the middleware, navigation, request
 * config, and static-param helpers.
 */
export const routing = defineRouting({
  locales: ['en', 'vi'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});
