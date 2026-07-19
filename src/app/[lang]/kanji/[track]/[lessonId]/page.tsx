import type { Metadata } from 'next';
import KanjiLessonPage from '@/features/kanji/lesson/index.tsx';
import { kanjiLessonPath } from '@/constants/kanji/index.ts';
import { getSeoMetadata } from '@/i18n/seo-meta.ts';
import { kanjiLessonParams, toLocale } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return kanjiLessonParams();
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string; track: string; lessonId: string }>;
}): Promise<Metadata> {
  const { lang, track, lessonId } = await params;

  return getSeoMetadata(kanjiLessonPath(track, lessonId), toLocale(lang));
}

export default function Page() {
  return <KanjiLessonPage />;
}
