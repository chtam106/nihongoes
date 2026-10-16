'use client';

import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { createFlashcardResolver } from '@/constants/flashcards/catalog.ts';
import type { ResolvableFlashcard } from '@/constants/flashcards/catalog.ts';
import type { DefaultCollection } from '@/constants/flashcards/collections.ts';

type FlashcardDefaultsValue = {
  defaults: readonly DefaultCollection[];
  resolveCards: (ids: readonly string[]) => ResolvableFlashcard[];
};

const FlashcardDefaultsContext = createContext<FlashcardDefaultsValue | null>(null);

const NO_CARDS: ResolvableFlashcard[] = [];

type FlashcardDefaultsProviderProps = {
  defaults: readonly DefaultCollection[];
  extraCards?: readonly ResolvableFlashcard[];
  children: ReactNode;
};

export function FlashcardDefaultsProvider({
  defaults,
  extraCards = NO_CARDS,
  children
}: FlashcardDefaultsProviderProps) {
  const resolveCards = useMemo(() => createFlashcardResolver(extraCards), [extraCards]);
  const value = useMemo(() => ({ defaults, resolveCards }), [defaults, resolveCards]);

  return (
    <FlashcardDefaultsContext.Provider value={value}>{children}</FlashcardDefaultsContext.Provider>
  );
}

export function useFlashcardDefaults() {
  const value = useContext(FlashcardDefaultsContext);

  if (!value) {
    throw new Error('useFlashcardDefaults must be used within FlashcardDefaultsProvider');
  }

  return value;
}
