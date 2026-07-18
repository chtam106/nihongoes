import type { ExerciseScript } from '@/features/alphabet/exercise/exercise-quiz.ts';

export function getScriptLabel(script: ExerciseScript, t: (key: string) => string) {
  if (script === 'all') {
    return t('exercise.scriptKana');
  }

  return t(script === 'hiragana' ? 'nav.hiragana' : 'nav.katakana');
}
