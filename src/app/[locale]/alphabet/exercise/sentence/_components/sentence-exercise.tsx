'use client';

import { useEffect, useMemo, useState, type MouseEvent } from 'react';
import {
  Box,
  Button,
  LinearProgress,
  Link,
  Paper,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';
import { HintText } from '@/components/hint-text';
import { Heading } from '@/components/heading';
import { useTranslation } from '@/i18n/use-translation.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import ReplayIcon from '@mui/icons-material/Replay';
import { ExercisePageLayout } from '@/features/alphabet/exercise/exercise-page-layout.tsx';
import { useSentenceExercisePreferences } from '@/features/alphabet/exercise/use-exercise-preferences.ts';
import { SENTENCES, type SentenceType } from '@/features/alphabet/exercise/sentence/sentences.ts';
import {
  isSentenceAnswerCorrect,
  transliterateSentence
} from '@/features/alphabet/exercise/sentence/transliterate.ts';

// Skip auto-focus on touch devices so changing the sentence type doesn't pop
// the on-screen keyboard each time the quiz remounts.
const SUPPORTS_FINE_POINTER =
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(pointer: fine)').matches;

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

type AnswerStatus = 'idle' | 'correct' | 'wrong';

type SentenceQuizProps = {
  type: SentenceType;
};

function SentenceQuiz({ type }: SentenceQuizProps) {
  const { t } = useTranslation();
  const [order, setOrder] = useState(() => shuffle(SENTENCES[type]));
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState('');
  const [status, setStatus] = useState<AnswerStatus>('idle');
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [completed, setCompleted] = useState(false);

  const total = order.length;
  const current = order[index];
  const kanaText = current.replace(/\s+/g, '');
  const { display, accepted } = useMemo(() => transliterateSentence(current), [current]);
  const answerShown = revealed;

  const handleCheck = () => {
    if (status === 'correct' || value.trim().length === 0) {
      return;
    }

    if (isSentenceAnswerCorrect(value, accepted)) {
      if (status === 'idle') {
        setCorrectCount((previous) => previous + 1);
      }
      setStatus('correct');
    } else {
      setStatus('wrong');
    }
  };

  const handleToggleAnswer = () => {
    setRevealed((previous) => !previous);
  };

  // Auto-advance to the next sentence shortly after a correct answer.
  useEffect(() => {
    if (status !== 'correct') {
      return;
    }

    const timer = window.setTimeout(() => {
      const nextIndex = index + 1;
      if (nextIndex >= total) {
        setCompleted(true);
        return;
      }
      setIndex(nextIndex);
      setValue('');
      setStatus('idle');
      setRevealed(false);
    }, 100);

    return () => window.clearTimeout(timer);
  }, [status, index, total]);

  const handleRestart = () => {
    setOrder(shuffle(SENTENCES[type]));
    setIndex(0);
    setValue('');
    setStatus('idle');
    setRevealed(false);
    setCorrectCount(0);
    setCompleted(false);
  };

  if (completed) {
    const ratio = total === 0 ? 0 : correctCount / total;
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
          {correctCount} / {total}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {resultMessage}
        </Typography>
        <Button variant="contained" startIcon={<ReplayIcon />} onClick={handleRestart}>
          {t('course.retry')}
        </Button>
      </Paper>
    );
  }

  const progressLabel = t('exercise.sentenceProgress', {
    current: String(index + 1),
    total: String(total)
  });

  return (
    <Paper elevation={0} sx={[elevatedSurfaceSx, { p: 3 }]}>
      <Box sx={{ mb: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'baseline', mb: 0.5 }}
        >
          <Typography variant="body1" color="text.secondary">
            {progressLabel}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t('course.scoreProgress', { score: correctCount, total })}
          </Typography>
        </Stack>
        <LinearProgress
          variant="determinate"
          value={total === 0 ? 0 : (index / total) * 100}
          aria-label={progressLabel}
          sx={{ borderRadius: 1, height: 8 }}
        />
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography
          component="p"
          lang="ja"
          sx={{
            fontSize: { xs: 26, sm: 32 },
            lineHeight: 1.4,
            fontWeight: 500
          }}
        >
          {kanaText}
        </Typography>

        <Box aria-live="polite" sx={{ mt: 1, display: 'grid', justifyItems: 'start' }}>
          <Link
            component="button"
            type="button"
            variant="body1"
            underline="hover"
            onClick={handleToggleAnswer}
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
              onClick={handleToggleAnswer}
              sx={{ lineHeight: 1.66 }}
            >
              {t('exercise.hideAnswer')}
            </Link>
            <Typography
              lang="en"
              variant="body1"
              sx={{ color: 'text.secondary', fontWeight: 500, lineHeight: 1.66 }}
            >
              {display}
            </Typography>
          </Stack>
        </Box>
      </Box>

      <Box
        component="form"
        onSubmit={(event) => {
          event.preventDefault();
          handleCheck();
        }}
      >
        <Stack spacing={2}>
          <TextField
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              if (status === 'wrong') {
                setStatus('idle');
              }
            }}
            placeholder={t('exercise.sentenceInputPlaceholder')}
            autoComplete="off"
            spellCheck={false}
            autoFocus={SUPPORTS_FINE_POINTER}
            fullWidth
            focused={status === 'correct' || undefined}
            color={status === 'correct' ? 'success' : undefined}
            error={status === 'wrong'}
            slotProps={{
              input: { readOnly: status === 'correct' },
              htmlInput: {
                'aria-label': t('exercise.sentencePrompt'),
                lang: 'en',
                autoCapitalize: 'none',
                autoCorrect: 'off'
              }
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={status === 'correct' || value.trim().length === 0}
            sx={{ height: 56 }}
          >
            {t('exercise.check')}
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

const SENTENCE_TYPE_LABEL_KEYS: Record<SentenceType, string> = {
  hiragana: 'exercise.sentenceTypeHiragana',
  katakana: 'exercise.sentenceTypeKatakana',
  mixed: 'exercise.sentenceTypeMixed'
};

const SENTENCE_TYPES: SentenceType[] = ['hiragana', 'katakana', 'mixed'];

function SentenceExercisePage() {
  const { t } = useTranslation();
  const { type, setType } = useSentenceExercisePreferences();

  const handleTypeChange = (_event: MouseEvent<HTMLElement>, value: SentenceType | null) => {
    if (value) {
      setType(value);
    }
  };

  return (
    <ExercisePageLayout
      title={t('exercise.sentenceTitle')}
      subtitle={t('exercise.sentenceDescription')}
      note={
        <Stack spacing={0.5}>
          <HintText>{t('exercise.sentenceHint1')}</HintText>
          <HintText>{t('exercise.sentenceHint2')}</HintText>
          <HintText>{t('exercise.sentenceHint3')}</HintText>
        </Stack>
      }
    >
      <Box sx={{ maxWidth: { xs: '100%', sm: 560 }, mx: 'auto' }}>
        <ToggleButtonGroup
          exclusive
          fullWidth
          color="primary"
          value={type}
          onChange={handleTypeChange}
          aria-label={t('exercise.sentenceType')}
          sx={{ mb: 3 }}
        >
          {SENTENCE_TYPES.map((value) => (
            <ToggleButton key={value} value={value}>
              {t(SENTENCE_TYPE_LABEL_KEYS[value])}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <SentenceQuiz key={type} type={type} />
      </Box>
    </ExercisePageLayout>
  );
}

export default SentenceExercisePage;
