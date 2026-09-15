'use client';

import { Box, Paper, Stack, Typography } from '@mui/material';
import type { VerbMasuRow, VerbNaiRow } from '@/constants/courses/n5/reference/types.ts';
import { Heading } from '@/components/heading';
import { SpeakableTableText } from '@/components/speakable-table-text';
import { useTranslation } from '@/i18n/use-translation.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';

type VerbMasuTableProps = {
  id: string;
  rows: VerbMasuRow[];
};

export function VerbMasuTable({ id, rows }: VerbMasuTableProps) {
  const { t } = useTranslation();
  const columns = [
    'referenceVerbColMasu',
    'referenceVerbColReading',
    'referenceVerbColTe',
    'referenceVerbColDict'
  ] as const;

  return (
    <Box id={id}>
      <Heading scale="subsection" component="h4" sx={{ mb: 1.5 }}>
        {t('course.referenceVerbMasuTableTitle')}
      </Heading>
      <Paper elevation={0} sx={[elevatedSurfaceSx, { overflowX: 'auto' }]}>
        <Box component="table" sx={{ width: '100%', minWidth: 640, borderCollapse: 'collapse' }}>
          <Box component="thead">
            <Box component="tr" sx={{ borderBottom: 1, borderColor: 'divider' }}>
              {columns.map((key) => (
                <Box
                  component="th"
                  key={key}
                  scope="col"
                  sx={{ textAlign: 'left', py: 1, px: 1.5, fontWeight: 600 }}
                >
                  <Typography variant="body1" component="span">
                    {t(`course.${key}`)}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box component="tbody">
            {rows.map((row, index) => (
              <Box component="tr" key={index} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Box component="td" sx={{ py: 1, px: 1.5, verticalAlign: 'top' }}>
                  <SpeakableTableText text={row.surface}>
                    <Typography variant="body1" lang="ja" sx={{ fontWeight: 600 }}>
                      {row.surface}
                      {row.context && (
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.secondary"
                          sx={{ ml: 0.5 }}
                        >
                          [{row.context}〜]
                        </Typography>
                      )}
                    </Typography>
                  </SpeakableTableText>
                </Box>
                <Box component="td" sx={{ py: 1, px: 1.5, verticalAlign: 'top' }}>
                  <Typography variant="body1" lang="ja">
                    {row.reading} ます
                  </Typography>
                </Box>
                <Box component="td" sx={{ py: 1, px: 1.5, verticalAlign: 'top' }}>
                  <SpeakableTableText text={row.te}>
                    <Typography variant="body1" lang="ja">
                      {row.te}
                    </Typography>
                  </SpeakableTableText>
                </Box>
                <Box component="td" sx={{ py: 1, px: 1.5, verticalAlign: 'top' }}>
                  <SpeakableTableText text={row.dict}>
                    <Typography variant="body1" lang="ja">
                      {row.dict}
                    </Typography>
                  </SpeakableTableText>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

type VerbNaiTableProps = {
  id: string;
  rows: VerbNaiRow[];
};

export function VerbNaiTable({ id, rows }: VerbNaiTableProps) {
  const { locale, t } = useTranslation();
  const columns = [
    'referenceVerbColNai',
    'referenceVerbColTa',
    'referenceVerbColMeaning',
    'referenceLessonCol'
  ] as const;

  return (
    <Box id={id}>
      <Heading scale="subsection" component="h4" sx={{ mb: 1.5 }}>
        {t('course.referenceVerbNaiTableTitle')}
      </Heading>
      <Paper elevation={0} sx={[elevatedSurfaceSx, { overflowX: 'auto' }]}>
        <Box component="table" sx={{ width: '100%', minWidth: 640, borderCollapse: 'collapse' }}>
          <Box component="thead">
            <Box component="tr" sx={{ borderBottom: 1, borderColor: 'divider' }}>
              {columns.map((key) => (
                <Box
                  component="th"
                  key={key}
                  scope="col"
                  sx={{ textAlign: 'left', py: 1, px: 1.5, fontWeight: 600 }}
                >
                  <Typography variant="body1" component="span">
                    {t(`course.${key}`)}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box component="tbody">
            {rows.map((row, index) => {
              const naiForm = row.naiStem ? `${row.naiStem}${row.nai}` : row.nai;

              return (
                <Box component="tr" key={index} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Box component="td" sx={{ py: 1, px: 1.5, verticalAlign: 'top' }}>
                    <Typography variant="body1" lang="ja">
                      {naiForm}
                    </Typography>
                  </Box>
                  <Box component="td" sx={{ py: 1, px: 1.5, verticalAlign: 'top' }}>
                    <SpeakableTableText text={row.ta}>
                      <Typography variant="body1" lang="ja">
                        {row.ta}
                      </Typography>
                    </SpeakableTableText>
                  </Box>
                  <Box component="td" sx={{ py: 1, px: 1.5, verticalAlign: 'top' }}>
                    <Typography variant="body1">{row.meaning[locale]}</Typography>
                  </Box>
                  <Box component="td" sx={{ py: 1, px: 1.5, verticalAlign: 'top' }}>
                    <Typography variant="body1" sx={{ fontVariantNumeric: 'tabular-nums' }}>
                      {row.lesson}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

type VerbGroupSectionProps = {
  groupId: string;
  group: '1' | '2' | '3';
  masu: VerbMasuRow[];
  nai: VerbNaiRow[];
};

export function VerbGroupSection({ groupId, group, masu, nai }: VerbGroupSectionProps) {
  const { t } = useTranslation();

  return (
    <Stack spacing={3}>
      <Heading component="h4" sx={{ fontWeight: 600 }}>
        {t(`course.referenceVerbGroup${group}`)}
      </Heading>
      <VerbMasuTable id={`${groupId}-masu`} rows={masu} />
      <VerbNaiTable id={`${groupId}-nai`} rows={nai} />
    </Stack>
  );
}
