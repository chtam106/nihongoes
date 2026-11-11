import { getAllCourseLessons } from '@/constants/courses/index.ts';
import { lessonSentencesPath } from '@/constants/courses/levels.ts';
import { redirect } from '@/i18n/navigation.tsx';
import { localeParams, type PageProps } from '@/i18n/route-helpers.ts';
import { primePageLocale } from '@/i18n/server.ts';

export const dynamicParams = false;

export function generateStaticParams() {
  return localeParams;
}

type SentencesRedirectProps = PageProps & {
  searchParams: Promise<{ lesson?: string | string[] }>;
};

/** Old shared URL. The exercise now lives on each lesson. */
export default async function Page({ params, searchParams }: SentencesRedirectProps) {
  const locale = await primePageLocale(params);
  const query = await searchParams;
  const raw = Array.isArray(query.lesson) ? query.lesson[0] : query.lesson;
  const number = Number(raw);
  const entries = getAllCourseLessons();
  const match = entries.find((entry) => entry.lesson.number === number) ?? entries[0];

  redirect({
    href: lessonSentencesPath(match.level, match.lesson.id),
    locale
  });
}
