import { describe, expect, it } from 'vitest';
import { isMobileOs } from './mobile-os.ts';

describe('isMobileOs', () => {
  it('detects Android and iOS user agents', () => {
    expect(isMobileOs('Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36')).toBe(true);
    expect(isMobileOs('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)')).toBe(true);
    expect(isMobileOs('Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X)')).toBe(true);
  });

  it('treats desktop OS user agents as non-mobile', () => {
    expect(isMobileOs('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')).toBe(false);
    expect(isMobileOs('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36')).toBe(
      false
    );
  });
});
