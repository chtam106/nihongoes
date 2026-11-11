import { useEffect, useRef, useState } from 'react';
import type { QuizSegmentResult } from '@/components/quiz-progress-bar';
import type { QuizMiss } from '@/components/quiz-miss-list';
import { QUIZ_ADVANCE_DELAY_MS } from '@/constants/quiz.ts';
import {
  createQuizSession,
  isQuizAnswerCorrect,
  type ExerciseMode,
  type ExerciseScope,
  type ExerciseScript,
  type QuizQuestion,
  type QuizSession,
  type ScriptPairDirection
} from '@/features/alphabet/exercise/exercise-quiz.ts';

function kanaCard(char: string): QuizMiss['card'] {
  const code = char.codePointAt(0) ?? 0;
  const hiragana = code >= 0x3040 && code <= 0x309f;
  const katakana = code >= 0x30a0 && code <= 0x30ff;

  if (!hiragana && !katakana) {
    return undefined;
  }

  return { id: `kana:${katakana ? 'k' : 'h'}:${char}`, type: 'kana' };
}

function choiceMiss(question: QuizQuestion, questionNumber: number): QuizMiss | undefined {
  if (question.mode === 'romaji') {
    return undefined;
  }

  const card =
    question.mode === 'script-pair'
      ? kanaCard(question.promptItem?.char ?? question.correctItem.char)
      : kanaCard(question.correctItem.char);

  if (question.mode === 'character') {
    return {
      id: String(questionNumber),
      prompt: [{ text: question.correctItem.romaji }],
      answer: { text: question.correctItem.char, japanese: true },
      card
    };
  }

  if (question.mode === 'script-pair') {
    return {
      id: String(questionNumber),
      prompt: [{ text: question.promptItem?.char ?? '', japanese: true }],
      answer: { text: question.correctItem.char, japanese: true },
      card
    };
  }

  return {
    id: String(questionNumber),
    prompt: [{ text: question.correctItem.char, japanese: true }],
    answer: { text: question.correctAnswers[0] ?? question.correctItem.romaji },
    card
  };
}

type UseExerciseQuizOptions = {
  mode: ExerciseMode;
  script: ExerciseScript;
  scope: ExerciseScope;
  pairDirection?: ScriptPairDirection;
};

// When script/mode/scope/direction change, the consumer remounts via `key`.
// Retry rebuilds the session in place after a finished run.
export function useExerciseQuiz({
  mode,
  script,
  scope,
  pairDirection = 'hiragana-to-katakana'
}: UseExerciseQuizOptions) {
  const [initialQuiz] = useState(() => {
    const session = createQuizSession(script, mode, scope, pairDirection);

    return { session, question: session.next() };
  });
  const sessionRef = useRef<QuizSession>(initialQuiz.session);
  const [total] = useState(initialQuiz.session.total);
  const [question, setQuestion] = useState<QuizQuestion>(initialQuiz.question);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<string[]>([]);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<QuizSegmentResult[]>([]);
  const [misses, setMisses] = useState<QuizMiss[]>([]);
  const [finished, setFinished] = useState(false);

  const isLast = total > 0 && questionNumber >= total - 1;

  const handleAnswer = (answer: string) => {
    if (finished || answeredCorrectly || wrongAnswers.includes(answer)) {
      return;
    }

    if (isQuizAnswerCorrect(question, answer)) {
      const firstTry = wrongAnswers.length === 0;
      setAnsweredCorrectly(true);
      setResults((previous) => [...previous, firstTry ? 'correct' : 'incorrect']);

      if (firstTry) {
        setScore((previous) => previous + 1);
      } else {
        const miss = choiceMiss(question, questionNumber);

        if (miss) {
          setMisses((previous) => [...previous, miss]);
        }
      }
    } else {
      setWrongAnswers((previous) => [...previous, answer]);
    }
  };

  const handleRetry = () => {
    const session = createQuizSession(script, mode, scope, pairDirection);
    sessionRef.current = session;
    setQuestion(session.next());
    setQuestionNumber(0);
    setWrongAnswers([]);
    setAnsweredCorrectly(false);
    setScore(0);
    setResults([]);
    setMisses([]);
    setFinished(false);
  };

  useEffect(() => {
    if (!answeredCorrectly) {
      return;
    }

    const timer = window.setTimeout(() => {
      if (isLast) {
        setFinished(true);
        return;
      }

      setQuestion(sessionRef.current.next());
      setQuestionNumber((previous) => previous + 1);
      setWrongAnswers([]);
      setAnsweredCorrectly(false);
    }, QUIZ_ADVANCE_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, [answeredCorrectly, isLast]);

  return {
    question,
    questionNumber,
    total,
    score,
    results,
    misses,
    finished,
    wrongAnswers,
    answeredCorrectly,
    handleAnswer,
    handleRetry
  };
}
