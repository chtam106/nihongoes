'use client';

import { Box, Paper, Stack, Typography } from '@mui/material';
import type { CourseLevel, Lesson } from '@/constants/courses/index.ts';
import type { Locale } from '@/i18n/translations.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { FuriganaText } from '@/components/furigana-text';
import { QuizProgressBar } from '@/components/quiz-progress-bar';
import { ChoiceButton } from '@/features/course/choice-button';
import { ResultScreen } from '@/features/course/shared';
import { useVocabQuiz } from './use-vocab-quiz.ts';
import type { VocabMode } from './vocab-quiz.ts';

type VocabMcqPanelProps = {
  lesson: Lesson;
  level: CourseLevel;
  locale: Locale;
  mode: VocabMode;
  includeReference: boolean;
};

function VocabMcqPanel({ lesson, level, locale, mode, includeReference }: VocabMcqPanelProps) {
  const { t } = useTranslation();
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
  } = useVocabQuiz({
    lesson,
    locale,
    mode,
    includeReference
  });

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

  const promptLabel =
    mode === 'word-meaning' ? t('course.vocabPromptMeaning') : t('course.vocabPromptWord');
  const displayPrompt = question.promptText;
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
          sx={{ display: 'block', textAlign: 'center', lineHeight: 1.5, mb: 1 }}
        >
          {promptLabel}
        </Typography>
        <Paper
          elevation={0}
          sx={[elevatedSurfaceSx, { p: { xs: 2.5, md: 3 }, textAlign: 'center' }]}
        >
          <Typography
            variant={question.promptJa ? 'h3' : 'h5'}
            component="p"
            sx={{ fontWeight: 600 }}
            lang={question.promptJa ? 'ja' : undefined}
          >
            {question.promptJa ? (
              <FuriganaText text={displayPrompt} ruby={question.promptRuby} />
            ) : (
              displayPrompt
            )}
          </Typography>
        </Paper>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
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
              {option.ja ? <FuriganaText text={option.label} ruby={option.ruby} /> : option.label}
            </ChoiceButton>
          );
        })}
      </Box>
    </Stack>
  );
}

export default VocabMcqPanel;
