'use client';

import type { MouseEvent } from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUpOutlined';
import { IconButton } from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';
import { formatJapaneseDisplay } from '@/utils/japanese-display.ts';
import { speakJapanese, useSpeechSupported } from '@/utils/speech.ts';

type SpeakButtonProps = {
  text: string;
  size?: 'small' | 'medium';
};

export function SpeakButton({ text, size = 'small' }: SpeakButtonProps) {
  const { t } = useTranslation();
  const speechSupported = useSpeechSupported();

  if (!speechSupported) {
    return null;
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    speakJapanese(formatJapaneseDisplay(text));
  };

  return (
    <IconButton onClick={handleClick} size={size} aria-label={t('common.playAudio')}>
      <VolumeUpIcon fontSize="inherit" />
    </IconButton>
  );
}
