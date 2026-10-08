import {
  getCourse,
  referenceVocabItems,
  type CourseLevel,
  type Lesson,
  type RubySegment,
  type VocabItem
} from '@/constants/courses/index.ts';
import type { Locale } from '@/i18n/translations.ts';
import { splitHighlightedText, type HighlightTerm } from '@/utils/grammar-highlight.ts';

function flattenHighlights(highlights: HighlightTerm[]): string[] {
  return highlights.flatMap((entry) => (Array.isArray(entry) ? entry : [entry]));
}

export type GrammarOption = {
  id: string;
  label: string;
  ruby?: RubySegment[];
};

export type GrammarQuestion = {
  /** Sentence text before the blank. */
  before: string;
  beforeRuby?: RubySegment[];
  /** Sentence text after the blank. */
  after: string;
  afterRuby?: RubySegment[];
  /** The grammar piece that fills the blank (the correct answer). */
  answer: string;
  answerRuby?: RubySegment[];
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
  ruby?: RubySegment[];
  meaning: string;
};

/** Ruby segments whose base sits entirely inside [start, end) of `surface`. */
function rubyInRange(
  surface: string,
  ruby: RubySegment[] | undefined,
  start: number,
  end: number
): RubySegment[] | undefined {
  if (!ruby?.length) {
    return undefined;
  }

  const picked: RubySegment[] = [];
  let position = 0;
  let index = 0;

  while (position < surface.length && index < ruby.length) {
    const segment = ruby[index];

    if (surface.startsWith(segment.base, position)) {
      const segmentEnd = position + segment.base.length;

      if (position >= start && segmentEnd <= end) {
        picked.push(segment);
      }

      position = segmentEnd;
      index += 1;
      continue;
    }

    position += 1;
  }

  return picked.length ? picked : undefined;
}

const KANJI = /[\u4e00-\u9fff]/;

function coversAllKanji(term: string, ruby: RubySegment[] | undefined): boolean {
  if (!ruby?.length || !KANJI.test(term)) {
    return false;
  }

  const ranges: [number, number][] = [];
  let cursor = 0;

  for (const segment of ruby) {
    const at = term.indexOf(segment.base, cursor);

    if (at < 0) {
      return false;
    }

    ranges.push([at, at + segment.base.length]);
    cursor = at + segment.base.length;
  }

  return [...term].every((char, index) => {
    if (!KANJI.test(char)) {
      return true;
    }

    return ranges.some(([start, end]) => index >= start && index < end);
  });
}

/** Ruby for `term` taken from the slice of `surface` where that term actually sits. */
function rubyCoveringTerm(
  surface: string,
  ruby: RubySegment[] | undefined,
  term: string
): RubySegment[] | undefined {
  if (!ruby?.length || !term) {
    return undefined;
  }

  let from = 0;

  while (from < surface.length) {
    const at = surface.indexOf(term, from);

    if (at < 0) {
      return undefined;
    }

    const picked = rubyInRange(surface, ruby, at, at + term.length);

    if (coversAllKanji(term, picked)) {
      return picked;
    }

    from = at + term.length;
  }

  return undefined;
}

function normalizedVocabKanji(kanji: string): string {
  return kanji.replace(/\s*\[[^\]]+\]/g, '').trim();
}

/** 行きます also covers 行きません; ご存じです covers the highlight ご存じ. */
function vocabMatchesTerm(kanji: string, term: string): boolean {
  const surface = normalizedVocabKanji(kanji);

  if (surface === term) {
    return true;
  }

  const stem = surface.match(/^(.+?)ます$/)?.[1];

  if (stem && KANJI.test(stem) && term.startsWith(stem)) {
    return true;
  }

  const surfaceKanji = [...surface].filter((char) => KANJI.test(char)).join('');
  const termKanji = [...term].filter((char) => KANJI.test(char)).join('');

  return surface.startsWith(term) && surfaceKanji.length > 0 && surfaceKanji === termKanji;
}

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
          ruby: example.ruby,
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

function recordCover(
  map: Map<string, RubySegment[]>,
  term: string,
  picked: RubySegment[] | undefined
) {
  if (map.has(term) || !coversAllKanji(term, picked)) {
    return;
  }

  map.set(term, picked!);
}

type RubySurface = {
  text: string;
  ruby?: RubySegment[];
};

