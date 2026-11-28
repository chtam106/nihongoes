import type { RubySegment } from '@/types/course.ts';

/** Punctuation and spaces do not decide whether a written sentence is right. */
const IGNORED = /[\s。、，．,.!?！？「」『』（）()〜~・…ー-]/g;

/** Katakana to hiragana, so either script counts for a kana word. */
function toHiragana(text: string) {
  return text.replace(/[ァ-ヶ]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60));
}

/** Width-folded, script-folded, punctuation-free form used on both sides. */
export function normalizeSentence(text: string) {
  return toHiragana(text.normalize('NFKC')).replace(IGNORED, '');
}

function escapeRegExp(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * A pattern for the answer where every rubied kanji may also be written in
 * its kana reading, so 私は学生です, わたしはがくせいです and 私はがくせいです
 * all match.
 */
function answerPattern(jp: string, ruby: RubySegment[] = []) {
  const parts: string[] = [];
  let rest = jp;

  for (const segment of ruby) {
    const at = rest.indexOf(segment.base);

    if (at < 0) {
      continue;
    }

    parts.push(escapeRegExp(normalizeSentence(rest.slice(0, at))));
    const base = escapeRegExp(normalizeSentence(segment.base));
    const reading = escapeRegExp(normalizeSentence(segment.reading));
    parts.push(base === reading ? base : `(?:${base}|${reading})`);
    rest = rest.slice(at + segment.base.length);
  }

  parts.push(escapeRegExp(normalizeSentence(rest)));

  return new RegExp(`^${parts.join('')}$`);
}

/** True when the learner's sentence matches the answer, in kanji, kana or a mix. */
export function isSentenceCorrect(input: string, jp: string, ruby?: RubySegment[]) {
  const written = normalizeSentence(input);

  return written.length > 0 && answerPattern(jp, ruby).test(written);
}
