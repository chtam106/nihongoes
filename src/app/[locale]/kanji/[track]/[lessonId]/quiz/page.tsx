import { ClientOnly } from '@/components/client-only';
import KanjiQuizPage from './_components/kanji-quiz.tsx';
import { kanjiQuizPath } from '@/constants/kanji/index.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { kanjiLessonParams } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return kanjiLessonParams();
}

export const generateMetadata = createMetadata((p) => kanjiQuizPath(p.track, p.lessonId));

export default function Page() {
  return (
    <ClientOnly>
      <KanjiQuizPage />
    </ClientOnly>
  );
}
