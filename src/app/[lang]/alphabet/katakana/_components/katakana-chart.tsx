'use client';

import { AlphabetChartPage } from '@/components/alphabet-chart';
import {
  katakanaChartRows,
  katakanaChouonExamples,
  katakanaYoonChartRows
} from '@/constants/alphabet-charts.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

export function KatakanaChart() {
  const { t } = useTranslation();

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
