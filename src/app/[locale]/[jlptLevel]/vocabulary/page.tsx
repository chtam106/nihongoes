import { courseVocabularyPath } from '@/constants/courses/levels.ts';
import type { CourseLevel } from '@/constants/courses/types.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { courseLevelParams, type PageProps } from '@/i18n/route-helpers.ts';
import VocabIndexPage from './_components/vocab-index-page.tsx';

export const dynamicParams = false;

export function generateStaticParams() {
  return courseLevelParams();
}

export const generateMetadata = createMetadata((p) =>
  courseVocabularyPath(p.jlptLevel as CourseLevel)
);

export default async function Page({ params }: PageProps<{ jlptLevel: string }>) {
  const { jlptLevel } = await params;

  return <VocabIndexPage level={jlptLevel as CourseLevel} />;
}
