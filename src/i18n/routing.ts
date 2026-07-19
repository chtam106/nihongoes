import { defineRouting } from 'next-intl/routing';
import { DEFAULT_LOCALE } from '@/i18n/translations.ts';
import { LOCALES } from '@/i18n/locale-routing.ts';

/**
 * Shared next-intl routing definition. Mirrors the app's URL scheme: English is
 * the default and lives at the root, Vietnamese is carried under `/vi`
 * (`localePrefix: 'as-needed'` hides the default-locale prefix). This is the
 * single source of truth for the server request config.
 */
export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'as-needed'
});
