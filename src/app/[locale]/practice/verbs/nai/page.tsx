import { VerbPracticePage } from '@/features/verb-practice/page.tsx';
import { createVerbPracticeGroups, createVerbQuizDeck } from '@/features/verb-practice/verbs.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';

export const generateMetadata = createMetadata('/practice/verbs/nai');

export default function Page() {
  const groups = createVerbPracticeGroups();
  return (
    <VerbPracticePage mode="nai" groups={groups} initialDeck={createVerbQuizDeck(groups, 'nai')} />
  );
}
