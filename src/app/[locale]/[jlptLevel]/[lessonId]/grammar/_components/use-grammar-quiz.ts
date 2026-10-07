import { useEffect, useRef, useState } from 'react';
import type { Lesson } from '@/constants/courses/index.ts';
import type { Locale } from '@/i18n/translations.ts';
import { createGrammarSession, type GrammarQuestion, type GrammarSession } from './grammar-quiz.ts';

type UseGrammarQuizOptions = {
  lesson: Lesson;
  locale: Locale;
};

// Preference/locale changes remount via `key`. Retry rebuilds the session in place.
export function useGrammarQuiz({ lesson, locale }: UseGrammarQuizOptions) {
  const [initial] = useState(() => {
    const session = createGrammarSession(lesson, locale);

    return { session, question: session.next() };
  });
  const sessionRef = useRef<GrammarSession>(initial.session);
  const [total] = useState(initial.session.total);
  const [question, setQuestion] = useState<GrammarQuestion>(initial.question);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const isLast = total > 0 && questionNumber >= total - 1;

  const handleSelect = (optionId: string) => {
    if (finished || answeredCorrectly || wrongIds.includes(optionId)) {
      return;
    }

    if (optionId === question.correctId) {
      setAnsweredCorrectly(true);

      if (wrongIds.length === 0) {
        setScore((previous) => previous + 1);
      }
    } else {
      setWrongIds((previous) => [...previous, optionId]);
    }
  };

  const handleRetry = () => {
    const session = createGrammarSession(lesson, locale);
    sessionRef.current = session;
    setQuestion(session.next());
    setQuestionNumber(0);
    setWrongIds([]);
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
      setWrongIds([]);
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
    wrongIds,
    answeredCorrectly,
    handleSelect,
    handleRetry
  };
}
