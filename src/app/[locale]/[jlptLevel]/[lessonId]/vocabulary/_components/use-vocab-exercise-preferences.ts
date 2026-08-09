import { useCallback } from 'react';
import { usePersistentState } from '@/utils/use-persistent-state.ts';
import {
  DEFAULT_VOCAB_EXERCISE_PREFERENCES,
  sanitizeVocabExercisePreferences,
  VOCAB_EXERCISE_STORAGE_KEY
} from './vocab-exercise-preferences.ts';
import type { VocabExerciseFormat, VocabMode, VocabScript } from './vocab-quiz.ts';

export function useVocabExercisePreferences() {
  const [prefs, setPrefs] = usePersistentState(
    VOCAB_EXERCISE_STORAGE_KEY,
    DEFAULT_VOCAB_EXERCISE_PREFERENCES,
    sanitizeVocabExercisePreferences
  );

  const setExerciseFormat = useCallback(
    (exerciseFormat: VocabExerciseFormat) =>
      setPrefs((previous) => ({ ...previous, exerciseFormat })),
    [setPrefs]
  );

  const setMode = useCallback(
    (mode: VocabMode) => setPrefs((previous) => ({ ...previous, mode })),
    [setPrefs]
  );

  const setScript = useCallback(
    (script: VocabScript) => setPrefs((previous) => ({ ...previous, script })),
    [setPrefs]
  );

  const setIncludeReference = useCallback(
    (includeReference: boolean) => setPrefs((previous) => ({ ...previous, includeReference })),
    [setPrefs]
  );

  return {
    prefs,
    setExerciseFormat,
    setMode,
    setScript,
    setIncludeReference
  };
}
