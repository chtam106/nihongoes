import { getTranslations } from 'next-intl/server';
import { AlphabetChartPage } from '@/components/alphabet-chart';
import {
  hiraganaChartRows,
  hiraganaChouonRules,
  hiraganaYoonChartRows
} from '@/constants/alphabet-charts.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { primePageLocale } from '@/i18n/server.ts';
import { localeParams } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata('/alphabet/hiragana');

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  await primePageLocale(params);
  const t = await getTranslations();

  return (
    <AlphabetChartPage
      script="hiragana"
      title={t('nav.hiragana')}
      description={t('alphabet.hiraganaPageDescription')}
      chartRows={hiraganaChartRows}
      yoonChartRows={hiraganaYoonChartRows}
      chouonRules={hiraganaChouonRules}
    />
  );
}
