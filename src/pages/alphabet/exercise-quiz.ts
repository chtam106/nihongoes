import { getAlphabetItems, type AlphabetCell, type ExerciseScope } from '@/constants/alphabet-charts.ts'

export type { ExerciseScope }

export type Script = 'hiragana' | 'katakana'
export type ExerciseMode = 'romaji' | 'character'

export type QuizQuestion = {
  mode: ExerciseMode
  correctItem: AlphabetCell
  optionItems: AlphabetCell[]
  correctAnswer: string
}

export type QuizSession = {
  next: () => QuizQuestion
  remaining: number
  total: number
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]]
  }

  return copy
}

function pickOptionItems(allItems: AlphabetCell[], correctItem: AlphabetCell): AlphabetCell[] {
  const otherItems = allItems.filter((item) => item.romaji !== correctItem.romaji)
  const distractorCount = Math.min(3, otherItems.length)

  return shuffle([correctItem, ...shuffle(otherItems).slice(0, distractorCount)])
}

function buildQuestion(
  correctItem: AlphabetCell,
  allItems: AlphabetCell[],
  mode: ExerciseMode,
): QuizQuestion {
  const optionItems = pickOptionItems(allItems, correctItem)

  if (mode === 'romaji') {
    return {
      mode,
      correctItem,
      optionItems,
      correctAnswer: correctItem.romaji,
    }
  }

  return {
    mode,
    correctItem,
    optionItems,
    correctAnswer: correctItem.char,
  }
}

export function createQuizSession(
  script: Script,
  mode: ExerciseMode,
  scope: ExerciseScope = 'all',
): QuizSession {
  const allItems = getAlphabetItems(script, scope)
  let remaining = shuffle([...allItems])

  return {
    get remaining() {
      return remaining.length
    },
    total: allItems.length,
    next() {
      if (remaining.length === 0) {
        remaining = shuffle([...allItems])
      }

      const correctItem = remaining.pop()!

      return buildQuestion(correctItem, allItems, mode)
    },
  }
}
