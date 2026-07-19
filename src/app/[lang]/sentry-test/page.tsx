import type { Metadata } from 'next';
import SentryTestPage from '@/features/sentry-test/index.tsx';
import { getSeoMetadata } from '@/i18n/seo-meta.ts';
import { langParams, toLocale } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return langParams;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return getSeoMetadata('/sentry-test', toLocale(lang));
}

export default function Page() {
  return <SentryTestPage />;
}
