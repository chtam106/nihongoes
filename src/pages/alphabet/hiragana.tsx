import { AlphabetChartPage } from '@/pages/alphabet/alphabet-chart.tsx'
import { hiraganaChartRows, hiraganaYoonChartRows } from '@/constants/alphabet-charts.ts'

function HiraganaPage() {
  return (
    <AlphabetChartPage
      title="Hiragana"
      description="Learn the hiragana alphabet (ひらがな)."
      chartRows={hiraganaChartRows}
      yoonChartRows={hiraganaYoonChartRows}
    />
  )
}

export default HiraganaPage
