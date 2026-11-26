'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { FlipCard, type VocabFlashcard } from '@/components/vocab-flashcards';
import { nextInterval, REVIEW_GRADES, type ReviewGrade } from '@/constants/flashcards/srs.ts';
import { SaveableCard } from '@/features/flashcards/save-card-gesture.tsx';
import { useFlashcardReviews } from '@/features/flashcards/use-flashcard-reviews.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import type { Locale } from '@/types/i18n.ts';
import type { FlashcardFront } from '@/app/[locale]/vocabulary/_components/vocab-index-preferences.ts';

const GRADE_LABEL_KEYS: Record<ReviewGrade, string> = {
  again: 'flashcards.reviewAgain',
  good: 'flashcards.reviewGood'
};

const GRADE_COLORS: Record<ReviewGrade, 'error' | 'success'> = {
  again: 'error',
  good: 'success'
};

type ReviewSessionProps = {
  /** Cards in review order (due first, then new). Read once when the session starts. */
  cards: VocabFlashcard[];
  /** More new cards, in order. A skipped card frees its new-card slot for the next one. */
  spareCards?: VocabFlashcard[];
  locale: Locale;
  front: FlashcardFront;
  /** Shown under the summary when a session with at least one card is over. */
  doneActions?: ReactNode;
};

type SessionState = {
  queue: VocabFlashcard[];
  index: number;
  reviewed: number;
  /** Spare cards already moved into the queue. */
  spareUsed: number;
};

function isTyping(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
  );
}

const NO_SPARE: VocabFlashcard[] = [];

/** Key for "stop reviewing", after the grade keys. */
const SKIP_KEY = String(REVIEW_GRADES.length + 1);

export function ReviewSession({
  cards,
  spareCards = NO_SPARE,
  locale,
  front,
  doneActions
}: ReviewSessionProps) {
  const { t } = useTranslation();
  const { store, grade, skip } = useFlashcardReviews();
  const [session, setSession] = useState<SessionState>(() => ({
    queue: cards,
    index: 0,
    reviewed: 0,
    spareUsed: 0
  }));
  const card = session.queue[session.index];
  const finished = !card;

  const formatInterval = (days: number) => {
    if (days <= 1) {
      return t('flashcards.reviewIntervalTomorrow');
    }

    if (days < 30) {
      return t('flashcards.reviewIntervalDays', { count: days });
    }

    if (days < 365) {
      return t('flashcards.reviewIntervalMonths', { count: Math.round(days / 3) / 10 });
    }

    return t('flashcards.reviewIntervalYears', { count: Math.round(days / 36.5) / 10 });
  };

  const handleGrade = (value: ReviewGrade) => {
    if (!card) {
      return;
    }

    grade(card.id, value);
    setSession((previous) => ({
      ...previous,
      index: previous.index + 1,
      reviewed: previous.reviewed + 1
    }));
  };

  const handleSkip = () => {
    if (!card) {
      return;
    }

    const wasNew = store.cards[card.id] === undefined;
    skip(card.id);
    setSession((previous) => {
      const refill = wasNew ? spareCards[previous.spareUsed] : undefined;

      return {
        ...previous,
        queue: refill ? [...previous.queue, refill] : previous.queue,
        index: previous.index + 1,
        spareUsed: previous.spareUsed + (refill ? 1 : 0)
      };
    });
  };

  useEffect(() => {
    if (finished) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.repeat || isTyping(event.target)) {
        return;
      }

      if (event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }

      const position = REVIEW_GRADES.findIndex((_, index) => event.key === String(index + 1));

      if (position >= 0) {
        event.preventDefault();
        handleGrade(REVIEW_GRADES[position]);
      } else if (event.key === SKIP_KEY) {
        event.preventDefault();
        handleSkip();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  });

  if (finished) {
    return (
      <Stack spacing={2} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          {session.reviewed > 0
            ? t('flashcards.reviewDone', { count: session.reviewed })
            : t('flashcards.reviewNothing')}
        </Typography>
        {session.reviewed > 0 && doneActions}
      </Stack>
    );
  }

  return (
    <Stack spacing={2} sx={{ width: '100%', alignItems: 'center' }}>
      <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
        {t('course.vocabIndexFlashcardsProgress', {
          current: session.index + 1,
          total: session.queue.length
        })}
      </Typography>

      <SaveableCard
        cardId={card.id}
        cardType={card.type}
        askText={card.item.kanji ?? card.item.kana}
        sx={{ position: 'relative', width: '100%', maxWidth: 420, mx: 'auto' }}
      >
        <Box sx={{ perspective: 1000 }}>
          <FlipCard
            key={`${session.index}:${front}`}
            item={card.item}
            locale={locale}
            front={front}
            type={card.type}
          />
        </Box>
      </SaveableCard>

      <Box
        role="group"
        aria-label={t('flashcards.reviewGradeLabel')}
        sx={{
          '&&': { mt: 4 },
          width: '100%',
          maxWidth: 420,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 1
        }}
      >
        {REVIEW_GRADES.map((value, position) => (
          <Button
            key={value}
            variant="outlined"
            color={GRADE_COLORS[value]}
            onClick={() => handleGrade(value)}
            aria-keyshortcuts={String(position + 1)}
            sx={{
              minHeight: 56,
              flexDirection: 'column',
              gap: 0.25,
              textTransform: 'none',
              lineHeight: 1.2
            }}
          >
            <Box component="span" sx={{ fontWeight: 600 }}>
              {t(GRADE_LABEL_KEYS[value])}
            </Box>
            <Box component="span" sx={{ color: 'text.secondary', fontWeight: 400 }}>
              {formatInterval(nextInterval(store.cards[card.id], value))}
            </Box>
          </Button>
        ))}
        <Button
          variant="outlined"
          color="inherit"
          onClick={handleSkip}
          aria-keyshortcuts={SKIP_KEY}
          sx={{
            minHeight: 56,
            color: 'text.secondary',
            borderColor: 'divider',
            textTransform: 'none',
            fontWeight: 600
          }}
        >
          {t('flashcards.reviewSkip')}
        </Button>
      </Box>
    </Stack>
  );
}
