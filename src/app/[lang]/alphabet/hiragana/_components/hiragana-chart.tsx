'use client';

import { AlphabetChartPage } from '@/components/alphabet-chart';
import {
  hiraganaChartRows,
  hiraganaChouonRules,
  hiraganaYoonChartRows
} from '@/constants/alphabet-charts.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

export function HiraganaChart() {
  const { t } = useTranslation();

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
