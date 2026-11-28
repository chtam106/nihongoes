'use client';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ReplayIcon from '@mui/icons-material/Replay';
import { Box, Button, Stack } from '@mui/material';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { useTranslation } from '@/i18n/use-translation.ts';

type ResultRetryButtonsProps = {
  onRetry: () => void;
  /** Starts a round of only the missed questions. */
  onRetryMisses?: () => void;
  /** Something was missed this round, so the missed-only retry makes sense. */
  hasMisses: boolean;
};

/**
 * The retry pair under the score. With misses, retrying just those is the main
 * action and the full retry is secondary; with none, Retry stands alone.
 */
export function ResultRetryButtons({ onRetry, onRetryMisses, hasMisses }: ResultRetryButtonsProps) {
  const { t } = useTranslation();
  const missesFirst = Boolean(onRetryMisses) && hasMisses;

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={1.5}
      useFlexGap
      sx={{ justifyContent: 'center', alignItems: 'center' }}
    >
      {missesFirst && (
        <Button
          variant="contained"
          startIcon={<ReplayIcon />}
          onClick={onRetryMisses}
          sx={{ width: { xs: '100%', sm: 'auto' }, maxWidth: 320 }}
        >
          {t('course.retryMisses')}
        </Button>
      )}
      <Button
        variant={missesFirst ? 'outlined' : 'contained'}
        startIcon={<ReplayIcon />}
        onClick={onRetry}
        sx={{ width: { xs: '100%', sm: 'auto' }, maxWidth: 320 }}
      >
        {t('course.retry')}
      </Button>
    </Stack>
  );
}

type ResultLink = {
  to: string;
  label: string;
};

type ResultNavLinksProps = {
  /** Back to what was studied (the lesson, the radical list). */
  review?: ResultLink;
  /** On to the next practice. */
  next?: ResultLink;
};

/**
 * Where to go after a quiz, at the foot of the result card: review on the
 * left, next on the right (stacked and centered on a phone, next first), the
 * same as the previous/next lesson links.
 */
export function ResultNavLinks({ review, next }: ResultNavLinksProps) {
  if (!review && !next) {
    return null;
  }

  return (
    <Box
      sx={{
        mt: 3,
        pt: 2,
        borderTop: 1,
        borderColor: 'divider',
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1
      }}
    >
      {review && (
        <Button
          component={RouterLink}
          to={review.to}
          variant="text"
          startIcon={<ArrowBackIcon />}
          sx={{ px: { md: 0 } }}
        >
          {review.label}
        </Button>
      )}
      {/* Keeps next on the right when there is no review link. */}
      {!review && <Box sx={{ display: { xs: 'none', md: 'block' } }} />}
      {next && (
        <Button
          component={RouterLink}
          to={next.to}
          variant="text"
          endIcon={<ArrowForwardIcon />}
          sx={{ px: { md: 0 } }}
        >
          {next.label}
        </Button>
      )}
    </Box>
  );
}
