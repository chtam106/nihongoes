'use client';

import { Box, Typography } from '@mui/material';
import type { ChouonExample } from '@/constants/alphabet-charts.ts';
import { Heading } from '@/components/heading';
import { HintText } from '@/components/hint-text';
import { playKanaAudio } from '@/utils/kana-audio.ts';
import { KanaDisplay } from '@/components/kana-display';
import { PageContainer } from '@/components/page-container';
import { SpeakableSurface } from '@/components/speakable-surface';
import { CellButton, ChartBlock, GojuonGrid } from '@/components/gojuon-grid';
import {
  VOWEL_HEADERS,
  YOON_HEADERS,
  consonantLabel,
  firstCell,
  getVoicedDescription,
  getYoonDescription,
  toYoonGridRows,
  type AlphabetCell,
  type AlphabetChartRow,
  type GridRow
} from '@/constants/gojuon.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { getChartSectionLabels } from '@/i18n/translations.ts';

export type { AlphabetCell, AlphabetChartRow } from '@/constants/gojuon.ts';

function toSeionRows(rows: AlphabetChartRow[]): GridRow<AlphabetCell>[] {
  return rows
    .filter((row) => firstCell(row.seion))
    .map((row) => ({ label: consonantLabel(row.seion), cells: row.seion }));
}

/** Dakuten rows (g/z/d/b) followed by handakuten rows (p), each a full row. */
function toVoicedRows(rows: AlphabetChartRow[]): GridRow<AlphabetCell>[] {
  const dakuten = rows
    .filter((row) => row.dakuten && firstCell(row.dakuten))
    .map((row) => ({ label: consonantLabel(row.dakuten!), cells: row.dakuten! }));
  const handakuten = rows
    .filter((row) => row.handakuten && firstCell(row.handakuten))
    .map((row) => ({ label: consonantLabel(row.handakuten!), cells: row.handakuten! }));
  return [...dakuten, ...handakuten];
}

type PlayableCellProps = {
  cell: AlphabetCell;
};

function PlayableCell({ cell }: PlayableCellProps) {
  const { t } = useTranslation();

  return (
    <CellButton
      ariaLabel={t('chart.playAudio', { char: cell.char, romaji: cell.romaji })}
      onActivate={() => playKanaAudio(cell.romaji, cell.char)}
      romaji={cell.romaji}
    >
      <KanaDisplay cell={cell} variant="chart" />
    </CellButton>
  );
}

const renderKanaCell = (cell: AlphabetCell) => <PlayableCell cell={cell} />;

type AlphabetChartPageProps = {
  script: 'hiragana' | 'katakana';
  title: string;
  description: string;
  chartRows: AlphabetChartRow[];
  yoonChartRows: AlphabetChartRow[];
  chouonExamples: ChouonExample[];
};

export function AlphabetChartPage({
  script,
  title,
  description,
  chartRows,
  yoonChartRows,
  chouonExamples
}: AlphabetChartPageProps) {
  const { locale, t } = useTranslation();
  const sectionLabels = getChartSectionLabels(t);

  const seionRows = toSeionRows(chartRows);
  const voicedRows = toVoicedRows(chartRows);
  const yoonRows = toYoonGridRows(yoonChartRows);

  return (
    <PageContainer>
      <Heading component="h1" gutterBottom>
        {title}
      </Heading>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
        {description}
      </Typography>
      <HintText sx={{ mt: 1.5, mb: { xs: 3, md: 4 } }}>{t('alphabet.tapHint')}</HintText>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 5 } }}>
        <ChartBlock heading={sectionLabels.seion}>
          <GojuonGrid rows={seionRows} headers={VOWEL_HEADERS} renderCell={renderKanaCell} />
        </ChartBlock>

        <ChartBlock heading={sectionLabels.voiced}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {getVoicedDescription(t, chartRows)}
          </Typography>
          <GojuonGrid rows={voicedRows} headers={VOWEL_HEADERS} renderCell={renderKanaCell} />
        </ChartBlock>

        <ChartBlock heading={sectionLabels.yoon}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {getYoonDescription(t, yoonChartRows)}
          </Typography>
          <GojuonGrid rows={yoonRows} headers={YOON_HEADERS} renderCell={renderKanaCell} />
        </ChartBlock>

        <ChartBlock heading={t('chart.chouon')}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {t(script === 'hiragana' ? 'chart.chouonHiragana' : 'chart.chouonKatakana')}
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 1.5
            }}
          >
            {chouonExamples.map((example) => (
              <SpeakableSurface key={example.jp} text={example.jp} sx={{ p: 1.5 }}>
                <Typography variant="subtitle1" component="span" lang="ja" sx={{ fontWeight: 400 }}>
                  {example.jp}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                  {example.romaji}
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.5 }}>
                  {example.meaning[locale]}
                </Typography>
              </SpeakableSurface>
            ))}
          </Box>
        </ChartBlock>
      </Box>
    </PageContainer>
  );
}
