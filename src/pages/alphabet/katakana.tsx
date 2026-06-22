import { AlphabetChartPage } from '@/pages/alphabet/alphabet-chart.tsx'
import { katakanaChartRows, katakanaYoonChartRows } from '@/constants/alphabet-charts.ts'

function KatakanaPage() {
  return (
    <AlphabetChartPage
      title="Katakana"
      description="Learn the katakana alphabet (カタカナ)."
      chartRows={katakanaChartRows}
      yoonChartRows={katakanaYoonChartRows}
    />
  )
}

export default KatakanaPage
