import { ClientOnly } from '@/components/client-only';
import WritingPage from './_components/writing-page.tsx';
import { lessonWritingPath } from '@/constants/courses/levels.ts';
import type { CourseLevel } from '@/constants/courses/types.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { courseWritingParams } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return courseWritingParams();
}

export const generateMetadata = createMetadata((p) =>
  lessonWritingPath(p.jlptLevel as CourseLevel, p.lessonId)
);

export default async function Page({ params }: { params: Promise<{ jlptLevel: string }> }) {
  const { jlptLevel } = await params;

  return (
    <ClientOnly>
      <WritingPage level={jlptLevel as CourseLevel} />
    </ClientOnly>
  );
}
