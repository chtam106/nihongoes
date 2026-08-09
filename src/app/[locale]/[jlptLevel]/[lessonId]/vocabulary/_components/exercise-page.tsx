'use client';

import { type ChangeEvent, type MouseEvent } from 'react';
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
import { SEGMENT_BUTTON_STACK_SPACING } from '@/features/alphabet/exercise/control-styles.ts';
import { useVocabExercisePreferences } from './use-vocab-exercise-preferences.ts';
import VocabMatchPanel from './vocab-match-panel.tsx';
import VocabMcqPanel from './vocab-mcq-panel.tsx';
import type { VocabExerciseFormat, VocabMode, VocabScript } from './vocab-quiz.ts';

type VocabExerciseProps = {
  lesson: Lesson;
};

function VocabExercise({ lesson }: VocabExerciseProps) {
  const { locale, t } = useTranslation();
  const { prefs, setExerciseFormat, setMode, setScript, setIncludeReference } =
    useVocabExercisePreferences();
  const showReferenceToggle = lessonHasReferenceQuizVocab(lesson);

  const handleFormatChange = (
    _event: MouseEvent<HTMLElement>,
    value: VocabExerciseFormat | null
  ) => {
    if (value) {
      setExerciseFormat(value);
    }
  };

  const handleModeChange = (_event: MouseEvent<HTMLElement>, value: VocabMode | null) => {
    if (value) {
      setMode(value);
    }
  };

  const handleScriptChange = (_event: MouseEvent<HTMLElement>, value: VocabScript | null) => {
    if (value) {
      setScript(value);
    }
  };

  const handleReferenceChange = (_event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setIncludeReference(checked);
  };

  const panelKey = `${prefs.exerciseFormat}:${prefs.mode}:${prefs.script}:${prefs.includeReference}`;

  return (
    <PageContainer>
      <Stack spacing={3}>
        <LessonQuizHeader lesson={lesson} section="vocabulary" />

        <Stack spacing={SEGMENT_BUTTON_STACK_SPACING}>
          <ToggleButtonGroup
            exclusive
            fullWidth
            color="primary"
            value={prefs.exerciseFormat}
            onChange={handleFormatChange}
            aria-label={t('course.vocabExerciseFormat')}
          >
            <ToggleButton value="match">{t('course.vocabExerciseMatch')}</ToggleButton>
            <ToggleButton value="mcq">{t('course.vocabExerciseMcq')}</ToggleButton>
          </ToggleButtonGroup>

          {prefs.exerciseFormat === 'mcq' && (
            <ToggleButtonGroup
              exclusive
              fullWidth
              color="primary"
              value={prefs.mode}
              onChange={handleModeChange}
              aria-label={t('course.vocabulary')}
            >
              <ToggleButton value="word-meaning">{t('course.vocabWordToMeaning')}</ToggleButton>
              <ToggleButton value="meaning-word">{t('course.vocabMeaningToWord')}</ToggleButton>
            </ToggleButtonGroup>
          )}

          <ToggleButtonGroup
            exclusive
            fullWidth
            color="primary"
            value={prefs.script}
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
                  size="small"
                  checked={prefs.includeReference}
                  onChange={handleReferenceChange}
                  aria-label={t('course.vocabIncludeReference')}
                />
              }
              label={t('course.vocabIncludeReference')}
            />
          )}
        </Stack>

        {prefs.exerciseFormat === 'match' && (
          <VocabMatchPanel
            key={panelKey}
            lesson={lesson}
            locale={locale}
            script={prefs.script}
            includeReference={prefs.includeReference}
          />
        )}

        {prefs.exerciseFormat === 'mcq' && (
          <VocabMcqPanel
            key={panelKey}
            lesson={lesson}
            locale={locale}
            mode={prefs.mode}
            script={prefs.script}
            includeReference={prefs.includeReference}
          />
        )}
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
