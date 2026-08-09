'use client';

import { useEffect } from 'react';
import { useUserPreferences } from '@/utils/user-preferences.ts';

/** Sync user preference flags onto `<html>` for global CSS hooks. */
export function UserPreferencesDocument() {
  const [preferences] = useUserPreferences();

  useEffect(() => {
    document.documentElement.dataset.showFurigana = preferences.showFurigana ? 'true' : 'false';
  }, [preferences.showFurigana]);

  return null;
}
