import LessonPage from './_components/lesson-page.tsx';
import { lessonPath } from '@/constants/courses/levels.ts';
import type { CourseLevel } from '@/constants/courses/types.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { courseLessonParams } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return courseLessonParams();
}

export const generateMetadata = createMetadata((p) =>
  lessonPath(p.jlptLevel as CourseLevel, p.lessonId)
);

export default async function Page({ params }: { params: Promise<{ jlptLevel: string }> }) {
  const { jlptLevel } = await params;

  return <LessonPage level={jlptLevel as CourseLevel} />;
}
