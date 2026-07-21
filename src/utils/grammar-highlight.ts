const JAPANESE_RE = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/;

const SLOT_NAMES = new Set([
  'N',
  'V',
  'A',
  'B',
  'adjective',
  'い-adjective',
  'な-adjective',
  'adj-stem',
  'ばしょ',
  'じかん',
  'のりもの',
  '数',
  'しごと',
  '職業',
  '疑問詞',
  '名詞',
  '...'
]);

export type HighlightSegment = {
  text: string;
  termIndex: number | null;
};

/**
 * High-contrast hues for grammar terms (by pattern order), 10 well-separated
 * categorical colors so a question + its answers never reuse the same color.
 * Each is dark enough to read on white surfaces; pure error-red is avoided.
 */
// Order matters: the low indices (0-5) are the ones a question + its answers use,
// so consecutive entries are kept maximally contrasting (no two greens/blues next
// to each other). Lighter/less-readable hues sit at the rarely-used high indices.
export const GRAMMAR_HIGHLIGHT_PALETTE = [
  '#1565c0', // blue
  '#e65100', // deep orange
  '#2e7d32', // green
  '#c2185b', // pink
  '#a16207', // gold
  '#6a1b9a', // purple
  '#00838f', // teal
  '#283593', // indigo
  '#827717', // olive
  '#ad1457' // dark pink
] as const;

function hasJapanese(text: string) {
  return JAPANESE_RE.test(text);
}

function normalizeJapaneseTerm(term: string) {
  return term.replace(/[（(][\u3040-\u309F\u30A0-\u30FF]+[）)]/g, '').trim();
}

const VERB_FORM_MARKERS = new Set([
  'る',
  'た',
  'て',
  'ます',
  'ない',
  '辞書形',
  'た形',
  'ない形',
  'ますstem',
  'て形',
  'stem'
]);

