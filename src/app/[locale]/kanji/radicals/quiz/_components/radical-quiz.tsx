'use client';

import { useEffect, useState } from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { Heading } from '@/components/heading';
import { QuizProgressBar, type QuizSegmentResult } from '@/components/quiz-progress-bar';
import { QUIZ_ADVANCE_DELAY_MS } from '@/constants/quiz.ts';
import { PageContainer } from '@/components/page-container';
import { ChoiceButton } from '@/features/course/choice-button';
import { useTranslation } from '@/i18n/use-translation.ts';
import {
  formatRadicalMeaning,
  KANJI_RADICALS_PATH,
  type Radical
} from '@/constants/kanji/index.ts';
import type { Locale } from '@/i18n/translations.ts';
import { elevatedSurfaceSx, subtleSurfaceSx } from '@/theme/surfaces.ts';
import {
  radicalQuizFromOptions,
  radicalQuizPrompts,
  radicalQuizToAfterFrom,
  radicalQuizToOptions,
  radicalsForQuizRange,
  type RadicalQuizRange
} from './radical-quiz-pool.ts';
import { useRadicalQuizRange } from './use-radical-quiz-pool.ts';

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function radicalMeaning(radical: Radical, locale: Locale): string {
  return formatRadicalMeaning(radical, locale);
}

type QuizChoice = {
  id: string;
  label: string;
};

type QuizQuestion = {
  id: string;
  prompt: string;
  choices: QuizChoice[];
  correctId: string;
};

function buildQuestions(pool: Radical[], locale: Locale): QuizQuestion[] {
  return shuffle(radicalQuizPrompts(pool)).map(({ radical, glyph }) => {
    const distractors = shuffle(pool.filter((item) => item.number !== radical.number)).slice(0, 3);
    const options = shuffle([radical, ...distractors]);

    return {
      id: `${radical.number}:${glyph}`,
      prompt: glyph,
      choices: options.map((item) => ({
        id: String(item.number),
        label: radicalMeaning(item, locale)
      })),
      correctId: String(radical.number)
    };
  });
}

type RadicalQuizProps = {
  range: RadicalQuizRange;
};

