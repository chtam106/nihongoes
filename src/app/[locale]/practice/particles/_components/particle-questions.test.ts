import { describe, expect, it } from 'vitest';
import {
  createParticleRound,
  PARTICLE_QUESTIONS,
  PARTICLE_USES,
  particleQuestionsFor,
  rubyText,
  type RubyText
} from './particle-questions.ts';

const KANJI = /[㐀-鿿々]/u;

/** Every kanji in the text is covered by a ruby segment, in order. */
function rubyCoversKanji({ text, ruby }: RubyText) {
  let position = 0;

  for (const segment of ruby) {
    const at = text.indexOf(segment.base, position);

    if (at < 0 || KANJI.test(text.slice(position, at))) {
      return false;
    }

    position = at + segment.base.length;
  }

  return !KANJI.test(text.slice(position));
}

describe('rubyText', () => {
  it('reads single kanji and whole words', () => {
    expect(rubyText('{今日}[きょう]は 図[と]書[しょ]館[かん]で')).toEqual({
      text: '今日は 図書館で',
      ruby: [
        { base: '今日', reading: 'きょう' },
        { base: '図', reading: 'と' },
        { base: '書', reading: 'しょ' },
        { base: '館', reading: 'かん' }
      ]
    });
  });
});

describe('PARTICLE_QUESTIONS', () => {
  it('has unique ids', () => {
    const ids = PARTICLE_QUESTIONS.map((question) => question.id);

    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(PARTICLE_QUESTIONS)('$id: three distinct wrong choices', (question) => {
    expect(question.distractors).not.toContain(question.answer);
    expect(new Set(question.distractors).size).toBe(3);
  });

  it.each(PARTICLE_QUESTIONS)('$id: furigana on every kanji', (question) => {
    expect(rubyCoversKanji(question.before)).toBe(true);
    expect(rubyCoversKanji(question.after)).toBe(true);
  });

  it.each(PARTICLE_QUESTIONS)('$id: its rule explains the answer', (question) => {
    expect(PARTICLE_USES[question.use].particle).toBe(question.answer);
  });
});

describe('createParticleRound', () => {
  it.each(['all', 'n5', 'n4'] as const)(
    '%s: every question of the level once, each with its answer among four choices',
    (filter) => {
      const round = createParticleRound(filter);
      const expected = particleQuestionsFor(filter);

      expect(round).toHaveLength(expected.length);
      expect(new Set(round.map((question) => question.id))).toEqual(
        new Set(expected.map((question) => question.id))
      );

      for (const question of round) {
        expect(question.options).toHaveLength(4);
        expect(question.options).toContain(question.answer);
        expect(filter === 'all' || question.level === filter).toBe(true);
      }
    }
  );

  it('has questions at both levels', () => {
    expect(particleQuestionsFor('n5').length).toBeGreaterThan(0);
    expect(particleQuestionsFor('n4').length).toBeGreaterThan(0);
  });
});
