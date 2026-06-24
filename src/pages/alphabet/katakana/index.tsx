import { AlphabetChartPage } from '@/pages/alphabet/alphabet-chart.tsx';
import {
  katakanaChartRows,
  katakanaChouonExamples,
  katakanaYoonChartRows
} from '@/constants/alphabet-charts.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

function KatakanaPage() {
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

export default KatakanaPage;
