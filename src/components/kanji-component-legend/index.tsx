import { useState } from 'react';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { alpha, type Theme } from '@mui/material/styles';
import { Box, Collapse, Paper, Stack, Typography } from '@mui/material';
import { Heading } from '@/components/heading';
import { useTranslation } from '@/i18n/use-translation.ts';
import type { KanjiComponentRole } from '@/constants/kanji/index.ts';
import { COMPONENT_ROLE_COLORS } from '@/theme/kanji-component-colors.ts';
import { subtleSurfaceSx } from '@/theme/surfaces.ts';

type LegendRow = {
  role: KanjiComponentRole;
  sample: string;
  textKey:
    | 'kanji.componentsLegendRadical'
    | 'kanji.componentsLegendSemantic'
    | 'kanji.componentsLegendPhonetic'
    | 'kanji.componentsLegendOther';
};

const ROWS: LegendRow[] = [
  { role: 'radical', sample: '言', textKey: 'kanji.componentsLegendRadical' },
  { role: 'semantic', sample: '氵', textKey: 'kanji.componentsLegendSemantic' },
  { role: 'phonetic', sample: '生', textKey: 'kanji.componentsLegendPhonetic' },
  { role: 'other', sample: '?', textKey: 'kanji.componentsLegendOther' }
];

type KanjiComponentLegendProps = {
  /** When true, start collapsed showing only the title; tap to expand. */
  collapsible?: boolean;
};

/**
 * A color-coded key explaining what each component chip color means on the kanji
 * cards (main radical / semantic / phonetic / other), mirroring the radical-card
 * legend on the radicals page. On lesson pages it can be `collapsible` so it
 * stays out of the way.
 */
export function KanjiComponentLegend({ collapsible = false }: KanjiComponentLegendProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(!collapsible);

  const details = (
    <Stack spacing={1}>
      {ROWS.map((row) => {
        const color = COMPONENT_ROLE_COLORS[row.role];

        return (
          <Stack key={row.role} direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Box
              component="span"
              lang="ja"
              sx={{
                flexShrink: 0,
                minWidth: 28,
                textAlign: 'center',
                px: 0.75,
                py: 0.25,
                borderRadius: 1,
                fontWeight: 600,
                color,
                bgcolor: (theme: Theme) =>
                  alpha(color, theme.palette.mode === 'light' ? 0.12 : 0.24)
              }}
            >
              {row.sample}
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
              {t(row.textKey)}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );

  const heading = (
    <Heading scale="subsection" component="h2">
      {t('kanji.componentsLegendHeading')}
    </Heading>
  );

  if (!collapsible) {
    return (
      <Paper elevation={0} sx={[subtleSurfaceSx, { p: { xs: 2, md: 2.5 } }]}>
        <Box sx={{ mb: 1.5 }}>{heading}</Box>
        {details}
      </Paper>
    );
  }

  return (
    <Paper elevation={0} sx={[subtleSurfaceSx, { p: { xs: 2, md: 2.5 } }]}>
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
        <Box sx={{ mt: 1.5 }}>{details}</Box>
      </Collapse>
    </Paper>
  );
}
