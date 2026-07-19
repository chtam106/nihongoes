import { setRequestLocale } from 'next-intl/server';
import { toLocale } from '@/i18n/route-helpers.ts';
import type { Locale } from '@/i18n/translations.ts';

/**
 * Prime next-intl's request locale from the `[lang]` route param, then return
 * it. Every statically rendered Server Component page must call this - priming
 * only in the `[lang]` layout is NOT enough (the page falls back to dynamic
 * rendering), so this centralizes the one-liner instead of repeating
 * `const { lang } = await params; setRequestLocale(toLocale(lang))` per page.
 *
 * Server-only (imports `next-intl/server`); do not import from client code.
 */
export async function primePageLocale(params: Promise<{ lang: string }>): Promise<Locale> {
  const { lang } = await params;
  const locale = toLocale(lang);
  setRequestLocale(locale);

  return locale;
}
