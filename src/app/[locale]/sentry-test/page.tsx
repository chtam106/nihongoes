import SentryTestPage from './_components/sentry-test.tsx';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { localeParams } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata('/sentry-test');

export default function Page() {
  return <SentryTestPage />;
}
