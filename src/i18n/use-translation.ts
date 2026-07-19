'use client';

import { useCallback, useContext } from 'react';
import { useTranslations } from 'next-intl';
import { LanguageContext, type TranslateFn } from '@/i18n/language-context.ts';

/**
 * App-facing i18n hook. Locale + the language-switch action come from
 * `LanguageContext`; the `t` translator is backed by next-intl's
 * `useTranslations` (ICU MessageFormat, nested dot keys). Keeping this wrapper
 * lets every call site stay on the stable `{ t, locale, setLocale }` shape.
 */
export function useTranslation() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useTranslation must be used within LanguageProvider');
  }

  const translate = useTranslations();

  const t = useCallback<TranslateFn>((key, params) => translate(key, params), [translate]);

  return { locale: context.locale, setLocale: context.setLocale, t };
}
