'use client';

import ArrowForwardOutlined from '@mui/icons-material/ArrowForwardOutlined';
import EventRepeatOutlined from '@mui/icons-material/EventRepeatOutlined';
import { Box, Card, CardActionArea, Typography } from '@mui/material';
import { LocaleLink as RouterLink } from '@/components/locale-link';
import { dayNumber, dueCardIds } from '@/constants/flashcards/srs.ts';
import { routes } from '@/constants/routes.ts';
import { useFlashcardReviews } from '@/features/flashcards/use-flashcard-reviews.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { elevatedSurfaceSx, interactiveSurfaceSx } from '@/theme/surfaces.ts';

type DailyReviewPanelProps = {
  /** Hide the row until the learner has cards on the review list (e.g. on the home page). */
  hideUntilStarted?: boolean;
};

/**
 * One compact row: today's due count, linking to the daily review. Before any
 * card is on the list it explains how to start, unless `hideUntilStarted`.
 */
export function DailyReviewPanel({ hideUntilStarted = false }: DailyReviewPanelProps) {
  const { t } = useTranslation();
  const { store } = useFlashcardReviews();
  const started = Object.keys(store.cards).length > 0;
  const due = dueCardIds(store, dayNumber()).length;

  if (!started && hideUntilStarted) {
    return null;
  }

  const content = (
    <Box
      sx={{
        px: 2,
        py: 1.5,
        display: 'flex',
        alignItems: 'center',
        gap: 1.5
      }}
    >
      <EventRepeatOutlined color="primary" />
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography component="h2" variant="body1" sx={{ fontWeight: 600 }}>
          {t('flashcards.reviewTitle')}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {started
            ? t('flashcards.reviewDueToday', { count: due })
            : t('flashcards.reviewGetStarted')}
        </Typography>
      </Box>
      {/* The whole card is the link; the arrow only shows where it goes. */}
      {started && <ArrowForwardOutlined color="primary" aria-hidden sx={{ flexShrink: 0 }} />}
    </Box>
  );

  if (!started) {
    return (
      <Box component="section" aria-label={t('flashcards.reviewTitle')} sx={elevatedSurfaceSx}>
        {content}
      </Box>
    );
  }

  return (
    <Card component="section" elevation={0} sx={interactiveSurfaceSx}>
      <CardActionArea component={RouterLink} to={routes.flashcardReview}>
        {content}
      </CardActionArea>
    </Card>
  );
}
