import type { Metadata } from 'next';
import { getSeoMetadata } from '@/i18n/seo-meta.ts';
import { langParams, toLocale } from '@/i18n/route-helpers.ts';
import { KatakanaChart } from './_components/katakana-chart.tsx';

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

  return getSeoMetadata('/alphabet/katakana', toLocale(lang));
}

export default function Page() {
  return <KatakanaChart />;
}
