import { STORAGE_PREFIX } from '@/constants/site.ts';
import type { VocabExerciseFormat, VocabMode, VocabScript } from './vocab-quiz.ts';

export const VOCAB_EXERCISE_STORAGE_KEY = `${STORAGE_PREFIX.toUpperCase()}_EXERCISE_VOCAB`;

export type VocabExercisePreferences = {
  exerciseFormat: VocabExerciseFormat;
  mode: VocabMode;
  script: VocabScript;
  includeReference: boolean;
};

export const DEFAULT_VOCAB_EXERCISE_PREFERENCES: VocabExercisePreferences = {
  exerciseFormat: 'match',
  mode: 'word-meaning',
  script: 'kana',
  includeReference: false
};

const EXERCISE_FORMATS = new Set<VocabExerciseFormat>(['match', 'mcq']);
const MODES = new Set<VocabMode>(['word-meaning', 'meaning-word']);
const SCRIPTS = new Set<VocabScript>(['kana', 'kanji', 'all']);

export function sanitizeVocabExercisePreferences(value: unknown): VocabExercisePreferences {
  if (!value || typeof value !== 'object') {
    return DEFAULT_VOCAB_EXERCISE_PREFERENCES;
  }

  const record = value as Record<string, unknown>;

  return {
    exerciseFormat: EXERCISE_FORMATS.has(record.exerciseFormat as VocabExerciseFormat)
      ? (record.exerciseFormat as VocabExerciseFormat)
      : DEFAULT_VOCAB_EXERCISE_PREFERENCES.exerciseFormat,
    mode: MODES.has(record.mode as VocabMode)
      ? (record.mode as VocabMode)
      : DEFAULT_VOCAB_EXERCISE_PREFERENCES.mode,
    script: SCRIPTS.has(record.script as VocabScript)
      ? (record.script as VocabScript)
      : DEFAULT_VOCAB_EXERCISE_PREFERENCES.script,
    includeReference:
      typeof record.includeReference === 'boolean'
        ? record.includeReference
        : DEFAULT_VOCAB_EXERCISE_PREFERENCES.includeReference
  };
}
