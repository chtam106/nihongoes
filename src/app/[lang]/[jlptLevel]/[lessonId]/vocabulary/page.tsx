import type { Metadata } from 'next';
import { ClientOnly } from '@/components/client-only';
import ExercisePage from '@/features/course/exercise-page';
import { lessonVocabularyPath } from '@/constants/courses/levels.ts';
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
  params: Promise<{ lang: string; jlptLevel: string; lessonId: string }>;
}): Promise<Metadata> {
  const { lang, jlptLevel, lessonId } = await params;

  return getSeoMetadata(lessonVocabularyPath(jlptLevel as CourseLevel, lessonId), toLocale(lang));
}

export default async function Page({ params }: { params: Promise<{ jlptLevel: string }> }) {
  const { jlptLevel } = await params;

  return (
    <ClientOnly>
      <ExercisePage level={jlptLevel as CourseLevel} />
    </ClientOnly>
  );
}
