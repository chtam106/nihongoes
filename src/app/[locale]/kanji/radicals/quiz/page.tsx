import RadicalQuizPage from './_components/radical-quiz.tsx';
import { ClientOnly } from '@/components/client-only';
import { KANJI_RADICALS_QUIZ_PATH } from '@/constants/kanji/index.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { primePageLocale } from '@/i18n/server.ts';
import { localeParams, type PageProps } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata(KANJI_RADICALS_QUIZ_PATH);

export default async function Page({ params }: PageProps) {
  await primePageLocale(params);

  return (
    <ClientOnly>
      <RadicalQuizPage />
    </ClientOnly>
  );
}
