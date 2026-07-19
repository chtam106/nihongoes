import type { Metadata } from 'next';
import { ClientOnly } from '@/components/client-only';
import WritingPage from './_components/writing-page.tsx';
import { lessonWritingPath } from '@/constants/courses/levels.ts';
import type { CourseLevel } from '@/constants/courses/types.ts';
import { getSeoMetadata } from '@/i18n/seo-meta.ts';
import { courseWritingParams, toLocale } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return courseWritingParams();
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; jlptLevel: string; lessonId: string }>;
}): Promise<Metadata> {
  const { locale, jlptLevel, lessonId } = await params;

  return getSeoMetadata(lessonWritingPath(jlptLevel as CourseLevel, lessonId), toLocale(locale));
}

export default async function Page({ params }: { params: Promise<{ jlptLevel: string }> }) {
  const { jlptLevel } = await params;

  return (
    <ClientOnly>
      <WritingPage level={jlptLevel as CourseLevel} />
    </ClientOnly>
  );
}
