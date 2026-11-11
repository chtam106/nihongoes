import { describe, expect, it } from 'vitest';
import { sanitizeSentenceWritingPreferences } from './sentence-writing-preferences.ts';

describe('sanitizeSentenceWritingPreferences', () => {
  it('defaults when the stored value is missing', () => {
    expect(sanitizeSentenceWritingPreferences(null)).toEqual({ showInput: false });
    expect(sanitizeSentenceWritingPreferences(12)).toEqual({ showInput: false });
  });

  it('keeps the writing box choice from the current and older stores', () => {
    expect(sanitizeSentenceWritingPreferences({ showInput: true })).toEqual({ showInput: true });
    expect(sanitizeSentenceWritingPreferences({ lesson: 9, showInput: true })).toEqual({
      showInput: true
    });
  });
});
