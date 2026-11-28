'use client';

import { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Button, Stack, Typography } from '@mui/material';
import { KanjiPracticeHeader } from '@/app/[locale]/kanji/[track]/[lessonId]/_components/kanji-practice-header';
import { PageContainer } from '@/components/page-container';
import { SpeakableSurface } from '@/components/speakable-surface';
import { TracingCanvas } from '@/components/tracing-canvas';
import { useTranslation } from '@/i18n/use-translation.ts';
import type { Bilingual, KanjiLesson } from '@/constants/kanji/index.ts';

type KanjiWritingProps = {
  trackSlug: string;
  trackName: Bilingual;
  lesson: KanjiLesson;
};

function KanjiWriting({ trackSlug, trackName, lesson }: KanjiWritingProps) {
  const { locale, t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [showGuide, setShowGuide] = useState(true);

  const current = lesson.kanji[index]!;
  const speechText = current.onyomi[0] ?? (current.kunyomi[0] ?? current.char).replace('.', '');

  return (
    <PageContainer>
      <Stack spacing={3}>
        <KanjiPracticeHeader
          trackSlug={trackSlug}
          trackName={trackName}
          lesson={lesson}
          practice={t('kanji.writing')}
        />

        <Box sx={{ width: '100%', maxWidth: { xs: '100%', sm: 380, md: 420 }, mx: 'auto' }}>
          <Stack spacing={2}>
            {/* The lesson's kanji in a row: one tap to jump to any of them. */}
            <Box
              role="group"
              aria-label={t('kanji.writingKanji')}
              sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}
            >
              {lesson.kanji.map((entry, entryIndex) => {
                const selected = entryIndex === index;

                return (
                  <Button
                    key={entry.char}
                    lang="ja"
                    variant={selected ? 'contained' : 'outlined'}
                    aria-pressed={selected}
                    aria-label={`${entry.char} - ${entry.meaning[locale]}`}
                    onClick={() => setIndex(entryIndex)}
                    sx={{ minWidth: 48, width: 48, height: 48, p: 0, fontSize: '1.4rem' }}
                  >
                    {entry.char}
                  </Button>
                );
              })}
            </Box>

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

type KanjiWritingPageProps = {
  trackSlug: string;
  trackName: Bilingual;
  lesson: KanjiLesson;
};

function KanjiWritingPage({ trackSlug, trackName, lesson }: KanjiWritingPageProps) {
  return (
    <KanjiWriting
      key={`${trackSlug}:${lesson.id}`}
      trackSlug={trackSlug}
      trackName={trackName}
      lesson={lesson}
    />
  );
}

export default KanjiWritingPage;
