import { useCallback, useMemo } from 'react';
import { usePersistentState } from '@/utils/use-persistent-state.ts';
import {
  defaultVocabIndexPreferences,
  FLASHCARD_GUIDE_SEEN_KEY,
  sanitizeFlashcardGuideSeen,
  sanitizeVocabIndexPreferences,
  VOCAB_INDEX_STORAGE_KEY,
  type FlashcardFront,
  type VocabIndexPreferences,
  type VocabIndexView
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
  const [guideSeen, setGuideSeen] = usePersistentState(
    FLASHCARD_GUIDE_SEEN_KEY,
    false,
    sanitizeFlashcardGuideSeen
  );

  const setView = useCallback(
    (view: VocabIndexView) => setPrefs((previous) => ({ ...previous, view })),
    [setPrefs]
  );

  const setFront = useCallback(
    (front: FlashcardFront) => setPrefs((previous) => ({ ...previous, front })),
    [setPrefs]
  );

  const setRange = useCallback(
    (range: Pick<VocabIndexPreferences, 'from' | 'to'>) =>
      setPrefs((previous) => ({ ...previous, ...range })),
    [setPrefs]
  );

  return { prefs, setView, setFront, setRange, guideSeen, setGuideSeen };
}
