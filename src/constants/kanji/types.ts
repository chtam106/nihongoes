import type { Bilingual } from '@/constants/courses/types.ts';

export type { Bilingual };

/**
 * One run of an example word paired with its reading, so a kanji and the exact
 * kana it is read as can be color-matched. Split a word so each kanji is its own
 * part (e.g. 一月 -> 一/いち + 月/がつ); keep okurigana kana as its own part with
 * `reading` equal to the kana itself (e.g. つ -> つ). Special whole-word readings
 * (jukujikun like 二十歳=はたち) stay as a single part.
 */
export type KanjiReadingPart = {
  text: string;
  reading: string;
};

/** A sample word illustrating one of a kanji's readings. */
export type KanjiExample = {
  /** The word split into kanji/kana runs, each with its reading. */
  parts: KanjiReadingPart[];
  meaning: Bilingual;
};

export type KanjiEntry = {
  /** The kanji character itself, e.g. 一. */
  char: string;
  meaning: Bilingual;
  /** On'yomi readings, conventionally in katakana (e.g. イチ). */
  onyomi: string[];
  /** Kun'yomi readings in hiragana; okurigana is marked after a dot (e.g. ひと.つ). */
  kunyomi: string[];
  /** Radical/component characters that make up the kanji, in reading order (e.g. 休 -> ['亻', '木']). */
  components: string[];
  /** Optional memory aid, e.g. "person 亻 resting by a tree 木 = rest". Only set when there is a good one. */
  mnemonic?: Bilingual;
  /** Optional usage note (reading caveats, common confusions, when to use which reading, etc.). */
  note?: Bilingual;
  examples: KanjiExample[];
};

export type KanjiLesson = {
  id: string;
  number: number;
  title: Bilingual;
  kanji: KanjiEntry[];
};

/**
 * Renumbers a composed list of kanji lessons sequentially (1..N), mirroring the
 * course `withSequentialNumbers` helper so lessons can be reordered freely.
 */
export function withSequentialNumbers(
  lessons: Omit<KanjiLesson, 'id' | 'number'>[]
): KanjiLesson[] {
  return lessons.map((lesson, index) => ({
    ...lesson,
    number: index + 1,
    id: `lesson-${index + 1}`
  }));
}
