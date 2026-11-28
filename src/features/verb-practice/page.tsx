'use client';

import { useEffect, useState } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { ChoiceButton } from '@/features/course/choice-button';
import { FuriganaText } from '@/components/furigana-text';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { QuizProgressBar, type QuizSegmentResult } from '@/components/quiz-progress-bar';
import { QUIZ_ADVANCE_DELAY_MS } from '@/constants/quiz.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import { ResultScreen } from '@/features/course/shared';
import type { QuizMiss } from '@/components/quiz-miss-list';
import { useTranslation } from '@/i18n/use-translation.ts';
import type { VerbMode, VerbPracticeGroup, VerbQuestion } from './verbs.ts';
import { createVerbQuizDeck, displayVerbForm } from './verbs.ts';
import { VerbGuide } from './verb-guide.tsx';

const CHOOSE_KEY: Record<VerbMode, string> = {
  te: 'verbPractice.chooseTe',
  nai: 'verbPractice.chooseNai',
  dictionary: 'verbPractice.chooseDictionary'
};

type VerbPracticePageProps = {
  mode: VerbMode;
  groups: VerbPracticeGroup[];
  initialDeck: VerbQuestion[];
};

export function VerbPracticePage({ mode, groups, initialDeck }: VerbPracticePageProps) {
  const { t } = useTranslation();
  const [deck, setDeck] = useState(initialDeck);
  const [current, setCurrent] = useState(0);
  const [results, setResults] = useState<QuizSegmentResult[]>([]);
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const question = deck[current];
  const progressLabel = t('verbPractice.questionProgress', {
    current: current + 1,
    total: deck.length
  });
  const isLast = current === deck.length - 1;

  function startRound(next: typeof deck) {
    setDeck(next);
    setCurrent(0);
    setResults([]);
    setWrongIds([]);
    setAnswered(false);
    setFinished(false);
  }

  function retry() {
    startRound(createVerbQuizDeck(groups, mode));
  }

  function retryMisses() {
    startRound(deck.filter((_item, index) => results[index] !== 'correct'));
  }

  function choose(optionId: string) {
    if (answered || wrongIds.includes(optionId)) return;
    if (optionId === question.correctId) {
      setAnswered(true);
      setResults((previous) => {
        const next = [...previous];
        next[current] = wrongIds.length ? 'incorrect' : 'correct';
        return next;
      });
    } else {
      setWrongIds((previous) => [...previous, optionId]);
    }
  }

  useEffect(() => {
    if (!answered) return;
    const timer = window.setTimeout(() => {
      if (isLast) {
        setFinished(true);
        return;
      }
      setCurrent((previous) => previous + 1);
      setWrongIds([]);
      setAnswered(false);
    }, QUIZ_ADVANCE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [answered, isLast]);

  const score = results.filter((result) => result === 'correct').length;
  const misses: QuizMiss[] = deck.flatMap((item, index) =>
    results[index] === 'correct'
      ? []
      : [
          {
            id: `${item.verb.dictionary}-${index}`,
            prompt: [{ ...displayVerbForm(item.verb, item.verb.masu), japanese: true }],
            answer: { ...displayVerbForm(item.verb, item.verb[mode]), japanese: true }
          }
        ]
  );
  const pageTitle = t(`verbPractice.${mode}Title`);

  return (
    <PageContainer bottomGutter>
      <Heading component="h1" gutterBottom>
        {pageTitle}
      </Heading>
      <Stack spacing={3} sx={{ maxWidth: 760 }}>
        <VerbGuide mode={mode} />
        {!finished && (
          <>
            <Box>
              <QuizProgressBar
                total={deck.length}
                current={current}
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
                {t(CHOOSE_KEY[mode])}
              </Typography>
              <Paper
                elevation={0}
                sx={[elevatedSurfaceSx, { p: { xs: 2.5, md: 3 }, textAlign: 'center' }]}
              >
                <Typography
                  lang="ja"
                  variant="h3"
                  component="p"
                  sx={{ fontWeight: 600, fontFamily: 'var(--font-noto-sans-jp)' }}
                >
                  <FuriganaText {...displayVerbForm(question.verb, question.verb.masu)} />
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
                const correctOption = option.id === question.correctId;
                const wrongOption = wrongIds.includes(option.id);
                return (
                  <ChoiceButton
                    key={`${current}-${option.id}`}
                    onClick={() => choose(option.id)}
                    dimmed={answered || wrongOption}
                    state={
                      answered && correctOption ? 'correct' : wrongOption ? 'wrong' : 'default'
                    }
                    lang="ja"
                  >
                    <FuriganaText {...displayVerbForm(question.verb, option.label)} />
                  </ChoiceButton>
                );
              })}
            </Box>
          </>
        )}

        {finished && (
          <ResultScreen
            score={score}
            total={deck.length}
            misses={misses}
            onRetry={retry}
            onRetryMisses={retryMisses}
          />
        )}
      </Stack>
    </PageContainer>
  );
}
