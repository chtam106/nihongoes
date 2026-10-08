'use client';

import { useCallback } from 'react';
import { useParams } from 'next/navigation';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { getLesson, type CourseLevel, type Lesson } from '@/constants/courses/index.ts';
import { PageContainer } from '@/components/page-container';
import { useTranslation } from '@/i18n/use-translation.ts';
import type { Locale } from '@/i18n/translations.ts';
import { FuriganaText } from '@/components/furigana-text';
import { QuizProgressBar } from '@/components/quiz-progress-bar';
import { speakJapanese, useSpeechClickHandler, useSpeechEnabled } from '@/utils/speech.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import { ChoiceButton } from '@/features/course/choice-button';
import { LessonNotFound, LessonQuizHeader, ResultScreen } from '@/features/course/shared';
import { useGrammarQuiz } from './use-grammar-quiz.ts';

type GrammarQuizProps = {
  lesson: Lesson;
  level: CourseLevel;
  locale: Locale;
};

/** Fill-in-the-blank panel: a sentence with one grammar gap + choices. */
function GrammarQuiz({ lesson, level, locale }: GrammarQuizProps) {
  const { t } = useTranslation();
  const canSpeak = useSpeechEnabled();
  const {
    question,
    questionNumber,
    total,
    score,
    results,
    finished,
    wrongIds,
    answeredCorrectly,
    handleSelect,
    handleRetry
  } = useGrammarQuiz({
    lesson,
    level,
    locale
  });

  // Only reveal audio once solved, so it never speaks the answer beforehand.
  const canPlay = canSpeak && answeredCorrectly;
  const handleSpeak = useCallback(() => speakJapanese(question.fullText), [question.fullText]);
  const speechClick = useSpeechClickHandler(handleSpeak);

  if (finished) {
    return (
      <ResultScreen
        score={score}
        total={total}
        level={level}
        lessonId={lesson.id}
        onRetry={handleRetry}
      />
    );
  }

  const progressLabel = t('course.questionProgress', {
    current: questionNumber + 1,
    total
  });

  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
          {progressLabel}
        </Typography>
        <QuizProgressBar
          total={total}
          current={questionNumber}
          results={results}
          label={progressLabel}
        />
      </Box>

      <Box>
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ display: 'block', lineHeight: 1.5, mb: 1 }}
        >
          {t('course.grammarClozePrompt')}
        </Typography>
        <Paper
          elevation={0}
          onPointerDown={canPlay ? speechClick.onPointerDown : undefined}
          onClick={canPlay ? speechClick.onClick : undefined}
          role={canPlay ? 'button' : undefined}
          tabIndex={canPlay ? 0 : undefined}
          aria-label={canPlay ? t('common.playAudio') : undefined}
          onKeyDown={
            canPlay
              ? (event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    speakJapanese(question.fullText);
                  }
                }
              : undefined
          }
          sx={[
            elevatedSurfaceSx,
            { p: { xs: 2.5, md: 3 }, cursor: canPlay ? 'pointer' : undefined }
          ]}
        >
          <Typography variant="h5" component="p" lang="ja" sx={{ fontWeight: 600 }}>
            <FuriganaText text={question.before} ruby={question.beforeRuby} />
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                minWidth: '2.5em',
                mx: 0.5,
                textAlign: 'center',
                borderBottom: '2px solid',
                borderColor: 'text.secondary'
              }}
            >
              {'\u3000'}
            </Box>
            <FuriganaText text={question.after} ruby={question.afterRuby} />
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {question.meaning}
          </Typography>
        </Paper>
      </Box>

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
              lang="ja"
            >
              <FuriganaText text={option.label} ruby={option.ruby} />
            </ChoiceButton>
          );
        })}
      </Box>
    </Stack>
  );
}

type GrammarExerciseProps = {
  lesson: Lesson;
  level: CourseLevel;
};

function GrammarExercise({ lesson, level }: GrammarExerciseProps) {
  const { locale } = useTranslation();

  return (
    <PageContainer>
      <Stack spacing={3}>
        <LessonQuizHeader lesson={lesson} section="grammar" />

        <GrammarQuiz key={`${lesson.id}:${locale}`} lesson={lesson} level={level} locale={locale} />
      </Stack>
    </PageContainer>
  );
}

type GrammarPageProps = {
  level: CourseLevel;
};

function GrammarPage({ level }: GrammarPageProps) {
  const { lessonId } = useParams<{ lessonId: string }>();
  const lesson = lessonId ? getLesson(level, lessonId) : undefined;

  if (!lesson) {
    return <LessonNotFound level={level} />;
  }

  return <GrammarExercise key={`${level}:${lesson.id}`} lesson={lesson} level={level} />;
}

export default GrammarPage;
