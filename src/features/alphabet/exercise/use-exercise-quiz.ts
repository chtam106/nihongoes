import { useEffect, useRef, useState } from 'react';
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
  const [finished, setFinished] = useState(false);

  const isLast = total > 0 && questionNumber >= total - 1;

  const handleAnswer = (answer: string) => {
    if (finished || answeredCorrectly || wrongAnswers.includes(answer)) {
      return;
    }

    if (isQuizAnswerCorrect(question, answer)) {
      setAnsweredCorrectly(true);

      if (wrongAnswers.length === 0) {
        setScore((previous) => previous + 1);
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
    }, 100);

    return () => {
      window.clearTimeout(timer);
    };
  }, [answeredCorrectly, isLast]);

  return {
    question,
    questionNumber,
    total,
    score,
    finished,
    wrongAnswers,
    answeredCorrectly,
    handleAnswer,
    handleRetry
  };
}
