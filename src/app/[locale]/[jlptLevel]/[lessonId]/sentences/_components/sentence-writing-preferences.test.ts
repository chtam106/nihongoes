import { describe, expect, it } from 'vitest';
import { sanitizeSentenceWritingPreferences } from './sentence-writing-preferences.ts';

describe('sanitizeSentenceWritingPreferences', () => {
  it('defaults to writing by hand when the stored value is missing', () => {
    expect(sanitizeSentenceWritingPreferences(null)).toEqual({ mode: 'hand' });
    expect(sanitizeSentenceWritingPreferences(12)).toEqual({ mode: 'hand' });
  });

  it('keeps the current answer mode', () => {
    expect(sanitizeSentenceWritingPreferences({ mode: 'type' })).toEqual({ mode: 'type' });
    expect(sanitizeSentenceWritingPreferences({ mode: 'hand' })).toEqual({ mode: 'hand' });
  });

  it('reads the older writing-box checkbox as typing', () => {
    expect(sanitizeSentenceWritingPreferences({ showInput: true })).toEqual({ mode: 'type' });
    expect(sanitizeSentenceWritingPreferences({ lesson: 9, showInput: false })).toEqual({
      mode: 'hand'
    });
  });
});
