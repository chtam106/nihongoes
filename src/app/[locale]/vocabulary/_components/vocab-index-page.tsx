'use client';

import { useState } from 'react';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { ScrollButton } from '@/components/scroll-button';
import { VocabCardGrid } from '@/components/vocab-card-grid';
import { allFlashcards } from '@/constants/flashcards/catalog.ts';
import type { DefaultCollection } from '@/constants/flashcards/collections.ts';
import { getAllCourseLessons, type Lesson } from '@/constants/courses/index.ts';
import { FlashcardDefaultsProvider } from '@/features/flashcards/flashcard-defaults.tsx';
import { SaveCardProvider } from '@/features/flashcards/save-card-gesture.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { useVocabIndexPreferences } from './use-vocab-index-preferences.ts';
import { VocabPrintSheets } from './vocab-print-sheets.tsx';

type VocabIndexPageProps = {
  defaults: readonly DefaultCollection[];
};

/** Lowercase, without Vietnamese tone marks, so "truong" finds "trường". */
function searchKey(text: string) {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
}

function lessonVocabItems(lesson: Lesson) {
  return [...lesson.vocab, ...(lesson.phrases ?? [])];
}

export function VocabIndexPage({ defaults }: VocabIndexPageProps) {
  const { locale, t } = useTranslation();
  const lessons = getAllCourseLessons()
    .map(({ lesson }) => lesson)
    .filter((lesson) => lessonVocabItems(lesson).length > 0);
  const lessonNumbers = lessons.map((lesson) => lesson.number);
  const { prefs, setRange } = useVocabIndexPreferences(lessonNumbers);
  const [query, setQuery] = useState('');
  const needle = searchKey(query.trim());
  // Search kana, kanji, romaji and both meanings, inside the From/To range.
  const visibleCards = allFlashcards().filter(
    (card) =>
      card.lessonNumber >= prefs.from &&
      card.lessonNumber <= prefs.to &&
      (!needle ||
        [
          card.item.kana,
          card.item.kanji ?? '',
          card.item.romaji,
          card.item.meaning.vi,
          card.item.meaning.en
        ].some((text) => searchKey(text).includes(needle)))
  );
  const visibleItems = visibleCards.map((card) => card.item);
  const visibleCount = visibleItems.length;
  const toOptions = lessons.filter((lesson) => lesson.number >= prefs.from);

  const handleFromChange = (event: SelectChangeEvent<number>) => {
    const from = Number(event.target.value);

    if (from > prefs.to) {
      setRange({ from, to: from });
      return;
    }

    setRange({ from, to: prefs.to });
  };

  const handleToChange = (event: SelectChangeEvent<number>) => {
    setRange({ from: prefs.from, to: Number(event.target.value) });
  };

  return (
    <FlashcardDefaultsProvider defaults={defaults}>
      <SaveCardProvider>
        <PageContainer bottomGutter>
          <Stack className="no-print" spacing={2}>
            <Box>
              <Heading component="h1">{t('course.vocabIndexHeading')}</Heading>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                {t('course.vocabIndexIntro')}
              </Typography>
            </Box>

            {/* Search and lesson range on one row from md; stacked on a phone. */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1.5 }}>
              <TextField
                size="small"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t('course.vocabIndexSearch')}
                aria-label={t('course.vocabIndexSearch')}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchOutlined />
                      </InputAdornment>
                    )
                  }
                }}
                sx={{ flex: { xs: '1 1 100%', md: '1 1 240px' } }}
              />
              <Stack
                direction="row"
                spacing={1.5}
                sx={{ flex: { xs: '1 1 100%', md: '0 0 auto' } }}
              >
                <FormControl size="small" sx={{ flex: { xs: 1, md: 'none' }, minWidth: 110 }}>
                  <InputLabel id="vocab-index-from-label">{t('course.vocabIndexFrom')}</InputLabel>
                  <Select<number>
                    labelId="vocab-index-from-label"
                    value={prefs.from}
                    label={t('course.vocabIndexFrom')}
                    onChange={handleFromChange}
                    MenuProps={{ slotProps: { paper: { sx: { maxHeight: 320 } } } }}
                  >
                    {lessons.map((lesson) => (
                      <MenuItem key={lesson.id} value={lesson.number}>
                        {t('course.lessonLabel', { number: lesson.number })}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl size="small" sx={{ flex: { xs: 1, md: 'none' }, minWidth: 110 }}>
                  <InputLabel id="vocab-index-to-label">{t('course.vocabIndexTo')}</InputLabel>
                  <Select<number>
                    labelId="vocab-index-to-label"
                    value={prefs.to}
                    label={t('course.vocabIndexTo')}
                    onChange={handleToChange}
                    MenuProps={{ slotProps: { paper: { sx: { maxHeight: 320 } } } }}
                  >
                    {toOptions.map((lesson) => (
                      <MenuItem key={lesson.id} value={lesson.number}>
                        {t('course.lessonLabel', { number: lesson.number })}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            </Box>

            {visibleCount > 0 && (
              <Typography variant="body1" color="text.secondary">
                {t('course.vocabIndexCount', { count: visibleCount })}
              </Typography>
            )}
            {visibleCount === 0 && (
              <Typography variant="body1" color="text.secondary">
                {t('course.vocabIndexNoMatch')}
              </Typography>
            )}
            {/* One block per lesson, headed by its number and title. */}
            {lessons.map((lesson) => {
              const cards = visibleCards.filter((card) => card.lessonNumber === lesson.number);

              if (cards.length === 0) {
                return null;
              }

              return (
                <Box component="section" key={lesson.id} sx={{ pt: 2 }}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ fontWeight: 600, mb: 1.5, display: 'flex', gap: 1, flexWrap: 'wrap' }}
                  >
                    {t('course.lessonLabel', { number: lesson.number })}: {lesson.title[locale]}
                    <Box component="span" sx={{ color: 'text.secondary', fontWeight: 400 }}>
                      ({cards.length})
                    </Box>
                  </Typography>
                  <VocabCardGrid cards={cards} locale={locale} />
                </Box>
              );
            })}
          </Stack>

          <VocabPrintSheets items={visibleItems} locale={locale} />

          <ScrollButton />
        </PageContainer>
      </SaveCardProvider>
    </FlashcardDefaultsProvider>
  );
}

export default VocabIndexPage;
