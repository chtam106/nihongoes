/** Half-width kana marks (U+FF9E / U+FF9F) — narrower than full-width ゛ / ゜ (U+309B / U+309C). */
export const DAKUTEN_MARK = 'ﾞ'
export const HANDAKUTEN_MARK = 'ﾟ'

export function voicedVariantMark(variant: 'dakuten' | 'handakuten') {
  return variant === 'dakuten' ? DAKUTEN_MARK : HANDAKUTEN_MARK
}
