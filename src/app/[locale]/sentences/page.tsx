import { Suspense } from 'react';
import { SENTENCES_PATH } from '@/constants/courses/levels.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { localeParams } from '@/i18n/route-helpers.ts';
import SentenceWritingPage from './_components/sentence-writing-page.tsx';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata(SENTENCES_PATH);

export default function Page() {
  return (
    <Suspense fallback={null}>
      <SentenceWritingPage />
    </Suspense>
  );
}
