import { useCallback, useEffect, useRef, type PointerEvent } from 'react';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Box, IconButton, Stack } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { FONT_FAMILY_JP, loadJapaneseUiFont } from '@/theme/fonts.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';

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
 * A drawing sheet with the target text's glyph shown faintly behind a
 * transparent drawing canvas, so the user can trace it. The guide is a separate
 * DOM layer, so toggling it never disturbs the strokes already drawn.
 */
export function TracingCanvas({
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
