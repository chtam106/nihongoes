'use client';

import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import { Heading } from '@/components/heading';
import { HintText } from '@/components/hint-text';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { PageContainer } from '@/components/page-container';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';
import { VocabCardGrid } from '@/components/vocab-card-grid';
import {
  coursePath,
  getCourse,
  lessonPath,
  type CourseLevel,
  type Lesson
} from '@/constants/courses/index.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { VocabPrintSheets } from './vocab-print-sheets.tsx';

const ALL_LESSONS = 'all';

type VocabIndexPageProps = {
  level: CourseLevel;
};

function lessonWordCount(lesson: Lesson) {
  return lesson.vocab.length;
}

export function VocabIndexPage({ level }: VocabIndexPageProps) {
  const { locale, t } = useTranslation();
  const course = getCourse(level);
  const lessons = course.lessons.filter((lesson) => lessonWordCount(lesson) > 0);
  const [selectedLessonId, setSelectedLessonId] = useState<string>(ALL_LESSONS);
  const visibleItems = lessons
    .filter((lesson) => selectedLessonId === ALL_LESSONS || lesson.id === selectedLessonId)
    .flatMap((lesson) => lesson.vocab);
  const visibleCount = visibleItems.length;
  const lastLesson = course.lessons[course.lessons.length - 1];

  const handleLessonChange = (event: SelectChangeEvent<string>) => {
    setSelectedLessonId(event.target.value);
  };

  return (
    <PageContainer bottomGutter>
      <Stack className="no-print" spacing={4}>
        <Box>
          <Chip
            component={RouterLink}
            to={coursePath(level)}
            label={course.code}
            variant="outlined"
            clickable
            sx={{ mb: 1.5 }}
          />
          <Heading component="h1">{t('course.vocabIndexHeading')}</Heading>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            {t('course.vocabIndexIntro', { code: course.code })}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {t('course.vocabIndexCount', { count: visibleCount })}
          </Typography>
          <HintText sx={{ mt: 1.5 }}>{t('course.audioHint')}</HintText>
          <HintText sx={{ mt: 1 }}>{t('course.vocabIndexPrintHint')}</HintText>
          <FormControl size="small" sx={{ mt: 2, minWidth: 200, maxWidth: 280 }}>
            <InputLabel id="vocab-index-lesson-label">{t('course.vocabIndexFilter')}</InputLabel>
            <Select<string>
              labelId="vocab-index-lesson-label"
              value={selectedLessonId}
              label={t('course.vocabIndexFilter')}
              onChange={handleLessonChange}
              MenuProps={{ slotProps: { paper: { sx: { maxHeight: 320 } } } }}
            >
              <MenuItem value={ALL_LESSONS}>{t('course.vocabIndexAll')}</MenuItem>
              {lessons.map((lesson) => (
                <MenuItem key={lesson.id} value={lesson.id}>
                  {t('course.lessonLabel', { number: lesson.number })}: {lesson.title[locale]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <VocabCardGrid items={visibleItems} locale={locale} />

        {lastLesson && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button
              component={RouterLink}
              to={lessonPath(level, lastLesson.id)}
              startIcon={<ArrowBackIcon />}
              variant="text"
              sx={{ px: 0 }}
            >
              {t('course.previousLesson')}
            </Button>
          </Box>
        )}
      </Stack>

      <VocabPrintSheets items={visibleItems} locale={locale} />

      <ScrollToTopButton />
    </PageContainer>
  );
}

export default VocabIndexPage;
