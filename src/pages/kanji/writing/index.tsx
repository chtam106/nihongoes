import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { SpeakableSurface } from '@/components/speakable-surface';
import { TracingCanvas } from '@/components/tracing-canvas';
import { useTranslation } from '@/i18n/use-translation.ts';
import {
  getKanjiLesson,
  getKanjiTrack,
  KANJI_BASE_PATH,
  kanjiLessonPath,
  type KanjiLesson
} from '@/constants/kanji/index.ts';

type KanjiWritingProps = {
  trackSlug: string;
  lesson: KanjiLesson;
};

function KanjiWriting({ trackSlug, lesson }: KanjiWritingProps) {
  const { locale, t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [showGuide, setShowGuide] = useState(true);

  const current = lesson.kanji[index]!;
  const speechText = current.onyomi[0] ?? (current.kunyomi[0] ?? current.char).replace('.', '');

  const handleSelect = (event: SelectChangeEvent<number>) => {
    setIndex(Number(event.target.value));
  };

  return (
    <PageContainer>
      <Stack spacing={3}>
        <Box>
          <Box sx={{ mb: 1 }}>
            <Button
              component={RouterLink}
              to={kanjiLessonPath(trackSlug, lesson.id)}
              startIcon={<ArrowBackIcon />}
              variant="text"
              sx={{ px: 0 }}
            >
              {lesson.title[locale]}
            </Button>
          </Box>
          <Stack direction="row" spacing={1} useFlexGap sx={{ mb: 1, flexWrap: 'wrap' }}>
            <Chip
              label={t('kanji.lessonLabel', { number: lesson.number })}
              color="primary"
              variant="outlined"
              size="small"
              component={RouterLink}
              to={kanjiLessonPath(trackSlug, lesson.id)}
              clickable
            />
            <Chip label={t('kanji.writing')} variant="outlined" size="small" />
          </Stack>
          <Heading component="h1">{t('kanji.writing')}</Heading>
        </Box>

        <Box sx={{ width: '100%', maxWidth: { xs: '100%', sm: 380, md: 420 }, mx: 'auto' }}>
          <Stack spacing={2}>
            <FormControl fullWidth>
              <InputLabel id="kanji-writing-select-label">{t('kanji.writingKanji')}</InputLabel>
              <Select<number>
                labelId="kanji-writing-select-label"
                value={index}
                label={t('kanji.writingKanji')}
                onChange={handleSelect}
                renderValue={(value) => (
                  <Box component="span" lang="ja">
                    {lesson.kanji[value]?.char}
                  </Box>
                )}
              >
                {lesson.kanji.map((entry, entryIndex) => (
                  <MenuItem key={entry.char} value={entryIndex}>
                    <Box component="span" lang="ja" sx={{ fontWeight: 600, mr: 1 }}>
                      {entry.char}
                    </Box>
                    <Box component="span" sx={{ color: 'text.secondary' }}>
                      {entry.meaning[locale]}
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <SpeakableSurface text={speechText} sx={{ p: 1.5 }}>
              <Stack spacing={0.25} sx={{ alignItems: 'center', textAlign: 'center' }}>
                <Typography variant="h5" component="span" lang="ja" sx={{ fontWeight: 600 }}>
                  {current.char}
                </Typography>
                <Typography variant="body2">{current.meaning[locale]}</Typography>
              </Stack>
            </SpeakableSurface>

            <TracingCanvas
              key={`${current.char}:${index}`}
              guide={current.char}
              guideFontSize="min(72vw, 300px)"
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
                {t('exercise.strokeOrderPrevious')}
              </Button>
              <Button
                variant="outlined"
                fullWidth
                endIcon={<ChevronRightIcon />}
                disabled={index === lesson.kanji.length - 1}
                onClick={() =>
                  setIndex((previous) => Math.min(lesson.kanji.length - 1, previous + 1))
                }
              >
                {t('exercise.strokeOrderNext')}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </PageContainer>
  );
}

function KanjiWritingPage() {
  const { track: trackSlug, lessonId } = useParams<{ track: string; lessonId: string }>();
  const { t } = useTranslation();
  const track = trackSlug ? getKanjiTrack(trackSlug) : undefined;
  const lesson = track && lessonId ? getKanjiLesson(track.slug, lessonId) : undefined;

  if (!track || !lesson) {
    return (
      <PageContainer>
        <Heading component="h1" gutterBottom>
          {t('kanji.notFoundTitle')}
        </Heading>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {t('kanji.notFoundBody')}
        </Typography>
        <Button component={RouterLink} to={KANJI_BASE_PATH} variant="contained">
          {t('common.back')}
        </Button>
      </PageContainer>
    );
  }

  return <KanjiWriting key={`${track.slug}:${lesson.id}`} trackSlug={track.slug} lesson={lesson} />;
}

export default KanjiWritingPage;
