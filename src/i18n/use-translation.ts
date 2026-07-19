'use client';

import { useCallback } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation.tsx';
import type { Locale } from '@/i18n/translations.ts';
import type { TranslateFn } from '@/i18n/language-context.ts';

/**
 * App-facing i18n hook, backed entirely by next-intl. `t` is the translator
 * (`useTranslations`, ICU MessageFormat + nested dot keys), `locale` comes from
 * `useLocale`, and `setLocale` navigates to the current path in the other locale
 * via next-intl's locale-aware router. Kept so call sites stay on the stable
 * `{ t, locale, setLocale }` shape.
 */
export function useTranslation() {
  const translate = useTranslations();
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = useCallback(
    (nextLocale: Locale) => {
      // Replace so switching language does not add a history entry.
      router.replace(pathname, { locale: nextLocale });
    },
    [router, pathname]
  );

  const t = useCallback<TranslateFn>((key, params) => translate(key, params), [translate]);

  return { locale, setLocale, t };
}
