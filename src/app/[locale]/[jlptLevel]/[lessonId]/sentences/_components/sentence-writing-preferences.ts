import { storageKey } from '@/constants/site.ts';

export type SentenceWritingPreferences = {
  showInput: boolean;
};

export const SENTENCE_WRITING_STORAGE_KEY = storageKey('SENTENCE_WRITING');

export function defaultSentenceWritingPreferences(): SentenceWritingPreferences {
  return { showInput: false };
}

/** Accepts the current shape and the older `{ lesson, showInput }` store. */
export function sanitizeSentenceWritingPreferences(value: unknown): SentenceWritingPreferences {
  if (!value || typeof value !== 'object') {
    return defaultSentenceWritingPreferences();
  }

  const record = value as Record<string, unknown>;

  return { showInput: record.showInput === true };
}
