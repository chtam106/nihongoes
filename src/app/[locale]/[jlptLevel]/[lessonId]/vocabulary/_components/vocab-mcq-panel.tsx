'use client';

import { Box, LinearProgress, Paper, Stack, Typography } from '@mui/material';
import type { CourseLevel, Lesson } from '@/constants/courses/index.ts';
import type { Locale } from '@/i18n/translations.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { ChoiceButton } from '@/features/course/choice-button';
import { ResultScreen } from '@/features/course/shared';
import { useVocabQuiz } from './use-vocab-quiz.ts';
import type { VocabMode, VocabScript } from './vocab-quiz.ts';

type VocabMcqPanelProps = {
  lesson: Lesson;
  level: CourseLevel;
  locale: Locale;
  mode: VocabMode;
  script: VocabScript;
  includeReference: boolean;
};

function VocabMcqPanel({
  lesson,
  level,
  locale,
  mode,
  script,
  includeReference
}: VocabMcqPanelProps) {
  const { t } = useTranslation();
  const {
    question,
    questionNumber,
    total,
    score,
    finished,
    wrongIds,
    answeredCorrectly,
    handleSelect,
    handleRetry
  } = useVocabQuiz({
    lesson,
    locale,
    mode,
    script,
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
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'baseline', mb: 0.5 }}
        >
          <Typography variant="body1" color="text.secondary">
            {progressLabel}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {score} / {total}
          </Typography>
        </Stack>
        <LinearProgress
          variant="determinate"
          value={total === 0 ? 0 : (questionNumber / total) * 100}
          aria-label={progressLabel}
          sx={{ borderRadius: 1, height: 8 }}
        />
      </Box>

      <Paper elevation={0} sx={[elevatedSurfaceSx, { p: { xs: 2.5, md: 3 }, textAlign: 'center' }]}>
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
              {option.label}
            </ChoiceButton>
          );
        })}
      </Box>
    </Stack>
  );
}

export default VocabMcqPanel;
