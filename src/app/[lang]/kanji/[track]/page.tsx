import type { Metadata } from 'next';
import KanjiTrackPage from './_components/kanji-track.tsx';
import { kanjiTrackPath } from '@/constants/kanji/index.ts';
import { getSeoMetadata } from '@/i18n/seo-meta.ts';
import { kanjiTrackParams, toLocale } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return kanjiTrackParams();
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string; track: string }>;
}): Promise<Metadata> {
  const { lang, track } = await params;

  return getSeoMetadata(kanjiTrackPath(track), toLocale(lang));
}

export default function Page() {
  return <KanjiTrackPage />;
}
