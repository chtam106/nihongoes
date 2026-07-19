import type { Metadata } from 'next';
import HiraganaPage from '@/features/alphabet/hiragana/index.tsx';
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

  return getSeoMetadata('/alphabet/hiragana', toLocale(lang));
}

export default function Page() {
  return <HiraganaPage />;
}
