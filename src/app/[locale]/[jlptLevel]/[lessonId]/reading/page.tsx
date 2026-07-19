import type { Metadata } from 'next';
import { ClientOnly } from '@/components/client-only';
import ReadingPage from './_components/reading-page.tsx';
import { lessonReadingPath } from '@/constants/courses/levels.ts';
import type { CourseLevel } from '@/constants/courses/types.ts';
import { getSeoMetadata } from '@/i18n/seo-meta.ts';
import { courseReadingParams, toLocale } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return courseReadingParams();
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; jlptLevel: string; lessonId: string }>;
}): Promise<Metadata> {
  const { locale, jlptLevel, lessonId } = await params;

  return getSeoMetadata(lessonReadingPath(jlptLevel as CourseLevel, lessonId), toLocale(locale));
}

export default async function Page({ params }: { params: Promise<{ jlptLevel: string }> }) {
  const { jlptLevel } = await params;

  return (
    <ClientOnly>
      <ReadingPage level={jlptLevel as CourseLevel} />
    </ClientOnly>
  );
}
