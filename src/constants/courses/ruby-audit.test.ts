import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');

describe('course furigana', () => {
  it('passes the ruby audit (scripts/audit-ruby.mjs)', () => {
    const result = spawnSync(process.execPath, ['scripts/audit-ruby.mjs'], {
      cwd: repoRoot,
      encoding: 'utf8'
    });

    expect(result.status, result.stderr).toBe(0);
  });
});
