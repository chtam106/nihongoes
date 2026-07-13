import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';
import { useTranslation } from '@/i18n/use-translation.ts';
import {
  formatKanjiMeaning,
  KANJI_BASE_PATH,
  radicals,
  type Radical
} from '@/constants/kanji/index.ts';
import { elevatedSurfaceSx, subtleSurfaceSx } from '@/theme/surfaces.ts';

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
};

function RadicalCard({ radical, highlighted }: RadicalCardProps) {
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
  const groups = useMemo(() => groupByStrokes(radicals), []);

  const activeNumber = location.hash.startsWith('#radical-')
    ? Number(location.hash.slice('#radical-'.length))
    : null;

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const target = document.getElementById(location.hash.slice(1));
    target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [location.hash]);

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
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, mb: 2 }}>
            {t('kanji.radicalsSubtitle')}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t('kanji.radicalsIntro')}
          </Typography>
        </Box>

        <RadicalLegend />

        {groups.map((group) => (
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
