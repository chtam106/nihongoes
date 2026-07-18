/** Supported UI/content locales. */
export type Locale = 'en' | 'vi';

/** Interpolation params passed to the `t()` translate function. */
export type TranslationParams = Record<string, string | number>;

type TranslationLeaf = string;

/** A nested tree of translation strings (leaves are strings). */
export type TranslationNode = { [key: string]: TranslationLeaf | TranslationNode };

export type TranslationTree = TranslationNode;
