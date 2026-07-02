import { useState, type KeyboardEvent } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';

type TranslationLineProps = {
  translation: string;
};

/**
 * The meaning (translation) line for an example sentence. Hidden by default,
 * showing only a "show" button; once revealed, the translation sits on its own
 * row with the "hide" button on the row below it. Stops click/key propagation so
 * it doesn't trigger a surrounding speakable surface.
 */
export function TranslationLine({ translation }: TranslationLineProps) {
  const { t } = useTranslation();
  const [shown, setShown] = useState(false);

  const stopKeyPropagation = (event: KeyboardEvent<HTMLButtonElement>) => event.stopPropagation();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      {!shown && (
        <Link
          component="button"
          type="button"
          variant="body2"
          underline="hover"
          onClick={(event) => {
            event.stopPropagation();
            setShown(true);
          }}
          onKeyDown={stopKeyPropagation}
          sx={{ lineHeight: 1.66 }}
        >
          {t('course.showTranslation')}
        </Link>
      )}
      {shown && (
        <>
          <Typography variant="body2" sx={{ lineHeight: 1.66 }}>
            {translation}
          </Typography>
          <Link
            component="button"
            type="button"
            variant="body2"
            underline="hover"
            onClick={(event) => {
              event.stopPropagation();
              setShown(false);
            }}
            onKeyDown={stopKeyPropagation}
            sx={{ lineHeight: 1.66 }}
          >
            {t('course.hideTranslation')}
          </Link>
        </>
      )}
    </Box>
  );
}
