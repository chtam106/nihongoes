'use client';

import { useCallback, useEffect, useMemo, type ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { useLocation, useNavigate } from '@/i18n/navigation.tsx';
import {
  LOCALE_STORAGE_KEY,
  enTranslations,
  type Locale,
  type TranslationTree
} from '@/i18n/translations.ts';
import { viTranslations } from '@/i18n/translations-vi.ts';
import { LanguageContext } from '@/i18n/language-context.ts';
import { getLocaleFromPathname, stripLocalePrefix, withLocale } from '@/i18n/locale-routing.ts';
import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE } from '@/constants/site.ts';

// Both locales are bundled synchronously so statically pre-rendered pages ship
// the correct language in their HTML (crawlable, no post-hydration text swap).
// These trees are the next-intl message catalogs (ICU MessageFormat).
const messagesByLocale: Record<Locale, TranslationTree> = {
  en: enTranslations,
  vi: viTranslations
};

type LanguageProviderProps = {
  children: ReactNode;
};

/**
 * The active locale is derived from the URL (en at the root, vi under `/vi`),
 * so each language has its own crawlable URL. Switching language navigates to
 * the equivalent path in the other locale. The choice is mirrored to
 * localStorage purely as a hint for future visits.
 *
 * Translation lookup itself is delegated to next-intl (`NextIntlClientProvider`
 * + `useTranslations`); this provider only owns the locale + the
 * language-switch action, exposed via `LanguageContext`.
 */
export function LanguageProvider({ children }: LanguageProviderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const locale = getLocaleFromPathname(location.pathname);

  // Keep the document language in sync and remember the locale (from the URL).
  // localStorage is the durable backup; the cookie is what the server-side
  // middleware reads to redirect returning visitors to their language. Rewriting
  // the cookie on every visit gives it a rolling 1-year lifetime (and re-creates
  // it from the current locale if it had expired).
  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax`;
  }, [locale]);

  const setLocale = useCallback(
    (nextLocale: Locale) => {
      const logicalPath = stripLocalePrefix(location.pathname);
      const target = `${withLocale(logicalPath, nextLocale)}${location.search}${location.hash}`;
      // Replace so switching language does not add a history entry or reset scroll.
      navigate(target, { replace: true });
    },
    [location.pathname, location.search, location.hash, navigate]
  );

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return (
    <LanguageContext.Provider value={value}>
      <NextIntlClientProvider
        locale={locale}
        messages={messagesByLocale[locale]}
        // Match the previous behaviour: a missing key silently renders the key
        // itself instead of throwing (which would trip the global error boundary).
        onError={() => {}}
        getMessageFallback={({ key }) => key}
      >
        {children}
      </NextIntlClientProvider>
    </LanguageContext.Provider>
  );
}
