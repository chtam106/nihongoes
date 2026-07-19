import type { Metadata } from 'next';
import { getSeoMetadata } from '@/i18n/seo-meta.ts';
import { localeParams, toLocale } from '@/i18n/route-helpers.ts';
import { CombinedChart } from './_components/combined-chart.tsx';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return getSeoMetadata('/alphabet/combined', toLocale(locale));
}

export default function Page() {
  return <CombinedChart />;
}
