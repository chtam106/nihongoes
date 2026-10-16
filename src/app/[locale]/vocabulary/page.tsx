import { VOCABULARY_PATH } from '@/constants/courses/levels.ts';
import { getKanjiGradeFlashcards } from '@/constants/flashcards/kanji-defaults.ts';
import { getLightFlashcardDefaults } from '@/constants/flashcards/light-defaults.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { localeParams } from '@/i18n/route-helpers.ts';
import VocabIndexPage from './_components/vocab-index-page.tsx';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata(VOCABULARY_PATH);

export default function Page() {
  const defaults = [
    ...getLightFlashcardDefaults().collections,
    ...getKanjiGradeFlashcards().collections
  ];

  return <VocabIndexPage defaults={defaults} />;
}
