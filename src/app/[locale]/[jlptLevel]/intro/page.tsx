import { notFound } from 'next/navigation';
import { N5IntroPage } from '@/features/course/intro';
import { courseIntroPath, isCourseLevel } from '@/constants/courses/levels.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { primePageLocale } from '@/i18n/server.ts';
import { courseIntroParams, type PageProps } from '@/i18n/route-helpers.ts';
import type { CourseLevel } from '@/constants/courses/types.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return courseIntroParams();
}

export const generateMetadata = createMetadata((p) => courseIntroPath(p.jlptLevel as CourseLevel));

export default async function Page({ params }: PageProps<{ jlptLevel: string }>) {
  await primePageLocale(params);
  const { jlptLevel } = await params;

  if (!isCourseLevel(jlptLevel) || jlptLevel !== 'n5') {
    notFound();
  }

  return <N5IntroPage />;
}
