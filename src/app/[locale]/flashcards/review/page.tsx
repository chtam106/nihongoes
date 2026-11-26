import { Suspense } from 'react';
import { FLASHCARD_REVIEW_PATH } from '@/constants/courses/levels.ts';
import { getKanjiGradeFlashcards } from '@/constants/flashcards/kanji-defaults.ts';
import { getLightFlashcardDefaults } from '@/constants/flashcards/light-defaults.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { localeParams } from '@/i18n/route-helpers.ts';
import ReviewPage from './_components/review-page.tsx';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata(FLASHCARD_REVIEW_PATH);

export default function Page() {
  const light = getLightFlashcardDefaults();
  const kanji = getKanjiGradeFlashcards();

  return (
    <Suspense fallback={null}>
      <ReviewPage
        defaults={[...light.collections, ...kanji.collections]}
        extraCards={[...light.cards, ...kanji.cards]}
      />
    </Suspense>
  );
}
