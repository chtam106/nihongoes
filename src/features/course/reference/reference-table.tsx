'use client';

import { Box, Paper, Typography } from '@mui/material';
import type {
  ReferenceTableCell,
  ReferenceTableSection
} from '@/constants/courses/n5/reference/types.ts';
import { Heading } from '@/components/heading';
import { SpeakableTableText } from '@/components/speakable-table-text';
import { useTranslation } from '@/i18n/use-translation.ts';
import type { Locale } from '@/types/i18n.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import { renderJapaneseText } from '@/utils/japanese-text.tsx';

type ReferenceTableCellViewProps = {
  cell: ReferenceTableCell;
  locale: Locale;
};

function ReferenceTableCellView({ cell, locale }: ReferenceTableCellViewProps) {
  const { t } = useTranslation();

  if (cell.labelKey) {
    return (
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        {t(`course.${cell.labelKey}`)}
      </Typography>
    );
  }

  if (cell.text) {
    return <Typography variant="body1">{cell.text[locale]}</Typography>;
  }

  const content = (
    <>
      {cell.jp && (
        <Typography variant="body1" lang="ja" sx={{ fontWeight: 600 }}>
          {renderJapaneseText(cell.jp, cell.ruby)}
        </Typography>
      )}
      {cell.meaning && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: cell.jp ? 0.25 : 0 }}>
          {cell.meaning[locale]}
        </Typography>
      )}
    </>
  );

  if (cell.jp) {
    return <SpeakableTableText text={cell.speech ?? cell.jp}>{content}</SpeakableTableText>;
  }

  if (cell.label) {
    return (
      <Typography variant="body1" sx={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
        {cell.label}
      </Typography>
    );
  }

  return content;
}

type ReferenceTableSectionViewProps = {
  section: ReferenceTableSection;
};

export function ReferenceTableSectionView({ section }: ReferenceTableSectionViewProps) {
  const { locale } = useTranslation();
  const colCount = section.columns.length;

  return (
    <Box id={section.id}>
      <Heading scale="subsection" component="h3" sx={{ mb: 1.5 }}>
        {section.title[locale]}
      </Heading>

      {section.intro && (
        <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5 }}>
          {section.intro[locale]}
        </Typography>
      )}

      <Paper elevation={0} sx={[elevatedSurfaceSx, { overflowX: 'auto' }]}>
        <Box
          component="table"
          sx={{
            width: '100%',
            minWidth: colCount > 2 ? 480 : 280,
            borderCollapse: 'collapse'
          }}
        >
          <Box component="thead">
            <Box component="tr" sx={{ borderBottom: 1, borderColor: 'divider' }}>
              {section.columns.map((label, index) => (
                <Box
                  component="th"
                  key={index}
                  scope="col"
                  sx={{
                    textAlign: 'left',
                    py: 1,
                    px: 1.5,
                    fontWeight: 600,
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Typography variant="body1" component="span">
                    {label[locale]}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box component="tbody">
            {section.rows.map((row, rowIndex) => (
              <Box component="tr" key={rowIndex} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                {row.map((cell, cellIndex) => (
                  <Box component="td" key={cellIndex} sx={{ py: 1, px: 1.5, verticalAlign: 'top' }}>
                    <ReferenceTableCellView cell={cell} locale={locale} />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
