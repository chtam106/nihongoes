import { routes } from '@/constants/routes.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { localeParams } from '@/i18n/route-helpers.ts';
import FlashcardDrivePage from './_components/flashcard-drive-page.tsx';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

export const generateMetadata = createMetadata(routes.flashcardDrive);

export default function Page() {
  return <FlashcardDrivePage />;
}
