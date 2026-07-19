'use client';

import { useParams } from '@/i18n/navigation.tsx';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { getLesson, type CourseLevel, type Lesson } from '@/constants/courses/index.ts';
import { PageContainer } from '@/components/page-container';
import { useTranslation } from '@/i18n/use-translation.ts';
import type { Locale } from '@/i18n/translations.ts';
import { formatJapaneseDisplay } from '@/utils/japanese-display.ts';
import { speakJapanese, useSpeechSupported } from '@/utils/speech.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import { ChoiceButton } from '@/features/course/choice-button';
import { LessonNotFound, LessonQuizHeader } from '@/features/course/shared';
import { useGrammarQuiz } from './use-grammar-quiz.ts';

type GrammarQuizProps = {
  lesson: Lesson;
  locale: Locale;
};

/** The endless fill-in-the-blank panel: a sentence with one grammar gap + choices. */
function GrammarQuiz({ lesson, locale }: GrammarQuizProps) {
  const { t } = useTranslation();
  const canSpeak = useSpeechSupported();
  const { question, wrongIds, answeredCorrectly, handleSelect } = useGrammarQuiz({
    lesson,
    locale
  });

  // Only reveal audio once solved, so it never speaks the answer beforehand.
  const canPlay = canSpeak && answeredCorrectly;

  return (
    <Stack spacing={3}>
      <Paper
        elevation={0}
        onClick={canPlay ? () => speakJapanese(question.fullText) : undefined}
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
        sx={[elevatedSurfaceSx, { p: { xs: 2.5, md: 3 }, cursor: canPlay ? 'pointer' : undefined }]}
      >
        <Typography variant="overline" color="text.secondary">
          {t('course.grammarClozePrompt')}
        </Typography>
        <Typography variant="h5" component="p" lang="ja" sx={{ fontWeight: 600, mt: 0.5 }}>
          {formatJapaneseDisplay(question.before)}
          <Box
            component="span"
            sx={{
              display: 'inline-block',
              minWidth: '2.5em',
              mx: 0.5,
              textAlign: 'center',
              borderBottom: '2px solid',
              borderColor: answeredCorrectly ? 'primary.main' : 'text.secondary',
              color: 'primary.main'
            }}
          >
            {answeredCorrectly ? question.answer : '\u3000'}
          </Box>
          {formatJapaneseDisplay(question.after)}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {question.meaning}
        </Typography>
      </Paper>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 1.5 }}>
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
              {option.label}
            </ChoiceButton>
          );
        })}
      </Box>
    </Stack>
  );
}

type GrammarExerciseProps = {
  level: CourseLevel;
  lesson: Lesson;
};

function GrammarExercise({ level, lesson }: GrammarExerciseProps) {
  const { locale } = useTranslation();

  return (
    <PageContainer>
      <Stack spacing={3}>
        <LessonQuizHeader level={level} lesson={lesson} section="grammar" />

        <GrammarQuiz key={`${lesson.id}:${locale}`} lesson={lesson} locale={locale} />
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

  return <GrammarExercise key={`${level}:${lesson.id}`} level={level} lesson={lesson} />;
}

export default GrammarPage;
