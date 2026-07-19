import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from '@/i18n/routing.ts';
import { enTranslations, type Locale, type TranslationTree } from '@/i18n/translations.ts';
import { viTranslations } from '@/i18n/translations-vi.ts';

// Both catalogs are bundled statically so pre-rendered (SSG) pages resolve
// their messages at build time without any async data source.
const catalogs: Record<Locale, TranslationTree> = {
  en: enTranslations,
  vi: viTranslations
};

/**
 * Per-request next-intl config, consumed by the server APIs (`getTranslations`,
 * `getMessages`). The active locale comes from `requestLocale`, which each
 * `[lang]` layout/page primes via `setRequestLocale(lang)` so static rendering
 * is preserved. A missing message silently renders its key (matching the client
 * provider) instead of throwing and tripping the error boundary.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: catalogs[locale],
    onError: () => {},
    getMessageFallback: ({ key }) => key
  };
});
