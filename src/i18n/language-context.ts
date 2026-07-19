import type { TranslationParams } from '@/i18n/translations.ts';

/** Signature of the `t` translate function returned by `useTranslation`. */
export type TranslateFn = (key: string, params?: TranslationParams) => string;
