import { useState } from 'react';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import type { SxProps, Theme } from '@mui/material';
import { Box, Collapse, Paper, Stack, Typography } from '@mui/material';
import { Heading } from '@/components/heading';
import { useTranslation } from '@/i18n/use-translation.ts';
import { subtleSurfaceSx } from '@/theme/surfaces.ts';

type KanjiReadingsNoteProps = {
  sx?: SxProps<Theme>;
  /** When true, start collapsed showing only the title; tap to expand. */
  collapsible?: boolean;
};

/**
 * A short explainer of what On'yomi and Kun'yomi are, shown on the kanji
 * overview and lesson pages so learners understand the two reading types.
 * On lesson pages it can be `collapsible` so it stays out of the way.
 */
export function KanjiReadingsNote({ sx, collapsible = false }: KanjiReadingsNoteProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(!collapsible);
  const overrides = Array.isArray(sx) ? sx : [sx];

  const details = (
    <Stack spacing={0.75}>
      <Typography variant="body2" color="text.secondary">
        {t('kanji.onReadingDesc')}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {t('kanji.kunReadingDesc')}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {t('kanji.readingScriptNote')}
      </Typography>
    </Stack>
  );

  const heading = (
    <Heading scale="subsection" component="h2">
      {t('kanji.readingsTitle')}
    </Heading>
  );

  if (!collapsible) {
    return (
      <Paper elevation={0} sx={[subtleSurfaceSx, { p: { xs: 2, md: 2.5 } }, ...overrides]}>
        <Box sx={{ mb: 1 }}>{heading}</Box>
        {details}
      </Paper>
    );
  }

  return (
    <Paper elevation={0} sx={[subtleSurfaceSx, { p: { xs: 2, md: 2.5 } }, ...overrides]}>
      <Box
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setOpen((value) => !value);
          }
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1,
          cursor: 'pointer'
        }}
      >
        {heading}
        <ExpandMoreOutlinedIcon
          sx={{
            color: 'text.secondary',
            transition: 'transform 0.2s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        />
      </Box>
      <Collapse in={open}>
        <Box sx={{ mt: 1 }}>{details}</Box>
      </Collapse>
    </Paper>
  );
}
