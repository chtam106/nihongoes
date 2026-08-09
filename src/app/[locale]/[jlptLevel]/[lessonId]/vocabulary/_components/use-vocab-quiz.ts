import { useEffect, useRef, useState } from 'react';
import type { Lesson } from '@/constants/courses/index.ts';
import type { Locale } from '@/i18n/translations.ts';
import {
  createVocabMatchSession,
  createVocabSession,
  initialVocabMatchSlotCount,
  shuffleMatchMeanings,
  VOCAB_MATCH_BATCH_FADE_MS,
  VOCAB_MATCH_BATCH_PAUSE_MS,
  type VocabMatchPair,
  type VocabMatchSession,
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
  includeReference: boolean;
};

// No effect-driven reset: the consumer remounts the quiz via a `key` derived
// from lesson/locale/mode/script/includeReference, which reruns the `useState`
// initializer with a fresh endless session.
export function useVocabQuiz({
  lesson,
  locale,
  mode,
  script,
  includeReference
}: UseVocabQuizOptions) {
  const [initial] = useState(() => {
    const session = createVocabSession(lesson, locale, mode, script, includeReference);

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
    }, 100);

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

type UseVocabMatchOptions = {
  lesson: Lesson;
  locale: Locale;
  script: VocabScript;
  includeReference: boolean;
};

function drawNextBatch(session: VocabMatchSession): {
  nextPairs: VocabMatchPair[];
  nextMeaningOrder: VocabMatchPair[];
} {
  const nextPairs = session.fill(initialVocabMatchSlotCount(session.totalPairs));

  return {
    nextPairs,
    nextMeaningOrder: shuffleMatchMeanings(nextPairs)
  };
}

// Remount via `key` on script/includeReference changes for a fresh session.
export function useVocabMatch({ lesson, locale, script, includeReference }: UseVocabMatchOptions) {
  const [initial] = useState(() => {
    const session = createVocabMatchSession(lesson, locale, script, includeReference);
    const activePairs = session.fill(initialVocabMatchSlotCount(session.totalPairs));

    return {
      session,
      activePairs,
      meaningOrder: shuffleMatchMeanings(activePairs)
    };
  });
  const sessionRef = useRef<VocabMatchSession>(initial.session);
  const activePairsRef = useRef(initial.activePairs);
  const matchedPairColorsRef = useRef<Map<string, number>>(new Map());
  const totalMatchedRef = useRef(0);
  const transitionTimersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [totalPairs] = useState(initial.session.totalPairs);
  const [activePairs, setActivePairs] = useState<VocabMatchPair[]>(initial.activePairs);
  const [meaningOrder, setMeaningOrder] = useState(initial.meaningOrder);
  const [batchKey, setBatchKey] = useState(0);
  const [totalMatched, setTotalMatched] = useState(0);
  const [matchedPairColors, setMatchedPairColors] = useState<Map<string, number>>(() => new Map());
  const [selectedWordId, setSelectedWordId] = useState<string | null>(null);
  const [selectedMeaningId, setSelectedMeaningId] = useState<string | null>(null);
  const [batchVisible, setBatchVisible] = useState(true);

  useEffect(() => {
    activePairsRef.current = activePairs;
  }, [activePairs]);

  useEffect(() => {
    matchedPairColorsRef.current = matchedPairColors;
  }, [matchedPairColors]);

  useEffect(() => {
    totalMatchedRef.current = totalMatched;
  }, [totalMatched]);

  useEffect(() => {
    return () => {
      transitionTimersRef.current.forEach(clearTimeout);
      transitionTimersRef.current = [];
    };
  }, []);

  const clearTransitionTimers = () => {
    transitionTimersRef.current.forEach(clearTimeout);
    transitionTimersRef.current = [];
  };

  const scheduleBatchAdvance = (nextTotal: number) => {
    clearTransitionTimers();

    const pauseTimer = setTimeout(() => {
      setBatchVisible(false);

      const swapTimer = setTimeout(() => {
        const session = sessionRef.current;
        const lessonComplete = nextTotal >= session.totalPairs;

        if (lessonComplete) {
          session.reshufflePool();
        }

        const { nextPairs, nextMeaningOrder } = drawNextBatch(session);
        setActivePairs(nextPairs);
        setMeaningOrder(nextMeaningOrder);
        setMatchedPairColors(new Map());
        setBatchKey((key) => key + 1);
        setTotalMatched(lessonComplete ? 0 : nextTotal);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setBatchVisible(true);
          });
        });
      }, VOCAB_MATCH_BATCH_FADE_MS);

      transitionTimersRef.current.push(swapTimer);
    }, VOCAB_MATCH_BATCH_PAUSE_MS);

    transitionTimersRef.current.push(pauseTimer);
  };

  const applyCorrectMatch = (wordId: string) => {
    const activeCount = activePairsRef.current.length;
    const nextMatched = new Map(matchedPairColorsRef.current);
    const colorIndex = nextMatched.size;
    nextMatched.set(wordId, colorIndex);
    const nextTotal = totalMatchedRef.current + 1;

    setSelectedWordId(null);
    setSelectedMeaningId(null);
    setTotalMatched(nextTotal);
    setMatchedPairColors(nextMatched);

    if (nextMatched.size < activeCount) {
      return;
    }

    scheduleBatchAdvance(nextTotal);
  };

  const tryMatch = (wordId: string, meaningId: string) => {
    if (!batchVisible) {
      return;
    }

    if (matchedPairColors.has(wordId) || matchedPairColors.has(meaningId)) {
      return;
    }

    if (wordId === meaningId) {
      applyCorrectMatch(wordId);
      return;
    }

    setSelectedWordId(wordId);
    setSelectedMeaningId(meaningId);
  };

  const selectWord = (wordId: string) => {
    if (!batchVisible || matchedPairColors.has(wordId)) {
      return;
    }

    const nextWordId = selectedWordId === wordId ? null : wordId;
    setSelectedWordId(nextWordId);

    if (nextWordId && selectedMeaningId) {
      tryMatch(nextWordId, selectedMeaningId);
    }
  };

  const selectMeaning = (meaningId: string) => {
    if (!batchVisible || matchedPairColors.has(meaningId)) {
      return;
    }

    const nextMeaningId = selectedMeaningId === meaningId ? null : meaningId;
    setSelectedMeaningId(nextMeaningId);

    if (selectedWordId && nextMeaningId) {
      tryMatch(selectedWordId, nextMeaningId);
    }
  };

  return {
    activePairs,
    meaningOrder,
    batchKey,
    batchVisible,
    totalMatched,
    totalPairs,
    matchedPairColors,
    selectedWordId,
    selectedMeaningId,
    selectWord,
    selectMeaning
  };
}
