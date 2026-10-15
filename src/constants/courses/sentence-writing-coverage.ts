import type {
  Lesson,
  LessonSentenceWriting,
  SentenceWritingGroup,
  SentenceWritingItem,
  VocabItem
} from '@/types/course.ts';
import type { RubySegment } from '@/types/course.ts';

const MIN_ITEMS_PER_GRAMMAR = 5;

function spellJapanese(surface: string, segments: RubySegment[] = []): string {
  let out = '';
  let pos = 0;
  let si = 0;

  while (pos < surface.length) {
    const seg = segments[si];

    if (seg && surface.startsWith(seg.base, pos)) {
      out += seg.reading;
      pos += seg.base.length;
      si += 1;
      continue;
    }

    out += surface[pos];
    pos += 1;
  }

  return out;
}

function stripNeedle(value: string): string {
  return value.replace(/[〜。、\s\u3000]/g, '').replace(/\[な\]/g, '');
}

function spelledItems(items: SentenceWritingItem[]): string {
  return items
    .map((item) => spellJapanese(item.jp, item.ruby).replace(/[。、\s\u3000]/g, ''))
    .join('\n');
}

function spelledGroups(groups: SentenceWritingGroup[]): string {
  return spelledItems(groups.flatMap((group) => group.items));
}

export function isVocabCovered(item: VocabItem, spelled: string): boolean {
  const needle = stripNeedle(item.kana);

  return needle.length > 0 && spelled.includes(needle);
}

export type SentenceWritingCoverageIssue = {
  kind: 'missing-group' | 'extra-group' | 'too-few-items' | 'uncovered-vocab' | 'uncovered-phrase';
  detail: string;
};

export function auditSentenceWriting(
  lesson: Lesson,
  writing: LessonSentenceWriting | undefined
): SentenceWritingCoverageIssue[] {
  const issues: SentenceWritingCoverageIssue[] = [];
  const grammar = writing?.grammar ?? [];
  const phrases = writing?.phrases ?? [];
  const groupsByPattern = new Map(grammar.map((group) => [group.pattern, group]));

  for (const point of lesson.grammar) {
    const group = groupsByPattern.get(point.pattern);

    if (!group) {
      issues.push({ kind: 'missing-group', detail: point.pattern });
      continue;
    }

    if (group.items.length < MIN_ITEMS_PER_GRAMMAR) {
      issues.push({
        kind: 'too-few-items',
        detail: `${point.pattern} (${group.items.length})`
      });
    }
  }

  for (const group of grammar) {
    if (!lesson.grammar.some((point) => point.pattern === group.pattern)) {
      issues.push({ kind: 'extra-group', detail: group.pattern });
    }
  }

  const spelledGrammar = spelledGroups(grammar);

  for (const item of lesson.vocab) {
    if (!isVocabCovered(item, spelledGrammar)) {
      issues.push({ kind: 'uncovered-vocab', detail: item.kana });
    }
  }

  const spelledPhrases = spelledItems(phrases);

  for (const item of lesson.phrases ?? []) {
    if (!isVocabCovered(item, spelledPhrases)) {
      issues.push({ kind: 'uncovered-phrase', detail: item.kana });
    }
  }

  return issues;
}