function isPlaceholderToken(token: string) {
  if (!token || SLOT_NAMES.has(token) || VERB_FORM_MARKERS.has(token)) {
    return true;
  }

  if (/^[NAVB][（(]/.test(token)) {
    return true;
  }

  if (token === 'V' || /^V(\(|（|-)/.test(token)) {
    return true;
  }

  if (/^〜/.test(token)) {
    return true;
  }

  if (/^\([^)]+\)$/.test(token) && !hasJapanese(token)) {
    return true;
  }

  if (/^Group\s+\d+:/i.test(token)) {
    return true;
  }

  if (/^(casual|Plain|dictionary)$/i.test(token)) {
    return true;
  }

  if (/^[a-zA-Z][a-zA-Z0-9\s\-/]*$/.test(token)) {
    return true;
  }

  return false;
}

function tokenizePattern(pattern: string) {
  return pattern
    .split(/[\s+/、,，]+/)
    .map((token) => token.trim())
    .filter(Boolean);
}

const JAPANESE_SLOT_NAMES = new Set([
  'ばしょ',
  'じかん',
  'のりもの',
  '数',
  'しごと',
  '職業',
  '疑問詞',
  '名詞'
]);

function isSingleLetterSlot(token: string) {
  return token === 'N' || token === 'V' || token === 'A' || token === 'B';
}

function isJapanesePatternSurface(token: string) {
  return hasJapanese(token) || JAPANESE_SLOT_NAMES.has(token);
}

function needsSpaceBetweenPatternTokens(prev: string, token: string) {
  // Give the letter placeholders (N, V, A, B) breathing room so a template reads
  // as "N は N です" rather than "NはNです"; real Japanese morphemes stay attached.
  if (isSingleLetterSlot(prev) || isSingleLetterSlot(token)) {
    return true;
  }

  if (isJapanesePatternSurface(prev) && isJapanesePatternSurface(token)) {
    return false;
  }

  return isPlaceholderToken(prev) || isPlaceholderToken(token);
}

/** Pattern display: natural Japanese spacing (Nはばしょにあります/います). */
export function formatGrammarPatternDisplay(pattern: string): string {
  return pattern
    .split(/\s*\/\s/)
    .map((branch) => {
      const tokens = tokenizePattern(branch.trim());
      let result = '';

      for (let i = 0; i < tokens.length; i += 1) {
        const token = tokens[i]!;

        if (i > 0 && needsSpaceBetweenPatternTokens(tokens[i - 1]!, token)) {
          result += ' ';
        }

        result += token;
      }

      return result;
    })
    .join('/');
}

function extractJapaneseTokensFromBranch(branch: string): string[] {
  const tokens: string[] = [];

  for (const token of tokenizePattern(branch)) {
    if (isPlaceholderToken(token) || !hasJapanese(token)) {
      continue;
    }

    const normalized = normalizeJapaneseTerm(token);

    if (normalized) {
      tokens.push(normalized);
    }
  }

  return tokens;
}

function isSingleJapaneseGrammarToken(branch: string) {
  const tokens = tokenizePattern(branch.trim());

  return tokens.length === 1 && hasJapanese(tokens[0]!) && !isPlaceholderToken(tokens[0]!);
}

function addTermGroup(groups: string[][], seen: Set<string>, term: string) {
  if (seen.has(term)) {
    return;
  }

  seen.add(term);
  groups.push([term]);
}

function addTermToGroup(group: string[], term: string) {
  if (!group.includes(term)) {
    group.push(term);
  }
}

/** Fixed grammar pieces in pattern order; slash prefix alternatives share one color. */
export function getGrammarHighlightTermGroups(pattern: string): string[][] {
  const branches = pattern.split(/\s*\/\s/).map((branch) => branch.trim());
  const groups: string[][] = [];
  const seen = new Set<string>();

  if (branches.length <= 1) {
    for (const term of extractJapaneseTokensFromBranch(branches[0] ?? pattern)) {
      addTermGroup(groups, seen, term);
    }

    return groups;
  }

  const prefixAlternatives: string[] = [];
  let mainStartIndex = 0;

  for (let i = 0; i < branches.length; i += 1) {
    if (i < branches.length - 1 && isSingleJapaneseGrammarToken(branches[i]!)) {
      const term = normalizeJapaneseTerm(tokenizePattern(branches[i]!)[0]!);
      addTermToGroup(prefixAlternatives, term);
      seen.add(term);
      mainStartIndex = i + 1;
      continue;
    }

    break;
  }

  if (prefixAlternatives.length > 0) {
    groups.push(prefixAlternatives);
  }

  for (const branch of branches.slice(mainStartIndex)) {
    let terms = extractJapaneseTokensFromBranch(branch);

    if (prefixAlternatives.length > 0 && terms.length > 0) {
      addTermToGroup(prefixAlternatives, terms[0]!);
      seen.add(terms[0]!);
      terms = terms.slice(1);
    }

    for (const term of terms) {
      addTermGroup(groups, seen, term);
    }
  }

  return groups;
}

/** Fixed grammar pieces in pattern order (for stable color assignment). */
export function getGrammarHighlightTerms(pattern: string): string[] {
  return getGrammarHighlightTermGroups(pattern).flat();
}

/** @deprecated Use getGrammarHighlightTerms - kept for tests migrating longest-first sort expectations. */
export function extractGrammarHighlights(pattern: string): string[] {
  return [...getGrammarHighlightTerms(pattern)].sort((a, b) => b.length - a.length);
}

function escapeRegExp(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function termToPattern(term: string) {
  const parts = term.split(/\s+/).map((part) => escapeRegExp(part));
  let pattern = parts.join('\\s*');

  if (term === 'は') {
    pattern = `(?<![で])${pattern}`;
  }

  return pattern;
}

function groupToPattern(alts: string[]) {
  if (alts.length === 1) {
    return termToPattern(alts[0]!);
  }

  return `(?:${alts.map(termToPattern).join('|')})`;
}

/**
 * A highlight entry: either one term, or an array of alternatives that all share
 * the SAME color (e.g. `['これ', 'それ', 'あれ']`).
 */
export type HighlightTerm = string | string[];

type TermEntry = {
  alts: string[];
  /** Palette color slot, or null for a "protected" match that is consumed but NOT colored. */
  termIndex: number | null;
};

/**
 * Split text into spans, coloring each explicit highlight term group by its order.
 * `exclude` words are matched with priority but never highlighted, so a highlight
 * term that happens to sit inside one of them is not colored (e.g. は inside はたち).
 */
export function splitHighlightedText(
  text: string,
  highlights: HighlightTerm[],
  exclude: string[] = []
): HighlightSegment[] {
  const highlightEntries: TermEntry[] = highlights
    .map((entry) => (Array.isArray(entry) ? entry : [entry]))
    .map((alts, index) => ({ alts: alts.filter(Boolean), termIndex: index }))
    .filter((entry) => entry.alts.length > 0);

  const excludeEntries: TermEntry[] = exclude
    .filter(Boolean)
    .map((word) => ({ alts: [word], termIndex: null }));

  return splitByEntries(text, [...excludeEntries, ...highlightEntries]);
}

/** Split text into spans, each matched grammar term tagged with its color index. */
export function splitGrammarHighlightedText(text: string, pattern: string): HighlightSegment[] {
  const entries: TermEntry[] = getGrammarHighlightTermGroups(pattern).map((alts, index) => ({
    alts,
    termIndex: index
  }));

  return splitByEntries(text, entries);
}

function splitByEntries(text: string, entries: TermEntry[]): HighlightSegment[] {
  const usable = entries.filter((entry) => entry.alts.length > 0);

  if (usable.length === 0 || !text) {
    return [{ text, termIndex: null }];
  }

  // Longest match wins so protected/multi-char terms take precedence over short ones.
  const sorted = usable
    .map((entry, position) => ({
      ...entry,
      position,
      matchLength: Math.max(...entry.alts.map((alt) => alt.length))
    }))
    .sort((a, b) => b.matchLength - a.matchLength);

  const re = new RegExp(
    sorted.map(({ alts, position }) => `(?<t${position}>${groupToPattern(alts)})`).join('|'),
    'g'
  );

  const segments: HighlightSegment[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(re)) {
    const index = match.index ?? 0;

    if (index > lastIndex) {
      segments.push({ text: text.slice(lastIndex, index), termIndex: null });
    }

    let termIndex: number | null = null;
    let matchedText = match[0];

    for (const candidate of sorted) {
      const group = match.groups?.[`t${candidate.position}`];

      if (group !== undefined) {
        termIndex = candidate.termIndex;
        matchedText = group;
        break;
      }
    }

    segments.push({ text: matchedText, termIndex });
    lastIndex = index + matchedText.length;
  }

  if (lastIndex < text.length) {
    segments.push({ text: text.slice(lastIndex), termIndex: null });
  }

  if (segments.length === 0) {
    return [{ text, termIndex: null }];
  }

  return segments;
}
