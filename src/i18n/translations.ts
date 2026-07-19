import { DAKUTEN_MARK, HANDAKUTEN_MARK } from '@/constants/kana-terminology.ts';
import type { TranslationParams } from '@/types/i18n.ts';

// i18n types are declared in `@/types/i18n.ts`; re-exported so existing
// `@/i18n/translations` imports of these types keep working. The message
// catalogs live under `@/i18n/messages/{en,vi}` (one file per namespace).
export type { Locale, TranslationParams, TranslationTree } from '@/types/i18n.ts';

/** The kana chart section labels, resolved from the active `t` translator. */
export function getChartSectionLabels(t: (key: string, params?: TranslationParams) => string) {
  return {
    seion: t('chart.seion'),
    voiced: t('chart.voiced', { dakuten: DAKUTEN_MARK, handakuten: HANDAKUTEN_MARK }),
    yoon: t('chart.yoon')
  };
}
