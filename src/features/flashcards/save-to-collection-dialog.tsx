'use client';

import type { FlashcardCard } from '@/constants/flashcards/collections.ts';
import { SaveToCollectionDialogView } from '@/features/flashcards/save-to-collection-dialog-view.tsx';
import { useFlashcardCollections } from '@/features/flashcards/use-flashcard-collections.ts';

type SaveToCollectionDialogProps = {
  open: boolean;
  cards: readonly FlashcardCard[];
  onClose: () => void;
};

export function SaveToCollectionDialog({ open, cards, onClose }: SaveToCollectionDialogProps) {
  const { collections, includeCards, create } = useFlashcardCollections();

  return (
    <SaveToCollectionDialogView
      open={open}
      cards={cards}
      collections={collections}
      onClose={onClose}
      onToggle={(collectionId, included) => includeCards(collectionId, cards, included)}
      onCreate={(name) => create(name, cards)}
    />
  );
}
