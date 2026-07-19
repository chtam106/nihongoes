import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import ExerciseHubPage from '@/features/alphabet/exercise/index.tsx';
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

  return getSeoMetadata('/alphabet/exercise', toLocale(lang));
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  setRequestLocale(toLocale(lang));

  return <ExerciseHubPage />;
}
