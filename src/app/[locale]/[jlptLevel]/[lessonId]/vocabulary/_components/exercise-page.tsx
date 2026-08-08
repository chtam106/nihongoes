'use client';

import { useState, type ChangeEvent, type MouseEvent } from 'react';
import { useParams } from 'next/navigation';
import {
  Box,
  FormControlLabel,
  Paper,
  Stack,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';
import {
  getLesson,
  lessonHasReferenceQuizVocab,
  type CourseLevel,
  type Lesson
} from '@/constants/courses/index.ts';
import { PageContainer } from '@/components/page-container';
import { useTranslation } from '@/i18n/use-translation.ts';
import type { Locale } from '@/i18n/translations.ts';
import { renderJapaneseText } from '@/utils/japanese-text.tsx';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import { ChoiceButton } from '@/features/course/choice-button';
import { LessonNotFound, LessonQuizHeader } from '@/features/course/shared';
import { useVocabQuiz } from './use-vocab-quiz.ts';
import type { VocabMode, VocabScript } from './vocab-quiz.ts';

type VocabQuizProps = {
  lesson: Lesson;
  locale: Locale;
  mode: VocabMode;
  script: VocabScript;
  includeReference: boolean;
};

/** The endless per-question panel: prompt + answer choices with auto-advance. */
function VocabQuiz({ lesson, locale, mode, script, includeReference }: VocabQuizProps) {
  const { t } = useTranslation();
  const { question, wrongIds, answeredCorrectly, handleSelect } = useVocabQuiz({
    lesson,
    locale,
    mode,
    script,
    includeReference
  });

  const promptLabel =
    mode === 'word-meaning' ? t('course.vocabPromptMeaning') : t('course.vocabPromptWord');
  const displayPrompt = question.promptJa
    ? renderJapaneseText(question.promptText, question.promptRuby)
    : question.promptText;

  return (
    <Stack spacing={3}>
      <Paper elevation={0} sx={[elevatedSurfaceSx, { p: { xs: 2.5, md: 3 } }]}>
        <Typography variant="overline" color="text.secondary">
          {promptLabel}
        </Typography>
        <Typography
          variant={question.promptJa ? 'h3' : 'h5'}
          component="p"
          sx={{ fontWeight: 600, mt: 0.5 }}
          lang={question.promptJa ? 'ja' : undefined}
        >
          {displayPrompt}
        </Typography>
      </Paper>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 1.5
        }}
      >
        {question.options.map((option) => {
          const isCorrectOption = option.id === question.correctId;
          const showCorrect = answeredCorrectly && isCorrectOption;
          const showWrong = wrongIds.includes(option.id);
          const locked = answeredCorrectly || showWrong;

          return (
            <ChoiceButton
              key={option.id}
              onClick={() => handleSelect(option.id)}
              dimmed={locked}
              state={showCorrect ? 'correct' : showWrong ? 'wrong' : 'default'}
              lang={option.ja ? 'ja' : undefined}
            >
              {option.label}
            </ChoiceButton>
          );
        })}
      </Box>
    </Stack>
  );
}

type VocabExerciseProps = {
  lesson: Lesson;
};

function VocabExercise({ lesson }: VocabExerciseProps) {
  const { locale, t } = useTranslation();
  const [mode, setMode] = useState<VocabMode>('word-meaning');
  const [script, setScript] = useState<VocabScript>('kana');
  const [includeReference, setIncludeReference] = useState(false);
  const showReferenceToggle = lessonHasReferenceQuizVocab(lesson);

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

  return (
    <PageContainer>
      <Stack spacing={3}>
        <LessonQuizHeader lesson={lesson} section="vocabulary" />

        <ToggleButtonGroup
          exclusive
          fullWidth
          color="primary"
          value={mode}
          onChange={handleModeChange}
          aria-label={t('course.vocabulary')}
        >
          <ToggleButton value="word-meaning">{t('course.vocabWordToMeaning')}</ToggleButton>
          <ToggleButton value="meaning-word">{t('course.vocabMeaningToWord')}</ToggleButton>
        </ToggleButtonGroup>

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

        <VocabQuiz
          key={`${mode}:${script}:${includeReference}`}
          lesson={lesson}
          locale={locale}
          mode={mode}
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
