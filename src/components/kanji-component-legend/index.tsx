import { alpha, type Theme } from '@mui/material/styles';
import { Box, Paper, Stack, Typography } from '@mui/material';
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

/**
 * A color-coded key explaining what each component chip color means on the kanji
 * cards (main radical / semantic / phonetic / other), mirroring the radical-card
 * legend on the radicals page.
 */
export function KanjiComponentLegend() {
  const { t } = useTranslation();

  return (
    <Paper elevation={0} sx={[subtleSurfaceSx, { p: { xs: 2, md: 2.5 } }]}>
      <Heading scale="subsection" component="h2" sx={{ mb: 1.5 }}>
        {t('kanji.componentsLegendHeading')}
      </Heading>
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
    </Paper>
  );
}
