'use client';

import { useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import { Box, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { PageContainer } from '@/components/page-container';
import { QuizProgressBar, type QuizSegmentResult } from '@/components/quiz-progress-bar';
import type { QuizMiss } from '@/components/quiz-miss-list';
import { getLesson } from '@/constants/courses/index.ts';
import type {
  CourseLevel,
  Lesson,
  LessonSentenceWriting,
  SentenceWritingItem
} from '@/types/course.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { usePersistentState } from '@/utils/use-persistent-state.ts';
import { LessonNotFound, LessonQuizHeader, ResultScreen } from '@/features/course/shared';
import { SentenceWritingPrompt } from './sentence-writing-prompt.tsx';
import {
  defaultSentenceWritingPreferences,
  sanitizeSentenceWritingPreferences,
  SENTENCE_WRITING_STORAGE_KEY,
  type SentenceAnswerMode
} from './sentence-writing-preferences.ts';

type SentenceWritingExerciseProps = {
  level: CourseLevel;
  lesson: Lesson;
  writing: LessonSentenceWriting;
};

function SentenceWritingExercise({ level, lesson, writing }: SentenceWritingExerciseProps) {
  const { locale, t } = useTranslation();
  const [prefs, setPrefs] = usePersistentState(
    SENTENCE_WRITING_STORAGE_KEY,
    defaultSentenceWritingPreferences(),
    sanitizeSentenceWritingPreferences
  );
  const items = useMemo(() => {
    const byPattern = new Map(writing.grammar.map((group) => [group.pattern, group]));
    const grammarItems = lesson.grammar.flatMap(
      (point) => byPattern.get(point.pattern)?.items ?? []
    );

    return [...grammarItems, ...writing.phrases];
  }, [lesson, writing]);
  // null = the whole lesson; a list = a retry round of the missed sentences.
  const [round, setRound] = useState<SentenceWritingItem[] | null>(null);
  const [missedItems, setMissedItems] = useState<SentenceWritingItem[]>([]);
  const active = round ?? items;
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<QuizSegmentResult[]>([]);
  const [misses, setMisses] = useState<QuizMiss[]>([]);
  const total = active.length;
  const finished = total > 0 && index >= total;
  const item = active[index];
  const score = results.filter((result) => result === 'correct').length;

  const handleGrade = (correct: boolean) => {
    setResults((previous) => [...previous, correct ? 'correct' : 'incorrect']);

    if (!correct) {
      setMissedItems((previous) => [...previous, item]);
      setMisses((previous) => [
        ...previous,
        {
          id: `sentence-${index}`,
          prompt: [{ text: item.prompt[locale] }],
          answer: { text: item.jp, ruby: item.ruby, japanese: true }
        }
      ]);
    }
    setIndex((previous) => previous + 1);
  };

  const startRound = (next: SentenceWritingItem[] | null) => {
    setRound(next);
    setMissedItems([]);
    setIndex(0);
    setResults([]);
    setMisses([]);
  };
  const handleRetry = () => startRound(null);
  const handleRetryMisses = () => startRound(missedItems);

  return (
    <PageContainer>
      <Stack spacing={3}>
        <LessonQuizHeader level={level} lesson={lesson} section="sentences" />
        {!finished && (
          <ToggleButtonGroup
            exclusive
            size="small"
            color="primary"
            value={prefs.mode}
            onChange={(_event, mode: SentenceAnswerMode | null) => {
              if (mode) {
                setPrefs({ mode });
              }
            }}
            aria-label={t('course.sentenceWritingMode')}
            sx={{ alignSelf: 'center', '& .MuiToggleButton-root': { minWidth: 140 } }}
          >
            <ToggleButton value="hand">{t('course.sentenceWritingModeHand')}</ToggleButton>
            <ToggleButton value="type">{t('course.sentenceWritingModeType')}</ToggleButton>
          </ToggleButtonGroup>
        )}
        {finished && (
          <ResultScreen
            score={score}
            total={total}
            misses={misses}
            missesTitle={t('course.sentenceWritingMisses')}
            onRetry={handleRetry}
            onRetryMisses={handleRetryMisses}
          />
        )}
        {!finished && item && (
          <>
            <Box>
              <QuizProgressBar
                total={total}
                current={index}
                results={results}
                label={t('course.questionProgress', { current: index + 1, total })}
              />
            </Box>
            <SentenceWritingPrompt
              key={`item-${index}`}
              item={item}
              prompt={item.prompt[locale]}
              showInput={prefs.mode === 'type'}
              onGrade={handleGrade}
            />
          </>
        )}
      </Stack>
    </PageContainer>
  );
}

type SentenceWritingPageProps = {
  level: CourseLevel;
  writing?: LessonSentenceWriting;
};

function SentenceWritingPage({ level, writing }: SentenceWritingPageProps) {
  const { lessonId } = useParams<{ lessonId: string }>();
  const lesson = lessonId ? getLesson(level, lessonId) : undefined;

  if (!lesson || !writing) {
    return <LessonNotFound level={level} />;
  }

  return (
    <SentenceWritingExercise
      key={`${level}:${lesson.id}`}
      level={level}
      lesson={lesson}
      writing={writing}
    />
  );
}

export default SentenceWritingPage;
