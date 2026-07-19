import { ClientOnly } from '@/components/client-only';
import GrammarPage from './_components/grammar-page.tsx';
import { lessonGrammarPath } from '@/constants/courses/levels.ts';
import type { CourseLevel } from '@/constants/courses/types.ts';
import { createMetadata } from '@/i18n/seo-meta.ts';
import { courseGrammarParams, type PageProps } from '@/i18n/route-helpers.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return courseGrammarParams();
}

export const generateMetadata = createMetadata((p) =>
  lessonGrammarPath(p.jlptLevel as CourseLevel, p.lessonId)
);

export default async function Page({ params }: PageProps<{ jlptLevel: string }>) {
  const { jlptLevel } = await params;

  return (
    <ClientOnly>
      <GrammarPage level={jlptLevel as CourseLevel} />
    </ClientOnly>
  );
}
