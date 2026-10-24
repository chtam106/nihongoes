import { Suspense } from 'react';
import { FLASHCARDS_PATH } from '@/constants/courses/levels.ts';
import { getKanjiGradeFlashcards } from '@/constants/flashcards/kanji-defaults.ts';
import { getLightFlashcardDefaults } from '@/constants/flashcards/light-defaults.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { localeParams } from '@/i18n/route-helpers.ts';
import { FlashcardAuthGate } from '@/features/auth/auth-gate.tsx';
import FlashcardsPage from './_components/flashcards-page.tsx';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata(FLASHCARDS_PATH);

export default function Page() {
  const light = getLightFlashcardDefaults();
  const kanji = getKanjiGradeFlashcards();

  return (
    <Suspense fallback={null}>
      <FlashcardAuthGate>
        <FlashcardsPage
          defaults={[...light.collections, ...kanji.collections]}
          extraCards={[...light.cards, ...kanji.cards]}
        />
      </FlashcardAuthGate>
    </Suspense>
  );
}
