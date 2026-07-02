import { useEffect, useRef, useState } from 'react';
import type { Lesson } from '@/constants/courses/index.ts';
import type { Locale } from '@/i18n/translations.ts';
import {
  createVocabSession,
  type VocabMode,
  type VocabQuestion,
  type VocabScript,
  type VocabSession
} from './vocab-quiz.ts';

type UseVocabQuizOptions = {
  lesson: Lesson;
  locale: Locale;
  mode: VocabMode;
  script: VocabScript;
};

// No effect-driven reset: the consumer remounts the quiz via a `key` derived
// from lesson/locale/mode/script, which reruns the `useState` initializer with a
// fresh endless session.
export function useVocabQuiz({ lesson, locale, mode, script }: UseVocabQuizOptions) {
  const [initial] = useState(() => {
    const session = createVocabSession(lesson, locale, mode, script);

    return { session, question: session.next() };
  });
  const sessionRef = useRef<VocabSession>(initial.session);
  const [question, setQuestion] = useState<VocabQuestion>(initial.question);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  const handleSelect = (optionId: string) => {
    if (answeredCorrectly || wrongIds.includes(optionId)) {
      return;
    }

    if (optionId === question.correctId) {
      setAnsweredCorrectly(true);
    } else {
      setWrongIds((previous) => [...previous, optionId]);
    }
  };

  useEffect(() => {
    if (!answeredCorrectly) {
      return;
    }

    const timer = window.setTimeout(() => {
      setQuestion(sessionRef.current.next());
      setQuestionNumber((previous) => previous + 1);
      setWrongIds([]);
      setAnsweredCorrectly(false);
    }, 900);

    return () => {
      window.clearTimeout(timer);
    };
  }, [answeredCorrectly]);

  return {
    question,
    questionNumber,
    wrongIds,
    answeredCorrectly,
    handleSelect
  };
}
