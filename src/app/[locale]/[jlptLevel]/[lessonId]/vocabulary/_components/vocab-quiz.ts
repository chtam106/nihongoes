import { getAllCourseLessons, referenceVocabItems } from '@/constants/courses/index.ts';
import type {
  Lesson,
  CourseLevel,
  RubySegment,
  VocabItem,
  VocabPartOfSpeech
} from '@/constants/courses/index.ts';
import { flashcardCardId, type FlashcardCardType } from '@/constants/flashcards/collections.ts';
import type { Locale } from '@/i18n/translations.ts';

export type VocabMode = 'word-meaning' | 'meaning-word';

/** Vocabulary exercise layout: tap-to-match pairs or four-option MCQ. */
export type VocabExerciseFormat = 'match' | 'mcq';

export type VocabOption = {
  id: string;
  label: string;
  ja: boolean;
  /** Per-kanji ruby when the option is a Japanese surface. */
  ruby?: RubySegment[];
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
  /** Collection id when the prompt is a lesson vocab word or phrase. */
  cardId?: string;
  cardType?: FlashcardCardType;
};

/**
 * A vocab MCQ session: `next()` draws without repeating until the pool is used.
 * The UI finishes after `total` questions; reshuffle is only a safety net if
 * `next()` is called again (e.g. tests).
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
  cardId?: string;
  cardType?: FlashcardCardType;
};

type VocabEntry = {
  surface: string;
  speech: string;
  meaning: string;
  partOfSpeech: VocabPartOfSpeech;
  meaningPartOfSpeech: VocabPartOfSpeech;
  ruby?: RubySegment[];
  cardId?: string;
  cardType?: FlashcardCardType;
};

type TaggedVocabItem = {
  item: VocabItem;
  cardId?: string;
  cardType?: FlashcardCardType;
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

function collectItems(lesson: Lesson, includeReference: boolean): TaggedVocabItem[] {
  const core: TaggedVocabItem[] = [
    ...lesson.vocab.map((item, index) => ({
      item,
      cardId: flashcardCardId(lesson.number, index),
      cardType: 'vocab' as const
    })),
    ...(lesson.phrases ?? []).map((item, index) => ({
      item,
      cardId: flashcardCardId(lesson.number, lesson.vocab.length + index),
      cardType: 'phrase' as const
    }))
  ];

  if (!includeReference) {
    return core;
  }

  return [
    ...core,
    ...referenceVocabItems(lesson.reference, { quizOnly: true }).map((item) => ({ item }))
  ];
}

/**
 * One quiz entry per word: the kanji form when it differs from kana (furigana
 * carries the reading), otherwise the kana form.
 */
export function buildVocabEntries(
  lesson: Lesson,
  locale: Locale,
  includeReference = false
): VocabEntry[] {
  const entries: VocabEntry[] = [];

  for (const tagged of collectItems(lesson, includeReference)) {
    const { item } = tagged;
    const meaning = item.meaning[locale];
    const speech = item.speech ?? item.kana;
    const hasKanji = Boolean(item.kanji && item.kanji !== item.kana);
    const save = {
      cardId: tagged.cardId,
      cardType: tagged.cardType,
      partOfSpeech: item.partOfSpeech,
      meaningPartOfSpeech: item.meaningPartOfSpeech?.[locale] ?? item.partOfSpeech
    };

    if (hasKanji) {
      entries.push({
        surface: item.kanji!,
        speech,
        meaning,
        ruby: item.ruby,
        ...save
      });
    } else {
      entries.push({ surface: item.kana, speech, meaning, ...save });
    }
  }

  return entries;
}

function rubyBySurface(entries: VocabEntry[]): Map<string, RubySegment[] | undefined> {
  const map = new Map<string, RubySegment[] | undefined>();

  for (const entry of entries) {
    if (!map.has(entry.surface)) {
      map.set(entry.surface, entry.ruby);
    }
  }

  return map;
}

function buildOptions(
  correctLabel: string,
  ja: boolean,
  pools: string[][],
  rubyForLabel?: Map<string, RubySegment[] | undefined>
): { options: VocabOption[]; correctId: string } {
  const seen = new Set([correctLabel]);
  const distractors: string[] = [];
  for (const pool of pools) {
    const labels = shuffle(unique(pool.filter((label) => !seen.has(label))));
    for (const label of labels) {
      seen.add(label);
      distractors.push(label);
      if (distractors.length === OPTION_COUNT - 1) {
        break;
      }
    }
    if (distractors.length === OPTION_COUNT - 1) {
      break;
    }
  }
  if (distractors.length !== OPTION_COUNT - 1) {
    throw new Error(`Not enough vocabulary distractors for: ${correctLabel}`);
  }
  const labels = shuffle([correctLabel, ...distractors]);
  const options = labels.map((label, index) => ({
    id: `opt-${index}`,
    label,
    ja,
    ruby: ja ? rubyForLabel?.get(label) : undefined
  }));
  const correctId = options.find((option) => option.label === correctLabel)!.id;

  return { options, correctId };
}

