'use client';

import { useEffect, useState, type MouseEvent } from 'react';
import { Box, Paper, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { Heading } from '@/components/heading';
import { KanjiPracticeHeader } from '@/app/[locale]/kanji/[track]/[lessonId]/_components/kanji-practice-header';
import { QuizMissList, type QuizMiss } from '@/components/quiz-miss-list';
import { ResultNavLinks, ResultRetryButtons } from '@/features/course/result-actions';
import { QuizProgressBar, type QuizSegmentResult } from '@/components/quiz-progress-bar';
import { QUIZ_ADVANCE_DELAY_MS } from '@/constants/quiz.ts';
import { PageContainer } from '@/components/page-container';
import { useTranslation } from '@/i18n/use-translation.ts';
import {
  kanjiLessonPath,
  type Bilingual,
  type KanjiEntry,
  type KanjiLesson
} from '@/constants/kanji/index.ts';
import type { Locale } from '@/i18n/translations.ts';
import { elevatedSurfaceSx, subtleSurfaceSx } from '@/theme/surfaces.ts';
import { ChoiceButton } from '@/features/course/choice-button';
import { SaveableCard } from '@/features/flashcards/save-card-gesture.tsx';
import { useReviewMissedCards } from '@/features/flashcards/use-review-missed-cards.ts';

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

function kanjiChoice(question: QuizQuestion, choiceId: string) {
  const choice = question.choices.find((item) => item.id === choiceId);

  return {
    text: choice?.label ?? '',
    japanese: Boolean(choice?.japanese)
  };
}

function kanjiMiss(question: QuizQuestion, index: number, trackSlug: string): QuizMiss {
  return {
    id: `${index}:${question.id}`,
    prompt: [{ text: question.promptText, japanese: question.promptJapanese }],
    answer: kanjiChoice(question, question.correctId),
    card: { id: `kanji:${trackSlug}:${question.id}`, type: 'kanji' }
  };
}

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
  const [results, setResults] = useState<QuizSegmentResult[]>([]);
  const [misses, setMisses] = useState<QuizMiss[]>([]);
  const [missedQuestions, setMissedQuestions] = useState<typeof questions>([]);
  useReviewMissedCards(misses);
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
      } else {
        setMisses((previous) => [...previous, kanjiMiss(question, index, trackSlug)]);
        setMissedQuestions((previous) => [...previous, question]);
      }
    } else {
      setWrongIds((previous) => [...previous, choiceId]);
    }
  };

  const startRound = (next: typeof questions) => {
    setQuestions(next);
    setMissedQuestions([]);
    setIndex(0);
    setWrongIds([]);
    setCorrectPicked(false);
    setScore(0);
    setResults([]);
    setMisses([]);
    setFinished(false);
  };
  const handleRetry = () => startRound(buildQuestions(lesson, direction, locale));
  const handleRetryMisses = () => startRound(missedQuestions);

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
        <ResultRetryButtons
          onRetry={handleRetry}
          onRetryMisses={handleRetryMisses}
          hasMisses={score < total}
        />
        {misses.length > 0 && <Box sx={{ mt: 3 }} />}
        <QuizMissList misses={misses} />
        <ResultNavLinks
          review={{ to: kanjiLessonPath(trackSlug, lesson.id), label: t('kanji.reviewLesson') }}
        />
      </Paper>
    );
  }

  if (!question) {
    return null;
  }

  return (
    <>
      <Box>
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
          {promptLabel}
        </Typography>
        <SaveableCard cardId={`kanji:${trackSlug}:${question.id}`} cardType="kanji">
          <Paper
            elevation={0}
            sx={[subtleSurfaceSx, { p: { xs: 2.5, md: 3 }, textAlign: 'center' }]}
          >
            {question.promptJapanese && (
              <Typography
                lang="ja"
                sx={{ fontWeight: 600, fontSize: { xs: 72, md: 88 }, lineHeight: 1.1 }}
              >
                {question.promptText}
              </Typography>
            )}
            {!question.promptJapanese && (
              <Typography variant="h5" component="p" sx={{ fontWeight: 600 }}>
                {question.promptText}
              </Typography>
            )}
          </Paper>
        </SaveableCard>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1.5 }}>
        {question.choices.map((choice) => {
          const isCorrectChoice = choice.id === question.correctId;
          const showCorrect = correctPicked && isCorrectChoice;
          const showWrong = wrongIds.includes(choice.id);
          const locked = correctPicked || showWrong;

          return (
            <ChoiceButton
              key={`${index}-${choice.id}`}
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

type KanjiQuizPageProps = {
  trackSlug: string;
  trackName: Bilingual;
  lesson: KanjiLesson;
};

function KanjiQuizPage({ trackSlug, trackName, lesson }: KanjiQuizPageProps) {
  const { locale, t } = useTranslation();
  const [direction, setDirection] = useState<KanjiQuizDirection>('meaning');

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
        <KanjiPracticeHeader
          trackSlug={trackSlug}
          trackName={trackName}
          lesson={lesson}
          practice={t('kanji.quizTitle')}
        />

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
          key={`${trackSlug}:${lesson.id}:${direction}:${locale}`}
          trackSlug={trackSlug}
          lesson={lesson}
          direction={direction}
        />
      </Stack>
    </PageContainer>
  );
}

export default KanjiQuizPage;
