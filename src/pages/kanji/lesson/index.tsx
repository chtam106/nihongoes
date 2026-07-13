import { useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import { Box, Button, Chip, Paper, Stack, Typography } from '@mui/material';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { Heading } from '@/components/heading';
import { HintText } from '@/components/hint-text';
import { KanjiCard } from '@/components/kanji-card';
import { PageContainer } from '@/components/page-container';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';
import { useTranslation } from '@/i18n/use-translation.ts';
import {
  getKanjiLesson,
  getKanjiTrack,
  KANJI_BASE_PATH,
  kanjiQuizPath,
  kanjiTrackPath,
  kanjiWritingPath,
  type KanjiLesson
} from '@/constants/kanji/index.ts';
import { tonalSurfaceSx } from '@/theme/surfaces.ts';

type KanjiPracticePanelProps = {
  trackSlug: string;
  lesson: KanjiLesson;
};

function KanjiPracticePanel({ trackSlug, lesson }: KanjiPracticePanelProps) {
  const { t } = useTranslation();

  const actions = [
    {
      key: 'quiz',
      to: kanjiQuizPath(trackSlug, lesson.id),
      icon: <QuizOutlinedIcon />,
      label: t('kanji.quizTitle')
    },
    {
      key: 'writing',
      to: kanjiWritingPath(trackSlug, lesson.id),
      icon: <BorderColorOutlinedIcon />,
      label: t('kanji.writing')
    }
  ];

  return (
    <Paper elevation={0} sx={[tonalSurfaceSx, { p: { xs: 2.5, md: 3 } }]}>
      <Box sx={{ mb: 2 }}>
        <Heading scale="subsection" component="h2">
          {t('kanji.practiceHeading')}
        </Heading>
        <Typography variant="body2" color="text.secondary">
          {t('kanji.practiceSubtitle')}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
        {actions.map((action) => (
          <Button
            key={action.key}
            component={RouterLink}
            to={action.to}
            variant="outlined"
            startIcon={action.icon}
          >
            {action.label}
          </Button>
        ))}
      </Box>
    </Paper>
  );
}

function KanjiLessonPage() {
  const { track: trackSlug, lessonId } = useParams<{ track: string; lessonId: string }>();
  const { locale, t } = useTranslation();
  const track = trackSlug ? getKanjiTrack(trackSlug) : undefined;
  const lesson = track && lessonId ? getKanjiLesson(track.slug, lessonId) : undefined;

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

  return (
    <PageContainer bottomGutter>
      <Stack spacing={3}>
        <Box>
          <Box sx={{ mb: 1 }}>
            <Button
              component={RouterLink}
              to={kanjiTrackPath(track.slug)}
              startIcon={<ArrowBackIcon />}
              variant="text"
              sx={{ px: 0 }}
            >
              {track.name[locale]}
            </Button>
          </Box>
          <Chip
            label={t('kanji.lessonLabel', { number: lesson.number })}
            color="primary"
            variant="outlined"
            size="small"
            sx={{ mb: 1 }}
          />
          <Heading component="h1">{lesson.title[locale]}</Heading>
        </Box>

        <HintText>{t('kanji.detailHint')}</HintText>

        <Stack spacing={2}>
          {lesson.kanji.map((entry, index) => (
            <KanjiCard key={entry.char} entry={entry} index={index + 1} />
          ))}
        </Stack>

        <KanjiPracticePanel trackSlug={track.slug} lesson={lesson} />
      </Stack>

      <ScrollToTopButton />
    </PageContainer>
  );
}

export default KanjiLessonPage;
