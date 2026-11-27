'use client';

import { useEffect, useState, type ReactNode } from 'react';
import UndoOutlined from '@mui/icons-material/UndoOutlined';
import { Box, Button, Stack, Typography } from '@mui/material';
import { FlashcardStage, isOwnKeyTarget, type VocabFlashcard } from '@/components/vocab-flashcards';
import {
  dayNumber,
  nextInterval,
  nextReview,
  REVIEW_GRADES,
  type ReviewCard,
  type ReviewGrade
} from '@/constants/flashcards/srs.ts';
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

/** Key for "no need to review", after the grade keys. */
const SKIP_KEY = String(REVIEW_GRADES.length + 1);

type ReviewAction = ReviewGrade | 'remove';

type ReviewSessionProps = {
  /** Due cards in review order. Read once when the session starts. */
  cards: VocabFlashcard[];
  locale: Locale;
  front: FlashcardFront;
  /** Shown under the summary when a session with at least one card is over. */
  doneActions?: ReactNode;
};

/** One step of the session, kept so it can be undone. */
type HistoryEntry = {
  cardId: string;
  /** The card's schedule before this step. */
  before: ReviewCard | undefined;
  action: ReviewAction;
};

type SessionState = {
  index: number;
  history: HistoryEntry[];
  flipped: boolean;
};

function countOf(history: HistoryEntry[], action: ReviewAction) {
  return history.filter((entry) => entry.action === action).length;
}

export function ReviewSession({ cards, locale, front, doneActions }: ReviewSessionProps) {
  const { t } = useTranslation();
  const { store, grade, remove, restore } = useFlashcardReviews();
  const [queue] = useState(cards);
  const [session, setSession] = useState<SessionState>({ index: 0, history: [], flipped: false });
  const card = queue[session.index];
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

  const act = (action: ReviewAction) => {
    if (!card) {
      return;
    }

    const before = store.cards[card.id];

    if (action === 'remove') {
      remove(card.id);
    } else {
      grade(card.id, action);
    }

    setSession((previous) => ({
      index: previous.index + 1,
      history: [...previous.history, { cardId: card.id, before, action }],
      flipped: false
    }));
  };

  const undo = () => {
    const last = session.history.at(-1);

    if (!last) {
      return;
    }

    restore(last.cardId, last.before);
    setSession((previous) => ({
      index: previous.index - 1,
      history: previous.history.slice(0, -1),
      flipped: false
    }));
  };

  // Space flips, 1-2 grade, 3 takes the card off the list, Z undoes.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.repeat || event.altKey) {
        return;
      }

      if (isOwnKeyTarget(event.target, event.key)) {
        return;
      }

      const key = event.key.toLowerCase();

      if (key === 'z' && !event.shiftKey) {
        event.preventDefault();
        undo();
        return;
      }

      if (finished || event.ctrlKey || event.metaKey) {
        return;
      }

      const position = REVIEW_GRADES.findIndex((_, index) => key === String(index + 1));

      if (position >= 0) {
        event.preventDefault();
        act(REVIEW_GRADES[position]);
      } else if (key === SKIP_KEY) {
        event.preventDefault();
        act('remove');
      } else if (key === ' ') {
        event.preventDefault();
        setSession((previous) => ({ ...previous, flipped: !previous.flipped }));
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  });

  const undoButton = session.history.length > 0 && (
    <Button
      onClick={undo}
      startIcon={<UndoOutlined />}
      aria-keyshortcuts="Z"
      sx={{ alignSelf: 'center', textTransform: 'none', color: 'text.secondary' }}
    >
      {t('flashcards.reviewUndo')}
    </Button>
  );

  if (finished) {
    const reviewed = session.history.length;
    const today = dayNumber();
    const upcoming = nextReview(store, today);
    const removed = countOf(session.history, 'remove');
    const summary = [
      t('flashcards.reviewSummaryGood', { count: countOf(session.history, 'good') }),
      t('flashcards.reviewSummaryAgain', { count: countOf(session.history, 'again') }),
      ...(removed > 0 ? [t('flashcards.reviewSummaryRemoved', { count: removed })] : [])
    ].join(' · ');

    return (
      <Stack spacing={2} sx={{ alignItems: 'center', textAlign: 'center' }}>
        {reviewed === 0 && (
          <Typography variant="body1" color="text.secondary">
            {t('flashcards.reviewNothing')}
          </Typography>
        )}
        {reviewed > 0 && (
          <Stack spacing={0.5} sx={{ alignItems: 'center' }}>
            <Typography variant="h6" component="p" sx={{ fontWeight: 600 }}>
              {t('flashcards.reviewDone', { count: reviewed })}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {summary}
            </Typography>
            {upcoming && (
              <Typography variant="body1" color="text.secondary">
                {upcoming.day === today + 1
                  ? t('flashcards.reviewNextTomorrow', { count: upcoming.count })
                  : t('flashcards.reviewNextIn', {
                      days: upcoming.day - today,
                      count: upcoming.count
                    })}
              </Typography>
            )}
          </Stack>
        )}
        {undoButton}
        {reviewed > 0 && doneActions}
      </Stack>
    );
  }

  const buttonSx = {
    minHeight: 56,
    flexDirection: 'column',
    gap: 0.25,
    textTransform: 'none',
    lineHeight: 1.2
  } as const;

  return (
    <Stack spacing={2} sx={{ width: '100%', alignItems: 'center' }}>
      <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
        {t('course.vocabIndexFlashcardsProgress', {
          current: session.index + 1,
          total: queue.length
        })}
      </Typography>

      <FlashcardStage
        card={card}
        position={session.history.length}
        locale={locale}
        front={front}
        flipped={session.flipped}
        onFlip={(flipped) => setSession((previous) => ({ ...previous, flipped }))}
        onSwipeLeft={() => act('again')}
        onSwipeRight={() => act('good')}
      />

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
            onClick={() => act(value)}
            aria-keyshortcuts={String(position + 1)}
            sx={buttonSx}
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
          color="info"
          onClick={() => act('remove')}
          aria-keyshortcuts={SKIP_KEY}
          sx={buttonSx}
        >
          <Box component="span" sx={{ fontWeight: 600 }}>
            {t('flashcards.reviewSkip')}
          </Box>
          <Box component="span" sx={{ color: 'text.secondary', fontWeight: 400 }}>
            {t('flashcards.reviewSkipRemove')}
          </Box>
        </Button>
      </Box>

      {undoButton}
    </Stack>
  );
}