function lessonRubySurfaces(lesson: Lesson): RubySurface[] {
  const surfaces: RubySurface[] = [];

  const pushText = (text: string | undefined, ruby: RubySegment[] | undefined) => {
    if (text && ruby?.length) {
      surfaces.push({ text, ruby });
    }
  };

  for (const point of lesson.grammar) {
    for (const example of point.examples) {
      pushText(example.jp, example.ruby);
    }

    for (const example of point.answers?.examples ?? []) {
      pushText(example.jp, example.ruby);
    }

    pushText(point.pattern, point.patternRuby);
    pushText(point.explanation.en, point.explanationRuby);
    pushText(point.explanation.vi, point.explanationRuby);
    pushText(point.title.en, point.titleRuby);
    pushText(point.title.vi, point.titleRuby);
    pushText(point.answers?.explanation?.en, point.answers?.explanationRuby);
    pushText(point.answers?.explanation?.vi, point.answers?.explanationRuby);
  }

  return surfaces;
}

function lessonVocabItems(lesson: Lesson): VocabItem[] {
  return [...lesson.vocab, ...(lesson.phrases ?? []), ...referenceVocabItems(lesson.reference)];
}

/**
 * Authored furigana for each grammar term, so a choice like 来ます still shows
 * き when this lesson only quotes the word in the explanation, or the word was
 * taught in an earlier lesson.
 */
function grammarTermRuby(lesson: Lesson, level?: CourseLevel): Map<string, RubySegment[]> {
  const map = new Map<string, RubySegment[]>();
  const terms = grammarTermPool(lesson);
  const surfaces = lessonRubySurfaces(lesson);

  for (const term of terms) {
    for (const surface of surfaces) {
      recordCover(map, term, rubyCoveringTerm(surface.text, surface.ruby, term));
    }
  }

  const courseLessons = level ? getCourse(level).lessons : [lesson];
  const vocabItems = [lesson, ...courseLessons.filter((item) => item !== lesson)].flatMap(
    lessonVocabItems
  );

  for (const term of terms) {
    if (map.has(term)) {
      continue;
    }

    for (const item of vocabItems) {
      if (!item.kanji || !vocabMatchesTerm(item.kanji, term)) {
        continue;
      }

      const surface = normalizedVocabKanji(item.kanji);
      recordCover(map, term, rubyInRange(surface, item.ruby, 0, surface.length));
    }
  }

  for (const term of terms) {
    if (map.has(term)) {
      continue;
    }

    const readings = new Set<string>();
    let match: RubySegment | undefined;

    for (const surface of surfaces) {
      for (const segment of surface.ruby ?? []) {
        if (segment.base !== term) {
          continue;
        }

        readings.add(segment.reading);
        match ??= segment;
      }
    }

    if (match && readings.size === 1) {
      recordCover(map, term, [match]);
    }
  }

  return map;
}

function buildQuestion(
  seed: ClozeSeed,
  pool: string[],
  termRuby: Map<string, RubySegment[]>
): GrammarQuestion {
  const distractors = shuffle(unique(pool.filter((term) => term !== seed.answer))).slice(
    0,
    OPTION_COUNT - 1
  );
  const labels = shuffle([seed.answer, ...distractors]);
  const beforeEnd = seed.before.length;
  const answerEnd = beforeEnd + seed.answer.length;
  const answerRuby =
    rubyCoveringTerm(seed.fullText, seed.ruby, seed.answer) ?? termRuby.get(seed.answer);
  const options = labels.map((label, index) => ({
    id: `opt-${index}`,
    label,
    ruby: label === seed.answer ? answerRuby : termRuby.get(label)
  }));
  const correctId = options.find((option) => option.label === seed.answer)!.id;

  return {
    before: seed.before,
    beforeRuby: rubyInRange(seed.fullText, seed.ruby, 0, beforeEnd),
    after: seed.after,
    afterRuby: rubyInRange(seed.fullText, seed.ruby, answerEnd, seed.fullText.length),
    answer: seed.answer,
    answerRuby,
    fullText: seed.fullText,
    meaning: seed.meaning,
    options,
    correctId
  };
}

/** One pass through the cloze pool; the UI finishes after `total` questions. */
export function createGrammarSession(
  lesson: Lesson,
  locale: Locale,
  level?: CourseLevel
): GrammarSession {
  const seeds = buildGrammarClozes(lesson, locale);
  const pool = grammarTermPool(lesson);
  const termRuby = grammarTermRuby(lesson, level);
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

      return buildQuestion(remaining.pop()!, pool, termRuby);
    }
  };
}
