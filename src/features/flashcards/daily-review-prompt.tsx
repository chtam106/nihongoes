'use client';

import EventRepeatOutlined from '@mui/icons-material/EventRepeatOutlined';
import { Button, Dialog, Stack, Typography } from '@mui/material';
import { IconBadge } from '@/components/icon-badge';
import { LocaleLink } from '@/components/locale-link';
import { dayNumber, promptDueCount, REVIEW_PROMPT_DAY_KEY } from '@/constants/flashcards/srs.ts';
import { routes } from '@/constants/routes.ts';
import { useFlashcardReviews } from '@/features/flashcards/use-flashcard-reviews.ts';
import { usePathname } from '@/i18n/navigation.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';
import { useIsClient } from '@/utils/use-is-client.ts';
import { usePersistentState } from '@/utils/use-persistent-state.ts';

function sanitizeDay(value: unknown): number {
  return typeof value === 'number' && Number.isInteger(value) && value >= 0 ? value : 0;
}

/**
 * The due count read once, when the page first loads in the browser. Later
 * changes in the same page load (adding a card, moving to another page) never
 * reopen the prompt; the next full load reads it again.
 */
let dueAtPageOpen: number | null = null;

function readDueAtPageOpen(read: () => number) {
  if (dueAtPageOpen === null) {
    dueAtPageOpen = read();
  }

  return dueAtPageOpen;
}

/**
 * Once a day, on the first page opened, say how many flashcards are due and
 * offer to review them. Checked only once, when the page loads: shown only when
 * cards from before today are due then, and never when the page opened on the
 * review page itself.
 */
export function DailyReviewPrompt() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const isClient = useIsClient();
  const { store } = useFlashcardReviews();
  const today = dayNumber();
  // Read the stored list only once it is the browser's, not the server's empty copy.
  const due = isClient
    ? readDueAtPageOpen(() =>
        pathname === routes.flashcardReview ? 0 : promptDueCount(store, today)
      )
    : 0;
  const [promptDay, setPromptDay] = usePersistentState(REVIEW_PROMPT_DAY_KEY, 0, sanitizeDay);
  const open = due > 0 && promptDay !== today;

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
        <IconBadge>
          <EventRepeatOutlined />
        </IconBadge>

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
