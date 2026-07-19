import { ClientOnly } from '@/components/client-only';
import SentenceExercisePage from './_components/sentence-exercise.tsx';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { localeParams } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata('/alphabet/exercise/sentence');

export default function Page() {
  return (
    <ClientOnly>
      <SentenceExercisePage />
    </ClientOnly>
  );
}
