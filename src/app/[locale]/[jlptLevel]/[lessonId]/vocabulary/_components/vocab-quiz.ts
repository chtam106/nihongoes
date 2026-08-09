import { referenceVocabItems } from '@/constants/courses/index.ts';
import type { Lesson, RubySegment, VocabItem } from '@/constants/courses/index.ts';
import type { Locale } from '@/i18n/translations.ts';

export type VocabMode = 'word-meaning' | 'meaning-word';

/** Which written form(s) of each word to quiz: kana only, kanji only, or both. */
export type VocabScript = 'kana' | 'kanji' | 'all';

/** Vocabulary exercise layout: tap-to-match pairs or four-option MCQ. */
export type VocabExerciseFormat = 'match' | 'mcq';

export type VocabOption = {
  id: string;
  label: string;
  ja: boolean;
};

export type VocabQuestion = {
  mode: VocabMode;
  /** Text shown as the prompt (a Japanese word, or a meaning). */
  promptText: string;
  promptJa: boolean;
  /** Per-kanji ruby for Japanese prompt text. */
  promptRuby?: RubySegment[];
  /** Kana reading of the word, for text-to-speech. */
  speech: string;
  options: VocabOption[];
  correctId: string;
};

/**
 * An endless quiz session: `next()` draws a fresh question without repeating any
 * word until the whole pool is used, then reshuffles and starts a new cycle.
 */
export type VocabSession = {
  next: () => VocabQuestion;
  total: number;
};

/** Number of word-meaning pairs visible at once. */
export const VOCAB_MATCH_BATCH_SIZE = 5;

/** Five hues - no orange/amber or blue/teal pairs. */
export const VOCAB_MATCH_PAIR_PALETTE = [
  '#e65100', // orange
  '#6a1b9a', // purple
  '#c2185b', // magenta
  '#2e7d32', // green
  '#5d4037' // brown
] as const;

/** Dark blue border while the user is picking a pair. */
export const VOCAB_MATCH_SELECTED_BORDER_COLOR = '#1565c0';

/** Pause after the last match in a batch before fading out. */
export const VOCAB_MATCH_BATCH_PAUSE_MS = 400;

/** Fade-out / fade-in duration when swapping batches. */
export const VOCAB_MATCH_BATCH_FADE_MS = 200;

export type VocabMatchPair = {
  id: string;
  surface: string;
  speech: string;
  meaning: string;
  ruby?: RubySegment[];
};

type VocabEntry = {
  surface: string;
  speech: string;
  meaning: string;
  ruby?: RubySegment[];
};

/**
 * Draws pairs from a shuffled lesson pool. When the pool empties mid-cycle,
 * `drawNext` returns null until `reshufflePool` starts a fresh pass.
 */
export type VocabMatchSession = {
  totalPairs: number;
  fill: (count: number) => VocabMatchPair[];
  drawNext: () => VocabMatchPair | null;
  reshufflePool: () => void;
};

const OPTION_COUNT = 4;

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function unique(values: string[]): string[] {
  return Array.from(new Set(values));
}

function collectItems(lesson: Lesson, includeReference: boolean): VocabItem[] {
  const core = [...lesson.vocab];

  if (!includeReference) {
    return core;
  }

  return [...core, ...referenceVocabItems(lesson.reference, { quizOnly: true })];
}

/**
 * Expand the lesson vocabulary into per-surface quiz entries.
 * `script` picks the written form: `kana` uses every word's kana form, `kanji`
 * only the words that have a kanji form (in kanji), and `all` uses both.
 */
export function buildVocabEntries(
  lesson: Lesson,
  locale: Locale,
  script: VocabScript,
  includeReference = false
): VocabEntry[] {
  const entries: VocabEntry[] = [];

  for (const item of collectItems(lesson, includeReference)) {
    const meaning = item.meaning[locale];
    const speech = item.speech ?? item.kana;
    const hasKanji = Boolean(item.kanji && item.kanji !== item.kana);

    if (script === 'kana' || script === 'all') {
      entries.push({ surface: item.kana, speech, meaning });
    }

    if ((script === 'kanji' || script === 'all') && hasKanji) {
      entries.push({
        surface: item.kanji!,
        speech,
        meaning,
        ruby: item.ruby
      });
    }
  }

  return entries;
}

