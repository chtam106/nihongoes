'use client';

import { useEffect, useState, type KeyboardEvent, type ReactNode } from 'react';
import MoreHorizOutlined from '@mui/icons-material/MoreHorizOutlined';
import { Box, Button, IconButton, Paper, Stack, Typography } from '@mui/material';
import type { FlashcardCardType } from '@/constants/flashcards/collections.ts';
import type { FlashcardItem } from '@/constants/flashcards/catalog.ts';
import { SaveableCard } from '@/features/flashcards/save-card-gesture.tsx';
import { openStudyMenu } from '@/features/flashcards/study-menu.ts';
import { SpeakButton } from '@/components/speak-button';
import { VocabHeadword } from '@/components/vocab-headword';
import { useTranslation } from '@/i18n/use-translation.ts';
import { focusVisibleSx } from '@/theme/focus.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import type { Locale } from '@/types/i18n.ts';
import { useSwipe } from '@/utils/use-swipe.ts';
import type { FlashcardFront } from '@/types/course.ts';

const FLIP_MS = 480;

// Both faces share one grid cell, so the card grows to fit the longer face
// instead of letting a long phrase spill out. Vertical padding clears the
// speaker and menu icons in the corner.
const faceSx = {
  gridArea: '1 / 1',
  minWidth: 0,
  px: 3,
  py: 6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  bgcolor: 'background.paper',
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  transition: `transform ${FLIP_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
} as const;

export type VocabFlashcard = {
  id: string;
  type: FlashcardCardType;
  item: FlashcardItem;
};

function isLargeCard(type: FlashcardCardType) {
  return type !== 'phrase';
}

const FLASHCARD_JA_FONT_SIZE = '2.5rem';

function japaneseFaceSx() {
  return {
    width: '100%',
    minWidth: 0,
    textAlign: 'center' as const,
    fontSize: FLASHCARD_JA_FONT_SIZE,
    lineHeight: 1.35
  };
}

type VocabFlashcardsProps = {
  cards: VocabFlashcard[];
  locale: Locale;
  front: FlashcardFront;
  /** A button for the current card, shown above Next card (e.g. add to the review list). */
  cardAction?: (card: VocabFlashcard) => ReactNode;
  /** Custom collection being studied, passed to each card's menu. */
  collectionId?: string;
  /** Swiping the card right on touch (e.g. add it to the review list). Left is Next card. */
  onSwipeRight?: (card: VocabFlashcard) => void;
  /** After the last card, reshuffle and start over instead of showing the end screen. */
  loop?: boolean;
};

type FlashcardFaceProps = {
  item: FlashcardItem;
  locale: Locale;
  side: FlashcardFront;
  type: FlashcardCardType;
};

function FlashcardFace({ item, locale, side, type }: FlashcardFaceProps) {
  const large = isLargeCard(type);

  if (side === 'ja') {
    return <VocabHeadword item={item} variant="h5" sx={japaneseFaceSx()} />;
  }

  return (
    <Typography
      variant="h5"
      component="p"
      sx={(theme) => ({
        width: '100%',
        minWidth: 0,
        fontWeight: 600,
        textAlign: 'center',
        userSelect: 'text',
        ...(large ? { fontSize: `calc(${theme.typography.h5.fontSize} * 1.2)` } : {})
      })}
    >
      {item.meaning[locale]}
    </Typography>
  );
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

type FlashcardSession = {
  deck: VocabFlashcard[];
  index: number;
  /** Cards shown so far, across rounds: keys the slide-in of each new card. */
  step: number;
};

function startSession(cards: VocabFlashcard[], step = 0): FlashcardSession {
  return { deck: shuffle(cards), index: 0, step };
}

type FlipCardProps = {
  item: FlashcardItem;
  locale: Locale;
  front: FlashcardFront;
  type: FlashcardCardType;
  /** Set to control the side from outside (keyboard shortcuts). */
  flipped?: boolean;
  onFlip?: (flipped: boolean) => void;
};

export function FlipCard({
  item,
  locale,
  front,
  type,
  flipped: controlledFlipped,
  onFlip
}: FlipCardProps) {
  const { t } = useTranslation();
  const [ownFlipped, setOwnFlipped] = useState(false);
  const flipped = controlledFlipped ?? ownFlipped;
  const back: FlashcardFront = front === 'ja' ? 'meaning' : 'ja';

  const handleFlip = () => {
    setOwnFlipped(!flipped);
    onFlip?.(!flipped);
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleFlip();
    }
  };

  return (
    <Box
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={t('course.vocabIndexFlashcardsHint')}
      onClick={handleFlip}
      onKeyDown={handleCardKeyDown}
      sx={(theme) => ({
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr)',
        minHeight: 220,
        transformStyle: 'preserve-3d',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'transparent',
        '&:focus': { outline: 'none' },
        '&:focus-visible': focusVisibleSx(theme)
      })}
    >
      <Paper
        elevation={0}
        sx={[
          elevatedSurfaceSx,
          faceSx,
          {
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            pointerEvents: 'none',
            zIndex: flipped ? 0 : 1
          }
        ]}
      >
        <FlashcardFace item={item} locale={locale} side={front} type={type} />
      </Paper>
      <Paper
        elevation={0}
        sx={[
          elevatedSurfaceSx,
          faceSx,
          {
            transform: flipped ? 'rotateY(0deg)' : 'rotateY(-180deg)',
            pointerEvents: 'none',
            zIndex: flipped ? 1 : 0
          }
        ]}
      >
        <FlashcardFace item={item} locale={locale} side={back} type={type} />
      </Paper>
    </Box>
  );
}

type FlashcardStageProps = {
  card: VocabFlashcard;
  /** Changes with every new card, so the card slides in and starts unflipped. */
  position: number;
  locale: Locale;
  front: FlashcardFront;
  flipped: boolean;
  onFlip: (flipped: boolean) => void;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  /** Custom collection being studied: the card menu can remove the card from it. */
  collectionId?: string;
};

/** True when a key press belongs to a field or a focused control, not to the card. */
export function isOwnKeyTarget(target: EventTarget | null, key: string) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  if (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
    return true;
  }

  // Space and Enter press a focused button themselves.
  return (key === ' ' || key === 'Enter') && Boolean(target.closest('button, a, [role="button"]'));
}

/**
 * One flashcard as shown in a study session: flip on tap, a speaker in the
 * corner, swipe left or right on touch, and a short slide-in for each new card.
 */
export function FlashcardStage({
  card,
  position,
  locale,
  front,
  flipped,
  onFlip,
  onSwipeLeft,
  onSwipeRight,
  collectionId
}: FlashcardStageProps) {
  const { t } = useTranslation();
  const swipe = useSwipe({ onSwipeLeft, onSwipeRight });

  return (
    <SaveableCard
      cardId={card.id}
      cardType={card.type}
      askText={card.item.kanji ?? card.item.kana}
      collectionId={collectionId}
      sx={{ position: 'relative', width: '100%', maxWidth: 420, mx: 'auto' }}
    >
      <Box
        key={position}
        onPointerDown={swipe.onPointerDown}
        onPointerUp={swipe.onPointerUp}
        onClickCapture={swipe.onClickCapture}
        sx={{
          ...swipe.style,
          position: 'relative',
          perspective: 1000,
          animation: 'flashcardIn 200ms ease-out',
          '@keyframes flashcardIn': {
            from: { opacity: 0, transform: 'translateX(24px)' },
            to: { opacity: 1, transform: 'none' }
          },
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' }
        }}
      >
        <FlipCard
          item={card.item}
          locale={locale}
          front={front}
          type={card.type}
          flipped={flipped}
          onFlip={onFlip}
        />
        {/* Above both faces; their own keys and clicks must not flip the card. */}
        <Box
          onKeyDown={(event) => event.stopPropagation()}
          onPointerDown={(event) => event.stopPropagation()}
          sx={{ position: 'absolute', top: 8, right: 8, zIndex: 2, display: 'flex' }}
        >
          <SpeakButton text={card.item.speech ?? card.item.kana} />
          <IconButton
            size="small"
            aria-label={t('flashcards.cardMenu')}
            aria-haspopup="menu"
            onClick={(event) => {
              // Same menu as a right-click or long press, under the button.
              event.stopPropagation();
              const rect = event.currentTarget.getBoundingClientRect();
              openStudyMenu({
                x: rect.left,
                y: rect.bottom,
                askText: card.item.kanji ?? card.item.kana,
                card: { id: card.id, type: card.type },
                collectionId
              });
            }}
          >
            <MoreHorizOutlined fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>
    </SaveableCard>
  );
}

export function VocabFlashcards({
  cards,
  locale,
  front,
  cardAction,
  collectionId,
  onSwipeRight,
  loop = false
}: VocabFlashcardsProps) {
  const { t } = useTranslation();
  const [session, setSession] = useState(() => startSession(cards));
  const [flipped, setFlipped] = useState(false);
  // A card removed from the collection mid-session drops out of the deck; the
  // session keeps its place instead of reshuffling.
  const present = new Set(cards.map((item) => item.id));
  const deck = session.deck.filter((item) => present.has(item.id));
  const index = session.deck.slice(0, session.index).filter((item) => present.has(item.id)).length;
  const finished = index >= deck.length;
  const card = deck[index];

  const handleNext = () => {
    setFlipped(false);
    setSession((previous) => {
      const at = card ? previous.deck.indexOf(card) : previous.index;

      return loop && index + 1 >= deck.length
        ? startSession(cards, previous.step + 1)
        : { ...previous, index: at + 1, step: previous.step + 1 };
    });
  };

  const handleRestart = () => {
    setFlipped(false);
    setSession((previous) => startSession(cards, previous.step + 1));
  };

  // Space flips, the right arrow goes to the next card.
  useEffect(() => {
    if (finished) {
      return;
    }

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }

      if (isOwnKeyTarget(event.target, event.key)) {
        return;
      }

      if (event.key === ' ') {
        event.preventDefault();
        setFlipped((previous) => !previous);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  });

  return (
    <Stack
      spacing={2}
      sx={{
        width: '100%',
        alignItems: 'center'
      }}
    >
      <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
        {finished
          ? t('course.vocabIndexFlashcardsDone', { count: deck.length })
          : t('course.vocabIndexFlashcardsProgress', {
              current: index + 1,
              total: deck.length
            })}
      </Typography>

      {finished && (
        <Button
          variant="contained"
          onClick={handleRestart}
          sx={{ width: 'auto', px: 2.5, alignSelf: 'center' }}
        >
          {t('course.retry')}
        </Button>
      )}

      {!finished && card && (
        <>
          <FlashcardStage
            card={card}
            position={session.step}
            locale={locale}
            front={front}
            flipped={flipped}
            onFlip={setFlipped}
            onSwipeLeft={handleNext}
            onSwipeRight={onSwipeRight && (() => onSwipeRight(card))}
            collectionId={collectionId}
          />
          <Stack
            spacing={1}
            sx={{
              '&&': { mt: 4 },
              alignItems: 'center',
              width: '100%',
              maxWidth: cardAction ? 420 : undefined
            }}
          >
            {cardAction?.(card)}
            <Button
              variant="contained"
              onClick={handleNext}
              fullWidth={Boolean(cardAction)}
              aria-keyshortcuts="ArrowRight"
              sx={{
                px: 2.5,
                minHeight: 48,
                textTransform: 'none',
                fontWeight: 600
              }}
            >
              {t('course.vocabIndexFlashcardsNext')}
            </Button>
          </Stack>
        </>
      )}
    </Stack>
  );
}
