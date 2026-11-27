'use client';

import { useMemo, useState, useSyncExternalStore, type MouseEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackOutlined from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckOutlined from '@mui/icons-material/CheckOutlined';
import PlaylistAddOutlined from '@mui/icons-material/PlaylistAddOutlined';
import PlaylistRemoveOutlined from '@mui/icons-material/PlaylistRemoveOutlined';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import {
  flashcardCollectionHref,
  flashcardsListPath,
  parseFlashcardsListTabParam,
  FLASHCARDS_RETURN_TAB_QUERY
} from '@/app/[locale]/flashcards/_components/flashcards-list-tab.ts';
import { adjacentDefaultCollections } from '@/constants/flashcards/default-collection-groups.ts';
import { studyFlashcards, type ResolvableFlashcard } from '@/constants/flashcards/catalog.ts';
import {
  FLASHCARD_COLLECTIONS_FRONT_KEY,
  isDefaultCollectionId,
  sanitizeCollectionFront,
  type DefaultCollection
} from '@/constants/flashcards/collections.ts';
import {
  FlashcardDefaultsProvider,
  useFlashcardDefaults
} from '@/features/flashcards/flashcard-defaults.tsx';
import { VocabFlashcards, type VocabFlashcard } from '@/components/vocab-flashcards';
import { SaveCardProvider } from '@/features/flashcards/save-card-gesture.tsx';
import { useFlashcardReviews } from '@/features/flashcards/use-flashcard-reviews.ts';
import { useFlashcardCollections } from '@/features/flashcards/use-flashcard-collections.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { usePersistentState } from '@/utils/use-persistent-state.ts';
import type { FlashcardFront } from '@/app/[locale]/vocabulary/_components/vocab-index-preferences.ts';

type CollectionDetailProps = {
  collectionId: string;
  defaults: readonly DefaultCollection[];
  extraCards: readonly ResolvableFlashcard[];
};

function subscribeToNothing() {
  return () => {};
}

function useClientReady() {
  return useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false
  );
}

export function CollectionDetail({ collectionId, defaults, extraCards }: CollectionDetailProps) {
  return (
    <FlashcardDefaultsProvider defaults={defaults} extraCards={extraCards}>
      <SaveCardProvider>
        <CollectionStudy collectionId={collectionId} />
      </SaveCardProvider>
    </FlashcardDefaultsProvider>
  );
}

type CollectionStudyProps = {
  collectionId: string;
};

