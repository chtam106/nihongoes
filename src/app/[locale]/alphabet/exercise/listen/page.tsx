import { ClientOnly } from '@/components/client-only';
import ListenExercisePage from './_components/listen-exercise.tsx';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { localeParams } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata('/alphabet/exercise/listen');

export default function Page() {
  return (
    <ClientOnly>
      <ListenExercisePage />
    </ClientOnly>
  );
}
