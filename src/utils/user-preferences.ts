import { STORAGE_PREFIX } from '@/constants/site.ts';
import { readPersistedValue, usePersistentState } from '@/utils/use-persistent-state.ts';

export type UserPreferences = {
  showScrollToTop: boolean;
  showSectionNav: boolean;
  showFurigana: boolean;
  allowTts: boolean;
  showTranslation: boolean;
  showTranslationsByDefault: boolean;
};

export const DEFAULT_USER_PREFERENCES: UserPreferences = {
  showScrollToTop: true,
  showSectionNav: true,
  showFurigana: true,
  allowTts: true,
  showTranslation: true,
  showTranslationsByDefault: false
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
        : DEFAULT_USER_PREFERENCES.showSectionNav,
    showFurigana:
      typeof record.showFurigana === 'boolean'
        ? record.showFurigana
        : DEFAULT_USER_PREFERENCES.showFurigana,
    allowTts:
      typeof record.allowTts === 'boolean' ? record.allowTts : DEFAULT_USER_PREFERENCES.allowTts,
    showTranslation:
      typeof record.showTranslation === 'boolean'
        ? record.showTranslation
        : DEFAULT_USER_PREFERENCES.showTranslation,
    showTranslationsByDefault:
      typeof record.showTranslationsByDefault === 'boolean'
        ? record.showTranslationsByDefault
        : DEFAULT_USER_PREFERENCES.showTranslationsByDefault
  };
}

export function readUserPreferences(): UserPreferences {
  return readPersistedValue(
    USER_PREFERENCES_KEY,
    DEFAULT_USER_PREFERENCES,
    sanitizeUserPreferences
  );
}

export function useUserPreferences() {
  return usePersistentState(
    USER_PREFERENCES_KEY,
    DEFAULT_USER_PREFERENCES,
    sanitizeUserPreferences
  );
}
