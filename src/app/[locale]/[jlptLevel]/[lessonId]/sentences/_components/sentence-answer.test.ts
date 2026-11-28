import { describe, expect, it } from 'vitest';
import { isSentenceCorrect } from './sentence-answer.ts';

const jp = '私は学生です。';
const ruby = [
  { base: '私', reading: 'わたし' },
  { base: '学', reading: 'がく' },
  { base: '生', reading: 'せい' }
];

describe('isSentenceCorrect', () => {
  it('accepts the answer as written', () => {
    expect(isSentenceCorrect('私は学生です。', jp, ruby)).toBe(true);
  });

  it('accepts kana, a kanji/kana mix, and no punctuation or spaces', () => {
    expect(isSentenceCorrect('わたしはがくせいです', jp, ruby)).toBe(true);
    expect(isSentenceCorrect('私は がくせい です', jp, ruby)).toBe(true);
    expect(isSentenceCorrect('私は学せいです！', jp, ruby)).toBe(true);
  });

  it('treats katakana and hiragana alike', () => {
    expect(isSentenceCorrect('アレックスさんです', 'アレックスさんです。')).toBe(true);
    expect(isSentenceCorrect('あれっくすさんです', 'アレックスさんです。')).toBe(true);
  });

  it('rejects a different sentence or an empty one', () => {
    expect(isSentenceCorrect('私は先生です', jp, ruby)).toBe(false);
    expect(isSentenceCorrect('私が学生です', jp, ruby)).toBe(false);
    expect(isSentenceCorrect('   ', jp, ruby)).toBe(false);
  });
});
