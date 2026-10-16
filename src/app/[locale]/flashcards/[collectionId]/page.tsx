import { flashcardCollectionPath } from '@/constants/courses/levels.ts';
import { getKanjiGradeFlashcards } from '@/constants/flashcards/kanji-defaults.ts';
import { getLightFlashcardDefaults } from '@/constants/flashcards/light-defaults.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { localeParams, type PageProps } from '@/i18n/route-helpers.ts';
import CollectionDetail from './_components/collection-detail.tsx';

export const dynamicParams = true;

export function generateStaticParams() {
  const ids = [
    ...getLightFlashcardDefaults().collections,
    ...getKanjiGradeFlashcards().collections
  ].map((collection) => collection.id);

  return localeParams.flatMap(({ locale }) =>
    ids.map((collectionId) => ({ locale, collectionId }))
  );
}

export const generateMetadata = createMetadata((params) =>
  flashcardCollectionPath(params.collectionId)
);

export default async function Page({ params }: PageProps<{ collectionId: string }>) {
  const { collectionId } = await params;
  const light = getLightFlashcardDefaults();
  const kanji = getKanjiGradeFlashcards();

  return (
    <CollectionDetail
      collectionId={collectionId}
      defaults={[...light.collections, ...kanji.collections]}
      extraCards={[...light.cards, ...kanji.cards]}
    />
  );
}
