import KanjiRadicalsPage from './_components/kanji-radicals.tsx';
import { KANJI_RADICALS_PATH } from '@/constants/kanji/index.ts';
import { computeRadicalUsage } from '@/constants/kanji/tracks.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { primePageLocale } from '@/i18n/server.ts';
import { localeParams, type PageProps } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata(KANJI_RADICALS_PATH);

export default async function Page({ params }: PageProps) {
  await primePageLocale(params);
  const usage = computeRadicalUsage();

  return <KanjiRadicalsPage usage={usage} />;
}
