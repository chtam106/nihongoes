'use client';

import { Box, Stack, Typography } from '@mui/material';
import {
  hiraganaChartRows,
  hiraganaYoonChartRows,
  katakanaChartRows,
  katakanaYoonChartRows
} from '@/constants/alphabet-charts.ts';
import { CellButton, ChartBlock, GojuonGrid } from '@/components/gojuon-grid';
import {
  VOWEL_HEADERS,
  YOON_HEADERS,
  consonantLabel,
  firstCell,
  getVoicedDescription,
  getYoonDescription,
  type AlphabetCell,
  type AlphabetChartRow,
  type GridRow
} from '@/constants/gojuon.ts';
import { Heading } from '@/components/heading';
import { HintText } from '@/components/hint-text';
import { KanaDisplay } from '@/components/kana-display';
import { PageContainer } from '@/components/page-container';
import { playKanaAudio } from '@/utils/kana-audio.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { getChartSectionLabels } from '@/i18n/translations.ts';

type CombinedCell = {
  romaji: string;
  hiragana: AlphabetCell;
  katakana: AlphabetCell;
};

type SectionKey = 'seion' | 'dakuten' | 'handakuten';

function zipCells(
  hiraganaCells: (AlphabetCell | null)[],
  katakanaCells: (AlphabetCell | null)[]
): (CombinedCell | null)[] {
  return hiraganaCells.map((hiragana, index) => {
    const katakana = katakanaCells[index] ?? null;
    if (!hiragana || !katakana) return null;
    return { romaji: hiragana.romaji, hiragana, katakana };
  });
}

function pairRowsForSection(
  hiraganaRows: AlphabetChartRow[],
  katakanaRows: AlphabetChartRow[],
  section: SectionKey
): GridRow<CombinedCell>[] {
  const rows: GridRow<CombinedCell>[] = [];

  hiraganaRows.forEach((hiraganaRow, index) => {
    const katakanaRow = katakanaRows[index];
    const hiraganaCells = hiraganaRow[section];
    const katakanaCells = katakanaRow?.[section];
    if (!hiraganaCells || !katakanaCells || !firstCell(hiraganaCells)) return;

    rows.push({
      label: consonantLabel(hiraganaCells),
      cells: zipCells(hiraganaCells, katakanaCells)
    });
  });

  return rows;
}

type CombinedKanaCellProps = {
  cell: CombinedCell;
};

function CombinedKanaCell({ cell }: CombinedKanaCellProps) {
  const { t } = useTranslation();

  return (
    <CellButton
      ariaLabel={t('chart.playAudio', { char: cell.hiragana.char, romaji: cell.romaji })}
      onActivate={() => playKanaAudio(cell.romaji, cell.hiragana.char)}
      romaji={cell.romaji}
    >
      <Stack
        direction="row"
        spacing={{ xs: 0.5, md: 1 }}
        sx={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <KanaDisplay cell={cell.hiragana} variant="chart" />
        <KanaDisplay cell={cell.katakana} variant="chart" />
      </Stack>
    </CellButton>
  );
}

const renderCombinedCell = (cell: CombinedCell) => <CombinedKanaCell cell={cell} />;

export function CombinedChart() {
  const { t } = useTranslation();
  const sectionLabels = getChartSectionLabels(t);

  const seionRows = pairRowsForSection(hiraganaChartRows, katakanaChartRows, 'seion');
  const voicedRows = [
    ...pairRowsForSection(hiraganaChartRows, katakanaChartRows, 'dakuten'),
    ...pairRowsForSection(hiraganaChartRows, katakanaChartRows, 'handakuten')
  ];
  const yoonRows = (['seion', 'dakuten', 'handakuten'] as const satisfies readonly SectionKey[])
    .flatMap((section) => pairRowsForSection(hiraganaYoonChartRows, katakanaYoonChartRows, section))
    .map((row) => ({
      label: row.label,
      cells: row.cells.filter((cell): cell is CombinedCell => cell !== null)
    }));

  return (
    <PageContainer>
      <Heading component="h1" gutterBottom>
        {t('nav.combined')}
      </Heading>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
        {t('alphabet.combinedPageDescription')}
      </Typography>
      <HintText sx={{ mt: 1.5, mb: { xs: 3, md: 4 } }}>{t('alphabet.tapHint')}</HintText>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 5 } }}>
        <ChartBlock heading={sectionLabels.seion}>
          <GojuonGrid
            rows={seionRows}
            headers={VOWEL_HEADERS}
            renderCell={renderCombinedCell}
            minCellWidth={56}
            maxCellWidth={132}
          />
        </ChartBlock>

        <ChartBlock heading={sectionLabels.voiced}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {getVoicedDescription(t, hiraganaChartRows)}
          </Typography>
          <GojuonGrid
            rows={voicedRows}
            headers={VOWEL_HEADERS}
            renderCell={renderCombinedCell}
            minCellWidth={56}
            maxCellWidth={132}
          />
        </ChartBlock>

        <ChartBlock heading={sectionLabels.yoon}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {getYoonDescription(t, hiraganaYoonChartRows)}
          </Typography>
          <GojuonGrid
            rows={yoonRows}
            headers={YOON_HEADERS}
            renderCell={renderCombinedCell}
            minCellWidth={56}
            maxCellWidth={132}
          />
        </ChartBlock>
      </Box>
    </PageContainer>
  );
}
