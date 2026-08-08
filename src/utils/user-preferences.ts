import { STORAGE_PREFIX } from '@/constants/site.ts';
import { usePersistentState } from '@/utils/use-persistent-state.ts';

export type UserPreferences = {
  showScrollToTop: boolean;
  showSectionNav: boolean;
};

export const DEFAULT_USER_PREFERENCES: UserPreferences = {
  showScrollToTop: true,
  showSectionNav: true
};

const USER_PREFERENCES_KEY = `${STORAGE_PREFIX}-user-preferences`;

function sanitizeUserPreferences(value: unknown): UserPreferences {
  if (!value || typeof value !== 'object') {
    return DEFAULT_USER_PREFERENCES;
  }

  const record = value as Record<string, unknown>;

  return {
    showScrollToTop:
      typeof record.showScrollToTop === 'boolean'
        ? record.showScrollToTop
        : DEFAULT_USER_PREFERENCES.showScrollToTop,
    showSectionNav:
      typeof record.showSectionNav === 'boolean'
        ? record.showSectionNav
        : DEFAULT_USER_PREFERENCES.showSectionNav
  };
}

export function useUserPreferences() {
  return usePersistentState(
    USER_PREFERENCES_KEY,
    DEFAULT_USER_PREFERENCES,
    sanitizeUserPreferences
  );
}
