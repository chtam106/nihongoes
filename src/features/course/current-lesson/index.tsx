'use client';

import PlayCircleOutlineOutlined from '@mui/icons-material/PlayCircleOutlineOutlined';
import { Chip, Stack } from '@mui/material';
import { LinkRow } from '@/components/link-row';
import { useTranslation } from '@/i18n/use-translation.ts';
import {
  latestLessonPerKind,
  useCurrentLessons,
  useTrackCurrentLesson,
  type CurrentLesson,
  type LessonTrackKey,
  type TrackedLesson
} from './store.ts';

export { kanjiTrackKey, latestLessonPerKind, useCurrentLessons } from './store.ts';

type ContinueLessonRowProps = {
  entry: CurrentLesson;
};

function ContinueLessonRow({ entry }: ContinueLessonRowProps) {
  const { t, locale } = useTranslation();

  return (
    <LinkRow
      icon={<PlayCircleOutlineOutlined />}
      title={t('course.continueTitle', { course: entry.course[locale] })}
      subtitle={`${t('course.lessonLabel', { number: entry.number })}: ${entry.title[locale]}`}
      to={entry.path}
      highlight
    />
  );
}

type ContinueLessonPanelProps = {
  /**
   * Only this course or kanji track. When omitted: the latest JLPT lesson and
   * the latest kanji lesson, as two separate rows.
   */
  trackKey?: LessonTrackKey;
};

/**
 * "Continue" rows linking to the lesson last opened in each JLPT course and
 * kanji track. Renders nothing until a lesson has been opened.
 */
export function ContinueLessonPanel({ trackKey }: ContinueLessonPanelProps) {
  const store = useCurrentLessons();
  const entries = trackKey
    ? [store[trackKey]].filter((entry): entry is CurrentLesson => entry !== undefined)
    : latestLessonPerKind(store);

  if (entries.length === 0) {
    return null;
  }

  return (
    <Stack spacing={1}>
      {entries.map((entry) => (
        <ContinueLessonRow key={entry.trackKey} entry={entry} />
      ))}
    </Stack>
  );
}

/** Renders nothing; marks the lesson as the one being studied in its track. */
export function TrackCurrentLesson(props: TrackedLesson) {
  useTrackCurrentLesson(props);

  return null;
}

type CurrentLessonBadgeProps = {
  trackKey: LessonTrackKey;
  lessonId: string;
};

/** A small "Studying" chip on the lesson card of the current lesson. */
export function CurrentLessonBadge({ trackKey, lessonId }: CurrentLessonBadgeProps) {
  const { t } = useTranslation();
  const store = useCurrentLessons();

  if (store[trackKey]?.lessonId !== lessonId) {
    return null;
  }

  return (
    <Chip
      label={t('course.currentLessonBadge')}
      color="primary"
      size="small"
      variant="outlined"
      sx={{ flexShrink: 0 }}
    />
  );
}
