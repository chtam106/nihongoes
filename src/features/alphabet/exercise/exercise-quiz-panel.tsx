import { useState } from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import { Box, Button, Link, Paper, Stack, TextField, Typography } from '@mui/material';
import {
  getOptionValue,
  isQuizAnswerCorrect,
  normalizeRomajiInput,
  usesCharacterOptions,
  type ExerciseMode,
  type ExerciseScope,
  type ExerciseScript,
  type QuizQuestion,
  type ScriptPairDirection
} from '@/features/alphabet/exercise/exercise-quiz.ts';
import { quizInputFeedbackSx, resultBorderSx } from '@/features/alphabet/exercise/exercise-ui.ts';
import { useExerciseQuiz } from '@/features/alphabet/exercise/use-exercise-quiz.ts';
import { Heading } from '@/components/heading';
import { QuizProgressBar } from '@/components/quiz-progress-bar';
import { quizChoiceSx } from '@/theme/quiz-choice.ts';
import { KanaDisplay } from '@/components/kana-display';
import { useTranslation } from '@/i18n/use-translation.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import { hasTextSelection } from '@/utils/text-selection.ts';

// On touch devices auto-focusing the answer field on the first question would
// pop the on-screen keyboard whenever filters change (the quiz remounts). We
// still auto-focus on later questions so answering correctly keeps the keyboard
// up for the next one. Devices with a fine pointer (mouse) always auto-focus.
const SUPPORTS_FINE_POINTER =
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(pointer: fine)').matches;

type ExerciseQuizPanelProps = {
  mode: ExerciseMode;
  scriptLabel: string;
  question: QuizQuestion;
  questionNumber: number;
  wrongAnswers: string[];
  answeredCorrectly: boolean;
  onAnswer: (answer: string) => void;
};

type RomajiInputAnswerProps = {
  correctRomaji: string;
  answeredCorrectly: boolean;
  wrongAnswers: string[];
  autoFocus: boolean;
  onAnswer: (answer: string) => void;
};

/** Free-text romaji answer: type the romaji for the shown kana. */
function RomajiInputAnswer({
  correctRomaji,
  answeredCorrectly,
  wrongAnswers,
  autoFocus,
  onAnswer
}: RomajiInputAnswerProps) {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const [revealed, setRevealed] = useState(false);

  const normalized = normalizeRomajiInput(value);
  const isWrong = !answeredCorrectly && normalized.length > 0 && wrongAnswers.includes(normalized);
  const answerShown = revealed;

  const handleSubmit = () => {
    if (answeredCorrectly || normalized.length === 0) {
      return;
    }

    onAnswer(normalized);
  };

  return (
    <Stack spacing={4} sx={{ alignItems: 'center' }}>
      <Box aria-live="polite" sx={{ display: 'grid', justifyItems: 'center' }}>
        <Link
          component="button"
          type="button"
          variant="body1"
          underline="hover"
          onClick={() => setRevealed(true)}
          sx={{
            gridArea: '1 / 1',
            lineHeight: 1.66,
            visibility: answerShown ? 'hidden' : 'visible'
          }}
        >
          {t('exercise.showAnswer')}
        </Link>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            gridArea: '1 / 1',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            visibility: answerShown ? 'visible' : 'hidden'
          }}
        >
          <Link
            component="button"
            type="button"
            variant="body1"
            underline="hover"
            onClick={() => setRevealed(false)}
            sx={{ lineHeight: 1.66 }}
          >
            {t('exercise.hideAnswer')}
          </Link>
          <Typography
            lang="en"
            variant="body1"
            sx={{ color: 'text.secondary', fontWeight: 500, lineHeight: 1.66 }}
          >
            {correctRomaji}
          </Typography>
        </Stack>
      </Box>

      <Box
        component="form"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', alignItems: 'center' }}
      >
        <TextField
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={t('exercise.romajiInputPlaceholder')}
          autoComplete="off"
          spellCheck={false}
          autoFocus={autoFocus}
          error={isWrong}
          slotProps={{
            input: { readOnly: answeredCorrectly },
            htmlInput: {
              'aria-label': t('exercise.romajiInputPlaceholder'),
              lang: 'en',
              autoCapitalize: 'none',
              autoCorrect: 'off'
            }
          }}
          sx={{
            maxWidth: 200,
            '& .MuiOutlinedInput-root': { height: 48 },
            '& .MuiOutlinedInput-notchedOutline': { borderWidth: 1 },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderWidth: 1
            },
            '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
              borderWidth: 1
            },
            ...(answeredCorrectly && quizInputFeedbackSx('correct')),
            ...(isWrong && quizInputFeedbackSx('wrong'))
          }}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={answeredCorrectly}
          sx={{ height: 48, flexShrink: 0 }}
        >
          {t('exercise.check')}
        </Button>
      </Box>
    </Stack>
  );
}

function getQuestionLabel(
  mode: ExerciseMode,
  scriptLabel: string,
  t: (key: string, params?: Record<string, string>) => string,
  pairDirection?: QuizQuestion['pairDirection']
) {
  switch (mode) {
    case 'romaji':
    case 'kana-romaji':
      return t('exercise.questionRomaji', { script: scriptLabel });
    case 'character':
      return t('exercise.questionCharacter', { script: scriptLabel });
    case 'script-pair':
      return pairDirection === 'hiragana-to-katakana'
        ? t('exercise.questionScriptPairHiraToKata')
        : t('exercise.questionScriptPairKataToHira');
  }
}

