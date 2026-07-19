import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { AlphabetChartPage } from '@/components/alphabet-chart';
import {
  katakanaChartRows,
  katakanaChouonExamples,
  katakanaYoonChartRows
} from '@/constants/alphabet-charts.ts';
import { getSeoMetadata } from '@/i18n/seo-meta.ts';
import { primePageLocale } from '@/i18n/server.ts';
import { localeParams, toLocale } from '@/i18n/route-helpers.ts';

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

  return getSeoMetadata('/alphabet/katakana', toLocale(locale));
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  await primePageLocale(params);
  const t = await getTranslations();

  return (
    <AlphabetChartPage
      script="katakana"
      title={t('nav.katakana')}
      description={t('alphabet.katakanaPageDescription')}
      chartRows={katakanaChartRows}
      yoonChartRows={katakanaYoonChartRows}
      chouonExamples={katakanaChouonExamples}
    />
  );
}
