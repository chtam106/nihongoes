import { referenceVocabItems } from '@/constants/courses/index.ts';
import type { Lesson, RubySegment, VocabItem } from '@/constants/courses/index.ts';
import type { Locale } from '@/i18n/translations.ts';

/** Which written form(s) of each word to quiz: kana only, kanji only, or both. */
export type VocabScript = 'kana' | 'kanji' | 'all';

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

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
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
