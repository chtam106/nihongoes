import { ClientOnly } from '@/components/client-only';
import KanjiWritingPage from './_components/kanji-writing.tsx';
import { kanjiWritingPath } from '@/constants/kanji/index.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { kanjiLessonParams } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return kanjiLessonParams();
}

export const generateMetadata = createMetadata((p) => kanjiWritingPath(p.track, p.lessonId));

export default function Page() {
  return (
    <ClientOnly>
      <KanjiWritingPage />
    </ClientOnly>
  );
}
