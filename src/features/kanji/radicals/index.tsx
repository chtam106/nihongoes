'use client';

import { useMemo, useState } from 'react';
import { useLocation } from '@/i18n/navigation.tsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Box,
  Button,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';
import { useTranslation } from '@/i18n/use-translation.ts';
import {
  formatKanjiMeaning,
  getRadicalByChar,
  KANJI_BASE_PATH,
  kanjiTracks,
  radicals,
  type Radical
} from '@/constants/kanji/index.ts';
import { elevatedSurfaceSx, subtleSurfaceSx } from '@/theme/surfaces.ts';

/** Minimum number of kanji a radical must head to count as "most common". */
const COMMON_RADICAL_THRESHOLD = 10;

type RadicalFilter = 'all' | 'common';

/** How many kanji in the lesson data are headed by each radical (keyed by radical number). */
function computeRadicalUsage(): Map<number, number> {
  const usage = new Map<number, number>();

  for (const track of kanjiTracks) {
    for (const lesson of track.lessons) {
      for (const kanji of lesson.kanji) {
        const radicalPart = kanji.parts.find((part) => part.role === 'radical');

        if (!radicalPart) {
          continue;
        }

        const radical = getRadicalByChar(radicalPart.char);

        if (!radical) {
          continue;
        }

        usage.set(radical.number, (usage.get(radical.number) ?? 0) + 1);
      }
    }
  }

  return usage;
}

// Colors that connect each part of the sample card to its explanation.
const PART_COLORS = {
  number: '#c2185b',
  char: '#1565c0',
  variant: '#e65100',
  meaning: '#2e7d32',
  name: '#6a1b9a'
} as const;

type RadicalGroup = {
  strokes: number;
  items: Radical[];
};

function groupByStrokes(items: Radical[]): RadicalGroup[] {
  const byStrokes = new Map<number, Radical[]>();

  for (const radical of items) {
    const bucket = byStrokes.get(radical.strokes) ?? [];
    bucket.push(radical);
    byStrokes.set(radical.strokes, bucket);
  }

  return [...byStrokes.entries()]
    .sort(([a], [b]) => a - b)
    .map(([strokes, groupItems]) => ({ strokes, items: groupItems }));
}

