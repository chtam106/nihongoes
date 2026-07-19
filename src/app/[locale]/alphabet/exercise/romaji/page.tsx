import { ClientOnly } from '@/components/client-only';
import RomajiExercisePage from './_components/romaji-exercise.tsx';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { localeParams } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata('/alphabet/exercise/romaji');

export default function Page() {
  return (
    <ClientOnly>
      <RomajiExercisePage />
    </ClientOnly>
  );
}
