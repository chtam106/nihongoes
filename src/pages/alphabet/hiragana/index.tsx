import { AlphabetChartPage } from '@/pages/alphabet/alphabet-chart.tsx';
import {
  hiraganaChartRows,
  hiraganaChouonExamples,
  hiraganaYoonChartRows
} from '@/constants/alphabet-charts.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

function HiraganaPage() {
  const { t } = useTranslation();

  return (
    <AlphabetChartPage
      script="hiragana"
      title={t('nav.hiragana')}
      description={t('alphabet.hiraganaPageDescription')}
      chartRows={hiraganaChartRows}
      yoonChartRows={hiraganaYoonChartRows}
      chouonExamples={hiraganaChouonExamples}
    />
  );
}

export default HiraganaPage;
