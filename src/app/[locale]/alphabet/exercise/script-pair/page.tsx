import { ClientOnly } from '@/components/client-only';
import { getLightFlashcardDefaults } from '@/constants/flashcards/light-defaults.ts';
import { SaveCardScope } from '@/features/flashcards/save-card-gesture.tsx';
import ScriptPairExercisePage from './_components/script-pair-exercise.tsx';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { localeParams } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata('/alphabet/exercise/script-pair');

export default function Page() {
  return (
    <ClientOnly>
      <SaveCardScope defaults={getLightFlashcardDefaults().collections}>
        <ScriptPairExercisePage />
      </SaveCardScope>
    </ClientOnly>
  );
}
