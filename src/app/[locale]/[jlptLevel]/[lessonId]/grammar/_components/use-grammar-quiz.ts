import { useEffect, useRef, useState } from 'react';
import type { CourseLevel, Lesson } from '@/constants/courses/index.ts';
import { QUIZ_ADVANCE_DELAY_MS } from '@/constants/quiz.ts';
import type { Locale } from '@/i18n/translations.ts';
import type { QuizSegmentResult } from '@/components/quiz-progress-bar';
import type { QuizMiss } from '@/components/quiz-miss-list';
import { createGrammarSession, type GrammarQuestion, type GrammarSession } from './grammar-quiz.ts';

function grammarChoice(question: GrammarQuestion, optionId: string) {
  const option = question.options.find((item) => item.id === optionId);

  return {
    text: option?.label ?? '',
    ruby: option?.ruby,
    japanese: true
  };
}

function grammarMiss(question: GrammarQuestion, questionNumber: number): QuizMiss {
  return {
    id: `${questionNumber}:${question.correctId}`,
    prompt: [
      { text: question.before, ruby: question.beforeRuby, japanese: true },
      { text: '', blank: true },
      { text: question.after, ruby: question.afterRuby, japanese: true }
    ],
    note: question.meaning,
    answer: grammarChoice(question, question.correctId)
  };
}

type UseGrammarQuizOptions = {
  lesson: Lesson;
  level: CourseLevel;
  locale: Locale;
};

// Preference/locale changes remount via `key`. Retry rebuilds the session in place.
export function useGrammarQuiz({ lesson, level, locale }: UseGrammarQuizOptions) {
  const [initial] = useState(() => {
    const session = createGrammarSession(lesson, locale, level);

    return { session, question: session.next() };
  });
  const sessionRef = useRef<GrammarSession>(initial.session);
  const [total] = useState(initial.session.total);
  const [question, setQuestion] = useState<GrammarQuestion>(initial.question);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<QuizSegmentResult[]>([]);
  const [misses, setMisses] = useState<QuizMiss[]>([]);
  const [finished, setFinished] = useState(false);

  const isLast = total > 0 && questionNumber >= total - 1;

  const handleSelect = (optionId: string) => {
    if (finished || answeredCorrectly || wrongIds.includes(optionId)) {
      return;
    }

    if (optionId === question.correctId) {
      const firstTry = wrongIds.length === 0;
      setAnsweredCorrectly(true);
      setResults((previous) => [...previous, firstTry ? 'correct' : 'incorrect']);

      if (firstTry) {
        setScore((previous) => previous + 1);
      } else {
        setMisses((previous) => [...previous, grammarMiss(question, questionNumber)]);
      }
    } else {
      setWrongIds((previous) => [...previous, optionId]);
    }
  };

  const handleRetry = () => {
    const session = createGrammarSession(lesson, locale, level);
    sessionRef.current = session;
    setQuestion(session.next());
    setQuestionNumber(0);
    setWrongIds([]);
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
      setWrongIds([]);
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
    wrongIds,
    answeredCorrectly,
    handleSelect,
    handleRetry
  };
}