function RadicalQuiz({ range }: RadicalQuizProps) {
  const { locale, t } = useTranslation();
  const pool = radicalsForQuizRange(range);
  const [questions, setQuestions] = useState(() => buildQuestions(pool, locale));
  const [index, setIndex] = useState(0);
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [correctPicked, setCorrectPicked] = useState(false);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<QuizSegmentResult[]>([]);
  const [finished, setFinished] = useState(false);

  const total = questions.length;
  const question = questions[index];
  const isLast = index === total - 1;

  useEffect(() => {
    if (!correctPicked) {
      return;
    }

    const timer = window.setTimeout(() => {
      if (isLast) {
        setFinished(true);
        return;
      }

      setIndex((previous) => previous + 1);
      setWrongIds([]);
      setCorrectPicked(false);
    }, QUIZ_ADVANCE_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [correctPicked, isLast]);

  const handleSelect = (choiceId: string) => {
    if (!question || correctPicked || wrongIds.includes(choiceId)) {
      return;
    }

    if (choiceId === question.correctId) {
      const firstTry = wrongIds.length === 0;
      setCorrectPicked(true);
      setResults((previous) => [...previous, firstTry ? 'correct' : 'incorrect']);

      if (firstTry) {
        setScore((previous) => previous + 1);
      }
    } else {
      setWrongIds((previous) => [...previous, choiceId]);
    }
  };

  const handleRetry = () => {
    setQuestions(buildQuestions(pool, locale));
    setIndex(0);
    setWrongIds([]);
    setCorrectPicked(false);
    setScore(0);
    setResults([]);
    setFinished(false);
  };

  const ratio = total === 0 ? 0 : score / total;
  const resultMessage =
    ratio >= 0.8
      ? t('course.resultGreat')
      : ratio >= 0.5
        ? t('course.resultGood')
        : t('course.resultKeepGoing');

  if (finished) {
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
          {score} / {total}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {resultMessage}
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1.5}
          sx={{ justifyContent: 'center', flexWrap: 'wrap' }}
          useFlexGap
        >
          <Button variant="contained" startIcon={<ReplayIcon />} onClick={handleRetry}>
            {t('course.retry')}
          </Button>
          <Button
            variant="outlined"
            component={RouterLink}
            to={`${KANJI_RADICALS_PATH}#radical-${range.to}`}
          >
            {t('kanji.radicalsQuizReview')}
          </Button>
        </Stack>
      </Paper>
    );
  }

  if (!question) {
    return null;
  }

  return (
    <>
      <Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
          {t('course.questionProgress', { current: index + 1, total })}
        </Typography>
        <QuizProgressBar
          total={total}
          current={index}
          results={results}
          label={t('course.questionProgress', { current: index + 1, total })}
        />
      </Box>

      <Box>
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ display: 'block', textAlign: 'center', lineHeight: 1.5, mb: 1 }}
        >
          {t('kanji.radicalsQuizPrompt')}
        </Typography>
        <Paper elevation={0} sx={[subtleSurfaceSx, { p: { xs: 2.5, md: 3 }, textAlign: 'center' }]}>
          <Typography
            lang="ja"
            sx={{ fontWeight: 600, fontSize: { xs: 72, md: 88 }, lineHeight: 1.1 }}
          >
            {question.prompt}
          </Typography>
        </Paper>
      </Box>

      <Box
        sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 1.5 }}
      >
        {question.choices.map((choice) => {
          const isCorrectChoice = choice.id === question.correctId;
          const showCorrect = correctPicked && isCorrectChoice;
          const showWrong = wrongIds.includes(choice.id);
          const locked = correctPicked || showWrong;

          return (
            <ChoiceButton
              key={choice.id}
              onClick={() => handleSelect(choice.id)}
              dimmed={locked}
              state={showCorrect ? 'correct' : showWrong ? 'wrong' : 'default'}
            >
              {choice.label}
            </ChoiceButton>
          );
        })}
      </Box>
    </>
  );
}

function RadicalQuizPage() {
  const { t } = useTranslation();
  const [range, setRange] = useRadicalQuizRange();
  const fromOptions = radicalQuizFromOptions();
  const toOptions = radicalQuizToOptions().filter((option) => option >= range.from);

  const handleFromChange = (event: SelectChangeEvent<number>) => {
    const from = Number(event.target.value);

    if (from > range.to) {
      setRange({ from, to: radicalQuizToAfterFrom(from) });
      return;
    }

    setRange({ ...range, from });
  };

  const handleToChange = (event: SelectChangeEvent<number>) => {
    setRange({ ...range, to: Number(event.target.value) });
  };

  return (
    <PageContainer>
      <Stack spacing={3}>
        <Box>
          <Heading component="h1">{t('kanji.radicalsQuizTitle')}</Heading>
          <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel id="radical-quiz-from-label">{t('kanji.radicalsQuizFrom')}</InputLabel>
              <Select<number>
                labelId="radical-quiz-from-label"
                value={range.from}
                label={t('kanji.radicalsQuizFrom')}
                onChange={handleFromChange}
                MenuProps={{ slotProps: { paper: { sx: { maxHeight: 320 } } } }}
              >
                {fromOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel id="radical-quiz-to-label">{t('kanji.radicalsQuizTo')}</InputLabel>
              <Select<number>
                labelId="radical-quiz-to-label"
                value={range.to}
                label={t('kanji.radicalsQuizTo')}
                onChange={handleToChange}
                MenuProps={{ slotProps: { paper: { sx: { maxHeight: 320 } } } }}
              >
                {toOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Box>

        <RadicalQuiz key={`${range.from}:${range.to}`} range={range} />
      </Stack>
    </PageContainer>
  );
}

export default RadicalQuizPage;
