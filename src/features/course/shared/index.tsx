'use client';

import { LocaleLink as RouterLink } from '@/components/locale-link';
import { Box, Button, Paper, Typography } from '@mui/material';
import { Heading } from '@/components/heading';
import { PageBreadcrumb } from '@/components/page-breadcrumb';
import { LessonPracticeNav, type LessonPracticeSection } from '@/components/lesson-practice-nav';
import { QuizMissList, type QuizMiss } from '@/components/quiz-miss-list';
import { ResultRetryButtons } from '@/features/course/result-actions';
import { TrackCurrentLesson } from '@/features/course/current-lesson';
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

type LessonQuizHeaderProps = {
  level: CourseLevel;
  lesson: Lesson;
  section: LessonPracticeSection;
};

function practiceTitleKey(section: LessonPracticeSection): `course.${string}` {
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
 * Shared header for the lesson practice pages. A normal-size breadcrumb
 * (JLPT N5 / Bài N) sits above the practice-name heading.
 */
export function LessonQuizHeader({ level, lesson, section }: LessonQuizHeaderProps) {
  const { t } = useTranslation();
  const course = getCourse(level);

  return (
    <>
      <TrackCurrentLesson
        trackKey={level}
        course={{ en: `JLPT ${course.code}`, vi: `JLPT ${course.code}` }}
        lessonId={lesson.id}
        number={lesson.number}
        title={lesson.title}
        path={lessonPath(level, lesson.id)}
      />
      <PageBreadcrumb
        title={t(practiceTitleKey(section))}
        items={[
          { label: `JLPT ${course.code}`, to: coursePath(level) },
          {
            label: t('course.lessonLabel', { number: lesson.number }),
            to: lessonPath(level, lesson.id)
          }
        ]}
      />
      <LessonPracticeNav level={level} lesson={lesson} section={section} />
    </>
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
  misses?: QuizMiss[];
  /** Heading over the missed list, when "Missed questions" does not fit. */
  missesTitle?: string;
  onRetry: () => void;
  /** Starts a round with only the questions missed this time; shown when there are any. */
  onRetryMisses?: () => void;
};

export function ResultScreen({
  score,
  total,
  misses = [],
  missesTitle,
  onRetry,
  onRetryMisses
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
      <ResultRetryButtons
        onRetry={onRetry}
        onRetryMisses={onRetryMisses}
        hasMisses={score < total}
      />
      {misses.length > 0 && <Box sx={{ mt: 3 }} />}
      <QuizMissList misses={misses} title={missesTitle} />
    </Paper>
  );
}
