'use client';

import { useMemo, useState } from 'react';
import { useParams } from '@/i18n/navigation.tsx';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import {
  getLesson,
  lessonKanjiWords,
  type CourseLevel,
  type Lesson
} from '@/constants/courses/index.ts';
import { PageContainer } from '@/components/page-container';
import { SpeakButton } from '@/components/speak-button';
import { SpeakableSurface } from '@/components/speakable-surface';
import { TracingCanvas } from '@/components/tracing-canvas';
import { useTranslation } from '@/i18n/use-translation.ts';
import { LessonNotFound, LessonQuizHeader } from '@/features/course/shared';

// Matches anything that is NOT a CJK kanji (kana, 〜, punctuation, latin, etc.).
const NON_KANJI_RE = /[^\u4E00-\u9FFF]/g;

/** Keep only the kanji characters so the tracing sheet never shows kana or 〜. */
function kanjiOnly(text: string): string {
  return text.replace(NON_KANJI_RE, '');
}

type KanjiWritingProps = {
  level: CourseLevel;
  lesson: Lesson;
};

function KanjiWriting({ level, lesson }: KanjiWritingProps) {
  const { locale, t } = useTranslation();
  const words = useMemo(() => lessonKanjiWords(lesson), [lesson]);
  const [index, setIndex] = useState(0);
  const [showGuide, setShowGuide] = useState(true);

  const current = words[index];

  const handleSelect = (event: SelectChangeEvent<number>) => {
    setIndex(Number(event.target.value));
  };

  if (!current) {
    return (
      <PageContainer>
        <LessonQuizHeader level={level} lesson={lesson} section="writing" />
      </PageContainer>
    );
  }

  const guide = kanjiOnly(current.kanji ?? '') || current.kana;
  const guideFontSize = `min(${Math.round(72 / guide.length)}vw, ${Math.round(300 / guide.length)}px)`;
  const speechText = current.speech ?? current.kana;

  return (
    <PageContainer>
      <LessonQuizHeader level={level} lesson={lesson} section="writing" />

      <Box sx={{ width: '100%', maxWidth: { xs: '100%', sm: 380, md: 420 }, mx: 'auto', mt: 3 }}>
        <Stack spacing={2}>
          <FormControl fullWidth>
            <InputLabel id="writing-word-select-label">{t('course.writingWord')}</InputLabel>
            <Select<number>
              labelId="writing-word-select-label"
              value={index}
              label={t('course.writingWord')}
              onChange={handleSelect}
              renderValue={(value) => (
                <Box component="span" lang="ja">
                  {words[value]?.kanji}
                </Box>
              )}
            >
              {words.map((word, wordIndex) => (
                <MenuItem key={word.kanji} value={wordIndex}>
                  <Box component="span" lang="ja" sx={{ fontWeight: 600, mr: 1 }}>
                    {word.kanji}
                  </Box>
                  <Box component="span" sx={{ color: 'text.secondary' }}>
                    {word.meaning[locale]}
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <SpeakableSurface text={speechText} sx={{ p: 1.5 }}>
            <Stack spacing={0.5} sx={{ alignItems: 'center', textAlign: 'center' }}>
              <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                <Typography variant="subtitle1" component="span" lang="ja" sx={{ fontWeight: 600 }}>
                  {current.kanji}
                  <Box component="span" sx={{ color: 'text.secondary', fontWeight: 400, ml: 1 }}>
                    {current.kana}
                  </Box>
                </Typography>
                <SpeakButton text={speechText} />
              </Stack>
              <Typography variant="body2">{current.meaning[locale]}</Typography>
            </Stack>
          </SpeakableSurface>

          <TracingCanvas
            key={`${guide}:${index}`}
            guide={guide}
            guideFontSize={guideFontSize}
            showGuide={showGuide}
            onToggleGuide={() => setShowGuide((previous) => !previous)}
            ariaLabel={t('exercise.writingCanvasAria')}
            clearLabel={t('exercise.writingClear')}
            undoLabel={t('exercise.writingUndo')}
            toggleGuideLabel={t('course.writingToggleGuide')}
          />

          <Stack direction="row" spacing={1.5}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<ChevronLeftIcon />}
              disabled={index === 0}
              onClick={() => setIndex((previous) => Math.max(0, previous - 1))}
            >
              {t('course.writingPrevWord')}
            </Button>
            <Button
              variant="outlined"
              fullWidth
              endIcon={<ChevronRightIcon />}
              disabled={index === words.length - 1}
              onClick={() => setIndex((previous) => Math.min(words.length - 1, previous + 1))}
            >
              {t('course.writingNextWord')}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </PageContainer>
  );
}

type WritingPageProps = {
  level: CourseLevel;
};

function WritingPage({ level }: WritingPageProps) {
  const { lessonId } = useParams<{ lessonId: string }>();
  const lesson = lessonId ? getLesson(level, lessonId) : undefined;

  if (!lesson) {
    return <LessonNotFound level={level} />;
  }

  return <KanjiWriting key={`${level}:${lesson.id}`} level={level} lesson={lesson} />;
}

export default WritingPage;
