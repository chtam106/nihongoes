'use client';

import { useState, type MouseEvent } from 'react';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import StyleOutlined from '@mui/icons-material/StyleOutlined';
import ViewListOutlined from '@mui/icons-material/ViewListOutlined';
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { ScrollButton } from '@/components/scroll-button';
import { VocabCardGrid } from '@/components/vocab-card-grid';
import { VocabFlashcards } from '@/components/vocab-flashcards';
import { allFlashcards } from '@/constants/flashcards/catalog.ts';
import type { DefaultCollection } from '@/constants/flashcards/collections.ts';
import { getAllCourseLessons, type Lesson } from '@/constants/courses/index.ts';
import { FlashcardDefaultsProvider } from '@/features/flashcards/flashcard-defaults.tsx';
import { SaveCardProvider } from '@/features/flashcards/save-card-gesture.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { useVocabIndexPreferences } from './use-vocab-index-preferences.ts';
import { VocabFlashcardGuideDialog } from './vocab-flashcard-guide-dialog.tsx';
import type { FlashcardFront, VocabIndexView } from './vocab-index-preferences.ts';
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
  const { prefs, setView, setFront, setRange, guideSeen, setGuideSeen } =
    useVocabIndexPreferences(lessonNumbers);
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

  const handleViewChange = (_event: MouseEvent<HTMLElement>, value: VocabIndexView | null) => {
    if (value) {
      setView(value);
    }
  };

  const handleFrontChange = (_event: MouseEvent<HTMLElement>, value: FlashcardFront | null) => {
    if (value) {
      setFront(value);
    }
  };

  return (
    <FlashcardDefaultsProvider defaults={defaults}>
      <SaveCardProvider>
        <PageContainer bottomGutter>
          <Stack className="no-print" spacing={prefs.view === 'flashcards' ? 2 : 4}>
            <Box>
              <Heading component="h1">{t('course.vocabIndexHeading')}</Heading>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                {t('course.vocabIndexIntro')}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {t('course.vocabIndexCount', { count: visibleCount })}
              </Typography>
              <TextField
                size="small"
                fullWidth
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
                sx={{ mt: 2, maxWidth: 480 }}
              />
              <Box
                sx={{
                  mt: 2,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  columnGap: 1.5,
                  rowGap: 1.5
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ order: { xs: 3, md: 0 }, flexBasis: '100%' }}
                >
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <InputLabel id="vocab-index-from-label">
                      {t('course.vocabIndexFrom')}
                    </InputLabel>
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
                  <FormControl size="small" sx={{ minWidth: 120 }}>
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
                <ToggleButtonGroup
                  exclusive
                  color="primary"
                  size="small"
                  value={prefs.view}
                  onChange={handleViewChange}
                  aria-label={t('course.vocabIndexView')}
                  sx={{ order: 1 }}
                >
                  <ToggleButton value="list">
                    <ViewListOutlined sx={{ mr: 1 }} />
                    {t('course.vocabIndexViewList')}
                  </ToggleButton>
                  <ToggleButton value="flashcards">
                    <StyleOutlined sx={{ mr: 1 }} />
                    {t('course.vocabIndexViewFlashcards')}
                  </ToggleButton>
                </ToggleButtonGroup>
                {prefs.view === 'flashcards' && (
                  <ToggleButtonGroup
                    exclusive
                    color="primary"
                    size="small"
                    value={prefs.front}
                    onChange={handleFrontChange}
                    aria-label={t('course.vocabIndexFlashcardsFront')}
                    sx={{ order: 2, width: '100%', justifyContent: 'center' }}
                  >
                    <ToggleButton value="ja">
                      {t('course.vocabIndexFlashcardsFrontWord')}
                    </ToggleButton>
                    <ToggleButton value="meaning">
                      {t('course.vocabIndexFlashcardsFrontMeaning')}
                    </ToggleButton>
                  </ToggleButtonGroup>
                )}
              </Box>
            </Box>

            {visibleCount === 0 && (
              <Typography variant="body1" color="text.secondary">
                {t('course.vocabIndexNoMatch')}
              </Typography>
            )}
            {prefs.view === 'list' && <VocabCardGrid cards={visibleCards} locale={locale} />}
            {prefs.view === 'flashcards' && visibleCount > 0 && (
              <VocabFlashcards
                key={`${prefs.from}:${prefs.to}:${locale}:${visibleCount}`}
                cards={visibleCards}
                locale={locale}
                front={prefs.front}
              />
            )}
          </Stack>

          <VocabFlashcardGuideDialog
            open={prefs.view === 'flashcards' && !guideSeen}
            onClose={() => setGuideSeen(true)}
          />

          <VocabPrintSheets items={visibleItems} locale={locale} />

          <ScrollButton />
        </PageContainer>
      </SaveCardProvider>
    </FlashcardDefaultsProvider>
  );
}

export default VocabIndexPage;
