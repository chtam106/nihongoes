import { setRequestLocale } from 'next-intl/server';
import { toLocale } from '@/i18n/route-helpers.ts';
import type { Locale } from '@/i18n/translations.ts';

/**
 * Prime next-intl's request locale from the `[locale]` route param, then return
 * it. Every statically rendered Server Component page must call this - priming
 * only in the `[locale]` layout is NOT enough (the page falls back to dynamic
 * rendering), so this centralizes the one-liner instead of repeating
 * `const { locale } = await params; setRequestLocale(toLocale(locale))` per page.
 *
 * Server-only (imports `next-intl/server`); do not import from client code.
 */
export async function primePageLocale(params: Promise<{ locale: string }>): Promise<Locale> {
  const { locale: raw } = await params;
  const locale = toLocale(raw);
  setRequestLocale(locale);

  return locale;
}
