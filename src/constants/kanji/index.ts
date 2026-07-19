import { radicals, type Radical } from './radicals.ts';

export * from './types.ts';
export { radicals };
export type { Radical };
export { KANJI_TRACK_META, type KanjiTrackMeta, type KanjiTrackSlug } from './track-meta.ts';
export type { KanjiTrack } from './tracks.ts';

export const KANJI_BASE_PATH = '/kanji';

export const KANJI_RADICALS_PATH = `${KANJI_BASE_PATH}/radicals`;

/** Find a radical by its standalone character or any of its combining variants. */
export function getRadicalByChar(char: string): Radical | undefined {
  return radicals.find((radical) => radical.char === char || radical.variants?.includes(char));
}

/**
 * Render a `Hán-Việt - nghĩa` Vietnamese meaning as `[Hán-Việt] nghĩa` (with the
 * Hán-Việt reading capitalized). Strings without the ` - ` separator (e.g. any
 * English meaning) are returned unchanged.
 */
export function formatKanjiMeaning(value: string): string {
  const separator = ' - ';
  const index = value.indexOf(separator);

  if (index === -1) {
    return value;
  }

  const hanViet = value.slice(0, index).trim();
  const rest = value.slice(index + separator.length).trim();

  if (!hanViet || !rest) {
    return value;
  }

  const capitalized = hanViet.charAt(0).toUpperCase() + hanViet.slice(1);

  return `[${capitalized}] ${rest}`;
}

export function kanjiTrackPath(trackSlug: string): string {
  return `${KANJI_BASE_PATH}/${trackSlug}`;
}

export function kanjiLessonPath(trackSlug: string, id: string): string {
  return `${kanjiTrackPath(trackSlug)}/${id}`;
}

export function kanjiQuizPath(trackSlug: string, id: string): string {
  return `${kanjiLessonPath(trackSlug, id)}/quiz`;
}

export function kanjiWritingPath(trackSlug: string, id: string): string {
  return `${kanjiLessonPath(trackSlug, id)}/writing`;
}