export function ExerciseQuizPanel({
  mode,
  scriptLabel,
  question,
  questionNumber,
  wrongAnswers,
  answeredCorrectly,
  onAnswer
}: ExerciseQuizPanelProps) {
  const { t } = useTranslation();
  const characterOptions = usesCharacterOptions(mode);

  return (
    <Paper elevation={0} sx={[elevatedSurfaceSx, { p: 3, textAlign: 'center' }]}>
      <Typography variant="subtitle2" component="p" color="text.secondary" sx={{ mb: 2 }}>
        {getQuestionLabel(mode, scriptLabel, t, question.pairDirection)}
      </Typography>

      <Box
        sx={{
          mb: mode === 'romaji' ? 1.5 : 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          minHeight: 88,
          justifyContent: 'center'
        }}
      >
        {(mode === 'romaji' || mode === 'kana-romaji') && (
          <KanaDisplay cell={question.correctItem} variant="prompt" />
        )}

        {mode === 'character' && (
          <Typography variant="h2" component="span" sx={{ lineHeight: 1.1 }}>
            {question.correctItem.romaji}
          </Typography>
        )}

        {mode === 'script-pair' && question.promptItem && (
          <KanaDisplay cell={question.promptItem} variant="prompt" />
        )}
      </Box>

      {mode === 'romaji' && (
        <RomajiInputAnswer
          key={questionNumber}
          correctRomaji={question.correctItem.romaji}
          answeredCorrectly={answeredCorrectly}
          wrongAnswers={wrongAnswers}
          autoFocus={SUPPORTS_FINE_POINTER || questionNumber > 0}
          onAnswer={onAnswer}
        />
      )}

      {mode !== 'romaji' && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 2
          }}
        >
          {question.optionItems.map((item) => {
            const value = getOptionValue(item, mode);
            const isWrongAnswer = wrongAnswers.includes(value);
            const isCorrectAnswer = isQuizAnswerCorrect(question, value);
            const showCorrect = answeredCorrectly && isCorrectAnswer;
            const showWrong = isWrongAnswer && !answeredCorrectly;

            return (
              <Button
                key={`${item.romaji}-${item.char}`}
                component="div"
                role="button"
                variant="outlined"
                disabled={answeredCorrectly || isWrongAnswer}
                onClick={() => {
                  if (hasTextSelection()) {
                    return;
                  }

                  onAnswer(value);
                }}
                sx={[
                  { userSelect: 'text' },
                  !showCorrect && !showWrong && quizChoiceSx,
                  {
                    py: 2,
                    fontSize: characterOptions ? '1.5rem' : '1rem',
                    borderWidth: 1
                  },
                  showCorrect && resultBorderSx('correct'),
                  showWrong && resultBorderSx('wrong'),
                  {
                    // A native button cannot start a text selection inside itself, and
                    // MUI's disabled state sets pointer-events: none. Keep the div
                    // clickable for highlighting even after the choice locks.
                    '&.Mui-disabled': {
                      pointerEvents: 'auto',
                      userSelect: 'text',
                      borderWidth: 1
                    }
                  }
                ]}
              >
                {characterOptions && <KanaDisplay cell={item} variant="option" />}
                {!characterOptions && item.romaji}
              </Button>
            );
          })}
        </Box>
      )}
    </Paper>
  );
}

type ExerciseQuizProps = {
  mode: ExerciseMode;
  script: ExerciseScript;
  scope: ExerciseScope;
  pairDirection?: ScriptPairDirection;
  scriptLabel: string;
};

/**
 * Container that owns the quiz session. Mount it with a `key` derived from the
 * current options so changing script/scope/direction remounts (and resets) it
 * instead of resetting state from inside an effect.
 */
export function ExerciseQuiz({
  mode,
  script,
  scope,
  pairDirection,
  scriptLabel
}: ExerciseQuizProps) {
  const { t } = useTranslation();
  const quiz = useExerciseQuiz({ mode, script, scope, pairDirection });

  if (quiz.finished) {
    const ratio = quiz.total === 0 ? 0 : quiz.score / quiz.total;
    const resultMessage =
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
        <Typography
          variant="h2"
          component="p"
          sx={{ fontWeight: 700, color: 'primary.main', my: 2 }}
        >
          {quiz.score} / {quiz.total}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {resultMessage}
        </Typography>
        <Button variant="contained" startIcon={<ReplayIcon />} onClick={quiz.handleRetry}>
          {t('course.retry')}
        </Button>
      </Paper>
    );
  }

  const progressLabel = t('course.questionProgress', {
    current: quiz.questionNumber + 1,
    total: quiz.total
  });

  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
          {progressLabel}
        </Typography>
        <QuizProgressBar
          total={quiz.total}
          current={quiz.questionNumber}
          results={quiz.results}
          label={progressLabel}
        />
      </Box>

      <ExerciseQuizPanel
        mode={mode}
        scriptLabel={scriptLabel}
        question={quiz.question}
        questionNumber={quiz.questionNumber}
        wrongAnswers={quiz.wrongAnswers}
        answeredCorrectly={quiz.answeredCorrectly}
        onAnswer={quiz.handleAnswer}
      />
    </Stack>
  );
}
