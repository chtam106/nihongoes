import {
  hiraganaChartRows,
  hiraganaYoonChartRows,
  katakanaChartRows,
  katakanaYoonChartRows
} from '@/constants/alphabet-charts.ts';
import type { AlphabetChartRow } from '@/pages/alphabet/alphabet-chart.tsx';

// We compare answers in a single "canonical" romaji form so that Hepburn and
// Kunrei spellings of the same sound collapse to one string (e.g. shi/si -> si).
// Long vowels are always written as two consecutive vowels (the Japanese kana
// already spell hiragana long vowels that way; katakana "ー" is expanded to a
// repeated vowel) - no macron is ever required.

const HEPBURN_TO_CANON: ReadonlyArray<readonly [string, string]> = [
  ['sha', 'sya'],
  ['shu', 'syu'],
  ['sho', 'syo'],
  ['cha', 'tya'],
  ['chu', 'tyu'],
  ['cho', 'tyo'],
  ['jya', 'zya'],
  ['jyu', 'zyu'],
  ['jyo', 'zyo'],
  ['cya', 'tya'],
  ['cyu', 'tyu'],
  ['cyo', 'tyo'],
  ['ja', 'zya'],
  ['ju', 'zyu'],
  ['jo', 'zyo'],
  ['shi', 'si'],
  ['chi', 'ti'],
  ['tsu', 'tu'],
  ['fu', 'hu'],
  ['ji', 'zi']
];

const CANON_TO_HEPBURN_SINGLES: ReadonlyArray<readonly [string, string]> = [
  ['si', 'shi'],
  ['ti', 'chi'],
  ['tu', 'tsu'],
  ['hu', 'fu'],
  ['zi', 'ji']
];

const CANON_TO_HEPBURN_YOON: ReadonlyArray<readonly [string, string]> = [
  ['sya', 'sha'],
  ['syu', 'shu'],
  ['syo', 'sho'],
  ['tya', 'cha'],
  ['tyu', 'chu'],
  ['tyo', 'cho'],
  ['zya', 'ja'],
  ['zyu', 'ju'],
  ['zyo', 'jo']
];

function applyPairs(value: string, pairs: ReadonlyArray<readonly [string, string]>): string {
  let result = value;
  for (const [from, to] of pairs) {
    result = result.split(from).join(to);
  }
  return result;
}

function hepburnToCanonical(value: string): string {
  return applyPairs(value, HEPBURN_TO_CANON);
}

function canonicalToHepburn(value: string): string {
  return applyPairs(applyPairs(value, CANON_TO_HEPBURN_SINGLES), CANON_TO_HEPBURN_YOON);
}

const kanaToCanonical = new Map<string, string>();

function registerRows(rows: AlphabetChartRow[]) {
  for (const row of rows) {
    for (const group of [row.seion, row.dakuten, row.handakuten]) {
      if (!group) {
        continue;
      }

      for (const cell of group) {
        if (cell) {
          kanaToCanonical.set(cell.char, hepburnToCanonical(cell.romaji));
        }
      }
    }
  }
}

registerRows(hiraganaChartRows);
registerRows(katakanaChartRows);
registerRows(hiraganaYoonChartRows);
registerRows(katakanaYoonChartRows);

const SOKUON = new Set(['っ', 'ッ']);
const LONG_VOWEL_MARK = 'ー';
const VOWELS = 'aiueo';

// Kana that are usually grammatical particles: accept both the literal chart
// sound and the spoken pronunciation (は -> ha/wa, へ -> he/e, を -> wo/o).
const PARTICLE_VARIANTS: Record<string, string> = {
  は: 'wa',
  ハ: 'wa',
  へ: 'e',
  ヘ: 'e',
  を: 'o',
  ヲ: 'o'
};

function lastVowel(value: string): string {
  for (let index = value.length - 1; index >= 0; index -= 1) {
    if (VOWELS.includes(value[index])) {
      return value[index];
    }
  }
  return '';
}

/** Each unit holds the accepted canonical spellings for one syllable; [0] is primary. */
type SyllableUnit = string[];

function toSyllableUnits(japanese: string): SyllableUnit[] {
  const chars = [...japanese];
  const units: SyllableUnit[] = [];
  let pendingSokuon = false;
  let index = 0;

  while (index < chars.length) {
    const pair = (chars[index] ?? '') + (chars[index + 1] ?? '');
    let canonical: string | undefined;
    let consumed = 1;
    let particleAlt: string | undefined;

    if (kanaToCanonical.has(pair)) {
      canonical = kanaToCanonical.get(pair);
      consumed = 2;
    } else {
      const char = chars[index];

      if (SOKUON.has(char)) {
        pendingSokuon = true;
        index += 1;
        continue;
      }

      if (char === LONG_VOWEL_MARK) {
        const previous = units[units.length - 1];
        const vowel = previous ? lastVowel(previous[0]) : '';
        if (vowel) {
          units.push([vowel]);
        }
        index += 1;
        continue;
      }

      if (kanaToCanonical.has(char)) {
        canonical = kanaToCanonical.get(char);
        particleAlt = PARTICLE_VARIANTS[char];
      } else {
        // Punctuation, spaces, or unsupported characters: skip silently.
        index += 1;
        continue;
      }
    }

    if (canonical === undefined) {
      index += consumed;
      continue;
    }

    let options = particleAlt ? [canonical, particleAlt] : [canonical];

    if (pendingSokuon) {
      options = options.map((option) => option.charAt(0) + option);
      pendingSokuon = false;
    }

    units.push(options);
    index += consumed;
  }

  return units;
}

function expandAccepted(units: SyllableUnit[], cap = 256): string[] {
  let combinations: string[] = [''];

  for (const unit of units) {
    const next: string[] = [];
    for (const prefix of combinations) {
      for (const option of unit) {
        next.push(prefix + option);
      }
    }

    if (next.length > cap) {
      return [units.map((item) => item[0]).join('')];
    }

    combinations = next;
  }

  return combinations;
}

export type SentenceTransliteration = {
  /** Friendly Hepburn romaji shown as the answer. */
  display: string;
  /** All accepted canonical spellings for answer checking. */
  accepted: string[];
};

function wordToHepburn(word: string): string {
  // A standalone particle word reads with its spoken sound (は -> wa etc.) so
  // the shown answer is proper romaji, even though input checking accepts both.
  const core = word.replace(/[、。！？]/g, '');
  const particle = PARTICLE_VARIANTS[core];
  if (particle) {
    return particle;
  }

  return canonicalToHepburn(
    toSyllableUnits(word)
      .map((unit) => unit[0])
      .join('')
  );
}

export function transliterateSentence(japanese: string): SentenceTransliteration {
  // Spaces in the source kana mark word boundaries: they are ignored when
  // building the accepted answers, but drive the spacing of the shown answer.
  const units = toSyllableUnits(japanese);
  const display = japanese
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .map(wordToHepburn)
    .filter((word) => word.length > 0)
    .join(' ');

  return {
    display,
    accepted: Array.from(new Set(expandAccepted(units)))
  };
}

export function canonicalizeRomaji(value: string): string {
  const stripped = value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z]/g, '');

  return hepburnToCanonical(stripped);
}

export function isSentenceAnswerCorrect(input: string, accepted: string[]): boolean {
  const canonical = canonicalizeRomaji(input);
  return canonical.length > 0 && accepted.includes(canonical);
}
