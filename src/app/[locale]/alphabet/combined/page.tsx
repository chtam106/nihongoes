import { createMetadata } from '@/i18n/seo-meta.ts';
import { localeParams } from '@/i18n/route-helpers.ts';
import { CombinedChart } from './_components/combined-chart.tsx';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata('/alphabet/combined');

export default function Page() {
  return <CombinedChart />;
}
