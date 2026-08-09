'use client';

import { useState, type ChangeEvent, type MouseEvent } from 'react';
import { useParams } from 'next/navigation';
import { FormControlLabel, Stack, Switch, ToggleButton, ToggleButtonGroup } from '@mui/material';
import {
  getLesson,
  lessonHasReferenceQuizVocab,
  type CourseLevel,
  type Lesson
} from '@/constants/courses/index.ts';
import { PageContainer } from '@/components/page-container';
import { useTranslation } from '@/i18n/use-translation.ts';
import { LessonNotFound, LessonQuizHeader } from '@/features/course/shared';
import VocabMatchPanel from './vocab-match-panel.tsx';
import type { VocabScript } from './vocab-quiz.ts';

type VocabExerciseProps = {
  lesson: Lesson;
};

function VocabExercise({ lesson }: VocabExerciseProps) {
  const { locale, t } = useTranslation();
  const [script, setScript] = useState<VocabScript>('kana');
  const [includeReference, setIncludeReference] = useState(false);
  const showReferenceToggle = lessonHasReferenceQuizVocab(lesson);

  const handleScriptChange = (_event: MouseEvent<HTMLElement>, value: VocabScript | null) => {
    if (value) {
      setScript(value);
    }
  };

  const handleReferenceChange = (_event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setIncludeReference(checked);
  };

  return (
    <PageContainer>
      <Stack spacing={3}>
        <LessonQuizHeader lesson={lesson} section="vocabulary" />

        <ToggleButtonGroup
          exclusive
          fullWidth
          color="primary"
          value={script}
          onChange={handleScriptChange}
          aria-label={t('course.vocabScript')}
        >
          <ToggleButton value="kana">{t('course.vocabScriptKana')}</ToggleButton>
          <ToggleButton value="kanji">{t('course.vocabScriptKanji')}</ToggleButton>
          <ToggleButton value="all">{t('course.vocabScriptAll')}</ToggleButton>
        </ToggleButtonGroup>

        {showReferenceToggle && (
          <FormControlLabel
            control={
              <Switch
                checked={includeReference}
                onChange={handleReferenceChange}
                aria-label={t('course.vocabIncludeReference')}
              />
            }
            label={t('course.vocabIncludeReference')}
          />
        )}

        <VocabMatchPanel
          key={`${script}:${includeReference}`}
          lesson={lesson}
          locale={locale}
          script={script}
          includeReference={includeReference}
        />
      </Stack>
    </PageContainer>
  );
}

type ExercisePageProps = {
  level: CourseLevel;
};

function ExercisePage({ level }: ExercisePageProps) {
  const { lessonId } = useParams<{ lessonId: string }>();
  const { locale } = useTranslation();
  const lesson = lessonId ? getLesson(level, lessonId) : undefined;

  if (!lesson) {
    return <LessonNotFound level={level} />;
  }

  return <VocabExercise key={`${level}:${lesson.id}:${locale}`} lesson={lesson} />;
}

export default ExercisePage;
