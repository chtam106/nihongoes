import { describe, expect, it } from 'vitest';
import {
  createQuizSession,
  getOptionValue,
  isQuizAnswerCorrect,
  usesCharacterOptions,
  type ExerciseMode,
  type ExerciseScript,
  type QuizQuestion
} from '@/features/alphabet/exercise/exercise-quiz.ts';

/** Draw one full pass of the deck (each item exactly once). */
function drawAll(
  script: ExerciseScript,
  mode: ExerciseMode,
  scope: Parameters<typeof createQuizSession>[2] = 'all'
): QuizQuestion[] {
  const session = createQuizSession(script, mode, scope);
  return Array.from({ length: session.total }, () => session.next());
}

const sampleQuestion: QuizQuestion = {
  mode: 'romaji',
  correctItem: { char: 'あ', romaji: 'a' },
  optionItems: [{ char: 'あ', romaji: 'a' }],
  correctAnswers: ['a']
};

describe('isQuizAnswerCorrect', () => {
  it('returns true only for an accepted answer', () => {
    expect(isQuizAnswerCorrect(sampleQuestion, 'a')).toBe(true);
    expect(isQuizAnswerCorrect(sampleQuestion, 'i')).toBe(false);
  });
});

describe('getOptionValue', () => {
  const cell = { char: 'か', romaji: 'ka' };

  it('uses romaji for the romaji mode and the character otherwise', () => {
    expect(getOptionValue(cell, 'romaji')).toBe('ka');
    expect(getOptionValue(cell, 'character')).toBe('か');
    expect(getOptionValue(cell, 'listen')).toBe('か');
  });
});

describe('usesCharacterOptions', () => {
  it('is false for romaji and true for the character-based modes', () => {
    expect(usesCharacterOptions('romaji')).toBe(false);
    expect(usesCharacterOptions('character')).toBe(true);
    expect(usesCharacterOptions('listen')).toBe(true);
    expect(usesCharacterOptions('script-pair')).toBe(true);
  });
});

describe('createQuizSession', () => {
  it('serves every item once before repeating and always includes the answer among the options', () => {
    const session = createQuizSession('hiragana', 'romaji', 'seion');
    expect(session.total).toBeGreaterThan(0);

    const seen = new Set<string>();
    for (let i = 0; i < session.total; i += 1) {
      const question = session.next();
      seen.add(question.correctItem.char);
      expect(question.optionItems).toContainEqual(question.correctItem);
      expect(question.correctAnswers).toContain(question.correctItem.romaji);
    }

    expect(seen.size).toBe(session.total);
    expect(session.remaining).toBe(0);

    // Reshuffles and keeps serving once the deck is exhausted.
    expect(session.next().correctItem).toBeDefined();
  });
});

describe('romaji mode (see kana, type romaji)', () => {
  it('accepts exactly the chart romaji, with ぢ=ji and づ=zu', () => {
    const questions = drawAll('hiragana', 'romaji', 'dakuten');
    const find = (char: string) => questions.find((q) => q.correctItem.char === char)!;

    expect(find('ぢ').correctAnswers).toEqual(['ji']);
    expect(find('づ').correctAnswers).toEqual(['zu']);
    expect(find('じ').correctAnswers).toEqual(['ji']);
    expect(find('ず').correctAnswers).toEqual(['zu']);

    for (const question of questions) {
      expect(question.correctAnswers).toEqual([question.correctItem.romaji]);
    }
  });
});

describe('character mode (see romaji, pick kana)', () => {
  it('single script: the only matching-reading option is the correct kana', () => {
    const questions = drawAll('hiragana', 'character', 'dakuten');
    const dji = questions.find((q) => q.correctItem.char === 'ぢ')!;

    expect(dji.correctAnswers).toEqual(['ぢ']);
    const chars = dji.optionItems.map((item) => item.char);
    expect(chars).toContain('ぢ');
    // じ also reads "ji" but must NOT appear as a competing option.
    expect(chars).not.toContain('じ');
  });

  it('all scripts: each question has exactly one correct kana and no same-reading rival', () => {
    const questions = drawAll('all', 'character', 'dakuten');

    for (const question of questions) {
      expect(question.correctAnswers).toEqual([question.correctItem.char]);
      const sameReading = question.optionItems.filter(
        (item) => item.romaji === question.correctItem.romaji
      );
      expect(sameReading).toHaveLength(1);
    }
  });
});

describe('every choice-mode question is answerable', () => {
  const modes: ExerciseMode[] = ['character', 'listen', 'script-pair'];
  const scripts: ExerciseScript[] = ['hiragana', 'katakana', 'all'];

  for (const mode of modes) {
    for (const script of scripts) {
      it(`includes all accepted answers among the options (${mode}, ${script})`, () => {
        for (const question of drawAll(script, mode)) {
          const chars = question.optionItems.map((item) => item.char);
          for (const answer of question.correctAnswers) {
            expect(chars).toContain(answer);
          }
        }
      });
    }
  }
});
