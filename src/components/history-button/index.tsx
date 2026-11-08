'use client';

import { useEffect, useSyncExternalStore } from 'react';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import { IconButton, Tooltip } from '@mui/material';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { storageKey } from '@/constants/site.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { hoverFillNoneSx } from '@/theme/hover.ts';

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

export function HistoryButton() {
  const { t } = useTranslation();
  const here = useCurrentPage();
  const lastPage = useSyncExternalStore(subscribe, readLastPage, () => null);
  const used = useSyncExternalStore(subscribeUsed, readHistoryUsed, () => false);

  useEffect(() => {
    window.addEventListener('pagehide', saveLastPage);
    return () => window.removeEventListener('pagehide', saveLastPage);
  }, []);

  if (!lastPage || lastPage === here || used) {
    return null;
  }

  const label = t('nav.lastPage');

  return (
    <Tooltip title={label} placement="bottom" slotProps={{ tooltip: { sx: { fontSize: '14px' } } }}>
      <IconButton
        component={Link}
        href={lastPage}
        color="primary"
        aria-label={label}
        onClick={markHistoryUsed}
        sx={hoverFillNoneSx}
      >
        <HistoryOutlinedIcon />
      </IconButton>
    </Tooltip>
  );
}
