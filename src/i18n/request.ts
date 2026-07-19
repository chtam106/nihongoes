import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from '@/i18n/routing.ts';
import type { Locale, TranslationTree } from '@/types/i18n.ts';
import { enMessages } from '@/i18n/messages/en/index.ts';
import { viMessages } from '@/i18n/messages/vi/index.ts';

// Both catalogs are bundled statically so pre-rendered (SSG) pages resolve
// their messages at build time without any async data source.
const catalogs: Record<Locale, TranslationTree> = {
  en: enMessages,
  vi: viMessages
};

/**
 * Per-request next-intl config, consumed by the server APIs (`getTranslations`,
 * `getMessages`). The active locale comes from `requestLocale`, which each
 * `[locale]` layout/page primes via `setRequestLocale(locale)` so static rendering
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
