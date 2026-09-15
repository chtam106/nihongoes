'use client';

import { useCallback, type KeyboardEvent, type ReactNode } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';
import { formatJapaneseDisplay } from '@/utils/japanese-display.ts';
import { speakJapanese, useSpeechClickHandler, useSpeechEnabled } from '@/utils/speech.ts';

type SpeakableTableTextProps = {
  text: string;
  children: ReactNode;
};

/** Clickable Japanese text for table cells - no card/button chrome. */
export function SpeakableTableText({ text, children }: SpeakableTableTextProps) {
  const { t } = useTranslation();
  const canSpeak = useSpeechEnabled();
  const spokenText = formatJapaneseDisplay(text);
  const handleSpeak = useCallback(() => speakJapanese(spokenText), [spokenText]);
  const speechClick = useSpeechClickHandler(handleSpeak);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      speakJapanese(spokenText);
    }
  };

  return (
    <Box
      role={canSpeak ? 'button' : undefined}
      tabIndex={canSpeak ? 0 : undefined}
      aria-label={canSpeak ? t('common.playAudio') : undefined}
      onPointerDown={canSpeak ? speechClick.onPointerDown : undefined}
      onClick={canSpeak ? speechClick.onClick : undefined}
      onKeyDown={canSpeak ? handleKeyDown : undefined}
      sx={{ cursor: canSpeak ? 'pointer' : undefined }}
    >
      {children}
    </Box>
  );
}
