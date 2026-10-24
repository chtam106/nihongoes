function sameOriginAuth() {
  return process.env.NEXT_PUBLIC_AUTH_SAME_ORIGIN === '1';
}

function resolveApiUrl() {
  if (sameOriginAuth()) {
    return '';
  }

  const configured = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '');

  if (configured) {
    return configured;
  }

  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:4000';
  }

  return '';
}

export const API_URL = resolveApiUrl();

/** Base URL for auth API calls; empty string means same origin (Vercel rewrite). */
export function apiUrlBase() {
  return API_URL;
}

export function isFlashcardAuthEnabled() {
  if (sameOriginAuth()) {
    return true;
  }

  return Boolean(API_URL);
}

export class ApiError extends Error {
  readonly status: number;

  constructor(status: number) {
    super(String(status));
    this.name = 'ApiError';
    this.status = status;
  }
}

let onUnauthorized: (() => void) | null = null;

export function setUnauthorizedHandler(handler: () => void) {
  onUnauthorized = handler;
}

export async function api<T>(path: string, init?: RequestInit): Promise<T> {
  if (!isFlashcardAuthEnabled()) {
    throw new ApiError(0);
  }

  const headers = new Headers(init?.headers);

  if (init?.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  let response: Response;

  try {
    response = await fetch(`${apiUrlBase()}${path}`, {
      ...init,
      headers,
      credentials: 'include'
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw error;
    }

    throw new ApiError(0);
  }

  if (response.status === 401) {
    onUnauthorized?.();
    throw new ApiError(401);
  }

  if (!response.ok) {
    throw new ApiError(response.status);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}
