import type { Locale } from '@/i18n/translations.ts';

export type Bilingual = Record<Locale, string>;

export type CourseLevel = 'n5';

export type VocabItem = {
  kana: string;
  kanji?: string;
  romaji: string;
  /** Override the spoken text when the glyph's reading differs (e.g. particle は -> わ). */
  speech?: string;
  meaning: Bilingual;
};

export type GrammarExample = {
  jp: string;
  romaji: string;
  meaning: Bilingual;
};

/** A distinct sub-block inside a grammar point, e.g. how to answer the question it teaches. */
export type GrammarAnswerBlock = {
  explanation?: Bilingual;
  examples: GrammarExample[];
};

export type GrammarPoint = {
  pattern: string;
  title: Bilingual;
  explanation: Bilingual;
  examples: GrammarExample[];
  /** Optional companion block rendered separately (e.g. sample answers to this question). */
  answers?: GrammarAnswerBlock;
};

export type ReadingLine = {
  jp: string;
  romaji: string;
  meaning: Bilingual;
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

/** A titled group of supplementary/reference vocabulary shown separately from the core word list. */
export type ReferenceGroup = {
  title: Bilingual;
  items: VocabItem[];
};

export type Lesson = {
  id: string;
  number: number;
  title: Bilingual;
  focus: Bilingual;
  vocab: VocabItem[];
  /** Set phrases / fixed expressions (Minna no Nihongo 会話 vocabulary), e.g. おなまえは何ですか. */
  phrases?: VocabItem[];
  grammar: GrammarPoint[];
  reading?: ReadingPassage[];
  /** Supplementary vocabulary (Minna no Nihongo 参考語彙) kept out of the core list. */
  reference?: ReferenceGroup[];
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

/**
 * Renumbers a composed list of lessons sequentially (1..N), so course content can be
 * split across part files and reordered freely without worrying about `id`/`number`.
 */
export function withSequentialNumbers(lessons: Lesson[]): Lesson[] {
  return lessons.map((lesson, index) => ({
    ...lesson,
    number: index + 1,
    id: `lesson-${index + 1}`
  }));
}
