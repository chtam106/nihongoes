'use client';

import { useEffect, useState, type MouseEvent } from 'react';
import { useParams } from '@/i18n/navigation.tsx';
import ReplayIcon from '@mui/icons-material/Replay';
import {
  Box,
  Button,
  Chip,
  LinearProgress,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { useTranslation } from '@/i18n/use-translation.ts';
import {
  getKanjiLesson,
  getKanjiTrack,
  KANJI_BASE_PATH,
  kanjiLessonPath,
  kanjiTrackPath,
  type KanjiEntry,
  type KanjiLesson
} from '@/constants/kanji/index.ts';
import type { Locale } from '@/i18n/translations.ts';
import { elevatedSurfaceSx, subtleSurfaceSx } from '@/theme/surfaces.ts';
import { ChoiceButton } from '@/features/course/choice-button';

type KanjiQuizDirection = 'meaning' | 'character';

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

type QuizChoice = {
  id: string;
  label: string;
  japanese: boolean;
};

type QuizQuestion = {
  id: string;
  promptText: string;
  promptJapanese: boolean;
  choices: QuizChoice[];
  correctId: string;
};

function buildQuestions(
  lesson: KanjiLesson,
  direction: KanjiQuizDirection,
  locale: Locale
): QuizQuestion[] {
  const all = lesson.kanji;

  return shuffle(all).map((entry: KanjiEntry) => {
    const distractors = shuffle(all.filter((item) => item.char !== entry.char)).slice(0, 3);
    const options = shuffle([entry, ...distractors]);

    if (direction === 'meaning') {
      return {
        id: entry.char,
        promptText: entry.char,
        promptJapanese: true,
        choices: options.map((item) => ({
          id: item.char,
          label: item.meaning[locale],
          japanese: false
        })),
        correctId: entry.char
      };
    }

    return {
      id: entry.char,
      promptText: entry.meaning[locale],
      promptJapanese: false,
      choices: options.map((item) => ({ id: item.char, label: item.char, japanese: true })),
      correctId: entry.char
    };
  });
}

type KanjiQuizProps = {
  trackSlug: string;
  lesson: KanjiLesson;
  direction: KanjiQuizDirection;
};

/** The quiz body (progress, prompt, choices, result). Remount via key to reset. */
function KanjiQuiz({ trackSlug, lesson, direction }: KanjiQuizProps) {
  const { locale, t } = useTranslation();
  const promptLabel =
    direction === 'meaning' ? t('kanji.quizMeaningPrompt') : t('kanji.quizCharacterPrompt');

  const [questions, setQuestions] = useState(() => buildQuestions(lesson, direction, locale));
  const [index, setIndex] = useState(0);
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [correctPicked, setCorrectPicked] = useState(false);
  const [score, setScore] = useState(0);
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
    }, 900);

    return () => window.clearTimeout(timer);
  }, [correctPicked, isLast]);

  const handleSelect = (choiceId: string) => {
    if (!question || correctPicked || wrongIds.includes(choiceId)) {
      return;
    }

    if (choiceId === question.correctId) {
      setCorrectPicked(true);

      if (wrongIds.length === 0) {
        setScore((previous) => previous + 1);
      }
    } else {
      setWrongIds((previous) => [...previous, choiceId]);
    }
  };

  const handleRetry = () => {
    setQuestions(buildQuestions(lesson, direction, locale));
    setIndex(0);
    setWrongIds([]);
    setCorrectPicked(false);
    setScore(0);
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
            to={kanjiLessonPath(trackSlug, lesson.id)}
          >
            {t('kanji.reviewLesson')}
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
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'baseline', mb: 0.5 }}
        >
          <Typography variant="body2" color="text.secondary">
            {t('course.questionProgress', { current: index + 1, total })}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {score} / {total}
          </Typography>
        </Stack>
        <LinearProgress
          variant="determinate"
          value={total === 0 ? 0 : (index / total) * 100}
          sx={{ borderRadius: 1, height: 8 }}
        />
      </Box>

      <Paper elevation={0} sx={[subtleSurfaceSx, { p: { xs: 2.5, md: 3 }, textAlign: 'center' }]}>
        <Typography variant="overline" color="text.secondary">
          {promptLabel}
        </Typography>
        {question.promptJapanese && (
          <Typography
            lang="ja"
            sx={{ fontWeight: 600, fontSize: { xs: 72, md: 88 }, lineHeight: 1.1, mt: 0.5 }}
          >
            {question.promptText}
          </Typography>
        )}
        {!question.promptJapanese && (
          <Typography variant="h5" component="p" sx={{ fontWeight: 600, mt: 0.5 }}>
            {question.promptText}
          </Typography>
        )}
      </Paper>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1.5 }}>
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
              lang={choice.japanese ? 'ja' : undefined}
            >
              {choice.label}
            </ChoiceButton>
          );
        })}
      </Box>
    </>
  );
}

function KanjiLessonNotFound() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Heading component="h1" gutterBottom>
        {t('kanji.notFoundTitle')}
      </Heading>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {t('kanji.notFoundBody')}
      </Typography>
      <Button component={RouterLink} to={KANJI_BASE_PATH} variant="contained">
        {t('common.back')}
      </Button>
    </PageContainer>
  );
}

function KanjiQuizPage() {
  const { track: trackSlug, lessonId } = useParams<{ track: string; lessonId: string }>();
  const { locale, t } = useTranslation();
  const track = trackSlug ? getKanjiTrack(trackSlug) : undefined;
  const lesson = track && lessonId ? getKanjiLesson(track.slug, lessonId) : undefined;
  const [direction, setDirection] = useState<KanjiQuizDirection>('meaning');

  if (!track || !lesson) {
    return <KanjiLessonNotFound />;
  }

  const handleDirectionChange = (
    _event: MouseEvent<HTMLElement>,
    value: KanjiQuizDirection | null
  ) => {
    if (value) {
      setDirection(value);
    }
  };

  return (
    <PageContainer>
      <Stack spacing={3}>
        <Box>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ mb: 1, flexWrap: 'wrap', alignItems: 'center' }}
          >
            <Chip
              label={track.name[locale]}
              color="secondary"
              variant="outlined"
              size="small"
              component={RouterLink}
              to={kanjiTrackPath(track.slug)}
              clickable
            />
            <Chip
              label={t('kanji.lessonLabel', { number: lesson.number })}
              color="primary"
              variant="outlined"
              size="small"
              component={RouterLink}
              to={kanjiLessonPath(track.slug, lesson.id)}
              clickable
            />
          </Stack>
          <Heading component="h1">{t('kanji.quizTitle')}</Heading>
        </Box>

        <ToggleButtonGroup
          exclusive
          fullWidth
          color="primary"
          value={direction}
          onChange={handleDirectionChange}
          aria-label={t('kanji.quizTitle')}
        >
          <ToggleButton value="meaning">{t('kanji.quizMeaning')}</ToggleButton>
          <ToggleButton value="character">{t('kanji.quizCharacter')}</ToggleButton>
        </ToggleButtonGroup>

        <KanjiQuiz
          key={`${track.slug}:${lesson.id}:${direction}:${locale}`}
          trackSlug={track.slug}
          lesson={lesson}
          direction={direction}
        />
      </Stack>
    </PageContainer>
  );
}

export default KanjiQuizPage;