function buildQuestion(
  entry: VocabEntry,
  mode: VocabMode,
  entries: VocabEntry[],
  nearbyEntries: VocabEntry[][],
  meaningsBySurface: Map<string, Set<string>>,
  surfacesByMeaning: Map<string, Set<string>>
): VocabQuestion {
  const equivalentMeanings = meaningsBySurface.get(entry.surface)!;
  const equivalentSurfaces = surfacesByMeaning.get(entry.meaning)!;
  const candidates = (pool: VocabEntry[]) =>
    pool.filter(
      (candidate) =>
        (mode === 'word-meaning'
          ? candidate.meaningPartOfSpeech === entry.meaningPartOfSpeech
          : candidate.partOfSpeech === entry.partOfSpeech) &&
        !equivalentSurfaces.has(candidate.surface) &&
        !equivalentMeanings.has(candidate.meaning)
    );
  const localCandidates = candidates(entries);
  const nearbyCandidates = nearbyEntries.map(candidates);
  const candidateGroups = [localCandidates, ...nearbyCandidates];

  if (mode === 'word-meaning') {
    const { options, correctId } = buildOptions(
      entry.meaning,
      false,
      candidateGroups.map((group) => group.map((candidate) => candidate.meaning))
    );

    return {
      mode,
      promptText: entry.surface,
      promptJa: true,
      promptRuby: entry.ruby,
      speech: entry.speech,
      options,
      correctId,
      cardId: entry.cardId,
      cardType: entry.cardType
    };
  }

  const { options, correctId } = buildOptions(
    entry.surface,
    true,
    candidateGroups.map((group) => group.map((candidate) => candidate.surface)),
    rubyBySurface([entry, ...candidateGroups.flat()])
  );

  return {
    mode,
    promptText: entry.meaning,
    promptJa: false,
    speech: entry.speech,
    options,
    correctId,
    cardId: entry.cardId,
    cardType: entry.cardType
  };
}

export function createVocabSession(
  lesson: Lesson,
  locale: Locale,
  mode: VocabMode,
  level: CourseLevel,
  includeReference = false
): VocabSession {
  const entries = buildVocabEntries(lesson, locale, includeReference);
  const lessons = getAllCourseLessons();
  const currentIndex = lessons.findIndex(
    (candidate) => candidate.level === level && candidate.lesson.id === lesson.id
  );
  if (currentIndex === -1) {
    throw new Error(`Unknown vocabulary lesson: ${level}/${lesson.id}`);
  }
  const nearbyEntries: VocabEntry[][] = [];
  for (let distance = 1; distance < lessons.length; distance += 1) {
    const nearby = [lessons[currentIndex - distance], lessons[currentIndex + distance]];
    nearbyEntries.push(
      nearby.flatMap((candidate) =>
        candidate ? buildVocabEntries(candidate.lesson, locale, includeReference) : []
      )
    );
  }
  const otherEntries = nearbyEntries.flat();
  const meaningsBySurface = new Map<string, Set<string>>();
  const surfacesByMeaning = new Map<string, Set<string>>();
  for (const entry of [...entries, ...otherEntries]) {
    const meanings = meaningsBySurface.get(entry.surface) ?? new Set<string>();
    meanings.add(entry.meaning);
    meaningsBySurface.set(entry.surface, meanings);
    const surfaces = surfacesByMeaning.get(entry.meaning) ?? new Set<string>();
    surfaces.add(entry.surface);
    surfacesByMeaning.set(entry.meaning, surfaces);
  }
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

      return buildQuestion(
        remaining.pop()!,
        mode,
        entries,
        nearbyEntries,
        meaningsBySurface,
        surfacesByMeaning
      );
    }
  };
}

function toMatchPair(entry: VocabEntry, serial: number): VocabMatchPair {
  return {
    id: `pair-${serial}`,
    surface: entry.surface,
    speech: entry.speech,
    meaning: entry.meaning,
    ruby: entry.ruby,
    cardId: entry.cardId,
    cardType: entry.cardType
  };
}

export function createVocabMatchSession(
  lesson: Lesson,
  locale: Locale,
  includeReference = false
): VocabMatchSession {
  const allEntries = buildVocabEntries(lesson, locale, includeReference);

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

/** A match session over given pairs only: a round of the pairs missed last time. */
export function vocabMatchSessionFromPairs(pairs: VocabMatchPair[]): VocabMatchSession {
  let pool = shuffle([...pairs]);

  const drawNext = (): VocabMatchPair | null => pool.shift() ?? null;

  return {
    totalPairs: pairs.length,
    fill: (count) => {
      const drawn: VocabMatchPair[] = [];

      for (let index = 0; index < count; index += 1) {
        const pair = drawNext();
        if (!pair) {
          break;
        }
        drawn.push(pair);
      }

      return drawn;
    },
    drawNext,
    reshufflePool: () => {
      pool = shuffle([...pairs]);
    }
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
