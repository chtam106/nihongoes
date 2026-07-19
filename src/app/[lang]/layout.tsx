import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing.ts';
import { langParams } from '@/i18n/route-helpers.ts';

export function generateStaticParams() {
  return langParams;
}

type LangLayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

/**
 * Layout for the `[lang]` segment. It primes next-intl's request locale from the
 * URL segment (`setRequestLocale`) so Server Components under this tree can call
 * `getTranslations`/`getLocale` while staying statically rendered (SSG). It adds
 * no markup - the app chrome + client i18n provider live in the root layout.
 */
export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  if (!hasLocale(routing.locales, lang)) {
    notFound();
  }

  setRequestLocale(lang);

  return children;
}
