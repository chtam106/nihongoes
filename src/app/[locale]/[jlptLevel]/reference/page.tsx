import { notFound } from 'next/navigation';
import { N5ReferencePage } from '@/features/course/reference';
import { courseReferencePath, isCourseLevel } from '@/constants/courses/levels.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { primePageLocale } from '@/i18n/server.ts';
import { courseReferenceParams, type PageProps } from '@/i18n/route-helpers.ts';
import type { CourseLevel } from '@/constants/courses/types.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return courseReferenceParams();
}

export const generateMetadata = createMetadata((p) =>
  courseReferencePath(p.jlptLevel as CourseLevel)
);

export default async function Page({ params }: PageProps<{ jlptLevel: string }>) {
  await primePageLocale(params);
  const { jlptLevel } = await params;

  if (!isCourseLevel(jlptLevel) || jlptLevel !== 'n5') {
    notFound();
  }

  return <N5ReferencePage />;
}
