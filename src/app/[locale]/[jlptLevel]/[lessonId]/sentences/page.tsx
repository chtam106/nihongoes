import { ClientOnly } from '@/components/client-only';
import SentenceWritingPage from './_components/sentence-writing-page.tsx';
import { getSentenceWriting } from '@/constants/courses/sentence-writing.ts';
import { isCourseLevel, lessonSentencesPath } from '@/constants/courses/levels.ts';
import type { CourseLevel } from '@/constants/courses/types.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { courseLessonParams, type PageProps } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return courseLessonParams();
}

export const generateMetadata = createMetadata((p) =>
  lessonSentencesPath(p.jlptLevel as CourseLevel, p.lessonId)
);

export default async function Page({ params }: PageProps<{ jlptLevel: string; lessonId: string }>) {
  const { jlptLevel, lessonId } = await params;
  const level = jlptLevel as CourseLevel;
  const writing = isCourseLevel(jlptLevel) ? getSentenceWriting(level, lessonId) : undefined;

  return (
    <ClientOnly>
      <SentenceWritingPage level={level} writing={writing} />
    </ClientOnly>
  );
}
