'use client';

import { useMemo, type MouseEvent } from 'react';
import { useParams } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Checkbox, FormControlLabel, Stack } from '@mui/material';
import { ScrollButton } from '@/components/scroll-button';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { PageContainer } from '@/components/page-container';
import { getCourse, getLesson, lessonSentencesPath } from '@/constants/courses/index.ts';
import type { CourseLevel, Lesson, LessonSentenceWriting } from '@/types/course.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { usePersistentState } from '@/utils/use-persistent-state.ts';
import { LessonNotFound, LessonQuizHeader } from '@/features/course/shared';
import { SentenceWritingPrompt } from './sentence-writing-prompt.tsx';
import {
  defaultSentenceWritingPreferences,
  sanitizeSentenceWritingPreferences,
  SENTENCE_WRITING_STORAGE_KEY
} from './sentence-writing-preferences.ts';

function scrollToTopOnPlainClick(event: MouseEvent<HTMLAnchorElement>) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  window.scrollTo(0, 0);
}

type SentenceWritingExerciseProps = {
  level: CourseLevel;
  lesson: Lesson;
  writing: LessonSentenceWriting;
};

function SentenceWritingExercise({ level, lesson, writing }: SentenceWritingExerciseProps) {
  const { locale, t } = useTranslation();
  const [prefs, setPrefs] = usePersistentState(
    SENTENCE_WRITING_STORAGE_KEY,
    defaultSentenceWritingPreferences(),
    sanitizeSentenceWritingPreferences
  );
  const items = useMemo(() => {
    const byPattern = new Map(writing.grammar.map((group) => [group.pattern, group]));
    const grammarItems = lesson.grammar.flatMap(
      (point) => byPattern.get(point.pattern)?.items ?? []
    );

    return [...grammarItems, ...writing.phrases];
  }, [lesson, writing]);
  const lessons = getCourse(level).lessons;
  const index = lessons.findIndex((item) => item.id === lesson.id);
  const previous = index > 0 ? lessons[index - 1] : undefined;
  const next = index >= 0 && index < lessons.length - 1 ? lessons[index + 1] : undefined;

  return (
    <PageContainer bottomGutter>
      <Stack spacing={3}>
        <LessonQuizHeader lesson={lesson} section="sentences" />
        <FormControlLabel
          sx={{ mx: 0, alignSelf: 'flex-start' }}
          control={
            <Checkbox
              size="small"
              checked={prefs.showInput}
              onChange={(_event, checked) =>
                setPrefs((previousPrefs) => ({ ...previousPrefs, showInput: checked }))
              }
              aria-label={t('course.sentenceWritingShowInput')}
            />
          }
          label={t('course.sentenceWritingShowInput')}
        />
        {items.length > 0 && (
          <Stack spacing={1.5}>
            {items.map((item, itemIndex) => (
              <SentenceWritingPrompt
                key={`item-${itemIndex}`}
                item={item}
                index={itemIndex + 1}
                prompt={item.prompt[locale]}
                showInput={prefs.showInput}
              />
            ))}
          </Stack>
        )}
        <Stack
          className="no-print"
          direction="row"
          spacing={1.5}
          sx={{ justifyContent: 'space-between' }}
        >
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            {previous && (
              <Button
                component={RouterLink}
                to={lessonSentencesPath(level, previous.id)}
                onClick={scrollToTopOnPlainClick}
                startIcon={<ArrowBackIcon />}
                variant="text"
                sx={{ px: 0, textTransform: 'none' }}
              >
                {t('course.previousLesson')}
              </Button>
            )}
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {next && (
              <Button
                component={RouterLink}
                to={lessonSentencesPath(level, next.id)}
                onClick={scrollToTopOnPlainClick}
                endIcon={<ArrowForwardIcon />}
                variant="text"
                sx={{ px: 0, textTransform: 'none' }}
              >
                {t('course.nextLesson')}
              </Button>
            )}
          </Box>
        </Stack>
      </Stack>
      <ScrollButton />
    </PageContainer>
  );
}

type SentenceWritingPageProps = {
  level: CourseLevel;
  writing?: LessonSentenceWriting;
};

function SentenceWritingPage({ level, writing }: SentenceWritingPageProps) {
  const { lessonId } = useParams<{ lessonId: string }>();
  const lesson = lessonId ? getLesson(level, lessonId) : undefined;

  if (!lesson || !writing) {
    return <LessonNotFound level={level} />;
  }

  return (
    <SentenceWritingExercise
      key={`${level}:${lesson.id}`}
      level={level}
      lesson={lesson}
      writing={writing}
    />
  );
}

export default SentenceWritingPage;
