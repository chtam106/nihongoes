import type { HighlightTerm } from '@/utils/grammar-highlight.ts';
import type { Locale } from '@/types/i18n.ts';

export type Bilingual = Record<Locale, string>;

export type CourseLevel = 'n5';

/** One kanji (usually a single character) with its reading for ruby display. */
export type RubySegment = {
  base: string;
  reading: string;
};

export type VocabItem = {
  kana: string;
  kanji?: string;
  romaji: string;
  /** Override the spoken text when the glyph's reading differs (e.g. particle は -> わ). */
  speech?: string;
  /** Per-kanji ruby for the kanji form, in surface order. */
  ruby?: RubySegment[];
  meaning: Bilingual;
};

export type GrammarExample = {
  jp: string;
  romaji: string;
  meaning: Bilingual;
  /** Per-kanji ruby annotations in surface order. */
  ruby?: RubySegment[];
  /** Consecutive examples in the same list that form a mini-dialogue (no separate answers block). */
  dialogueGroup?: string;
};

/** A distinct sub-block inside a grammar point, e.g. how to answer the question it teaches. */
export type GrammarAnswerBlock = {
  explanation?: Bilingual;
  /** Ruby for kanji cited in `explanation` (same segment order in en + vi when both quote the same Japanese). */
  explanationRuby?: RubySegment[];
  examples: GrammarExample[];
  /** Terms to color in this block's explanation/examples (own palette order). */
  highlights?: HighlightTerm[];
  /** Words to protect from highlighting (e.g. は inside はたち). */
  excludeHighlights?: string[];
};

export type GrammarPoint = {
  pattern: string;
  /** Ruby for kanji in `pattern` when shown on the pattern chip (e.g. 何 in N は 何 ですか). */
  patternRuby?: RubySegment[];
  title: Bilingual;
  /** Ruby for kanji cited in `title` when en/vi copy embeds Japanese (e.g. "with 何"). */
  titleRuby?: RubySegment[];
  explanation: Bilingual;
  /** Ruby for kanji cited in `explanation` (same segment order in en + vi when both quote the same Japanese). */
  explanationRuby?: RubySegment[];
  examples: GrammarExample[];
  /**
   * Terms to color in the pattern, explanation, and examples, in palette order.
   * A nested array marks alternatives that share one color (e.g. ['これ','それ','あれ']).
   */
  highlights: HighlightTerm[];
  /** Words to protect from highlighting (e.g. は inside はたち). */
  excludeHighlights?: string[];
  /** Optional companion block rendered separately (e.g. sample answers to this question). */
  answers?: GrammarAnswerBlock;
};

export type ReadingLine = {
  jp: string;
  romaji: string;
  meaning: Bilingual;
  /** Per-kanji ruby annotations in surface order. */
  ruby?: RubySegment[];
};

export type ReadingChoice = {
  id: string;
  label: Bilingual;
};

export type ReadingQuestion = {
  id: string;
  question: Bilingual;
  choices: ReadingChoice[];
  correctId: string;
};

export type ReadingPassage = {
  id: string;
  title: Bilingual;
  lines: ReadingLine[];
  questions: ReadingQuestion[];
};

export type ConversationSpeaker = {
  id: string;
  /** Display name in Japanese (e.g. アレックス). */
  name: string;
};

export type ConversationLine = {
  speakerId: string;
  jp: string;
  romaji: string;
  meaning: Bilingual;
  /** Per-kanji ruby annotations in surface order. */
  ruby?: RubySegment[];
};

export type ConversationScene = {
  id: string;
  title: Bilingual;
  speakers: ConversationSpeaker[];
  lines: ConversationLine[];
};

/** A titled group of supplementary vocabulary in the reference section. */
export type ReferenceVocabGroup = {
  kind: 'vocab';
  title: Bilingual;
  intro?: Bilingual;
  items: VocabItem[];
  notes?: Bilingual[];
  /** When false, items are reference-only (e.g. surname lists) and never enter the vocab quiz. Default true. */
  includeInQuiz?: boolean;
};

