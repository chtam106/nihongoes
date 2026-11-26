'use client';

import EventRepeatOutlined from '@mui/icons-material/EventRepeatOutlined';
import { Box, Button, Dialog, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { LocaleLink } from '@/components/locale-link';
import { dayNumber, REVIEW_PROMPT_DAY_KEY } from '@/constants/flashcards/srs.ts';
import { routes } from '@/constants/routes.ts';
import { useDueReviewCount } from '@/features/flashcards/use-due-review-count.ts';
import { usePathname } from '@/i18n/navigation.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { usePersistentState } from '@/utils/use-persistent-state.ts';

function sanitizeDay(value: unknown): number {
  return typeof value === 'number' && Number.isInteger(value) && value >= 0 ? value : 0;
}

/**
 * Once a day, on the first page opened, say how many flashcards are due and
 * offer to review them. Shown only when something is due, and never on the
 * review page itself.
 */
export function DailyReviewPrompt() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const due = useDueReviewCount();
  const today = dayNumber();
  const [promptDay, setPromptDay] = usePersistentState(REVIEW_PROMPT_DAY_KEY, 0, sanitizeDay);
  const open = due > 0 && promptDay !== today && pathname !== routes.flashcardReview;

  const close = () => {
    setPromptDay(today);
  };

  return (
    <Dialog
      open={open}
      onClose={close}
      fullWidth
      maxWidth="xs"
      aria-labelledby="daily-review-prompt-title"
      aria-describedby="daily-review-prompt-count"
      slotProps={{ paper: { sx: { borderRadius: 4, m: 2 } } }}
    >
      <Stack spacing={3} sx={{ p: { xs: 3, sm: 4 }, alignItems: 'center', textAlign: 'center' }}>
        <Box
          aria-hidden
          sx={(theme) => ({
            width: 72,
            height: 72,
            borderRadius: '50%',
            display: 'grid',
            placeItems: 'center',
            color: 'primary.main',
            bgcolor: alpha(theme.palette.primary.main, 0.1)
          })}
        >
          <EventRepeatOutlined sx={{ fontSize: 36 }} />
        </Box>

        <Stack spacing={1} sx={{ alignItems: 'center' }}>
          <Typography
            id="daily-review-prompt-title"
            component="h2"
            variant="h5"
            sx={{ fontWeight: 700 }}
          >
            {t('flashcards.reviewTitle')}
          </Typography>
          <Typography id="daily-review-prompt-count" variant="body1" color="text.secondary">
            {t('flashcards.reviewPromptBody', { count: due })}
          </Typography>
        </Stack>

        <Stack spacing={1} sx={{ width: '100%' }}>
          <Button
            variant="contained"
            size="large"
            component={LocaleLink}
            to={routes.flashcardReview}
            onClick={close}
            sx={{ minHeight: 52, fontWeight: 700 }}
          >
            {t('flashcards.reviewStart')}
          </Button>
          <Button
            size="large"
            onClick={close}
            sx={{ minHeight: 48, color: 'text.secondary', textTransform: 'none' }}
          >
            {t('flashcards.reviewLater')}
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
}
