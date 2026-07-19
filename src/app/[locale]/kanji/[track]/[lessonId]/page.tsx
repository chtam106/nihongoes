import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { Heading } from '@/components/heading';
import { HintText } from '@/components/hint-text';
import { KanjiCard } from '@/components/kanji-card';
import { KanjiComponentLegend } from '@/components/kanji-component-legend';
import { KanjiReadingsNote } from '@/components/kanji-readings-note';
import { PageContainer } from '@/components/page-container';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';
import {
  getKanjiLesson,
  getKanjiTrack,
  KANJI_BASE_PATH,
  kanjiLessonPath,
  kanjiTrackPath
} from '@/constants/kanji/index.ts';
import { getSeoMetadata } from '@/i18n/seo-meta.ts';
import { primePageLocale } from '@/i18n/server.ts';
import { kanjiLessonParams, toLocale } from '@/i18n/route-helpers.ts';
import { KanjiPracticePanel } from './_components/kanji-practice-panel.tsx';

export const dynamicParams = false;

export function generateStaticParams() {
  return kanjiLessonParams();
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; track: string; lessonId: string }>;
}): Promise<Metadata> {
  const { locale, track, lessonId } = await params;

  return getSeoMetadata(kanjiLessonPath(track, lessonId), toLocale(locale));
}

export default async function Page({
  params
}: {
  params: Promise<{ locale: string; track: string; lessonId: string }>;
}) {
  const locale = await primePageLocale(params);
  const { track: trackSlug, lessonId } = await params;
  const t = await getTranslations();
  const track = getKanjiTrack(trackSlug);
  const lesson = track ? getKanjiLesson(track.slug, lessonId) : undefined;

  if (!track || !lesson) {
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

  const lessons = track.lessons;
  const index = lessons.findIndex((item) => item.id === lesson.id);
  const previous = index > 0 ? lessons[index - 1] : undefined;
  const next = index < lessons.length - 1 ? lessons[index + 1] : undefined;

  return (
    <PageContainer bottomGutter>
      <Stack spacing={3}>
        <Box>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ mb: 1, flexWrap: 'wrap', alignItems: 'center' }}
          >
            <Chip
              label={track.name[locale]}
              color="secondary"
              variant="outlined"
              size="small"
              component={RouterLink}
              to={kanjiTrackPath(track.slug)}
              clickable
            />
            <Chip
              label={t('kanji.lessonLabel', { number: lesson.number })}
              color="primary"
              variant="outlined"
              size="small"
            />
          </Stack>
          <Heading component="h1">{lesson.title[locale]}</Heading>
        </Box>

        <HintText>{t('kanji.detailHint')}</HintText>

        <KanjiReadingsNote collapsible />

        <KanjiComponentLegend collapsible />

        <Stack spacing={5}>
          {lesson.kanji.map((entry, cardIndex) => (
            <KanjiCard key={entry.char} entry={entry} index={cardIndex + 1} />
          ))}
        </Stack>

        <KanjiPracticePanel trackSlug={track.slug} lesson={lesson} />

        <Stack direction="row" spacing={1.5} sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            {previous && (
              <Button
                component={RouterLink}
                to={kanjiLessonPath(track.slug, previous.id)}
                startIcon={<ArrowBackIcon />}
                variant="text"
                sx={{ px: 0 }}
              >
                {t('course.previousLesson')}
              </Button>
            )}
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {next && (
              <Button
                component={RouterLink}
                to={kanjiLessonPath(track.slug, next.id)}
                endIcon={<ArrowForwardIcon />}
                variant="text"
                sx={{ px: 0 }}
              >
                {t('course.nextLesson')}
              </Button>
            )}
          </Box>
        </Stack>
      </Stack>

      <ScrollToTopButton />
    </PageContainer>
  );
}
