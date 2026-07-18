'use client';

import { useCallback, useEffect, useMemo, type ReactNode } from 'react';
import { useLocation, useNavigate } from '@/i18n/navigation.tsx';
import {
  LOCALE_STORAGE_KEY,
  enTranslations,
  type Locale,
  type TranslationTree
} from '@/i18n/translations.ts';
import { viTranslations } from '@/i18n/translations-vi.ts';
import { LanguageContext, type TranslateFn } from '@/i18n/language-context.ts';
import { getLocaleFromPathname, stripLocalePrefix, withLocale } from '@/i18n/locale-routing.ts';

// Both locales are bundled synchronously so statically pre-rendered pages ship
// the correct language in their HTML (crawlable, no post-hydration text swap).
const translationsByLocale: Record<Locale, TranslationTree> = {
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

function interpolate(template: string, params?: Record<string, string | number>) {
  if (!params) {
    return template;
  }

  return template.replace(/\{\{(\w+)\}\}/g, (_, name: string) => String(params[name] ?? ''));
}

type LanguageProviderProps = {
  children: ReactNode;
};

/**
 * The active locale is derived from the URL (en at the root, vi under `/vi`),
 * so each language has its own crawlable URL. Switching language navigates to
 * the equivalent path in the other locale. The choice is mirrored to
 * localStorage purely as a hint for future visits.
 */
export function LanguageProvider({ children }: LanguageProviderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const locale = getLocaleFromPathname(location.pathname);

  // Keep the document language in sync and remember the locale (read from the
  // URL) for potential future use.
  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
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

  const t = useCallback<TranslateFn>(
    (key, params) => {
      const template =
        getNestedValue(translationsByLocale[locale], key) ??
        getNestedValue(enTranslations, key) ??
        key;

      return interpolate(template, params);
    },
    [locale]
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
