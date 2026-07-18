import type { Metadata } from 'next';
import KanjiHubPage from '@/features/kanji/index.tsx';
import { KANJI_BASE_PATH } from '@/constants/kanji/index.ts';
import { getSeoMetadata } from '@/i18n/seo-meta.ts';
import { langParams, toLocale } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return langParams;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return getSeoMetadata(KANJI_BASE_PATH, toLocale(lang));
}

export default function Page() {
  return <KanjiHubPage />;
}
