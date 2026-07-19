import type { Metadata } from 'next';
import { ClientOnly } from '@/components/client-only';
import ListenExercisePage from './_components/listen-exercise.tsx';
import { getSeoMetadata } from '@/i18n/seo-meta.ts';
import { localeParams, toLocale } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return getSeoMetadata('/alphabet/exercise/listen', toLocale(locale));
}

export default function Page() {
  return (
    <ClientOnly>
      <ListenExercisePage />
    </ClientOnly>
  );
}
