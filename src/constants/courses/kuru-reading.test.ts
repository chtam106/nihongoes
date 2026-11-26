import { describe, expect, it } from 'vitest';
import { COURSE_LEVELS } from '@/constants/courses/levels.ts';
import { getCourse } from '@/constants/courses/index.ts';
import { getSentenceWriting } from '@/constants/courses/sentence-writing.ts';
import type { RubySegment } from '@/types/course.ts';

/**
 * 来る changes its reading by form (来ます き, 来る く, 来ない こ), which the
 * base-coverage audit cannot see. Infer the reading from the kana right after 来.
 */
const KURU_READINGS: [RegExp, string][] = [
  [/^(ます|まし|ませ|て|た|ちゃ|なさ)/, 'き'],
  [/^(ない|なか|なく|なけ|い|よう|させ|られ|ず)/, 'こ'],
  [/^(る|れ)/, 'く']
];

function expectedKuruReading(after: string): string | undefined {
  return KURU_READINGS.find(([pattern]) => pattern.test(after))?.[1];
}

/** Walk the text like `renderJapaneseText`, pairing each ruby segment with its position. */
function kuruMismatches(text: string, ruby: RubySegment[]): string[] {
  const issues: string[] = [];
  let position = 0;
  let rubyIndex = 0;

  while (position < text.length) {
    const segment = ruby[rubyIndex];
    if (segment && text.startsWith(segment.base, position)) {
      if (segment.base === '来') {
        const expected = expectedKuruReading(text.slice(position + 1));
        if (expected && segment.reading !== expected) {
          issues.push(
            `${text.slice(Math.max(0, position - 6), position + 6)}: 来 is ${segment.reading}, expected ${expected}`
          );
        }
      }
      position += segment.base.length;
      rubyIndex += 1;
      continue;
    }
    position += 1;
  }

  return issues;
}

type RubyCarrier = Record<string, unknown>;

/** Every (text, ruby) pair in a lesson-shaped object: jp+ruby, explanation+explanationRuby, … */
function collectIssues(node: unknown, where: string, issues: string[]): void {
  if (Array.isArray(node)) {
    node.forEach((child, index) => collectIssues(child, `${where}[${index}]`, issues));
    return;
  }
  if (!node || typeof node !== 'object') return;

  const record = node as RubyCarrier;
  const pairs: [unknown, unknown][] = [
    [record.jp, record.ruby],
    [record.pattern, record.patternRuby],
    [(record.explanation as RubyCarrier | undefined)?.en, record.explanationRuby],
    [(record.explanation as RubyCarrier | undefined)?.vi, record.explanationRuby],
    [(record.title as RubyCarrier | undefined)?.en, record.titleRuby],
    [(record.title as RubyCarrier | undefined)?.vi, record.titleRuby]
  ];
  for (const [text, ruby] of pairs) {
    if (typeof text === 'string' && Array.isArray(ruby)) {
      for (const issue of kuruMismatches(text, ruby as RubySegment[])) {
        issues.push(`${where}: ${issue}`);
      }
    }
  }

  for (const [key, child] of Object.entries(record)) {
    if (child && typeof child === 'object') collectIssues(child, `${where}.${key}`, issues);
  }
}

describe('来 furigana', () => {
  it.each(COURSE_LEVELS.map((level) => [level]))(
    '%s uses the reading that matches each form of 来る',
    (level) => {
      const issues: string[] = [];
      for (const lesson of getCourse(level).lessons) {
        collectIssues(lesson, lesson.id, issues);
        collectIssues(getSentenceWriting(level, lesson.id), `${lesson.id}/sentences`, issues);
      }
      expect(issues).toEqual([]);
    }
  );
});
