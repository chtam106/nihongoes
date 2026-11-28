import { storageKey } from '@/constants/site.ts';

/** `hand`: write on paper, show the answer, grade yourself. `type`: type it and the page checks it. */
export type SentenceAnswerMode = 'hand' | 'type';

export type SentenceWritingPreferences = {
  mode: SentenceAnswerMode;
};

export const SENTENCE_WRITING_STORAGE_KEY = storageKey('SENTENCE_WRITING');

export function defaultSentenceWritingPreferences(): SentenceWritingPreferences {
  return { mode: 'hand' };
}

/** Accepts the current shape and the older `{ showInput }` store (true meant typing). */
export function sanitizeSentenceWritingPreferences(value: unknown): SentenceWritingPreferences {
  if (!value || typeof value !== 'object') {
    return defaultSentenceWritingPreferences();
  }

  const record = value as Record<string, unknown>;

  if (record.mode === 'hand' || record.mode === 'type') {
    return { mode: record.mode };
  }

  return { mode: record.showInput === true ? 'type' : 'hand' };
}
