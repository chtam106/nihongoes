'use client';

import { useState, type KeyboardEvent } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BookmarkAddOutlined from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddedOutlined from '@mui/icons-material/BookmarkAddedOutlined';
import { Box, Button, IconButton, Paper, Stack, Typography } from '@mui/material';
import { SaveToCollectionDialog } from '@/features/flashcards/save-to-collection-dialog.tsx';
import { useFlashcardCollections } from '@/features/flashcards/use-flashcard-collections.ts';
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
  bgcolor: 'background.paper',
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  transition: `transform ${FLIP_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
} as const;

export type VocabFlashcard = {
  id: string;
  item: VocabItem;
};

type VocabFlashcardsProps = {
  cards: VocabFlashcard[];
  locale: Locale;
  front: FlashcardFront;
};

type FlashcardFaceProps = {
  item: VocabItem;
  locale: Locale;
  side: FlashcardFront;
};

function FlashcardFace({ item, locale, side }: FlashcardFaceProps) {
  if (side === 'ja') {
    return <VocabHeadword item={item} variant="h5" />;
  }

  return (
    <Typography
      variant="h5"
      component="p"
      sx={{ fontWeight: 600, textAlign: 'center', userSelect: 'text' }}
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
};

function FlipCard({ item, locale, front }: FlipCardProps) {
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
        <FlashcardFace item={item} locale={locale} side={front} />
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
        <FlashcardFace item={item} locale={locale} side={back} />
      </Paper>
    </Box>
  );
}

export function VocabFlashcards({ cards, locale, front }: VocabFlashcardsProps) {
  const { t } = useTranslation();
  const { collections, defaults } = useFlashcardCollections();
  const [session, setSession] = useState(() => startSession(cards));
  const [saveCardId, setSaveCardId] = useState<string | null>(null);
  const { deck, index } = session;
  const finished = index >= deck.length;
  const card = deck[index];
  const saved = card
    ? collections.some((collection) => {
        if (!collection.cardIds.includes(card.id)) {
          return false;
        }

        const builtin = defaults.find((item) => item.id === collection.id);

        return !builtin || !builtin.cardIds.includes(card.id);
      })
    : false;

  const handleNext = () => {
    setSaveCardId(null);
    setSession((previous) => ({
      ...previous,
      index: previous.index + 1
    }));
  };

  const handleRestart = () => {
    setSaveCardId(null);
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
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: 420,
              mx: 'auto'
            }}
          >
            <Box sx={{ perspective: 1000 }}>
              <FlipCard key={`${index}:${front}`} item={card.item} locale={locale} front={front} />
            </Box>
            <IconButton
              aria-label={t('flashcards.addToCollection')}
              onClick={() => setSaveCardId(card.id)}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                zIndex: 2,
                color: saved ? 'primary.main' : 'text.secondary',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              {saved && <BookmarkAddedOutlined />}
              {!saved && <BookmarkAddOutlined />}
            </IconButton>
          </Box>
          <IconButton
            onClick={handleNext}
            aria-label={t('course.next')}
            sx={(theme) => ({
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

      <SaveToCollectionDialog
        open={saveCardId !== null}
        cardId={saveCardId}
        onClose={() => setSaveCardId(null)}
      />
    </Stack>
  );
}
