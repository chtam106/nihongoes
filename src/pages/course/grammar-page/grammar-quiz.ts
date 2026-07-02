import type { Lesson } from '@/constants/courses/index.ts';
import type { Locale } from '@/i18n/translations.ts';
import { splitHighlightedText, type HighlightTerm } from '@/utils/grammar-highlight.ts';

function flattenHighlights(highlights: HighlightTerm[]): string[] {
  return highlights.flatMap((entry) => (Array.isArray(entry) ? entry : [entry]));
}

export type GrammarOption = {
  id: string;
  label: string;
};

export type GrammarQuestion = {
  /** Sentence text before the blank. */
  before: string;
  /** Sentence text after the blank. */
  after: string;
  /** The grammar piece that fills the blank (the correct answer). */
  answer: string;
  /** The complete sentence, for text-to-speech once solved. */
  fullText: string;
  meaning: string;
  options: GrammarOption[];
  correctId: string;
};

export type GrammarSession = {
  next: () => GrammarQuestion;
  total: number;
};

// A single fill-in-the-blank drawn from one example sentence, blanking one of
// its fixed grammar pieces (particle / ending / demonstrative).
type ClozeSeed = {
  before: string;
  after: string;
  answer: string;
  fullText: string;
  meaning: string;
};

const OPTION_COUNT = 4;

// Demonstratives are single words; never blank a grammar piece that merely sits
// inside one (e.g. the の in あの), only standalone particles/endings.
const DEMONSTRATIVES = ['これ', 'それ', 'あれ', 'どれ', 'この', 'その', 'あの', 'どの'];

function isInsideDemonstrative(before: string, answer: string, after: string): boolean {
  return DEMONSTRATIVES.some((word) => {
    if (word.length <= answer.length) {
      return false;
    }

    const at = word.indexOf(answer);
    if (at === -1) {
      return false;
    }

    return before.endsWith(word.slice(0, at)) && after.startsWith(word.slice(at + answer.length));
  });
}

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

/** Build one cloze per fixed grammar piece found in each example sentence. */
export function buildGrammarClozes(lesson: Lesson, locale: Locale): ClozeSeed[] {
  const seeds: ClozeSeed[] = [];

  for (const point of lesson.grammar) {
    for (const example of point.examples) {
      const segments = splitHighlightedText(example.jp, point.highlights);

      segments.forEach((segment, index) => {
        if (segment.termIndex === null) {
          return;
        }

        const before = segments
          .slice(0, index)
          .map((piece) => piece.text)
          .join('');
        const after = segments
          .slice(index + 1)
          .map((piece) => piece.text)
          .join('');

        if (isInsideDemonstrative(before, segment.text, after)) {
          return;
        }

        seeds.push({
          before,
          after,
          answer: segment.text,
          fullText: example.jp,
          meaning: example.meaning[locale]
        });
      });
    }
  }

  return seeds;
}

/** Every fixed grammar piece taught in the lesson, used as the distractor pool. */
function grammarTermPool(lesson: Lesson): string[] {
  return unique(lesson.grammar.flatMap((point) => flattenHighlights(point.highlights)));
}

function buildQuestion(seed: ClozeSeed, pool: string[]): GrammarQuestion {
  const distractors = shuffle(unique(pool.filter((term) => term !== seed.answer))).slice(
    0,
    OPTION_COUNT - 1
  );
  const labels = shuffle([seed.answer, ...distractors]);
  const options = labels.map((label, index) => ({ id: `opt-${index}`, label }));
  const correctId = options.find((option) => option.label === seed.answer)!.id;

  return {
    before: seed.before,
    after: seed.after,
    answer: seed.answer,
    fullText: seed.fullText,
    meaning: seed.meaning,
    options,
    correctId
  };
}

export function createGrammarSession(lesson: Lesson, locale: Locale): GrammarSession {
  const seeds = buildGrammarClozes(lesson, locale);
  const pool = grammarTermPool(lesson);
  let remaining = shuffle([...seeds]);

  return {
    total: seeds.length,
    next() {
      if (seeds.length === 0) {
        throw new Error(`No grammar clozes for lesson: ${lesson.id}`);
      }

      if (remaining.length === 0) {
        remaining = shuffle([...seeds]);
      }

      return buildQuestion(remaining.pop()!, pool);
    }
  };
}
