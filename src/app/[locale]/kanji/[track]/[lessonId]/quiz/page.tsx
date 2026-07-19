import type { Metadata } from 'next';
import { ClientOnly } from '@/components/client-only';
import KanjiQuizPage from './_components/kanji-quiz.tsx';
import { kanjiQuizPath } from '@/constants/kanji/index.ts';
import { getSeoMetadata } from '@/i18n/seo-meta.ts';
import { kanjiLessonParams, toLocale } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return kanjiLessonParams();
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; track: string; lessonId: string }>;
}): Promise<Metadata> {
  const { locale, track, lessonId } = await params;

  return getSeoMetadata(kanjiQuizPath(track, lessonId), toLocale(locale));
}

export default function Page() {
  return (
    <ClientOnly>
      <KanjiQuizPage />
    </ClientOnly>
  );
}
