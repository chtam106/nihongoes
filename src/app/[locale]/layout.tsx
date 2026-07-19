import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { Providers } from '@/components/providers';
import { routing } from '@/i18n/routing.ts';
import { localeParams } from '@/i18n/route-helpers.ts';
import '@/index.css';

export function generateStaticParams() {
  return localeParams;
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

/**
 * Locale layout: renders the document (`<html lang>`), primes next-intl's request
 * locale (`setRequestLocale` -> Server Components stay static/SSG), and provides
 * the client i18n context from server-loaded messages (`getMessages`) plus the
 * app chrome. This is the standard next-intl App Router setup - the locale is
 * known from the `[locale]` segment, so nothing derives it on the client.
 */
export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <AppRouterCacheProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Providers>{children}</Providers>
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
