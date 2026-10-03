import type { CSSProperties } from 'react';
import { Box, Typography } from '@mui/material';
import { VocabHeadword } from '@/components/vocab-headword';
import type { Locale } from '@/types/i18n.ts';
import type { VocabItem } from '@/types/course.ts';
import {
  VOCAB_PRINT_COLS,
  VOCAB_PRINT_ROWS,
  chunkVocabPrintSheets,
  mirrorVocabPrintRows,
  type VocabPrintCell
} from './vocab-print-layout.ts';

type VocabPrintSheetsProps = {
  items: VocabItem[];
  locale: Locale;
};

type VocabPrintSideProps = {
  cells: VocabPrintCell[];
  locale: Locale;
  side: 'word' | 'meaning';
};

function VocabPrintSide({ cells, locale, side }: VocabPrintSideProps) {
  return (
    <Box className="vocab-print-side">
      {cells.map((item, index) => (
        <Box key={`print-${side}-${index}-${item?.kana ?? 'empty'}`} className="vocab-print-cell">
          {item && side === 'word' && <VocabHeadword item={item} />}
          {item && side === 'meaning' && (
            <Typography variant="body1">{item.meaning[locale]}</Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}

export function VocabPrintSheets({ items, locale }: VocabPrintSheetsProps) {
  const sheets = chunkVocabPrintSheets(items);

  if (sheets.length === 0) {
    return null;
  }

  return (
    <Box
      className="print-only vocab-print"
      style={
        {
          '--vocab-print-cols': VOCAB_PRINT_COLS,
          '--vocab-print-rows': VOCAB_PRINT_ROWS
        } as CSSProperties
      }
    >
      {sheets.flatMap((cells, sheetIndex) => [
        <VocabPrintSide
          key={`print-sheet-${sheetIndex}-word`}
          cells={cells}
          locale={locale}
          side="word"
        />,
        <VocabPrintSide
          key={`print-sheet-${sheetIndex}-meaning`}
          cells={mirrorVocabPrintRows(cells)}
          locale={locale}
          side="meaning"
        />
      ])}
    </Box>
  );
}