/** A color-coded sample card + matching legend explaining each field of a radical card. */
function RadicalLegend() {
  const { locale, t } = useTranslation();
  const sample = radicals.find((radical) => radical.char === '人');

  if (!sample) {
    return null;
  }

  const items = [
    { color: PART_COLORS.number, text: t('kanji.radicalsLegendNumber') },
    { color: PART_COLORS.char, text: t('kanji.radicalsLegendChar') },
    { color: PART_COLORS.variant, text: t('kanji.radicalsLegendVariant') },
    { color: PART_COLORS.meaning, text: t('kanji.radicalsLegendMeaning') },
    { color: PART_COLORS.name, text: t('kanji.radicalsLegendName') }
  ];

  return (
    <Paper elevation={0} sx={[subtleSurfaceSx, { p: { xs: 2, md: 2.5 } }]}>
      <Heading scale="subsection" component="h2" sx={{ mb: 1.5 }}>
        {t('kanji.radicalsLegendHeading')}
      </Heading>
      <Stack spacing={2}>
        <Paper
          elevation={0}
          sx={[
            elevatedSurfaceSx,
            {
              position: 'relative',
              p: 1.5,
              display: 'flex',
              gap: 1.5,
              alignItems: 'center',
              alignSelf: 'flex-start',
              minWidth: 200
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
            #{sample.number}
          </Typography>
          <Box sx={{ flexShrink: 0, textAlign: 'center', minWidth: 44 }}>
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
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="body1" sx={{ fontWeight: 600, color: PART_COLORS.meaning }}>
              {locale === 'vi' ? formatKanjiMeaning(sample.meaning.vi) : sample.meaning.en}
            </Typography>
            <Typography lang="ja" variant="body2" sx={{ color: PART_COLORS.name }}>
              {sample.kana}
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
    </Paper>
  );
}

type RadicalCardProps = {
  radical: Radical;
  highlighted: boolean;
  usageCount?: number;
};

function RadicalCard({ radical, highlighted, usageCount }: RadicalCardProps) {
  const { t } = useTranslation();

  return (
    <Paper
      elevation={0}
      id={`radical-${radical.number}`}
      sx={[
        subtleSurfaceSx,
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
        #{radical.number}
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
        <Typography lang="ja" variant="body2" color="text.secondary">
          {radical.kana}
        </Typography>
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
 * The radical's meaning. The primary sense is on the first line; any extra
 * senses (split on "; ", e.g. a "when used in other kanji" note) drop to their
 * own lighter line so they do not crowd the primary meaning.
 */
function RadicalMeaning({ radical }: RadicalMeaningProps) {
  const { locale } = useTranslation();
  const text = locale === 'vi' ? formatKanjiMeaning(radical.meaning.vi) : radical.meaning.en;
  const [primary, ...notes] = text.split('; ');

  return (
    <>
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        {primary}
      </Typography>
      {notes.map((note) => (
        <Typography key={note} variant="body2" color="text.secondary">
          {note}
        </Typography>
      ))}
    </>
  );
}

function KanjiRadicalsPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const [filter, setFilter] = useState<RadicalFilter>('all');
  const groups = useMemo(() => groupByStrokes(radicals), []);
  const usage = useMemo(() => computeRadicalUsage(), []);
  const commonRadicals = useMemo(
    () =>
      radicals
        .filter((radical) => (usage.get(radical.number) ?? 0) >= COMMON_RADICAL_THRESHOLD)
        .sort((a, b) => {
          const diff = (usage.get(b.number) ?? 0) - (usage.get(a.number) ?? 0);
          return diff !== 0 ? diff : a.number - b.number;
        }),
    [usage]
  );
  const commonKanjiCount = useMemo(
    () => commonRadicals.reduce((sum, radical) => sum + (usage.get(radical.number) ?? 0), 0),
    [commonRadicals, usage]
  );

  const activeNumber = location.hash.startsWith('#radical-')
    ? Number(location.hash.slice('#radical-'.length))
    : null;

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

        <ToggleButtonGroup
          value={filter}
          exclusive
          color="primary"
          onChange={(_event, next: RadicalFilter | null) => {
            if (next) {
              setFilter(next);
            }
          }}
          aria-label={t('kanji.radicalsTitle')}
          sx={{
            alignSelf: 'center',
            width: '100%',
            maxWidth: 420,
            '& .MuiToggleButton-root': { flex: 1, py: 1.25 }
          }}
        >
          <ToggleButton value="all">{t('kanji.radicalsFilterAll')}</ToggleButton>
          <ToggleButton value="common">{t('kanji.radicalsFilterCommon')}</ToggleButton>
        </ToggleButtonGroup>

        {filter === 'common' && (
          <Box>
            <Heading scale="subsection" component="h2" sx={{ mb: 0.5 }}>
              {t('kanji.radicalsCommonHeading')}
            </Heading>
            <Typography variant="body1" color="primary.main" sx={{ fontWeight: 600, mb: 0.5 }}>
              {t('kanji.radicalsCommonStats', {
                radicals: commonRadicals.length,
                kanji: commonKanjiCount
              })}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
              {t('kanji.radicalsCommonHint')}
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)'
                },
                gap: 1.5
              }}
            >
              {commonRadicals.map((radical) => (
                <RadicalCard
                  key={radical.number}
                  radical={radical}
                  highlighted={radical.number === activeNumber}
                  usageCount={usage.get(radical.number) ?? 0}
                />
              ))}
            </Box>
          </Box>
        )}

        {filter === 'all' &&
          groups.map((group) => (
            <Box key={group.strokes}>
              <Heading scale="subsection" component="h2" sx={{ mb: 1.5 }}>
                {t('kanji.radicalsStrokesGroup', { count: group.strokes })}
              </Heading>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)'
                  },
                  gap: 1.5
                }}
              >
                {group.items.map((radical) => (
                  <RadicalCard
                    key={radical.number}
                    radical={radical}
                    highlighted={radical.number === activeNumber}
                  />
                ))}
              </Box>
            </Box>
          ))}
      </Stack>

      <ScrollToTopButton />
    </PageContainer>
  );
}

export default KanjiRadicalsPage;
