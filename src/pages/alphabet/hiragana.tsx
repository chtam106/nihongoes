import { AlphabetChartPage } from '@/pages/alphabet/alphabet-chart.tsx'
import { hiraganaChartRows, hiraganaYoonChartRows } from '@/constants/alphabet-charts.ts'
import { useTranslation } from '@/i18n/context.tsx'

function HiraganaPage() {
  const { t } = useTranslation()

  return (
    <AlphabetChartPage
      title={t('nav.hiragana')}
      description={t('alphabet.hiraganaPageDescription')}
      chartRows={hiraganaChartRows}
      yoonChartRows={hiraganaYoonChartRows}
    />
  )
}

export default HiraganaPage
