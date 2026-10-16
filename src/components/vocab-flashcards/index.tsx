'use client';

import { useState, type KeyboardEvent } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, IconButton, Paper, Stack, Typography } from '@mui/material';
import type { FlashcardCardType } from '@/constants/flashcards/collections.ts';
import { SaveableCard } from '@/features/flashcards/save-card-gesture.tsx';
import { VocabHeadword } from '@/components/vocab-headword';
import { useTranslation } from '@/i18n/use-translation.ts';
import { focusVisibleSx } from '@/theme/focus.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import type { VocabItem } from '@/types/course.ts';
import type { Locale } from '@/types/i18n.ts';
import type { FlashcardFront } from '@/app/[locale]/vocabulary/_components/vocab-index-preferences.ts';

const FLIP_MS = 480;

const faceSx = {
  position: 'absolute',
  inset: 0,
  p: 3,
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
  item: VocabItem;
};

function isLargeCard(type: FlashcardCardType) {
  return type !== 'phrase';
}

function japaneseFaceSx(type: FlashcardCardType) {
  const centered = {
    width: '100%',
    minWidth: 0,
    textAlign: 'center' as const
  };

  if (type === 'vocab') {
    return { ...centered, fontSize: '3.5rem', lineHeight: 1.35 };
  }

  if (type === 'phrase') {
    return { ...centered, fontSize: '2.5rem', lineHeight: 1.35 };
  }

  return { ...centered, fontSize: '6rem', lineHeight: 1 };
}

type VocabFlashcardsProps = {
  cards: VocabFlashcard[];
  locale: Locale;
  front: FlashcardFront;
};

type FlashcardFaceProps = {
  item: VocabItem;
  locale: Locale;
  side: FlashcardFront;
  type: FlashcardCardType;
};

function FlashcardFace({ item, locale, side, type }: FlashcardFaceProps) {
  const large = isLargeCard(type);

  if (side === 'ja') {
    return <VocabHeadword item={item} variant="h5" sx={japaneseFaceSx(type)} />;
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
};

function startSession(cards: VocabFlashcard[]): FlashcardSession {
  return { deck: shuffle(cards), index: 0 };
}

type FlipCardProps = {
  item: VocabItem;
  locale: Locale;
  front: FlashcardFront;
  type: FlashcardCardType;
};

function FlipCard({ item, locale, front, type }: FlipCardProps) {
  const { t } = useTranslation();
  const [flipped, setFlipped] = useState(false);
  const back: FlashcardFront = front === 'ja' ? 'meaning' : 'ja';

  const handleFlip = () => {
    setFlipped((previous) => !previous);
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

export function VocabFlashcards({ cards, locale, front }: VocabFlashcardsProps) {
  const { t } = useTranslation();
  const [session, setSession] = useState(() => startSession(cards));
  const { deck, index } = session;
  const finished = index >= deck.length;
  const card = deck[index];

  const handleNext = () => {
    setSession((previous) => ({
      ...previous,
      index: previous.index + 1
    }));
  };

  const handleRestart = () => {
    setSession(startSession(cards));
  };

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
          <SaveableCard
            cardId={card.id}
            cardType={card.type}
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: 420,
              mx: 'auto'
            }}
          >
            <Box sx={{ perspective: 1000 }}>
              <FlipCard
                key={`${index}:${front}`}
                item={card.item}
                locale={locale}
                front={front}
                type={card.type}
              />
            </Box>
          </SaveableCard>
          <IconButton
            onClick={handleNext}
            aria-label={t('course.next')}
            sx={(theme) => ({
              '&&': { mt: 4 },
              alignSelf: 'center',
              width: 48,
              height: 48,
              '--button-rest-bg': theme.palette.primary.main,
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              '@media (hover: hover) and (pointer: fine)': {
                '&:hover': { bgcolor: 'primary.dark' }
              }
            })}
          >
            <ArrowForwardIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );
}
