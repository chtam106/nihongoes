'use client';

import ReplayIcon from '@mui/icons-material/Replay';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { Box, Button, Chip, Paper, Stack, Typography } from '@mui/material';
import { Heading } from '@/components/heading';
import { QuizMissList, type QuizMiss } from '@/components/quiz-miss-list';
import {
  coursePath,
  getCourse,
  lessonPath,
  type CourseLevel,
  type Lesson
} from '@/constants/courses/index.ts';
import { PageContainer } from '@/components/page-container';
import { useTranslation } from '@/i18n/use-translation.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';

type LessonQuizSection = 'vocabulary' | 'grammar' | 'reading' | 'writing' | 'sentences';

type LessonQuizHeaderProps = {
  level: CourseLevel;
  lesson: Lesson;
  section: LessonQuizSection;
};

function practiceTitleKey(section: LessonQuizSection): `course.${string}` {
  switch (section) {
    case 'vocabulary':
      return 'course.vocabularyPractice';
    case 'grammar':
      return 'course.grammarPractice';
    case 'reading':
      return 'course.readingPractice';
    case 'writing':
      return 'course.writingPractice';
    case 'sentences':
      return 'course.sentenceWritingHeading';
  }
}

/**
 * Shared header for the lesson practice pages. Same shape as the kanji quiz
 * header: course and lesson chips, then the section name alone.
 */
export function LessonQuizHeader({ level, lesson, section }: LessonQuizHeaderProps) {
  const { t } = useTranslation();

  return (
    <Box>
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        sx={{ mb: 1, flexWrap: 'wrap', alignItems: 'center' }}
      >
        <Chip
          label={`JLPT ${getCourse(level).code}`}
          color="secondary"
          variant="outlined"
          size="small"
          component={RouterLink}
          to={coursePath(level)}
          clickable
        />
        <Chip
          label={t('course.lessonLabel', { number: lesson.number })}
          color="primary"
          variant="outlined"
          size="small"
          component={RouterLink}
          to={lessonPath(level, lesson.id)}
          clickable
        />
      </Stack>
      <Heading component="h1">{t(practiceTitleKey(section))}</Heading>
    </Box>
  );
}

type LessonNotFoundProps = {
  level: CourseLevel;
};

export function LessonNotFound({ level }: LessonNotFoundProps) {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Heading component="h1" gutterBottom>
        {t('course.notFoundTitle')}
      </Heading>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {t('course.notFoundBody')}
      </Typography>
      <Button component={RouterLink} to={coursePath(level)} variant="contained">
        {t('common.back')}
      </Button>
    </PageContainer>
  );
}

type ResultScreenProps = {
  score: number;
  total: number;
  level: CourseLevel;
  lessonId: string;
  misses?: QuizMiss[];
  onRetry: () => void;
};

export function ResultScreen({
  score,
  total,
  level,
  lessonId,
  misses = [],
  onRetry
}: ResultScreenProps) {
  const { t } = useTranslation();
  const ratio = total === 0 ? 0 : score / total;
  const message =
    ratio >= 0.8
      ? t('course.resultGreat')
      : ratio >= 0.5
        ? t('course.resultGood')
        : t('course.resultKeepGoing');

  return (
    <Paper elevation={0} sx={[elevatedSurfaceSx, { p: { xs: 3, md: 4 }, textAlign: 'center' }]}>
      <Heading scale="page" component="h2" gutterBottom>
        {t('course.resultTitle')}
      </Heading>
      <Typography variant="h2" component="p" sx={{ fontWeight: 700, color: 'primary.main', my: 2 }}>
        {score} / {total}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {message}
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1.5}
        sx={{ justifyContent: 'center', flexWrap: 'wrap', mb: misses.length > 0 ? 3 : 0 }}
        useFlexGap
      >
        <Button variant="contained" startIcon={<ReplayIcon />} onClick={onRetry}>
          {t('course.retry')}
        </Button>
        <Button variant="outlined" component={RouterLink} to={lessonPath(level, lessonId)}>
          {t('course.reviewLesson')}
        </Button>
      </Stack>
      <QuizMissList misses={misses} />
    </Paper>
  );
}
