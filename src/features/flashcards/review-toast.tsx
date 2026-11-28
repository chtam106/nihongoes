'use client';

import { useEffect, useState } from 'react';
import CheckOutlined from '@mui/icons-material/CheckOutlined';
import { Fade, Paper, Stack, Typography } from '@mui/material';
import { IconBadge } from '@/components/icon-badge';
import { routes } from '@/constants/routes.ts';
import { usePathname } from '@/i18n/navigation.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';

const REVIEW_TOAST_EVENT = 'nihongoes-review-toast';
/** A short beat: the check is the message. A tap outside closes it sooner. */
const TOAST_MS = 700;

type ReviewChange = 'added' | 'removed';
type ReviewToastDetail = { change: ReviewChange; count: number };

function notify(change: ReviewChange, count: number) {
  if (count > 0) {
    window.dispatchEvent(
      new CustomEvent<ReviewToastDetail>(REVIEW_TOAST_EVENT, { detail: { change, count } })
    );
  }
}

/** Tell the user how many cards just joined the review list. */
export function notifyReviewAdded(count: number) {
  notify('added', count);
}

/** Tell the user how many cards the learner just took off the review list. */
export function notifyReviewRemoved(count: number) {
  notify('removed', count);
}

/** The last change stays after it hides, so the text holds through the fade-out. */
type Toast = ReviewToastDetail & { key: number; shown: boolean };

/**
 * One confirmation for the whole app when the learner adds cards to the review
 * list or takes them off: a small card in the daily review prompt's style (the
 * same `IconBadge`, with a check) and one line, gone on its own after a moment. Not on a collection page: its add/remove button already
 * shows the change.
 */
export function ReviewToast() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [toast, setToast] = useState<Toast | null>(null);
  const onCollectionPage =
    pathname.startsWith(`${routes.flashcards}/`) && pathname !== routes.flashcardReview;

  useEffect(() => {
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<ReviewToastDetail>).detail;
      setToast({ ...detail, key: Date.now(), shown: true });
    };

    window.addEventListener(REVIEW_TOAST_EVENT, onChange);

    return () => window.removeEventListener(REVIEW_TOAST_EVENT, onChange);
  }, []);

  const toastKey = toast?.shown ? toast.key : null;

  useEffect(() => {
    if (toastKey === null) {
      return;
    }

    const timer = window.setTimeout(
      () => setToast((previous) => previous && { ...previous, shown: false }),
      TOAST_MS
    );

    return () => window.clearTimeout(timer);
  }, [toastKey]);

  const message = (() => {
    if (!toast) {
      return '';
    }

    if (toast.change === 'removed') {
      return toast.count > 1
        ? t('flashcards.reviewRemovedMany', { count: toast.count })
        : t('flashcards.reviewRemoved');
    }

    return toast.count > 1
      ? t('flashcards.reviewAddedMany', { count: toast.count })
      : t('flashcards.reviewAdded');
  })();

  return (
    // Not a modal: no scroll lock, no focus move, no backdrop, so the page under
    // it never shifts. It ignores the pointer and only fades in and out.
    <Fade
      in={Boolean(toast?.shown) && !onCollectionPage}
      timeout={{ enter: 150, exit: 300 }}
      unmountOnExit
    >
      <Paper
        key={toast?.key}
        role="status"
        aria-live="polite"
        elevation={8}
        sx={(theme) => ({
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: theme.zIndex.modal,
          pointerEvents: 'none',
          borderRadius: 4,
          maxWidth: 'calc(100vw - 32px)'
        })}
      >
        <Stack
          spacing={2}
          sx={{ px: { xs: 4, sm: 5 }, py: 4, alignItems: 'center', textAlign: 'center' }}
        >
          <IconBadge>
            <CheckOutlined />
          </IconBadge>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            {message}
          </Typography>
        </Stack>
      </Paper>
    </Fade>
  );
}
