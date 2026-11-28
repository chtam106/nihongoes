'use client';

import { useEffect, useState } from 'react';
import { Snackbar } from '@mui/material';
import { routes } from '@/constants/routes.ts';
import { usePathname } from '@/i18n/navigation.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';

const REVIEW_TOAST_EVENT = 'nihongoes-review-toast';
/** Long enough to read the one-line note; there is nothing to click. */
const TOAST_MS = 1500;

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

type Toast = ReviewToastDetail & { key: number };

/**
 * One toast for the whole app, shown when the learner adds cards to the review
 * list (button, Add all, card menu, swipe) or takes them off (button, card menu,
 * Remove all). A short note only: no action. Not on a collection page: its
 * add/remove button already shows the change.
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
      setToast({ ...detail, key: Date.now() });
    };

    window.addEventListener(REVIEW_TOAST_EVENT, onChange);

    return () => window.removeEventListener(REVIEW_TOAST_EVENT, onChange);
  }, []);

  const close = () => setToast(null);

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
    <Snackbar
      key={toast?.key}
      open={toast !== null && !onCollectionPage}
      autoHideDuration={TOAST_MS}
      onClose={(_event, reason) => {
        if (reason !== 'clickaway') {
          close();
        }
      }}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      message={message}
    />
  );
}
