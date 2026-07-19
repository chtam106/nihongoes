import { getTranslations } from 'next-intl/server';
import { Box, Card, CardActionArea, CardContent, Paper, Stack, Typography } from '@mui/material';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { Heading } from '@/components/heading';
import { KanjiReadingsNote } from '@/components/kanji-readings-note';
import { PageContainer } from '@/components/page-container';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';
import {
  KANJI_BASE_PATH,
  KANJI_RADICALS_PATH,
  kanjiTrackPath,
  radicals
} from '@/constants/kanji/index.ts';
import { kanjiTracks, type KanjiTrack } from '@/constants/kanji/tracks.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { primePageLocale } from '@/i18n/server.ts';
import { localeParams, type PageProps } from '@/i18n/route-helpers.ts';
import { interactiveSurfaceSx, subtleSurfaceSx } from '@/theme/surfaces.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata(KANJI_BASE_PATH);

export default async function Page({ params }: PageProps) {
  const locale = await primePageLocale(params);
  const t = await getTranslations();

  const totalKanji = kanjiTracks.reduce(
    (sum, track) => sum + track.lessons.reduce((n, lesson) => n + lesson.kanji.length, 0),
    0
  );

  const renderTrackCard = (track: KanjiTrack) => {
    const kanjiTotal = track.lessons.reduce((sum, lesson) => sum + lesson.kanji.length, 0);

    return (
      <Card key={track.slug} elevation={0} sx={interactiveSurfaceSx}>
        <CardActionArea
          component={RouterLink}
          to={kanjiTrackPath(track.slug)}
          sx={{ userSelect: 'text' }}
        >
          <CardContent>
            <Box sx={{ minWidth: 0 }}>
              <Heading component="h3">{track.name[locale]}</Heading>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                {t('kanji.lessonCount', { count: track.lessons.length })} ·{' '}
                {t('kanji.kanjiCount', { count: kanjiTotal })}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  return (
    <PageContainer bottomGutter>
      <Stack spacing={4}>
        <Box>
          <Heading component="h1" gutterBottom>
            {t('kanji.overviewTitle')}
          </Heading>
          <Typography variant="body1" color="text.secondary">
            {t('kanji.overviewIntro')}
          </Typography>
        </Box>

        <Paper elevation={0} sx={[subtleSurfaceSx, { p: { xs: 2, md: 2.5 } }]}>
          <Heading scale="subsection" component="h2" sx={{ mb: 1 }}>
            {t('kanji.aboutHeading')}
          </Heading>
          <Stack spacing={1}>
            <Typography variant="body2" color="text.secondary">
              {t('kanji.aboutWhat')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('kanji.aboutCount')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('kanji.aboutJlpt')}
            </Typography>
          </Stack>
        </Paper>

        <KanjiReadingsNote />

        <Paper elevation={0} sx={[subtleSurfaceSx, { p: { xs: 2, md: 2.5 } }]}>
          <Heading scale="subsection" component="h2" sx={{ mb: 1 }}>
            {t('kanji.tipsHeading')}
          </Heading>
          <Stack spacing={1}>
            <Typography variant="body2" color="text.secondary">
              {t('kanji.tipsContext')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('kanji.tipsRadicals')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('kanji.tipsReview')}
            </Typography>
          </Stack>
        </Paper>

        <Box>
          <Heading scale="subsection" component="h2" sx={{ mb: 1.5 }}>
            {t('kanji.radicals')}
          </Heading>
          <Card elevation={0} sx={interactiveSurfaceSx}>
            <CardActionArea
              component={RouterLink}
              to={KANJI_RADICALS_PATH}
              sx={{ userSelect: 'text' }}
            >
              <CardContent>
                <Box sx={{ minWidth: 0 }}>
                  <Heading component="h3">{t('kanji.radicalsTitle')}</Heading>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {t('kanji.radicalsSubtitle')}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ mt: 1, display: 'block' }}
                  >
                    {t('kanji.radicalsCount', { count: radicals.length })}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>

        <Box>
          <Heading scale="subsection" component="h2" sx={{ mb: 1.5 }}>
            {t('kanji.collectionsHeading')}{' '}
            <Typography
              component="span"
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              ({t('kanji.kanjiCount', { count: totalKanji })})
            </Typography>
          </Heading>
          <Stack spacing={1.5}>{kanjiTracks.map(renderTrackCard)}</Stack>
        </Box>
      </Stack>

      <ScrollToTopButton />
    </PageContainer>
  );
}
