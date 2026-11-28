'use client';

import { useSyncExternalStore } from 'react';
import ArrowBackOutlined from '@mui/icons-material/ArrowBackOutlined';
import { Button, Stack, Typography } from '@mui/material';
import { PageBreadcrumb } from '@/components/page-breadcrumb';
import { HintText } from '@/components/hint-text';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { PageContainer } from '@/components/page-container';
import { FLASHCARDS_PATH } from '@/constants/courses/levels.ts';
import { studyFlashcards, type ResolvableFlashcard } from '@/constants/flashcards/catalog.ts';
import {
  FLASHCARD_COLLECTIONS_FRONT_KEY,
  sanitizeCollectionFront,
  type DefaultCollection,
  type FlashcardCard,
  type FlashcardCollection
} from '@/constants/flashcards/collections.ts';
import { dayNumber, dueCardIds } from '@/constants/flashcards/srs.ts';
import {
  FlashcardDefaultsProvider,
  useFlashcardDefaults
} from '@/features/flashcards/flashcard-defaults.tsx';
import { ReviewSession } from '@/features/flashcards/review-session.tsx';
import { SaveCardProvider } from '@/features/flashcards/save-card-gesture.tsx';
import { useFlashcardCollections } from '@/features/flashcards/use-flashcard-collections.ts';
import { useFlashcardReviews } from '@/features/flashcards/use-flashcard-reviews.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { usePersistentState } from '@/utils/use-persistent-state.ts';
import type { FlashcardFront } from '@/types/course.ts';

type ReviewPageProps = {
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

/**
 * Due cards in review order. A phrase saved from selected text only exists in
 * the collection that holds it, so cards are resolved from the collections
 * first, then from the catalog for cards no collection holds any more.
 */
export function dueReviewCards(
  dueIds: readonly string[],
  collections: readonly FlashcardCollection[],
  resolveCards: (ids: readonly string[]) => ResolvableFlashcard[]
): ResolvableFlashcard[] {
  const wanted = new Set(dueIds);
  const stored = new Map<string, FlashcardCard>();

  for (const collection of collections) {
    for (const card of collection.cards) {
      if (wanted.has(card.id) && !stored.has(card.id)) {
        stored.set(card.id, card);
      }
    }
  }

  const byId = new Map(
    [...resolveCards(dueIds), ...studyFlashcards([...stored.values()], resolveCards)].map(
      (card) => [card.id, card]
    )
  );

  return dueIds.flatMap((id) => byId.get(id) ?? []);
}

export default function ReviewPage({ defaults, extraCards }: ReviewPageProps) {
  return (
    <FlashcardDefaultsProvider defaults={defaults} extraCards={extraCards}>
      <SaveCardProvider>
        <DailyReview />
      </SaveCardProvider>
    </FlashcardDefaultsProvider>
  );
}

function DailyReview() {
  const { locale, t } = useTranslation();
  const ready = useClientReady();
  const { collections } = useFlashcardCollections();
  const { resolveCards } = useFlashcardDefaults();
  const { store } = useFlashcardReviews();
  const [front] = usePersistentState<FlashcardFront>(
    FLASHCARD_COLLECTIONS_FRONT_KEY,
    'ja',
    sanitizeCollectionFront
  );
  const cards = dueReviewCards(dueCardIds(store, dayNumber()), collections, resolveCards);
  const backLink = (
    <Button
      component={RouterLink}
      to={FLASHCARDS_PATH}
      startIcon={<ArrowBackOutlined />}
      sx={{ textTransform: 'none' }}
    >
      {t('flashcards.reviewBackToFlashcards')}
    </Button>
  );

  return (
    <PageContainer bottomGutter>
      <Stack spacing={2}>
        <PageBreadcrumb
          title={t('flashcards.reviewTitle')}
          items={[{ label: t('flashcards.title'), to: FLASHCARDS_PATH }]}
        />
        <Stack spacing={0.5}>
          <HintText>{t('flashcards.reviewIntro')}</HintText>
          <HintText>{t('flashcards.reviewHowTo')}</HintText>
        </Stack>
        {ready && Object.keys(store.cards).length === 0 && (
          <Typography variant="body1" color="text.secondary">
            {t('flashcards.reviewGetStarted')}
          </Typography>
        )}
        {ready && Object.keys(store.cards).length > 0 && (
          <ReviewSession cards={cards} locale={locale} front={front} doneActions={backLink} />
        )}
      </Stack>
    </PageContainer>
  );
}
