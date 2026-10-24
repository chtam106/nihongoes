'use client';

import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';
import { getAllCourseLessons } from '@/constants/courses/index.ts';
import { SENTENCES_PATH } from '@/constants/courses/levels.ts';
import { getSentenceWriting } from '@/constants/courses/sentence-writing.ts';
import { useRouter } from '@/i18n/navigation.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { usePersistentState } from '@/utils/use-persistent-state.ts';
import { SentenceWritingLessonLink } from './sentence-writing-lesson-link.tsx';
import { SentenceWritingPrompt } from './sentence-writing-prompt.tsx';
import {
  defaultSentenceWritingPreferences,
  parseSentenceWritingLessonParam,
  sanitizeSentenceWritingPreferences,
  SENTENCE_WRITING_LESSON_QUERY,
  SENTENCE_WRITING_STORAGE_KEY
} from './sentence-writing-preferences.ts';

function sentenceWritingHref(lessonNumber: number) {
  return `${SENTENCES_PATH}?${SENTENCE_WRITING_LESSON_QUERY}=${lessonNumber}`;
}

export function SentenceWritingPage() {
  const { locale, t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlSyncedRef = useRef(false);
  const entries = useMemo(
    () =>
      getAllCourseLessons().filter(({ level, lesson }) =>
        Boolean(getSentenceWriting(level, lesson.id))
      ),
    []
  );
  const lessonNumbers = useMemo(() => entries.map(({ lesson }) => lesson.number), [entries]);
  const fallbackLesson = lessonNumbers[0] ?? 1;
  const fallback = useMemo(() => defaultSentenceWritingPreferences(lessonNumbers), [lessonNumbers]);
  const sanitize = useCallback(
    (value: unknown) => sanitizeSentenceWritingPreferences(value, lessonNumbers),
    [lessonNumbers]
  );
  const [prefs, setPrefs] = usePersistentState(SENTENCE_WRITING_STORAGE_KEY, fallback, sanitize);

  const lessonParam = searchParams.get(SENTENCE_WRITING_LESSON_QUERY);
  const lessonFromUrl = parseSentenceWritingLessonParam(lessonParam, lessonNumbers);
  const activeLessonNumber = lessonFromUrl ?? prefs.lesson;

  useEffect(() => {
    if (urlSyncedRef.current || lessonNumbers.length === 0) {
      return;
    }

    urlSyncedRef.current = true;
    const target =
      lessonFromUrl ??
      parseSentenceWritingLessonParam(String(prefs.lesson), lessonNumbers) ??
      fallbackLesson;

    if (lessonParam === null || lessonFromUrl === null) {
      router.replace(sentenceWritingHref(target), { scroll: false });
    }
  }, [fallbackLesson, lessonFromUrl, lessonNumbers, lessonParam, prefs.lesson, router]);

  useEffect(() => {
    if (lessonFromUrl !== null && lessonFromUrl !== prefs.lesson) {
      setPrefs((previous) => ({ ...previous, lesson: lessonFromUrl }));
    }
  }, [lessonFromUrl, prefs.lesson, setPrefs]);

  const selected = useMemo(
    () => entries.find(({ lesson }) => lesson.number === activeLessonNumber) ?? entries[0],
    [activeLessonNumber, entries]
  );
  const writing = selected ? getSentenceWriting(selected.level, selected.lesson.id) : undefined;
  const items = useMemo(() => {
    if (!selected || !writing) {
      return [];
    }

    const byPattern = new Map(writing.grammar.map((group) => [group.pattern, group]));
    const grammarItems = selected.lesson.grammar.flatMap(
      (point) => byPattern.get(point.pattern)?.items ?? []
    );

    return [...grammarItems, ...writing.phrases];
  }, [selected, writing]);

  const handleLessonChange = (event: SelectChangeEvent<number>) => {
    const lesson = Number(event.target.value);
    setPrefs((previous) => ({ ...previous, lesson }));
    router.replace(sentenceWritingHref(lesson), { scroll: false });
  };

  const handleShowInputChange = (_event: unknown, checked: boolean) => {
    setPrefs((previous) => ({ ...previous, showInput: checked }));
  };

  return (
    <PageContainer bottomGutter>
      <Stack spacing={4}>
        <Box>
          <Heading component="h1">{t('course.sentenceWritingHeading')}</Heading>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            {t('course.sentenceWritingIntro')}
          </Typography>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ mt: 2, flexWrap: 'wrap', alignItems: 'center', rowGap: 1.5 }}
          >
            <FormControl size="small" sx={{ minWidth: 160 }}>
              <InputLabel id="sentence-writing-lesson-label">
                {t('course.sentenceWritingLesson')}
              </InputLabel>
              <Select<number>
                labelId="sentence-writing-lesson-label"
                value={selected?.lesson.number ?? fallbackLesson}
                label={t('course.sentenceWritingLesson')}
                onChange={handleLessonChange}
                MenuProps={{ slotProps: { paper: { sx: { maxHeight: 320 } } } }}
              >
                {entries.map(({ lesson }) => (
                  <MenuItem key={lesson.id} value={lesson.number}>
                    {t('course.lessonLabel', { number: lesson.number })}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControlLabel
              sx={{ mx: 0 }}
              control={
                <Checkbox
                  size="small"
                  checked={prefs.showInput}
                  onChange={handleShowInputChange}
                  aria-label={t('course.sentenceWritingShowInput')}
                />
              }
              label={t('course.sentenceWritingShowInput')}
            />
          </Stack>
        </Box>

        {selected && items.length > 0 && (
          <Stack key={`${selected.level}:${selected.lesson.id}`} spacing={1.5}>
            {items.map((item, index) => (
              <SentenceWritingPrompt
                key={`item-${index}`}
                item={item}
                index={index + 1}
                prompt={item.prompt[locale]}
                showInput={prefs.showInput}
              />
            ))}
          </Stack>
        )}
      </Stack>

      {selected && (
        <SentenceWritingLessonLink
          level={selected.level}
          lessonId={selected.lesson.id}
          lessonNumber={selected.lesson.number}
        />
      )}

      <ScrollToTopButton />
    </PageContainer>
  );
}

export default SentenceWritingPage;