function CollectionStudy({ collectionId }: CollectionStudyProps) {
  const { locale, t } = useTranslation();
  const searchParams = useSearchParams();
  const listTab =
    parseFlashcardsListTabParam(searchParams.get(FLASHCARDS_RETURN_TAB_QUERY)) ?? 'mine';
  const ready = useClientReady();
  const { collections } = useFlashcardCollections();
  const { resolveCards } = useFlashcardDefaults();
  const [front, setFront] = usePersistentState<FlashcardFront>(
    FLASHCARD_COLLECTIONS_FRONT_KEY,
    'ja',
    sanitizeCollectionFront
  );
  const { store: reviews, add, addAll, removeAll } = useFlashcardReviews();
  const [confirmRemoveAll, setConfirmRemoveAll] = useState(false);
  const collection = collections.find((item) => item.id === collectionId) ?? null;
  const cards = useMemo(
    () => (collection ? studyFlashcards(collection.cards, resolveCards) : []),
    [collection, resolveCards]
  );
  const { previous, next } = adjacentDefaultCollections(collections, collectionId, locale);
  const onListCount = cards.filter((card) => card.id in reviews.cards).length;

  // Collections are for browsing: a card joins the daily review only when asked.
  const addToReviewButton = (card: VocabFlashcard) => {
    const onList = card.id in reviews.cards;

    return (
      <Button
        variant="outlined"
        fullWidth
        disabled={onList}
        startIcon={onList ? <CheckOutlined /> : undefined}
        onClick={() => add(card.id)}
        sx={{ minHeight: 48, fontWeight: 600, textTransform: 'none' }}
      >
        {onList ? t('flashcards.reviewOnList') : t('flashcards.reviewAdd')}
      </Button>
    );
  };

  const handleFrontChange = (_event: MouseEvent<HTMLElement>, value: FlashcardFront | null) => {
    if (!value) {
      return;
    }

    setFront(value);
  };

  return (
    <PageContainer bottomGutter>
      <Stack spacing={2}>
        <Box>
          <Button
            component={RouterLink}
            to={flashcardsListPath(listTab)}
            startIcon={<ArrowBackOutlined />}
            sx={{ textTransform: 'none' }}
          >
            {t('common.back')}
          </Button>
        </Box>
        {collection && <Heading component="h1">{collection.name}</Heading>}
        {collection && (
          <ToggleButtonGroup
            exclusive
            color="primary"
            size="small"
            value={front}
            onChange={handleFrontChange}
            aria-label={t('course.vocabIndexFlashcardsFront')}
            sx={{ alignSelf: 'center' }}
          >
            <ToggleButton value="ja">{t('course.vocabIndexFlashcardsFrontWord')}</ToggleButton>
            <ToggleButton value="meaning">
              {t('course.vocabIndexFlashcardsFrontMeaning')}
            </ToggleButton>
          </ToggleButtonGroup>
        )}
        {collection && cards.length > 0 && ready && (
          <Stack spacing={0.5} sx={{ alignItems: 'center' }}>
            <Button
              startIcon={<PlaylistAddOutlined />}
              disabled={onListCount === cards.length}
              onClick={() => addAll(cards.map((card) => card.id))}
              sx={{ textTransform: 'none', fontWeight: 600 }}
            >
              {onListCount === cards.length
                ? t('flashcards.reviewAllOnList')
                : t('flashcards.reviewAddAll')}
            </Button>
            <Button
              startIcon={<PlaylistRemoveOutlined />}
              disabled={onListCount === 0}
              onClick={() => setConfirmRemoveAll(true)}
              sx={{ textTransform: 'none', fontWeight: 600 }}
            >
              {t('flashcards.reviewRemoveAll')}
            </Button>
          </Stack>
        )}
        <Dialog
          open={confirmRemoveAll}
          onClose={() => setConfirmRemoveAll(false)}
          aria-labelledby="remove-all-title"
        >
          <DialogTitle id="remove-all-title">{t('flashcards.reviewRemoveAllTitle')}</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              {t('flashcards.reviewRemoveAllBody', { count: onListCount })}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmRemoveAll(false)}>
              {t('flashcards.reviewRemoveAllKeep')}
            </Button>
            <Button
              color="error"
              onClick={() => {
                removeAll(cards.map((card) => card.id));
                setConfirmRemoveAll(false);
              }}
            >
              {t('flashcards.reviewRemoveAllConfirm')}
            </Button>
          </DialogActions>
        </Dialog>
        {collection && cards.length === 0 && (
          <Typography variant="body1" color="text.secondary">
            {t('flashcards.studyEmpty')}
          </Typography>
        )}
        {collection && cards.length > 0 && ready && (
          <VocabFlashcards
            key={collection.id}
            cards={cards}
            locale={locale}
            front={front}
            cardAction={addToReviewButton}
            onSwipeRight={(card) => add(card.id)}
            collectionId={isDefaultCollectionId(collection.id) ? undefined : collection.id}
            loop
          />
        )}
        {!collection && ready && (
          <Typography variant="body1" color="text.secondary">
            {t('flashcards.missing')}
          </Typography>
        )}
        {collection && (previous || next) && (
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={1.5}
            sx={{ '&&': { mt: 4 }, justifyContent: { md: 'space-between' } }}
          >
            <Box
              sx={{
                flex: { md: 1 },
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                order: { xs: 2, md: 1 }
              }}
            >
              {previous && (
                <Button
                  component={RouterLink}
                  to={flashcardCollectionHref(previous.id, listTab)}
                  startIcon={<ArrowBackIcon />}
                  variant="text"
                  sx={{ px: 0, textTransform: 'none' }}
                >
                  {t('flashcards.previousCollection')}
                </Button>
              )}
            </Box>
            <Box
              sx={{
                flex: { md: 1 },
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
                order: { xs: 1, md: 2 }
              }}
            >
              {next && (
                <Button
                  component={RouterLink}
                  to={flashcardCollectionHref(next.id, listTab)}
                  endIcon={<ArrowForwardIcon />}
                  variant="text"
                  sx={{ px: 0, textTransform: 'none' }}
                >
                  {t('flashcards.nextCollection')}
                </Button>
              )}
            </Box>
          </Stack>
        )}
      </Stack>
    </PageContainer>
  );
}

export default CollectionDetail;
