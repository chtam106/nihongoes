import { ClientOnly } from '@/components/client-only';
import ReadingPage from './_components/reading-page.tsx';
import { lessonReadingPath } from '@/constants/courses/levels.ts';
import type { CourseLevel } from '@/constants/courses/types.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { courseReadingParams, type PageProps } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return courseReadingParams();
}

export const generateMetadata = createMetadata((p) =>
  lessonReadingPath(p.jlptLevel as CourseLevel, p.lessonId)
);

export default async function Page({ params }: PageProps<{ jlptLevel: string }>) {
  const { jlptLevel } = await params;

  return (
    <ClientOnly>
      <ReadingPage level={jlptLevel as CourseLevel} />
    </ClientOnly>
  );
}
