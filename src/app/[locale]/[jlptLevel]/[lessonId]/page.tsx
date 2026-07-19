import type { Metadata } from 'next';
import LessonPage from './_components/lesson-page.tsx';
import { lessonPath } from '@/constants/courses/levels.ts';
import type { CourseLevel } from '@/constants/courses/types.ts';
import { getSeoMetadata } from '@/i18n/seo-meta.ts';
import { courseLessonParams, toLocale } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return courseLessonParams();
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; jlptLevel: string; lessonId: string }>;
}): Promise<Metadata> {
  const { locale, jlptLevel, lessonId } = await params;

  return getSeoMetadata(lessonPath(jlptLevel as CourseLevel, lessonId), toLocale(locale));
}

export default async function Page({ params }: { params: Promise<{ jlptLevel: string }> }) {
  const { jlptLevel } = await params;

  return <LessonPage level={jlptLevel as CourseLevel} />;
}
