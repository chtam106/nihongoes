import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent } from 'react';
import { useParams } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import { alpha } from '@mui/material/styles';
import {
  getLesson,
  lessonKanjiWords,
  type CourseLevel,
  type Lesson
} from '@/constants/courses/index.ts';
import { PageContainer } from '@/components/page-container';
import { SpeakButton } from '@/components/speak-button';
import { SpeakableSurface } from '@/components/speakable-surface';
import { useTranslation } from '@/i18n/use-translation.ts';
import { FONT_FAMILY_JP, loadJapaneseUiFont } from '@/theme/fonts.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';
import { LessonNotFound, LessonQuizHeader } from '@/pages/course/shared';

function configurePen(ctx: CanvasRenderingContext2D) {
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#101828';
}

type TracingCanvasProps = {
  guide: string;
  guideFontSize: string;
  showGuide: boolean;
  onToggleGuide: () => void;
  ariaLabel: string;
  clearLabel: string;
  undoLabel: string;
  toggleGuideLabel: string;
};

/**
 * A drawing sheet with the target word's kanji shown faintly behind a
 * transparent drawing canvas, so the user can trace it. The guide is a separate
 * DOM layer, so toggling it never disturbs the strokes already drawn.
 */
function TracingCanvas({
  guide,
  guideFontSize,
  showGuide,
  onToggleGuide,
  ariaLabel,
  clearLabel,
  undoLabel,
  toggleGuideLabel
}: TracingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);
  const historyRef = useRef<ImageData[]>([]);

  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const width = Math.max(1, canvas.clientWidth);
    const height = Math.max(1, canvas.clientHeight);
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    configurePen(ctx);

    historyRef.current = [];
  }, []);

  const undoStroke = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    const snapshot = historyRef.current.pop();
    if (!ctx || !snapshot) {
      return;
    }

    ctx.putImageData(snapshot, 0, 0);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    redrawCanvas();
    loadJapaneseUiFont();

    const observer = new ResizeObserver(() => redrawCanvas());
    observer.observe(canvas);

    return () => observer.disconnect();
  }, [redrawCanvas]);

  const getContext = useCallback(() => canvasRef.current?.getContext('2d'), []);

  const getPoint = useCallback((event: PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return null;
    }

    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }, []);

  const handlePointerDown = useCallback(
    (event: PointerEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      const ctx = getContext();
      const point = getPoint(event);

      if (!canvas || !ctx || !point) {
        return;
      }

      event.preventDefault();

      historyRef.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
      if (historyRef.current.length > 50) {
        historyRef.current.shift();
      }

      canvas.setPointerCapture(event.pointerId);
      isDrawingRef.current = true;
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
    },
    [getContext, getPoint]
  );

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLCanvasElement>) => {
      if (!isDrawingRef.current) {
        return;
      }

      const ctx = getContext();
      const point = getPoint(event);

      if (!ctx || !point) {
        return;
      }

      event.preventDefault();
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
    },
    [getContext, getPoint]
  );

  const handlePointerUp = useCallback(() => {
    if (!isDrawingRef.current) {
      return;
    }

    const ctx = getContext();
    if (!ctx) {
      return;
    }

    isDrawingRef.current = false;
    ctx.closePath();
  }, [getContext]);

  return (
    <Box sx={[elevatedSurfaceSx, { width: '100%', overflow: 'hidden' }]}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          px: 1,
          py: 0.5,
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.mode === 'light' ? 0.08 : 0.2)
        }}
      >
        <IconButton
          aria-label={toggleGuideLabel}
          aria-pressed={showGuide}
          size="small"
          onClick={onToggleGuide}
          sx={{ touchAction: 'manipulation' }}
        >
          {showGuide && <VisibilityOutlinedIcon sx={{ fontSize: 26 }} />}
          {!showGuide && <VisibilityOffOutlinedIcon sx={{ fontSize: 26 }} />}
        </IconButton>
        <IconButton
          aria-label={undoLabel}
          size="small"
          onClick={undoStroke}
          sx={{ touchAction: 'manipulation' }}
        >
          <UndoOutlinedIcon sx={{ fontSize: 26 }} />
        </IconButton>
        <IconButton
          aria-label={clearLabel}
          size="small"
          onClick={redrawCanvas}
          sx={{ touchAction: 'manipulation' }}
        >
          <CleaningServicesOutlinedIcon sx={{ fontSize: 26, transform: 'rotate(30deg)' }} />
        </IconButton>
      </Stack>
      <Box sx={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', bgcolor: '#ffffff' }}>
        <Box
          aria-hidden
          lang="ja"
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: FONT_FAMILY_JP,
            fontSize: guideFontSize,
            lineHeight: 1,
            color: 'rgba(16, 24, 40, 0.14)',
            userSelect: 'none',
            pointerEvents: 'none',
            visibility: showGuide ? 'visible' : 'hidden'
          }}
        >
          {guide}
        </Box>
        <Box
          component="canvas"
          ref={canvasRef}
          role="img"
          aria-label={ariaLabel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerUp}
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'block',
            width: '100%',
            height: '100%',
            touchAction: 'none'
          }}
        />
      </Box>
    </Box>
  );
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

  const guide = current.kanji ?? current.kana;
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
