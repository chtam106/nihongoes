'use client';

import { useEffect, useState } from 'react';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import {
  Box,
  Collapse,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';
import { FuriganaText } from '@/components/furigana-text';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import type { QuizMiss } from '@/components/quiz-miss-list';
import { QuizProgressBar, type QuizSegmentResult } from '@/components/quiz-progress-bar';
import { ChoiceButton } from '@/features/course/choice-button';
import { ResultScreen } from '@/features/course/shared';
import { QUIZ_ADVANCE_DELAY_MS } from '@/constants/quiz.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { elevatedSurfaceSx, subtleSurfaceSx } from '@/theme/surfaces.ts';
import {
  createParticleRound,
  PARTICLE_USES,
  PARTICLES,
  type Particle,
  type ParticleLevelFilter,
  type ParticleRoundQuestion
} from './particle-questions.ts';

type ParticlePracticeProps = {
  initialRound: ParticleRoundQuestion[];
};

/** Collapsible rule list, styled like the verb practice guide. */
function ParticleGuide() {
  const { locale, t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <Paper elevation={0} sx={[subtleSurfaceSx, { p: { xs: 2, md: 2.5 } }]}>
      <Box
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls="particle-guide-content"
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setOpen((value) => !value);
          }
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1,
          cursor: 'pointer'
        }}
      >
        <Heading scale="subsection" component="h2">
          {t('particlePractice.guideTitle')}
        </Heading>
        <ExpandMoreOutlinedIcon
          sx={{
            color: 'text.secondary',
            transition: 'transform 0.2s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        />
      </Box>
      <Collapse in={open}>
        <Stack id="particle-guide-content" component="dl" spacing={1.5} sx={{ mt: 2, mb: 0 }}>
          {PARTICLES.map((particle) => {
            const rules = Object.values(PARTICLE_USES).filter((use) => use.particle === particle);

            return (
              <Box
                key={particle}
                sx={{ display: 'grid', gridTemplateColumns: '3.5em 1fr', columnGap: 1.5 }}
              >
                <Typography
                  component="dt"
                  lang="ja"
                  sx={{ fontWeight: 700, fontSize: '1.25rem', color: 'primary.main' }}
                >
                  {particle}
                </Typography>
                <Box component="dd" sx={{ m: 0 }}>
                  {rules.map((use) => (
                    <Typography key={use.rule.en} variant="body1">
                      {use.rule[locale]}
                    </Typography>
                  ))}
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Collapse>
    </Paper>
  );
}

export function ParticlePractice({ initialRound }: ParticlePracticeProps) {
  const { locale, t } = useTranslation();
  const [level, setLevel] = useState<ParticleLevelFilter>('all');
  const [round, setRound] = useState(initialRound);
  const [current, setCurrent] = useState(0);
  const [results, setResults] = useState<QuizSegmentResult[]>([]);
  const [wrong, setWrong] = useState<Particle[]>([]);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const question = round[current];
  const isLast = current >= round.length - 1;
  const progressLabel = t('course.questionProgress', {
    current: current + 1,
    total: round.length
  });

  const choose = (particle: Particle) => {
    if (answered || wrong.includes(particle)) {
      return;
    }

    if (particle !== question.answer) {
      setWrong((previous) => [...previous, particle]);
      return;
    }

    setAnswered(true);
    setResults((previous) => {
      const next = [...previous];
      next[current] = wrong.length ? 'incorrect' : 'correct';

      return next;
    });
  };

  const startRound = (next: typeof round) => {
    setRound(next);
    setCurrent(0);
    setResults([]);
    setWrong([]);
    setAnswered(false);
    setFinished(false);
  };
  const restart = (filter: ParticleLevelFilter) => startRound(createParticleRound(filter));

  // Same pace as the other quizzes: move on shortly after the right answer.
  useEffect(() => {
    if (!answered) {
      return;
    }

    const timer = window.setTimeout(() => {
      if (isLast) {
        setFinished(true);
        return;
      }

      setCurrent((previous) => previous + 1);
      setWrong([]);
      setAnswered(false);
    }, QUIZ_ADVANCE_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [answered, isLast]);

  const retry = () => restart(level);
  const retryMisses = () =>
    startRound(round.filter((_item, index) => results[index] === 'incorrect'));

  const changeLevel = (_event: unknown, value: ParticleLevelFilter | null) => {
    if (!value || value === level) {
      return;
    }

    setLevel(value);
    restart(value);
  };

  const score = results.filter((result) => result === 'correct').length;
  // A missed question lists its translation and the rule for its particle.
  const misses: QuizMiss[] = round.flatMap((item, index) =>
    results[index] === 'incorrect'
      ? [
          {
            id: `${item.id}-${index}`,
            prompt: [
              { ...item.before, japanese: true },
              { text: '', blank: true },
              { ...item.after, japanese: true }
            ],
            note: `${item.meaning[locale]} ${PARTICLE_USES[item.use].rule[locale]}`,
            answer: { text: item.answer, japanese: true }
          }
        ]
      : []
  );

  return (
    <PageContainer bottomGutter>
      <Heading component="h1" gutterBottom>
        {t('particlePractice.title')}
      </Heading>
      <Stack spacing={3} sx={{ maxWidth: 760 }}>
        <Typography variant="body1" color="text.secondary">
          {t('particlePractice.intro')}
        </Typography>
        <ParticleGuide />

        <ToggleButtonGroup
          exclusive
          color="primary"
          size="small"
          value={level}
          onChange={changeLevel}
          aria-label={t('particlePractice.levelLabel')}
          // Equal-width buttons, whatever the label.
          sx={{ alignSelf: 'center', '& .MuiToggleButton-root': { width: 88 } }}
        >
          <ToggleButton value="all">{t('particlePractice.levelAll')}</ToggleButton>
          <ToggleButton value="n5">N5</ToggleButton>
          <ToggleButton value="n4">N4</ToggleButton>
        </ToggleButtonGroup>

        {!finished && (
          <>
            <Box>
              <QuizProgressBar
                total={round.length}
                current={current}
                results={results}
                label={progressLabel}
              />
            </Box>

            <Box>
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ display: 'block', lineHeight: 1.5, mb: 1, textAlign: 'center' }}
              >
                {t('particlePractice.choose')}
              </Typography>
              <Paper
                elevation={0}
                sx={[elevatedSurfaceSx, { p: { xs: 2.5, md: 3 }, textAlign: 'center' }]}
              >
                <Typography variant="h5" component="p" lang="ja" sx={{ fontWeight: 600 }}>
                  <FuriganaText {...question.before} />
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
                    {'　'}
                  </Box>
                  <FuriganaText {...question.after} />
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {question.meaning[locale]}
                </Typography>
              </Paper>
            </Box>

            <Box
              role="group"
              aria-label={t('particlePractice.choose')}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 1.5
              }}
            >
              {question.options.map((particle) => {
                const isWrong = wrong.includes(particle);
                const showCorrect = answered && particle === question.answer;

                return (
                  <ChoiceButton
                    key={`${current}-${particle}`}
                    onClick={() => choose(particle)}
                    dimmed={answered || isWrong}
                    state={showCorrect ? 'correct' : isWrong ? 'wrong' : 'default'}
                    lang="ja"
                  >
                    {particle}
                  </ChoiceButton>
                );
              })}
            </Box>
          </>
        )}

        {finished && (
          <ResultScreen
            score={score}
            total={round.length}
            misses={misses}
            onRetry={retry}
            onRetryMisses={retryMisses}
          />
        )}
      </Stack>
    </PageContainer>
  );
}
