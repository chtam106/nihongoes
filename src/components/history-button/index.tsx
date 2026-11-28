'use client';

import { useEffect, useSyncExternalStore } from 'react';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import { usePathname, useSearchParams } from 'next/navigation';
import { storageKey } from '@/constants/site.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { LinkRow } from '@/components/link-row';
import { latestLessonPerKind, useCurrentLessons } from '@/features/course/current-lesson';
import { barePath, pageTitleFromPath } from './page-title.ts';

const LAST_PAGE_KEY = storageKey('LAST_PAGE');
const LAST_PAGE_USED_KEY = storageKey('LAST_PAGE_USED');

function currentPage() {
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

function isSavedPage(value: string | null): value is string {
  return Boolean(
    value && value.startsWith('/') && !value.startsWith('//') && !value.includes('\\')
  );
}

function readLastPage() {
  try {
    const value = localStorage.getItem(LAST_PAGE_KEY);
    return isSavedPage(value) ? value : null;
  } catch {
    return null;
  }
}

function saveLastPage() {
  try {
    localStorage.setItem(LAST_PAGE_KEY, currentPage());
  } catch {
    // Ignore a full or blocked store. The button stays hidden.
  }
}

function subscribe() {
  return () => {};
}

const usedListeners = new Set<() => void>();

function subscribeUsed(onStoreChange: () => void) {
  usedListeners.add(onStoreChange);
  return () => {
    usedListeners.delete(onStoreChange);
  };
}

function readHistoryUsed() {
  try {
    return sessionStorage.getItem(LAST_PAGE_USED_KEY) === '1';
  } catch {
    return false;
  }
}

function markHistoryUsed() {
  try {
    sessionStorage.setItem(LAST_PAGE_USED_KEY, '1');
  } catch {
    return;
  }

  usedListeners.forEach((listener) => listener());
}

function subscribeHash(onStoreChange: () => void) {
  window.addEventListener('hashchange', onStoreChange);
  return () => window.removeEventListener('hashchange', onStoreChange);
}

function useCurrentPage() {
  const pathname = usePathname();
  const search = useSearchParams().toString();
  const hash = useSyncExternalStore(
    subscribeHash,
    () => window.location.hash,
    () => ''
  );

  return `${pathname}${search ? `?${search}` : ''}${hash}`;
}

/** Renders nothing; saves the open page on `pagehide` so the home page can offer it back. */
export function LastPageSaver() {
  useEffect(() => {
    window.addEventListener('pagehide', saveLastPage);
    return () => window.removeEventListener('pagehide', saveLastPage);
  }, []);

  return null;
}

/**
 * Home page row linking to the page that was open when the window last
 * closed, titled from its URL. Hidden until a page is saved, while that page
 * is open, when a Continue row already links to that same lesson page, and for
 * the rest of the session once used.
 */
export function RestoreSessionLink() {
  const { t, locale } = useTranslation();
  const here = useCurrentPage();
  const lastPage = useSyncExternalStore(subscribe, readLastPage, () => null);
  const used = useSyncExternalStore(subscribeUsed, readHistoryUsed, () => false);
  const continueLessons = latestLessonPerKind(useCurrentLessons());
  // A "Continue" row already links there; a practice page of that lesson still shows.
  const sameAsContinue =
    lastPage !== null &&
    continueLessons.some((entry) => barePath(entry.path) === barePath(lastPage));

  if (!lastPage || lastPage === here || used || sameAsContinue) {
    return null;
  }

  return (
    <LinkRow
      icon={<HistoryOutlinedIcon />}
      title={t('nav.lastPage')}
      subtitle={pageTitleFromPath(lastPage, t, locale)}
      href={lastPage}
      onClick={markHistoryUsed}
      highlight
    />
  );
}
