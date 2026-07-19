import KanjiRadicalsPage from './_components/kanji-radicals.tsx';
import { KANJI_RADICALS_PATH } from '@/constants/kanji/index.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { localeParams } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata(KANJI_RADICALS_PATH);

export default function Page() {
  return <KanjiRadicalsPage />;
}
