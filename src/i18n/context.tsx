'use client';

import { useEffect, type ReactNode } from 'react';
// Raw pathname (keeps the /vi prefix) so the active locale can be derived; the
// next-intl `usePathname` shim returns the locale-stripped logical path.
import { usePathname } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import {
  LOCALE_STORAGE_KEY,
  enTranslations,
  type Locale,
  type TranslationTree
} from '@/i18n/translations.ts';
import { viTranslations } from '@/i18n/translations-vi.ts';
import { getLocaleFromPathname } from '@/i18n/locale-routing.ts';
import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE } from '@/constants/site.ts';

// Both catalogs are bundled synchronously so statically pre-rendered pages ship
// the correct language in their HTML (crawlable, no post-hydration text swap).
const messagesByLocale: Record<Locale, TranslationTree> = {
  en: enTranslations,
  vi: viTranslations
};

type LanguageProviderProps = {
  children: ReactNode;
};

/**
 * Client i18n provider: derives the active locale from the URL (en at the root,
 * vi under `/vi`) and feeds next-intl's `NextIntlClientProvider`. Language
 * switching lives in `useTranslation().setLocale` (next-intl router). The locale
 * is mirrored to the document lang, localStorage, and the cookie the middleware
 * reads to redirect returning visitors.
 */
export function LanguageProvider({ children }: LanguageProviderProps) {
  const locale = getLocaleFromPathname(usePathname() ?? '/');

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax`;
  }, [locale]);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messagesByLocale[locale]}
      onError={() => {}}
      getMessageFallback={({ key }) => key}
    >
      {children}
    </NextIntlClientProvider>
  );
}
