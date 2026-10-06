import { usePersistentState } from '@/utils/use-persistent-state.ts';
import {
  DEFAULT_RADICAL_QUIZ_RANGE,
  RADICAL_QUIZ_POOL_STORAGE_KEY,
  sanitizeRadicalQuizRange
} from './radical-quiz-pool.ts';

export function useRadicalQuizRange() {
  return usePersistentState(
    RADICAL_QUIZ_POOL_STORAGE_KEY,
    DEFAULT_RADICAL_QUIZ_RANGE,
    sanitizeRadicalQuizRange
  );
}