/** Numbered how-to steps with optional footnotes. */
export type ReferenceStepsGroup = {
  kind: 'steps';
  title: Bilingual;
  intro?: Bilingual;
  steps: { text: Bilingual }[];
  notes?: Bilingual[];
};

/** A row in a reference list (e.g. emergency phone numbers). */
export type ReferenceListRow = {
  number?: string;
  /** Bilingual gloss for the floor/row label (`number`). */
  numberMeaning?: Bilingual;
  numberRuby?: RubySegment[];
  jp?: string;
  ruby?: RubySegment[];
  meaning: Bilingual;
  /** Optional cultural/context note on its own row below the meaning. */
  note?: Bilingual;
};

/** Labelled rows such as special phone numbers. */
export type ReferenceListGroup = {
  kind: 'list';
  title: Bilingual;
  intro?: Bilingual;
  /** Optional Japanese headword at the start of the intro (e.g. 祝祭日), rendered with ruby before the intro sentence. */
  introTerm?: { jp: string; ruby?: RubySegment[] };
  /** `stacked` puts each label and translation on its own row; `stacked-2col` is the same card on a 2-column grid from md up; default `compact` keeps inline columns on wide screens. */
  layout?: 'stacked' | 'stacked-2col' | 'compact';
  rows: ReferenceListRow[];
  notes?: Bilingual[];
};

/** One labelled part of a sample Japanese address. */
export type ReferenceAddressPart = {
  label: Bilingual;
  text: string;
  ruby?: RubySegment[];
};

/** Sample address with part labels (large -> small). */
export type ReferenceAddressGroup = {
  kind: 'address';
  title: Bilingual;
  intro?: Bilingual;
  sample: { jp: string; ruby?: RubySegment[] };
  parts: ReferenceAddressPart[];
};

/** Japanese text cell for reference tables (country / person / language). */
export type ReferenceTableJpCell = {
  jp: string;
  ruby?: RubySegment[];
  meaning?: Bilingual;
  /** Override TTS when the spoken form differs from the surface. */
  speech?: string;
};

export type ReferenceTableRow = {
  country: ReferenceTableJpCell;
  person: ReferenceTableJpCell;
  languages: ReferenceTableJpCell[];
};

/** Three-column table such as country · nationality · language. */
export type ReferenceTableGroup = {
  kind: 'table';
  title: Bilingual;
  intro?: Bilingual;
  columns: {
    country: Bilingual;
    person: Bilingual;
    language: Bilingual;
  };
  rows: ReferenceTableRow[];
};

export type ReferenceBlock =
  | ReferenceVocabGroup
  | ReferenceStepsGroup
  | ReferenceListGroup
  | ReferenceAddressGroup
  | ReferenceTableGroup;

/** @deprecated Use `ReferenceVocabGroup` - kept as alias for older mentions. */
export type ReferenceGroup = ReferenceVocabGroup;

export type Lesson = {
  id: string;
  number: number;
  title: Bilingual;
  focus: Bilingual;
  vocab: VocabItem[];
  /** Set phrases / fixed expressions (Minna no Nihongo 会話 vocabulary), e.g. おなまえは何ですか. */
  phrases?: VocabItem[];
  /** Dialogue scenes using this lesson's vocabulary and grammar (original text, not from the textbook). */
  conversation?: ConversationScene[];
  grammar: GrammarPoint[];
  /** Original reading passages for comprehension practice; count varies by lesson. */
  reading?: ReadingPassage[];
  /** Supplementary reference blocks: vocab lists, how-to steps, notes, etc. */
  reference?: ReferenceBlock[];
};

/** Optional thematic grouping of a course's lessons, by inclusive lesson-number range. */
export type CourseModule = {
  title: Bilingual;
  from: number;
  to: number;
};

export type Course = {
  level: CourseLevel;
  code: string;
  name: Bilingual;
  subtitle: Bilingual;
  intro: Bilingual;
  seoTitle: Bilingual;
  seoDescription: Bilingual;
  lessons: Lesson[];
  modules?: CourseModule[];
};
