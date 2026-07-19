import { ClientOnly } from '@/components/client-only';
import ListeningPage from './_components/listening-page.tsx';
import { lessonListeningPath } from '@/constants/courses/levels.ts';
import type { CourseLevel } from '@/constants/courses/types.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { courseLessonParams } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return courseLessonParams();
}

export const generateMetadata = createMetadata((p) =>
  lessonListeningPath(p.jlptLevel as CourseLevel, p.lessonId)
);

export default async function Page({ params }: { params: Promise<{ jlptLevel: string }> }) {
  const { jlptLevel } = await params;

  return (
    <ClientOnly>
      <ListeningPage level={jlptLevel as CourseLevel} />
    </ClientOnly>
  );
}
