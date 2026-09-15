import type { Bilingual, GrammarExample, RubySegment } from '@/types/course.ts';

export type ReferenceArticle = {
  id: string;
  title: Bilingual;
  intro?: Bilingual;
  paragraphs: Bilingual[];
  subsections?: ReferenceArticleSubsection[];
  examples?: GrammarExample[];
};

export type ReferenceArticleSubsection = {
  title: Bilingual;
  paragraphs: Bilingual[];
  examples?: GrammarExample[];
};

export type ReferenceTableCell = {
  jp?: string;
  ruby?: RubySegment[];
  meaning?: Bilingual;
  speech?: string;
  text?: Bilingual;
  label?: string;
  /** i18n key under `course.*` for a row label (e.g. question rows). */
  labelKey?: string;
};

export type ReferenceTableSection = {
  id: string;
  title: Bilingual;
  intro?: Bilingual;
  columns: Bilingual[];
  rows: ReferenceTableCell[][];
  /** When true, first cell in each row is a row label (number, ?, etc.). */
  rowLabelColumn?: boolean;
};

export type VerbMasuRow = {
  surface: string;
  reading: string;
  te: string;
  dict: string;
  context?: string;
};

export type VerbNaiRow = {
  naiStem: string;
  nai: string;
  ta: string;
  meaning: Bilingual;
  lesson: number;
};

export type N5ReferenceContent = {
  title: Bilingual;
  intro: Bilingual;
  columns: ReferenceArticle[];
  appendix: ReferenceTableSection[];
  verbs: {
    group1: { masu: VerbMasuRow[]; nai: VerbNaiRow[] };
    group2: { masu: VerbMasuRow[]; nai: VerbNaiRow[] };
    group3: { masu: VerbMasuRow[]; nai: VerbNaiRow[] };
  };
};
