import { notFound } from 'next/navigation';
import { ClientOnly } from '@/components/client-only';
import KanjiWritingPage from './_components/kanji-writing.tsx';
import { kanjiWritingPath } from '@/constants/kanji/index.ts';
import { getKanjiLesson, getKanjiTrack } from '@/constants/kanji/tracks.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { primePageLocale } from '@/i18n/server.ts';
import { kanjiLessonParams, type PageProps } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return kanjiLessonParams();
}

export const generateMetadata = createMetadata((p) => kanjiWritingPath(p.track, p.lessonId));

export default async function Page({ params }: PageProps<{ track: string; lessonId: string }>) {
  await primePageLocale(params);
  const { track: trackSlug, lessonId } = await params;
  const track = getKanjiTrack(trackSlug);
  const lesson = track ? getKanjiLesson(track.slug, lessonId) : undefined;

  if (!track || !lesson) {
    notFound();
  }

  return (
    <ClientOnly>
      <KanjiWritingPage trackSlug={track.slug} trackName={track.name} lesson={lesson} />
    </ClientOnly>
  );
}
