'use client';

import EventRepeatOutlined from '@mui/icons-material/EventRepeatOutlined';
import { Box, Typography } from '@mui/material';
import { LinkRow } from '@/components/link-row';
import { dayNumber, dueCardIds } from '@/constants/flashcards/srs.ts';
import { routes } from '@/constants/routes.ts';
import { useFlashcardReviews } from '@/features/flashcards/use-flashcard-reviews.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';

type DailyReviewPanelProps = {
  /** Hide the row until the learner has cards on the review list (e.g. on the home page). */
  hideUntilStarted?: boolean;
  /** Sakura tonal fill so the row stands out (home page, `/flashcards`). */
  highlight?: boolean;
};

/**
 * One compact row: today's due count, linking to the daily review. Before any
 * card is on the list it explains how to start, unless `hideUntilStarted`.
 */
export function DailyReviewPanel({
  hideUntilStarted = false,
  highlight = false
}: DailyReviewPanelProps) {
  const { t } = useTranslation();
  const { store } = useFlashcardReviews();
  const started = Object.keys(store.cards).length > 0;
  const due = dueCardIds(store, dayNumber()).length;

  if (!started && hideUntilStarted) {
    return null;
  }

  if (!started) {
    return (
      <Box
        component="section"
        aria-label={t('flashcards.reviewTitle')}
        sx={[elevatedSurfaceSx, { px: 2, py: 1, display: 'flex', alignItems: 'center', gap: 1.5 }]}
      >
        <EventRepeatOutlined color="primary" />
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography component="h2" variant="body1" sx={{ fontWeight: 600 }}>
            {t('flashcards.reviewTitle')}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t('flashcards.reviewGetStarted')}
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <LinkRow
      icon={<EventRepeatOutlined />}
      title={t('flashcards.reviewTitle')}
      subtitle={t('flashcards.reviewDueToday', { count: due })}
      to={routes.flashcardReview}
      highlight={highlight}
      strongSubtitle={highlight && due > 0}
    />
  );
}
