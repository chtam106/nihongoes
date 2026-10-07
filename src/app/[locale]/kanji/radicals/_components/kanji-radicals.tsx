'use client';

import { useMemo, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Button,
  ButtonBase,
  Collapse,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';
import { useTranslation } from '@/i18n/use-translation.ts';
import {
  formatRadicalComponentMeaning,
  formatRadicalMeaning,
  getRadicalStrokeIndex,
  groupRadicalsByStrokes,
  KANJI_BASE_PATH,
  KANJI_RADICALS_QUIZ_PATH,
  radicals,
  type Radical
} from '@/constants/kanji/index.ts';
import { elevatedSurfaceSx, subtleSurfaceSx } from '@/theme/surfaces.ts';

type RadicalSort = 'default' | 'usage';

// Colors that connect each part of the sample card to its explanation.
const PART_COLORS = {
  number: '#c2185b',
  char: '#1565c0',
  variant: '#e65100',
  meaning: '#2e7d32',
  meaningNote: '#6a1b9a',
  usage: '#0277bd'
} as const;

/** Illustrative usage count on the legend sample card (not real frequency data). */
const LEGEND_SAMPLE_USAGE_COUNT = 42;

/** A color-coded sample card + matching legend explaining each field of a radical card. */
function RadicalLegend() {
  const { locale, t } = useTranslation();
  const [open, setOpen] = useState(false);
  // 犬 has a combining variant (犭) and a component-sense note - every card field in one sample.
  const sample = radicals.find((radical) => radical.char === '犬');

  if (!sample) {
    return null;
  }

  const meaningPrimary = formatRadicalMeaning(sample, locale);
  const meaningNote = formatRadicalComponentMeaning(sample, locale);

  const items = [
    { color: PART_COLORS.number, text: t('kanji.radicalsLegendNumber') },
    { color: PART_COLORS.char, text: t('kanji.radicalsLegendChar') },
    { color: PART_COLORS.variant, text: t('kanji.radicalsLegendVariant') },
    { color: PART_COLORS.meaning, text: t('kanji.radicalsLegendMeaning') },
    { color: PART_COLORS.meaningNote, text: t('kanji.radicalsLegendMeaningNote') },
    { color: PART_COLORS.usage, text: t('kanji.radicalsLegendUsage') }
  ];

  return (
    <Paper elevation={0} sx={[subtleSurfaceSx, { p: { xs: 2, md: 2.5 } }]}>
      <ButtonBase
        onClick={() => setOpen((previous) => !previous)}
        aria-expanded={open}
        aria-controls="radical-legend-content"
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 1,
          textAlign: 'left',
          borderRadius: 1,
          color: 'text.primary'
        }}
      >
        <Heading scale="subsection" component="span">
          {t('kanji.radicalsLegendHeading')}
        </Heading>
        {open && <ExpandLessIcon />}
        {!open && <ExpandMoreIcon />}
      </ButtonBase>
      <Collapse in={open} unmountOnExit>
        <Stack id="radical-legend-content" spacing={2} sx={{ mt: 2 }}>
          <Paper
            elevation={0}
            sx={[
              elevatedSurfaceSx,
              {
                position: 'relative',
                p: 1.5,
                display: 'flex',
                gap: 1.5,
                alignItems: 'flex-start',
                alignSelf: 'flex-start',
                minWidth: 220
              }
            ]}
          >
            <Typography
              component="span"
              sx={{
                position: 'absolute',
                top: 6,
                left: 8,
                zIndex: 1,
                fontSize: 12,
                lineHeight: 1,
                fontWeight: 600,
                color: PART_COLORS.number
              }}
            >
              #{getRadicalStrokeIndex(sample)}
            </Typography>
            <Box sx={{ flexShrink: 0, textAlign: 'center', minWidth: 44, pt: 0.5 }}>
              <Typography
                lang="ja"
                sx={{ fontWeight: 600, fontSize: 36, lineHeight: 1.1, color: PART_COLORS.char }}
              >
                {sample.char}
              </Typography>
              {sample.variants && (
                <Typography
                  lang="ja"
                  variant="body2"
                  sx={{ lineHeight: 1.2, color: PART_COLORS.variant }}
                >
                  {sample.variants.join(' ')}
                </Typography>
              )}
            </Box>
            <Box sx={{ minWidth: 0, pt: 0.5 }}>
              <Typography variant="body1" sx={{ fontWeight: 600, color: PART_COLORS.meaning }}>
                {meaningPrimary}
              </Typography>
              {meaningNote && (
                <Typography
                  variant="body2"
                  sx={{ color: PART_COLORS.meaningNote, display: 'block' }}
                >
                  {meaningNote}
                </Typography>
              )}
              <Typography
                variant="caption"
                sx={{ display: 'block', fontWeight: 600, color: PART_COLORS.usage }}
              >
                {t('kanji.radicalsUsageCount', { count: LEGEND_SAMPLE_USAGE_COUNT })}
              </Typography>
            </Box>
          </Paper>

          <Stack spacing={1}>
            {items.map((item) => (
              <Stack key={item.color} direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
                <Box
                  sx={{
                    flexShrink: 0,
                    height: '1.5rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Box sx={{ width: 12, height: 12, borderRadius: '3px', bgcolor: item.color }} />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                  {item.text}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Collapse>
    </Paper>
  );
}

type RadicalCardProps = {
  radical: Radical;
  /** 1-based index in default stroke order (shown on the card). */
  index: number;
  highlighted: boolean;
  usageCount?: number;
};

function RadicalCard({ radical, index, highlighted, usageCount }: RadicalCardProps) {
  const { t } = useTranslation();

  return (
    <Paper
      elevation={0}
      id={`radical-${index}`}
      sx={[
        elevatedSurfaceSx,
        {
          position: 'relative',
          p: 2,
          display: 'flex',
          gap: 1.5,
          alignItems: 'center',
          scrollMarginTop: { xs: 72, md: 88 },
          transition: 'outline-color 0.2s, background-color 0.2s'
        },
        highlighted && {
          outline: '2px solid',
          outlineColor: 'primary.main',
          outlineOffset: 2,
          bgcolor: 'action.selected'
        }
      ]}
    >
      <Typography
        component="span"
        sx={{
          position: 'absolute',
          top: 6,
          left: 8,
          zIndex: 1,
          fontSize: 12,
          lineHeight: 1,
          fontWeight: 600,
          color: 'text.secondary'
        }}
      >
        #{index}
      </Typography>
      <Box sx={{ flexShrink: 0, textAlign: 'center', minWidth: 44 }}>
        <Typography lang="ja" sx={{ fontWeight: 600, fontSize: 36, lineHeight: 1.1 }}>
          {radical.char}
        </Typography>
        {radical.variants && (
          <Typography lang="ja" variant="body2" color="text.secondary" sx={{ lineHeight: 1.2 }}>
            {radical.variants.join(' ')}
          </Typography>
        )}
      </Box>
      <Box sx={{ minWidth: 0 }}>
        <RadicalMeaning radical={radical} />
        {typeof usageCount === 'number' && (
          <Typography
            variant="caption"
            color="primary.main"
            sx={{ display: 'block', fontWeight: 600 }}
          >
            {t('kanji.radicalsUsageCount', { count: usageCount })}
          </Typography>
        )}
      </Box>
    </Paper>
  );
}

type RadicalMeaningProps = {
  radical: Radical;
};

/**
 * The radical's meaning. Bold primary from `formatRadicalMeaning`; optional
 * lighter `componentMeaning` line from `formatRadicalComponentMeaning`.
 */
function RadicalMeaning({ radical }: RadicalMeaningProps) {
  const { locale } = useTranslation();
  const primary = formatRadicalMeaning(radical, locale);
  const note = formatRadicalComponentMeaning(radical, locale);

  return (
    <>
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        {primary}
      </Typography>
      {note && (
        <Typography variant="body2" color="text.secondary">
          {note}
        </Typography>
      )}
    </>
  );
}

type KanjiRadicalsPageProps = {
  /** How many kanji are headed by each radical, keyed by radical number (computed server-side). */
  usage: Record<number, number>;
};

const radicalCardGridSx = {
  display: 'grid',
  gridTemplateColumns: {
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)'
  },
  gap: 1.5
} as const;

type RadicalCardGridProps = {
  items: Radical[];
  activeIndex: number | null;
  usage?: Record<number, number>;
};

function RadicalCardGrid({ items, activeIndex, usage }: RadicalCardGridProps) {
  return (
    <Box sx={radicalCardGridSx}>
      {items.map((radical) => {
        const index = getRadicalStrokeIndex(radical);

        return (
          <RadicalCard
            key={radical.number}
            radical={radical}
            index={index}
            highlighted={index === activeIndex}
            usageCount={usage ? (usage[radical.number] ?? 0) : undefined}
          />
        );
      })}
    </Box>
  );
}

function KanjiRadicalsPage({ usage }: KanjiRadicalsPageProps) {
  const { t } = useTranslation();
  const hash = typeof window === 'undefined' ? '' : window.location.hash;
  const [sort, setSort] = useState<RadicalSort>('default');
  const groups = useMemo(() => groupRadicalsByStrokes(), []);
  const byUsage = useMemo(
    () =>
      [...radicals].sort((a, b) => {
        const diff = (usage[b.number] ?? 0) - (usage[a.number] ?? 0);
        return diff !== 0 ? diff : a.number - b.number;
      }),
    [usage]
  );

  const activeIndex = hash.startsWith('#radical-') ? Number(hash.slice('#radical-'.length)) : null;

  const handleSortChange = (event: SelectChangeEvent<RadicalSort>) => {
    const next = event.target.value;
    if (next === 'default' || next === 'usage') {
      setSort(next);
    }
  };

  return (
    <PageContainer bottomGutter>
      <Stack spacing={4}>
        <Box>
          <Box sx={{ mb: 1 }}>
            <Button
              component={RouterLink}
              to={KANJI_BASE_PATH}
              startIcon={<ArrowBackIcon />}
              variant="text"
              sx={{ px: 0 }}
            >
              {t('kanji.overviewTitle')}
            </Button>
          </Box>
          <Heading component="h1" gutterBottom>
            {t('kanji.radicalsTitle')}
          </Heading>
          <Typography variant="body1" color="text.secondary">
            {t('kanji.radicalsIntro')}
          </Typography>
        </Box>

        <RadicalLegend />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            flexWrap: 'wrap'
          }}
        >
          <FormControl size="small" sx={{ minWidth: 220 }}>
            <InputLabel id="radical-sort-label">{t('kanji.radicalsSortLabel')}</InputLabel>
            <Select<RadicalSort>
              labelId="radical-sort-label"
              value={sort}
              label={t('kanji.radicalsSortLabel')}
              onChange={handleSortChange}
            >
              <MenuItem value="default">{t('kanji.radicalsSortDefault')}</MenuItem>
              <MenuItem value="usage">{t('kanji.radicalsSortUsage')}</MenuItem>
            </Select>
          </FormControl>
          <Link
            component={RouterLink}
            to={KANJI_RADICALS_QUIZ_PATH}
            underline="hover"
            sx={{
              marginLeft: 'auto',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5
            }}
          >
            {t('kanji.radicalsQuizLink')}
            <ArrowForwardIcon sx={{ fontSize: '1rem' }} />
          </Link>
        </Box>

        {sort === 'usage' && (
          <RadicalCardGrid items={byUsage} activeIndex={activeIndex} usage={usage} />
        )}

        {sort === 'default' &&
          groups.map((group) => (
            <Box key={group.strokes}>
              <Heading scale="subsection" component="h2" sx={{ mb: 1.5 }}>
                {t('kanji.radicalsStrokesGroup', { count: group.strokes })}
              </Heading>
              <RadicalCardGrid items={group.items} activeIndex={activeIndex} />
            </Box>
          ))}
      </Stack>

      <ScrollToTopButton />
    </PageContainer>
  );
}

export default KanjiRadicalsPage;
