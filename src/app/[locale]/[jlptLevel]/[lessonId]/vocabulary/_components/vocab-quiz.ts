import type { Lesson, VocabItem } from '@/constants/courses/index.ts';
import type { Locale } from '@/i18n/translations.ts';

export type VocabMode = 'word-meaning' | 'meaning-word';

/** Which written form(s) of each word to quiz: kana only, kanji only, or both. */
export type VocabScript = 'kana' | 'kanji' | 'all';

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

// One drawable turn. A word with a kanji form yields two entries (its kana
// glyph and its kanji glyph) so each surface is quizzed once per cycle.
type VocabEntry = {
  surface: string;
  speech: string;
  meaning: string;
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

function collectItems(lesson: Lesson): VocabItem[] {
  const referenceItems = (lesson.reference ?? []).flatMap((group) => group.items);

  return [...lesson.vocab, ...(lesson.phrases ?? []), ...referenceItems];
}

/**
 * Expand the lesson's core + reference vocabulary into per-surface quiz entries.
 * `script` picks the written form: `kana` uses every word's kana form, `kanji`
 * only the words that have a kanji form (in kanji), and `all` uses both.
 */
export function buildVocabEntries(
  lesson: Lesson,
  locale: Locale,
  script: VocabScript
): VocabEntry[] {
  const entries: VocabEntry[] = [];

  for (const item of collectItems(lesson)) {
    const meaning = item.meaning[locale];
    const speech = item.speech ?? item.kana;
    const hasKanji = Boolean(item.kanji && item.kanji !== item.kana);

    if (script === 'kana' || script === 'all') {
      entries.push({ surface: item.kana, speech, meaning });
    }

    if ((script === 'kanji' || script === 'all') && hasKanji) {
      entries.push({ surface: item.kanji!, speech, meaning });
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
  script: VocabScript
): VocabSession {
  const entries = buildVocabEntries(lesson, locale, script);
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
