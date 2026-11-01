import { sanitizeFlashcardStore, type FlashcardStore } from '@/constants/flashcards/collections.ts';

export const FLASHCARD_DRIVE_FILE = 'nihongoes-flashcards.json';

/** Hidden app-data folder. The app only sees files it created. */
export const DRIVE_APPDATA_SCOPE = 'https://www.googleapis.com/auth/drive.appdata';

const DRIVE_FILES = 'https://www.googleapis.com/drive/v3/files';
const DRIVE_UPLOAD = 'https://www.googleapis.com/upload/drive/v3/files';

export class DriveApiError extends Error {
  readonly status: number;

  constructor(status: number) {
    super(`Drive request failed (${status})`);
    this.name = 'DriveApiError';
    this.status = status;
  }
}

async function driveJson<T>(url: string, token: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      ...init?.headers
    }
  });

  if (!response.ok) {
    throw new DriveApiError(response.status);
  }

  return (await response.json()) as T;
}

export async function findFlashcardFile(token: string): Promise<string | null> {
  const params = new URLSearchParams({
    spaces: 'appDataFolder',
    fields: 'files(id)',
    q: `name='${FLASHCARD_DRIVE_FILE}' and trashed=false`
  });
  const body = await driveJson<{ files?: { id: string }[] }>(
    `${DRIVE_FILES}?${params.toString()}`,
    token
  );
  const id = body.files?.[0]?.id;

  return id || null;
}

export async function readFlashcardFile(token: string, fileId: string): Promise<FlashcardStore> {
  const response = await fetch(`${DRIVE_FILES}/${encodeURIComponent(fileId)}?alt=media`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!response.ok) {
    throw new DriveApiError(response.status);
  }

  return sanitizeFlashcardStore(await response.json());
}

export async function createFlashcardFile(token: string, store: FlashcardStore): Promise<string> {
  const boundary = `nihongoes-${crypto.randomUUID()}`;
  const metadata = {
    name: FLASHCARD_DRIVE_FILE,
    parents: ['appDataFolder'],
    mimeType: 'application/json'
  };
  const body = [
    `--${boundary}`,
    'Content-Type: application/json; charset=UTF-8',
    '',
    JSON.stringify(metadata),
    `--${boundary}`,
    'Content-Type: application/json',
    '',
    JSON.stringify(store),
    `--${boundary}--`,
    ''
  ].join('\r\n');
  const created = await driveJson<{ id?: string }>(
    `${DRIVE_UPLOAD}?uploadType=multipart&fields=id`,
    token,
    {
      method: 'POST',
      headers: { 'Content-Type': `multipart/related; boundary=${boundary}` },
      body
    }
  );

  if (!created.id) {
    throw new DriveApiError(500);
  }

  return created.id;
}

export async function updateFlashcardFile(
  token: string,
  fileId: string,
  store: FlashcardStore
): Promise<void> {
  const response = await fetch(`${DRIVE_UPLOAD}/${encodeURIComponent(fileId)}?uploadType=media`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(store)
  });

  if (!response.ok) {
    throw new DriveApiError(response.status);
  }
}
