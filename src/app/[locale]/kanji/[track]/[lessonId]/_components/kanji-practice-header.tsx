'use client';

import { PageBreadcrumb } from '@/components/page-breadcrumb';
import {
  kanjiLessonPath,
  kanjiTrackPath,
  type Bilingual,
  type KanjiLesson
} from '@/constants/kanji/index.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

type KanjiPracticeHeaderProps = {
  trackSlug: string;
  trackName: Bilingual;
  lesson: KanjiLesson;
  practice: string;
};

/**
 * Header for a kanji quiz or writing page. A normal-size breadcrumb
 * (Kanji lớp 1 / Bài N) sits above the practice-name heading.
 */
export function KanjiPracticeHeader({
  trackSlug,
  trackName,
  lesson,
  practice
}: KanjiPracticeHeaderProps) {
  const { locale, t } = useTranslation();

  return (
    <PageBreadcrumb
      title={practice}
      items={[
        { label: trackName[locale], to: kanjiTrackPath(trackSlug) },
        {
          label: t('kanji.lessonLabel', { number: lesson.number }),
          to: kanjiLessonPath(trackSlug, lesson.id)
        }
      ]}
    />
  );
}
