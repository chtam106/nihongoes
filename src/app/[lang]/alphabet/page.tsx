import type { Metadata } from 'next';
import AlphabetPage from '@/features/alphabet/index.tsx';
import { getSeoMetadata } from '@/i18n/seo-meta.ts';
import { primePageLocale } from '@/i18n/server.ts';
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

  return getSeoMetadata('/alphabet', toLocale(lang));
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  await primePageLocale(params);

  return <AlphabetPage />;
}
