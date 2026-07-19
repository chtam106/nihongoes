import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { Providers } from '@/components/providers';
import { routing } from '@/i18n/routing.ts';
import { langParams } from '@/i18n/route-helpers.ts';
import '@/index.css';

export function generateStaticParams() {
  return langParams;
}

type LangLayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

/**
 * Locale layout: renders the document (`<html lang>`), primes next-intl's request
 * locale (`setRequestLocale` -> Server Components stay static/SSG), and provides
 * the client i18n context from server-loaded messages (`getMessages`) plus the
 * app chrome. This is the standard next-intl App Router setup - the locale is
 * known from the `[lang]` segment, so nothing derives it on the client.
 */
export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  if (!hasLocale(routing.locales, lang)) {
    notFound();
  }

  setRequestLocale(lang);
  const messages = await getMessages();

  return (
    <html lang={lang}>
      <body>
        <AppRouterCacheProvider>
          <NextIntlClientProvider locale={lang} messages={messages}>
            <Providers>{children}</Providers>
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
