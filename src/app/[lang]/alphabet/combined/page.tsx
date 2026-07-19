import type { Metadata } from 'next';
import { getSeoMetadata } from '@/i18n/seo-meta.ts';
import { langParams, toLocale } from '@/i18n/route-helpers.ts';
import { CombinedChart } from './_components/combined-chart.tsx';

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

  return getSeoMetadata('/alphabet/combined', toLocale(lang));
}

export default function Page() {
  return <CombinedChart />;
}
