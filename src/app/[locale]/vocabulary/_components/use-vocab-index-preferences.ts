import { useCallback, useMemo } from 'react';
import { usePersistentState } from '@/utils/use-persistent-state.ts';
import {
  defaultVocabIndexPreferences,
  sanitizeVocabIndexPreferences,
  VOCAB_INDEX_STORAGE_KEY,
  type VocabIndexPreferences
} from './vocab-index-preferences.ts';

export function useVocabIndexPreferences(lessonNumbers: number[]) {
  const numbersKey = lessonNumbers.join(',');
  const firstNumber = lessonNumbers[0] ?? 1;
  const lastNumber = lessonNumbers[lessonNumbers.length - 1] ?? firstNumber;

  const fallback = useMemo(
    () => defaultVocabIndexPreferences([firstNumber, lastNumber]),
    [firstNumber, lastNumber]
  );
  const sanitize = useCallback(
    (value: unknown) =>
      sanitizeVocabIndexPreferences(
        value,
        numbersKey ? numbersKey.split(',').map(Number) : [firstNumber]
      ),
    [firstNumber, numbersKey]
  );
  const [prefs, setPrefs] = usePersistentState(VOCAB_INDEX_STORAGE_KEY, fallback, sanitize);

  const setRange = useCallback((range: VocabIndexPreferences) => setPrefs(range), [setPrefs]);

  return { prefs, setRange };
}
