import { describe, expect, it } from 'vitest';
import { getCourse } from '@/constants/courses/index.ts';
import { buildGrammarClozes, createGrammarSession } from './grammar-quiz.ts';

const course = getCourse('n5');
const lesson = course.lessons[0]!;

describe('buildGrammarClozes', () => {
  it('creates a blank whose answer is a grammar piece from the sentence', () => {
    const clozes = buildGrammarClozes(lesson, 'en');

    expect(clozes.length).toBeGreaterThan(0);
    for (const cloze of clozes) {
      // The blanked answer plus the surrounding text rebuilds the full sentence.
      expect(cloze.before + cloze.answer + cloze.after).toBe(cloze.fullText);
      expect(cloze.answer.length).toBeGreaterThan(0);
    }
  });

  it('blanks the topic particle は somewhere in the lesson', () => {
    const clozes = buildGrammarClozes(lesson, 'en');

    expect(clozes.some((cloze) => cloze.answer === 'は')).toBe(true);
  });

  it('never blanks a grammar piece that sits inside a demonstrative (e.g. の in あの)', () => {
    const clozes = buildGrammarClozes(lesson, 'en');

    const splitsDemonstrative = clozes.some(
      (cloze) => cloze.answer === 'の' && /[こそあど]$/.test(cloze.before)
    );

    expect(splitsDemonstrative).toBe(false);
  });
});

describe('createGrammarSession', () => {
  it('builds well-formed questions with the answer among the options', () => {
    const session = createGrammarSession(lesson, 'en');

    for (let i = 0; i < session.total; i += 1) {
      const question = session.next();
      const ids = question.options.map((option) => option.id);

      expect(ids).toContain(question.correctId);
      expect(question.options.some((option) => option.label === question.answer)).toBe(true);
      expect(question.options.length).toBeGreaterThan(1);
    }
  });

  it('attaches ruby to kanji option labels such as 何 and 歳', () => {
    const session = createGrammarSession(lesson, 'en');
    const kanjiOptions: { label: string; ruby?: { base: string }[] }[] = [];

    for (let i = 0; i < session.total; i += 1) {
      const question = session.next();

      for (const option of question.options) {
        if (option.label === '何' || option.label === '歳') {
          kanjiOptions.push(option);
        }
      }
    }

    expect(kanjiOptions.length).toBeGreaterThan(0);
    expect(
      kanjiOptions.every((option) => option.ruby?.some((segment) => segment.base === option.label))
    ).toBe(true);
  });

  it('attaches furigana to movement-verb options such as 帰ります', () => {
    const lesson5 = getCourse('n5').lessons.find((item) => item.id === 'lesson-5')!;
    const session = createGrammarSession(lesson5, 'en');
    const kaerimasu: { ruby?: { base: string; reading: string }[] }[] = [];

    for (let i = 0; i < session.total; i += 1) {
      const question = session.next();

      for (const option of question.options) {
        if (option.label === '帰ります') {
          kaerimasu.push(option);
        }
      }
    }

    expect(kaerimasu.length).toBeGreaterThan(0);
    expect(
      kaerimasu.every((option) =>
        option.ruby?.some((segment) => segment.base === '帰' && segment.reading === 'かえ')
      )
    ).toBe(true);
  });

  it('attaches furigana to 来ます and 帰ります in a later lesson that only quotes them', () => {
    const lesson13 = getCourse('n5').lessons.find((item) => item.id === 'lesson-13')!;
    const session = createGrammarSession(lesson13, 'en', 'n5');
    const seen = new Map<string, { base: string; reading: string }[] | undefined>();

    for (let i = 0; i < session.total; i += 1) {
      const question = session.next();

      for (const option of question.options) {
        if (option.label === '来ます' || option.label === '帰ります') {
          seen.set(option.label, option.ruby);
        }
      }
    }

    expect(seen.get('来ます')).toEqual([{ base: '来', reading: 'き' }]);
    expect(seen.get('帰ります')).toEqual([{ base: '帰', reading: 'かえ' }]);
  });

  it('covers every kanji in a choice label with ruby', () => {
    const kanji = /[\u4e00-\u9fff]/;
    const missing: { lesson: string; label: string; uncovered: string[] }[] = [];

    for (const level of ['n5', 'n4'] as const) {
      for (const item of getCourse(level).lessons) {
        if (item.grammar.length === 0) {
          continue;
        }

        const session = createGrammarSession(item, 'en', level);

        for (let i = 0; i < session.total; i += 1) {
          const question = session.next();

          for (const option of question.options) {
            const chars = [...option.label].filter((char) => kanji.test(char));

            if (chars.length === 0) {
              continue;
            }

            const uncovered = chars.filter((char) => {
              const ranges: [number, number][] = [];
              let cursor = 0;

              for (const segment of option.ruby ?? []) {
                const at = option.label.indexOf(segment.base, cursor);

                if (at < 0) {
                  return true;
                }

                ranges.push([at, at + segment.base.length]);
                cursor = at + segment.base.length;
              }

              const index = option.label.indexOf(char);

              return !ranges.some(([start, end]) => index >= start && index < end);
            });

            if (uncovered.length > 0) {
              missing.push({ lesson: `${level}/${item.id}`, label: option.label, uncovered });
            }
          }
        }
      }
    }

    expect(missing).toEqual([]);
  });

  it('covers every kanji in the cloze sentence around the blank', () => {
    const kanji = /[\u4e00-\u9fff]/;
    const missing: { lesson: string; text: string }[] = [];

    const uncoveredKanji = (text: string, ruby?: { base: string }[]) => {
      const covered = new Set<number>();
      let cursor = 0;

      for (const segment of ruby ?? []) {
        const at = text.indexOf(segment.base, cursor);

        if (at < 0) {
          continue;
        }

        for (let index = at; index < at + segment.base.length; index += 1) {
          covered.add(index);
        }

        cursor = at + segment.base.length;
      }

      return [...text].filter((char, index) => kanji.test(char) && !covered.has(index));
    };

    for (const level of ['n5', 'n4'] as const) {
      for (const item of getCourse(level).lessons) {
        if (item.grammar.length === 0) {
          continue;
        }

        const session = createGrammarSession(item, 'en', level);

        for (let i = 0; i < session.total; i += 1) {
          const question = session.next();

          for (const part of [question.before, question.after]) {
            const ruby = part === question.before ? question.beforeRuby : question.afterRuby;
            const uncovered = uncoveredKanji(part, ruby);

            if (uncovered.length > 0) {
              missing.push({
                lesson: `${level}/${item.id}`,
                text: `${part} missing ${uncovered.join('')}`
              });
            }
          }
        }
      }
    }

    expect(missing).toEqual([]);
  });
});
