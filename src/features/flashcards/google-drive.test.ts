import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  createFlashcardFile,
  findFlashcardFile,
  readFlashcardFile,
  updateFlashcardFile
} from '@/features/flashcards/google-drive.ts';

const store = { overrides: [{ id: 'mine', name: 'Verbs', cards: [] }], hidden: [] };

function mockFetch(response: { ok?: boolean; status?: number; json: unknown }) {
  const fetchMock = vi.fn(async (...args: [RequestInfo | URL, RequestInit?]) => {
    void args;

    return {
      ok: response.ok ?? true,
      status: response.status ?? 200,
      json: async () => response.json
    };
  });

  vi.stubGlobal('fetch', fetchMock);

  return fetchMock;
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('Google Drive flashcard file', () => {
  it('finds the app-data file id', async () => {
    const fetchMock = mockFetch({ json: { files: [{ id: 'file-1' }] } });

    await expect(findFlashcardFile('token')).resolves.toBe('file-1');

    const url = String(fetchMock.mock.calls[0]?.[0]);

    expect(url).toContain('spaces=appDataFolder');
    expect(url).toContain('nihongoes-flashcards.json');
    expect(fetchMock.mock.calls[0]?.[1]).toMatchObject({
      headers: { Authorization: 'Bearer token' }
    });
  });

  it('returns null when Drive has no flashcard file', async () => {
    mockFetch({ json: { files: [] } });

    await expect(findFlashcardFile('token')).resolves.toBeNull();
  });

  it('reads and sanitizes the file body', async () => {
    mockFetch({
      json: { overrides: [{ id: 'mine', name: ' Verbs ', cards: [{ id: '1:0', type: 'vocab' }] }] }
    });

    await expect(readFlashcardFile('token', 'file-1')).resolves.toEqual({
      overrides: [{ id: 'mine', name: 'Verbs', cards: [{ id: '1:0', type: 'vocab' }] }],
      hidden: []
    });
  });

  it('creates a file in the app-data folder', async () => {
    const fetchMock = mockFetch({ json: { id: 'created' } });

    await expect(createFlashcardFile('token', store)).resolves.toBe('created');

    const init = fetchMock.mock.calls[0]?.[1] as RequestInit;
    const body = String(init.body);

    expect(String(fetchMock.mock.calls[0]?.[0])).toContain('uploadType=multipart');
    expect(init.method).toBe('POST');
    expect(body).toContain('"parents":["appDataFolder"]');
    expect(body).toContain('"id":"mine"');
  });

  it('updates an existing file', async () => {
    const fetchMock = mockFetch({ json: {} });

    await updateFlashcardFile('token', 'file-1', store);

    expect(String(fetchMock.mock.calls[0]?.[0])).toContain('/file-1?uploadType=media');
    expect(fetchMock.mock.calls[0]?.[1]).toMatchObject({ method: 'PATCH' });
  });
});
