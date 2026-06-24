/**
 * Standalone (spacing) kana marks: U+309B ゛ / U+309C ゜. These render reliably
 * across fonts, unlike the half-width forms (U+FF9E / U+FF9F) which show as tofu
 * (□) when the font lacks those glyphs.
 */
export const DAKUTEN_MARK = '゛';
export const HANDAKUTEN_MARK = '゜';

export function voicedVariantMark(variant: 'dakuten' | 'handakuten') {
  return variant === 'dakuten' ? DAKUTEN_MARK : HANDAKUTEN_MARK;
}
