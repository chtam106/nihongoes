'use client';

import { useSyncExternalStore, type MouseEvent } from 'react';
import ArrowBackOutlined from '@mui/icons-material/ArrowBackOutlined';
import { Box, Button, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { VocabFlashcards } from '@/components/vocab-flashcards';
import { FLASHCARDS_PATH } from '@/constants/courses/levels.ts';
import type { ResolvableFlashcard } from '@/constants/flashcards/catalog.ts';
import {
  EMPTY_COLLECTION_FRONTS,
  FLASHCARD_COLLECTIONS_FRONT_KEY,
  sanitizeCollectionFronts,
  type DefaultCollection
} from '@/constants/flashcards/collections.ts';
import {
  FlashcardDefaultsProvider,
  useFlashcardDefaults
} from '@/features/flashcards/flashcard-defaults.tsx';
import { SaveCardProvider } from '@/features/flashcards/save-card-gesture.tsx';
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
  const ready = useClientReady();
  const { collections } = useFlashcardCollections();
  const { resolveCards } = useFlashcardDefaults();
  const [fronts, setFronts] = usePersistentState(
    FLASHCARD_COLLECTIONS_FRONT_KEY,
    EMPTY_COLLECTION_FRONTS,
    sanitizeCollectionFronts
  );
  const collection = collections.find((item) => item.id === collectionId) ?? null;
  const front: FlashcardFront = fronts[collectionId] ?? 'ja';
  const cards = collection ? resolveCards(collection.cards.map((card) => card.id)) : [];

  const handleFrontChange = (_event: MouseEvent<HTMLElement>, value: FlashcardFront | null) => {
    if (!value) {
      return;
    }

    setFronts((previous) => ({ ...previous, [collectionId]: value }));
  };

  return (
    <PageContainer bottomGutter>
      <Stack spacing={2}>
        <Box>
          <Button
            component={RouterLink}
            to={FLASHCARDS_PATH}
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
        {collection && cards.length === 0 && (
          <Typography variant="body1" color="text.secondary">
            {t('flashcards.studyEmpty')}
          </Typography>
        )}
        {collection && cards.length > 0 && (
          <VocabFlashcards key={collection.id} cards={cards} locale={locale} front={front} />
        )}
        {!collection && ready && (
          <Typography variant="body1" color="text.secondary">
            {t('flashcards.missing')}
          </Typography>
        )}
      </Stack>
    </PageContainer>
  );
}

export default CollectionDetail;
