import type { SxProps, Theme } from '@mui/material';
import { Paper, Stack, Typography } from '@mui/material';
import { Heading } from '@/components/heading';
import { useTranslation } from '@/i18n/use-translation.ts';
import { subtleSurfaceSx } from '@/theme/surfaces.ts';

type KanjiReadingsNoteProps = {
  sx?: SxProps<Theme>;
};

/**
 * A short explainer of what On'yomi and Kun'yomi are, shown on the kanji
 * overview and lesson pages so learners understand the two reading types.
 */
export function KanjiReadingsNote({ sx }: KanjiReadingsNoteProps) {
  const { t } = useTranslation();
  const overrides = Array.isArray(sx) ? sx : [sx];

  return (
    <Paper elevation={0} sx={[subtleSurfaceSx, { p: { xs: 2, md: 2.5 } }, ...overrides]}>
      <Heading scale="subsection" component="h2" sx={{ mb: 1 }}>
        {t('kanji.readingsTitle')}
      </Heading>
      <Stack spacing={0.75}>
        <Typography variant="body2" color="text.secondary">
          {t('kanji.onReadingDesc')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t('kanji.kunReadingDesc')}
        </Typography>
      </Stack>
    </Paper>
  );
}
