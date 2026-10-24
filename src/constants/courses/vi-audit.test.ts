import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');

describe('course Vietnamese copy', () => {
  it('passes heuristic audit (scripts/audit-vi.mjs)', () => {
    const result = spawnSync(process.execPath, ['scripts/audit-vi.mjs'], {
      cwd: repoRoot,
      encoding: 'utf8'
    });

    expect(result.status, [result.stdout, result.stderr].filter(Boolean).join('\n')).toBe(0);
  });
});
