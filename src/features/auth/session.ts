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
let signOutInProgress = false;
let refreshInFlight: Promise<void> | null = null;
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

async function refreshSessionOnce() {
  if (signOutInProgress) {
    return;
  }

  if (!isFlashcardAuthEnabled()) {
    snapshot = ANONYMOUS;
    emit();

    return;
  }

  if (snapshot.status !== 'authenticated') {
    snapshot = {
      ...LOADING,
      notice: snapshot.notice,
      authFailureReason: snapshot.authFailureReason
    };
    emit();
  }

  try {
    const data = await api<{ user: AuthUser | null }>('/api/me');

    if (!data.user) {
      snapshot = {
        ...ANONYMOUS,
        notice: snapshot.notice,
        authFailureReason: snapshot.authFailureReason
      };
      resetCollectionStore();
      emit();

      return;
    }

    snapshot = {
      status: 'authenticated',
      user: data.user,
      notice: snapshot.notice,
      authFailureReason: null
    };
    emit();
    void loadCollectionStore(data.user.id);
  } catch (error) {
    const notice = snapshot.notice;

    if (error instanceof ApiError && error.status === 401) {
      snapshot = {
        ...ANONYMOUS,
        notice,
        authFailureReason: snapshot.authFailureReason
      };
      resetCollectionStore();
      emit();

      return;
    }

    snapshot = {
      status: 'error',
      user: null,
      notice,
      authFailureReason: snapshot.authFailureReason
    };
    emit();
  }
}

export function refreshSession() {
  if (refreshInFlight) {
    return refreshInFlight;
  }

  refreshInFlight = refreshSessionOnce().finally(() => {
    refreshInFlight = null;
  });

  return refreshInFlight;
}

export function startGoogleSignIn(returnTo?: string) {
  if (!isFlashcardAuthEnabled() || typeof window === 'undefined') {
    return;
  }

  const target = returnTo ?? window.location.href;
  window.location.assign(`${apiUrlBase()}/auth/google?returnTo=${encodeURIComponent(target)}`);
}

export async function signOut() {
  signOutInProgress = true;

  try {
    await flushCollectionStore();

    try {
      await api('/auth/logout', { method: 'POST', sessionNotify: false });
    } catch {
      // Drop the local session even when the request fails.
    }

    snapshot = ANONYMOUS;
    resetCollectionStore();
    emit();
  } finally {
    signOutInProgress = false;
  }
}

export function useAuth() {
  return useSyncExternalStore(
    subscribe,
    () => snapshot,
    () => LOADING
  );
}

setUnauthorizedHandler(() => {
  void refreshSession();
});

if (typeof window !== 'undefined' && isFlashcardAuthEnabled()) {
  const authError = consumeAuthError();

  if (authError.failed) {
    snapshot = {
      ...snapshot,
      notice: 'failed',
      authFailureReason: authError.reason
    };
    emit();
  }

  void refreshSession();
}