function buildOptions(
  correctLabel: string,
  ja: boolean,
  pool: string[]
): { options: VocabOption[]; correctId: string } {
  const distractors = shuffle(unique(pool.filter((label) => label !== correctLabel))).slice(
    0,
    OPTION_COUNT - 1
  );
  const labels = shuffle([correctLabel, ...distractors]);
  const options = labels.map((label, index) => ({ id: `opt-${index}`, label, ja }));
  const correctId = options.find((option) => option.label === correctLabel)!.id;

  return { options, correctId };
}

function buildQuestion(
  entry: VocabEntry,
  mode: VocabMode,
  entries: VocabEntry[],
  meaningPool: string[]
): VocabQuestion {
  if (mode === 'word-meaning') {
    const { options, correctId } = buildOptions(entry.meaning, false, meaningPool);

    return {
      mode,
      promptText: entry.surface,
      promptJa: true,
      promptRuby: entry.ruby,
      speech: entry.speech,
      options,
      correctId
    };
  }

  // Exclude every surface that shares the prompt's meaning (e.g. a word's kanji
  // and kana forms) so the kana/kanji twin can never appear as a second correct
  // option.
  const distractorSurfaces = entries
    .filter((candidate) => candidate.meaning !== entry.meaning)
    .map((candidate) => candidate.surface);
  const { options, correctId } = buildOptions(entry.surface, true, distractorSurfaces);

  return {
    mode,
    promptText: entry.meaning,
    promptJa: false,
    speech: entry.speech,
    options,
    correctId
  };
}

export function createVocabSession(
  lesson: Lesson,
  locale: Locale,
  mode: VocabMode,
  script: VocabScript,
  includeReference = false
): VocabSession {
  const entries = buildVocabEntries(lesson, locale, script, includeReference);
  const meaningPool = unique(entries.map((entry) => entry.meaning));
  let remaining = shuffle([...entries]);

  return {
    total: entries.length,
    next() {
      if (entries.length === 0) {
        throw new Error(`No vocabulary for lesson: ${lesson.id}`);
      }

      if (remaining.length === 0) {
        remaining = shuffle([...entries]);
      }

      return buildQuestion(remaining.pop()!, mode, entries, meaningPool);
    }
  };
}

function toMatchPair(entry: VocabEntry, serial: number): VocabMatchPair {
  return {
    id: `pair-${serial}`,
    surface: entry.surface,
    speech: entry.speech,
    meaning: entry.meaning,
    ruby: entry.ruby
  };
}

export function createVocabMatchSession(
  lesson: Lesson,
  locale: Locale,
  script: VocabScript,
  includeReference = false
): VocabMatchSession {
  const allEntries = buildVocabEntries(lesson, locale, script, includeReference);

  if (allEntries.length === 0) {
    throw new Error(`No vocabulary for lesson: ${lesson.id}`);
  }

  let pool: VocabEntry[] = shuffle([...allEntries]);
  let pairSerial = 0;

  const reshufflePool = () => {
    pool = shuffle([...allEntries]);
  };

  const drawNext = (): VocabMatchPair | null => {
    if (pool.length === 0) {
      return null;
    }

    const entry = pool.shift()!;
    pairSerial += 1;

    return toMatchPair(entry, pairSerial);
  };

  const fill = (count: number): VocabMatchPair[] => {
    const pairs: VocabMatchPair[] = [];

    for (let index = 0; index < count; index += 1) {
      const pair = drawNext();
      if (!pair) {
        break;
      }
      pairs.push(pair);
    }

    return pairs;
  };

  return {
    totalPairs: allEntries.length,
    fill,
    drawNext,
    reshufflePool
  };
}

/** Shuffled meaning column with no row showing its own word-meaning pair. */
export function shuffleMatchMeanings(pairs: VocabMatchPair[]): VocabMatchPair[] {
  if (pairs.length <= 1) {
    return [...pairs];
  }

  for (let attempt = 0; attempt < 50; attempt += 1) {
    const shuffled = shuffle([...pairs]);

    if (shuffled.every((pair, index) => pair.id !== pairs[index]!.id)) {
      return shuffled;
    }
  }

  return [...pairs.slice(1), pairs[0]!];
}

/** Initial visible slot count for a lesson pool. */
export function initialVocabMatchSlotCount(totalPairs: number): number {
  return Math.min(VOCAB_MATCH_BATCH_SIZE, totalPairs);
}
