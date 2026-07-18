import type { Metadata } from 'next';
import CoursePage from '@/features/course/course-page';
import { coursePath } from '@/constants/courses/levels.ts';
import type { CourseLevel } from '@/constants/courses/types.ts';
import { getSeoMetadata } from '@/i18n/seo-meta.ts';
import { courseLevelParams, toLocale } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return courseLevelParams();
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string; jlptLevel: string }>;
}): Promise<Metadata> {
  const { lang, jlptLevel } = await params;

  return getSeoMetadata(coursePath(jlptLevel as CourseLevel), toLocale(lang));
}

export default async function Page({ params }: { params: Promise<{ jlptLevel: string }> }) {
  const { jlptLevel } = await params;

  return <CoursePage level={jlptLevel as CourseLevel} />;
}
