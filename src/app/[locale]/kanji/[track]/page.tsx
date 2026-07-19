import { getTranslations } from 'next-intl/server';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography
} from '@mui/material';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';
import {
  KANJI_BASE_PATH,
  kanjiLessonPath,
  kanjiTrackPath,
  type KanjiLesson
} from '@/constants/kanji/index.ts';
import { getKanjiTrack } from '@/constants/kanji/tracks.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { primePageLocale } from '@/i18n/server.ts';
import { kanjiTrackParams, type PageProps } from '@/i18n/route-helpers.ts';
import { interactiveSurfaceSx } from '@/theme/surfaces.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return kanjiTrackParams();
}

export const generateMetadata = createMetadata((p) => kanjiTrackPath(p.track));

export default async function Page({ params }: PageProps<{ track: string }>) {
  const locale = await primePageLocale(params);
  const { track: trackSlug } = await params;
  const t = await getTranslations();
  const track = getKanjiTrack(trackSlug);

  if (!track) {
    return (
      <PageContainer>
        <Heading component="h1" gutterBottom>
          {t('kanji.notFoundTitle')}
        </Heading>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {t('kanji.notFoundBody')}
        </Typography>
        <Button component={RouterLink} to={KANJI_BASE_PATH} variant="contained">
          {t('common.back')}
        </Button>
      </PageContainer>
    );
  }

  const renderLessonCard = (lesson: KanjiLesson) => (
    <Card key={lesson.id} elevation={0} sx={interactiveSurfaceSx}>
      <CardActionArea
        component={RouterLink}
        to={kanjiLessonPath(track.slug, lesson.id)}
        sx={{ userSelect: 'text' }}
      >
        <CardContent>
          <Box sx={{ minWidth: 0 }}>
            <Chip
              label={t('kanji.lessonLabel', { number: lesson.number })}
              size="small"
              color="primary"
              variant="outlined"
              sx={{ mb: 1 }}
            />
            <Heading component="h3">{lesson.title[locale]}</Heading>
            <Typography
              lang="ja"
              sx={{ mt: 0.75, fontWeight: 600, letterSpacing: 2, color: 'text.primary' }}
            >
              {lesson.kanji.map((entry) => entry.char).join(' ')}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
              {t('kanji.kanjiCount', { count: lesson.kanji.length })}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );

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
            {track.name[locale]}
          </Heading>
          <Typography variant="body1" color="text.secondary">
            {track.intro[locale]}
          </Typography>
        </Box>

        <Box>
          <Heading scale="subsection" component="h2" sx={{ mb: 1.5 }}>
            {t('kanji.lessonsHeading')}
          </Heading>
          <Stack spacing={1.5}>{track.lessons.map(renderLessonCard)}</Stack>
        </Box>
      </Stack>

      <ScrollToTopButton />
    </PageContainer>
  );
}
