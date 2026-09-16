'use client';

import { useState, type KeyboardEvent } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';
import { useUserPreferences } from '@/utils/user-preferences.ts';

type TranslationLineProps = {
  translation: string;
};

/**
 * The meaning (translation) for an example sentence. A single show/hide link
 * stays in a fixed spot below the Japanese line; the translation appears
 * underneath when revealed. Stops click/key propagation so it does not trigger
 * a surrounding speakable surface.
 */
export function TranslationLine({ translation }: TranslationLineProps) {
  const { t } = useTranslation();
  const [preferences] = useUserPreferences();
  const [shown, setShown] = useState(preferences.showTranslationsByDefault);

  const showToggle = preferences.showTranslation;

  if (!showToggle && !shown) {
    return null;
  }

  const stopKeyPropagation = (event: KeyboardEvent<HTMLButtonElement>) => event.stopPropagation();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      {showToggle && (
        <Link
          component="button"
          type="button"
          variant="body2"
          underline="none"
          onClick={(event) => {
            event.stopPropagation();
            setShown((previous) => !previous);
          }}
          onKeyDown={stopKeyPropagation}
          sx={{
            lineHeight: 1.66,
            textDecoration: 'none',
            '&:hover': { textDecoration: 'none' },
            '&:active': { textDecoration: 'none' }
          }}
        >
          {shown ? t('course.hideTranslation') : t('course.showTranslation')}
        </Link>
      )}
      {shown && (
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.66 }}>
          {translation}
        </Typography>
      )}
    </Box>
  );
}
