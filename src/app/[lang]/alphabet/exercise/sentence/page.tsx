import type { Metadata } from 'next';
import { ClientOnly } from '@/components/client-only';
import SentenceExercisePage from './_components/sentence-exercise.tsx';
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

  return getSeoMetadata('/alphabet/exercise/sentence', toLocale(lang));
}

export default function Page() {
  return (
    <ClientOnly>
      <SentenceExercisePage />
    </ClientOnly>
  );
}
