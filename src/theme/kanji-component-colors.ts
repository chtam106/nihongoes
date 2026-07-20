import type { KanjiComponentRole } from '@/constants/kanji/index.ts';

/** Accent color for each kanji component role (shared by the card and the legend). */
export const COMPONENT_ROLE_COLORS: Record<KanjiComponentRole, string> = {
  radical: '#1565c0',
  semantic: '#2e7d32',
  phonetic: '#b34700',
  other: '#616161'
};
