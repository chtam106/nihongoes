'use client';

import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { Checkbox, FormControlLabel, Stack } from '@mui/material';
import { ScrollButton } from '@/components/scroll-button';
import { PageContainer } from '@/components/page-container';
import { getLesson } from '@/constants/courses/index.ts';
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

  return (
    <PageContainer bottomGutter>
      <Stack spacing={3}>
        <LessonQuizHeader level={level} lesson={lesson} section="sentences" />
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
