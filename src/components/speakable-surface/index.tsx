'use client';

import { useCallback, type ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';
import { Paper } from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';
import { formatJapaneseDisplay } from '@/utils/japanese-display.ts';
import { speakJapanese, useSpeechClickHandler, useSpeechSupported } from '@/utils/speech.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';

type SpeakableSurfaceProps = {
  /** Japanese text spoken when the whole surface is activated. */
  text: string;
  sx?: SxProps<Theme>;
  children: ReactNode;
};

/**
 * A card surface whose entire area plays the given Japanese text (click or
 * Enter/Space). Falls back to a plain elevated surface when speech is
 * unsupported. Pair with a `<SpeakButton>` inside for a visible affordance.
 */
export function SpeakableSurface({ text, sx, children }: SpeakableSurfaceProps) {
  const { t } = useTranslation();
  const canSpeak = useSpeechSupported();
  const spokenText = formatJapaneseDisplay(text);
  const sxOverrides = Array.isArray(sx) ? sx : [sx];
  const handleSpeak = useCallback(() => speakJapanese(spokenText), [spokenText]);
  const speechClick = useSpeechClickHandler(handleSpeak);

  return (
    <Paper
      elevation={0}
      role={canSpeak ? 'button' : undefined}
      tabIndex={canSpeak ? 0 : undefined}
      aria-label={canSpeak ? t('common.playAudio') : undefined}
      onPointerDown={canSpeak ? speechClick.onPointerDown : undefined}
      onClick={canSpeak ? speechClick.onClick : undefined}
      onKeyDown={
        canSpeak
          ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                speakJapanese(spokenText);
              }
            }
          : undefined
      }
      sx={[elevatedSurfaceSx, { cursor: canSpeak ? 'pointer' : undefined }, ...sxOverrides]}
    >
      {children}
    </Paper>
  );
}
