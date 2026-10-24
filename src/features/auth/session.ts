'use client';

import { useSyncExternalStore } from 'react';
import {
  isFlashcardAuthEnabled,
  setUnauthorizedHandler,
  ApiError,
  api,
  apiUrlBase
} from '@/features/auth/api.ts';
import {
  flushCollectionStore,
  loadCollectionStore,
  resetCollectionStore
} from '@/features/flashcards/collection-store.ts';

export type AuthUser = {
  id: string;
  email: string;
  name: string;
  picture: string;
};

export type AuthSnapshot = {
  status: 'loading' | 'anonymous' | 'authenticated' | 'error';
  user: AuthUser | null;
  notice: 'none' | 'failed';
  /** Set when the backend redirects with ?auth=error&auth_reason=… (stripped from the URL). */
  authFailureReason: string | null;
};

const LOADING: AuthSnapshot = {
  status: 'loading',
  user: null,
  notice: 'none',
  authFailureReason: null
};
const ANONYMOUS: AuthSnapshot = {
  status: 'anonymous',
  user: null,
  notice: 'none',
  authFailureReason: null
};

let snapshot: AuthSnapshot = isFlashcardAuthEnabled() ? LOADING : ANONYMOUS;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function consumeAuthError(): { failed: boolean; reason: string | null } {
  const url = new URL(window.location.href);

  if (url.searchParams.get('auth') !== 'error') {
    return { failed: false, reason: null };
  }

  const reason = url.searchParams.get('auth_reason');
  url.searchParams.delete('auth');
  url.searchParams.delete('auth_reason');
  window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);

  return { failed: true, reason };
}

export async function refreshSession() {
  if (!isFlashcardAuthEnabled()) {
    snapshot = ANONYMOUS;
    emit();

    return;
  }

  try {
    const data = await api<{ user: AuthUser | null }>('/api/me');

    if (!data.user) {
      snapshot = { ...ANONYMOUS, notice: snapshot.notice };
      emit();

      return;
    }

    snapshot = { status: 'authenticated', user: data.user, notice: snapshot.notice };
    emit();
    void loadCollectionStore(data.user.id);
  } catch (error) {
    const notice = snapshot.notice;

    if (error instanceof ApiError && error.status === 401) {
      snapshot = { ...ANONYMOUS, notice };
      emit();

      return;
    }

    snapshot = { status: 'error', user: null, notice };
    emit();
  }
}

export function startGoogleSignIn(returnTo?: string) {
  if (!isFlashcardAuthEnabled() || typeof window === 'undefined') {
    return;
  }

  const target = returnTo ?? window.location.href;
  window.location.assign(`${apiUrlBase()}/auth/google?returnTo=${encodeURIComponent(target)}`);
}

export async function signOut() {
  await flushCollectionStore();

  try {
    await api('/auth/logout', { method: 'POST' });
  } catch {
    // Drop the local session even when the request fails.
  }

  snapshot = ANONYMOUS;
  emit();
  resetCollectionStore();
}

export function useAuth() {
  return useSyncExternalStore(
    subscribe,
    () => snapshot,
    () => LOADING
  );
}

setUnauthorizedHandler(() => {
  snapshot = { ...ANONYMOUS, notice: snapshot.notice };
  emit();
  resetCollectionStore();
});

if (typeof window !== 'undefined' && isFlashcardAuthEnabled()) {
  const authError = consumeAuthError();

  if (authError.failed) {
    snapshot = {
      ...snapshot,
      notice: 'failed',
      authFailureReason: authError.reason
    };
  }

  void refreshSession();
}
