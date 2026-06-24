import { useState, type KeyboardEvent } from 'react';
import { Link, Stack, Typography } from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';

/**
 * The romaji (phonetics) line for a vocab/example item. Hidden by default and
 * shown only when the inline button is tapped; once shown, a "hide" button sits
 * next to the romaji. Stops click/key propagation so it doesn't trigger a
 * surrounding speakable surface.
 */
export function PhoneticsLine({ romaji }: { romaji: string }) {
  const { t } = useTranslation();
  const [shown, setShown] = useState(false);

  if (!shown) {
    return (
      <Link
        component="button"
        type="button"
        variant="caption"
        underline="hover"
        onClick={(event) => {
          event.stopPropagation();
          setShown(true);
        }}
        onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) => event.stopPropagation()}
        sx={{ display: 'block', textAlign: 'left', lineHeight: 1.66 }}
      >
        {t('course.showPhonetics')}
      </Link>
    );
  }

  return (
    <Stack direction="row" spacing={0.75} sx={{ alignItems: 'baseline', flexWrap: 'wrap' }}>
      <Typography variant="caption" color="text.secondary">
        {romaji}
      </Typography>
      <Link
        component="button"
        type="button"
        variant="caption"
        underline="hover"
        onClick={(event) => {
          event.stopPropagation();
          setShown(false);
        }}
        onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) => event.stopPropagation()}
      >
        {t('course.hidePhonetics')}
      </Link>
    </Stack>
  );
}
