import { VerbPracticePage } from '@/features/verb-practice/page.tsx';
import { createVerbPracticeGroups, createVerbQuizDeck } from '@/features/verb-practice/verbs.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';

export const generateMetadata = createMetadata('/practice/verbs/te');

export default function Page() {
  const groups = createVerbPracticeGroups();
  return <VerbPracticePage mode="te" groups={groups} initialDeck={createVerbQuizDeck(groups, 'te')} />;
}
