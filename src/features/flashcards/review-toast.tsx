'use client';

import { useEffect, useState } from 'react';
import { Button, Snackbar } from '@mui/material';
import { LocaleLink } from '@/components/locale-link';
import { routes } from '@/constants/routes.ts';
import { usePathname } from '@/i18n/navigation.tsx';
import { useTranslation } from '@/i18n/use-translation.ts';

const REVIEW_ADDED_EVENT = 'nihongoes-review-added';
const TOAST_MS = 3000;

/** Tell the user how many cards just joined the review list. */
export function notifyReviewAdded(count: number) {
  if (count > 0) {
    window.dispatchEvent(new CustomEvent<number>(REVIEW_ADDED_EVENT, { detail: count }));
  }
}

type Toast = { count: number; key: number };

/**
 * One toast for the whole app, shown whenever cards are added to the review
 * list (button, Add all, card menu, or swipe), with a shortcut to the review.
 */
export function ReviewToast() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [toast, setToast] = useState<Toast | null>(null);

  useEffect(() => {
    const onAdded = (event: Event) => {
      const count = (event as CustomEvent<number>).detail;
      setToast({ count, key: Date.now() });
    };

    window.addEventListener(REVIEW_ADDED_EVENT, onAdded);

    return () => window.removeEventListener(REVIEW_ADDED_EVENT, onAdded);
  }, []);

  const close = () => setToast(null);

  return (
    <Snackbar
      key={toast?.key}
      open={toast !== null}
      autoHideDuration={TOAST_MS}
      onClose={(_event, reason) => {
        if (reason !== 'clickaway') {
          close();
        }
      }}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      message={
        toast && toast.count > 1
          ? t('flashcards.reviewAddedMany', { count: toast.count })
          : t('flashcards.reviewAdded')
      }
      action={
        pathname !== routes.flashcardReview && (
          <Button
            component={LocaleLink}
            to={routes.flashcardReview}
            onClick={close}
            size="small"
            sx={{ color: 'primary.light', fontWeight: 700 }}
          >
            {t('flashcards.reviewStart')}
          </Button>
        )
      }
    />
  );
}
