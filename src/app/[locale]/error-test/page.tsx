import ErrorTestPage from './_components/error-test.tsx';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { localeParams } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata('/error-test');

export default function Page() {
  return <ErrorTestPage />;
}
