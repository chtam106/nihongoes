'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode
} from 'react';
import { Button, Stack, Typography } from '@mui/material';
import {
  EMPTY_FLASHCARD_STORE,
  FLASHCARD_COLLECTIONS_KEY,
  sanitizeFlashcardStore,
  type FlashcardStore
} from '@/constants/flashcards/collections.ts';
import {
  createFlashcardFile,
  DRIVE_APPDATA_SCOPE,
  DriveApiError,
  findFlashcardFile,
  readFlashcardFile,
  updateFlashcardFile
} from '@/features/flashcards/google-drive.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import type { GoogleTokenClient } from '@/types/google-identity.ts';

export type FlashcardDriveStatus =
  | 'unconfigured'
  | 'signed-out'
  | 'signing-in'
  | 'loading'
  | 'ready'
  | 'error';

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '';
const LEGACY_COLLECTIONS_KEY = 'nihongoes-flashcard-collections';
const GIS_SCRIPT = 'https://accounts.google.com/gsi/client';

type FlashcardDriveContextValue = {
  status: FlashcardDriveStatus;
  store: FlashcardStore;
  signIn: () => void;
  updateStore: (updater: (current: FlashcardStore) => FlashcardStore) => void;
};

const FlashcardDriveContext = createContext<FlashcardDriveContextValue | null>(null);

function loadGis() {
  if (window.google?.accounts.oauth2) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-google-identity]');

    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('gis')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = GIS_SCRIPT;
    script.async = true;
    script.dataset.googleIdentity = 'true';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('gis'));
    document.head.appendChild(script);
  });
}

function readLegacyStore(): FlashcardStore | null {
  try {
    const raw =
      window.localStorage.getItem(FLASHCARD_COLLECTIONS_KEY) ??
      window.localStorage.getItem(LEGACY_COLLECTIONS_KEY);

    if (raw == null) {
      return null;
    }

    return sanitizeFlashcardStore(JSON.parse(raw));
  } catch {
    return null;
  }
}

function clearLegacyStore() {
  try {
    window.localStorage.removeItem(FLASHCARD_COLLECTIONS_KEY);
    window.localStorage.removeItem(LEGACY_COLLECTIONS_KEY);
  } catch {
    // Private mode can reject storage access. Drive is still the copy of record.
  }
}

function storeHasUserData(store: FlashcardStore) {
  return store.overrides.length > 0 || store.hidden.length > 0;
}

type FlashcardDriveProviderProps = {
  children: ReactNode;
};

export function FlashcardDriveProvider({ children }: FlashcardDriveProviderProps) {
  const [status, setStatus] = useState<FlashcardDriveStatus>(
    GOOGLE_CLIENT_ID ? 'signing-in' : 'unconfigured'
  );
  const [store, setStore] = useState<FlashcardStore>(EMPTY_FLASHCARD_STORE);
  const tokenRef = useRef('');
  const storeRef = useRef(store);
  const fileIdRef = useRef<string | null>(null);
  const clientRef = useRef<GoogleTokenClient | null>(null);
  const writeChain = useRef(Promise.resolve());
  const onTokenRef = useRef<(token: string) => void>(() => {});
  const onFailRef = useRef<() => void>(() => {});

  const fail = useCallback((next: FlashcardDriveStatus) => {
    tokenRef.current = '';
    setStatus(next);
  }, []);

  const enqueueWrite = useCallback(
    (snapshot: FlashcardStore) => {
      writeChain.current = writeChain.current
        .then(async () => {
          const token = tokenRef.current;

          if (!token) {
            return;
          }

          if (fileIdRef.current) {
            await updateFlashcardFile(token, fileIdRef.current, snapshot);
            return;
          }

          fileIdRef.current = await createFlashcardFile(token, snapshot);
        })
        .catch((error: unknown) => {
          fail(error instanceof DriveApiError && error.status === 401 ? 'signed-out' : 'error');
        });
    },
    [fail]
  );

  const replaceStore = useCallback((next: FlashcardStore) => {
    storeRef.current = next;
    setStore(next);
  }, []);

  const acceptToken = useCallback(
    (token: string) => {
      tokenRef.current = token;
      setStatus('loading');

      void (async () => {
        try {
          const fileId = await findFlashcardFile(token);

          if (fileId) {
            fileIdRef.current = fileId;
            replaceStore(await readFlashcardFile(token, fileId));
            clearLegacyStore();
            setStatus('ready');
            return;
          }

          const legacy = readLegacyStore();

          if (legacy && storeHasUserData(legacy)) {
            fileIdRef.current = await createFlashcardFile(token, legacy);
            replaceStore(legacy);
            clearLegacyStore();
            setStatus('ready');
            return;
          }

          fileIdRef.current = null;
          replaceStore(EMPTY_FLASHCARD_STORE);
          clearLegacyStore();
          setStatus('ready');
        } catch (error: unknown) {
          fail(error instanceof DriveApiError && error.status === 401 ? 'signed-out' : 'error');
        }
      })();
    },
    [fail, replaceStore]
  );

  useEffect(() => {
    onTokenRef.current = acceptToken;
  }, [acceptToken]);

  useEffect(() => {
    onFailRef.current = () => fail('signed-out');
  }, [fail]);

  const tokenClient = useCallback(() => {
    if (clientRef.current) {
      return clientRef.current;
    }

    const googleIdentity = window.google?.accounts.oauth2;

    if (!googleIdentity) {
      throw new Error('gis');
    }

    clientRef.current = googleIdentity.initTokenClient({
      client_id: GOOGLE_CLIENT_ID,
      scope: DRIVE_APPDATA_SCOPE,
      callback: (response) => {
        if (response.access_token) {
          onTokenRef.current(response.access_token);
          return;
        }

        onFailRef.current();
      },
      error_callback: () => onFailRef.current()
    });

    return clientRef.current;
  }, []);

  const signIn = useCallback(() => {
    if (!GOOGLE_CLIENT_ID) {
      setStatus('unconfigured');
      return;
    }

    setStatus('signing-in');
    void loadGis().then(
      () => tokenClient().requestAccessToken(),
      () => fail('error')
    );
  }, [fail, tokenClient]);

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID) {
      return;
    }

    let cancelled = false;

    void loadGis().then(
      () => {
        if (!cancelled) {
          tokenClient().requestAccessToken({ prompt: '' });
        }
      },
      () => {
        if (!cancelled) {
          fail('error');
        }
      }
    );

    return () => {
      cancelled = true;
    };
  }, [fail, tokenClient]);

  const updateStore = useCallback(
    (updater: (current: FlashcardStore) => FlashcardStore) => {
      if (status !== 'ready') {
        return;
      }

      const next = updater(storeRef.current);

      if (next === storeRef.current) {
        return;
      }

      replaceStore(next);
      enqueueWrite(next);
    },
    [enqueueWrite, replaceStore, status]
  );

  const value = useMemo(
    () => ({ status, store, signIn, updateStore }),
    [signIn, status, store, updateStore]
  );

  return <FlashcardDriveContext.Provider value={value}>{children}</FlashcardDriveContext.Provider>;
}

export function useFlashcardDrive() {
  const drive = useContext(FlashcardDriveContext);

  if (!drive) {
    throw new Error('useFlashcardDrive must be used within FlashcardDriveProvider');
  }

  return drive;
}

export function FlashcardDriveGate() {
  const { t } = useTranslation();
  const { status, signIn } = useFlashcardDrive();
  const waiting = status === 'signing-in' || status === 'loading';

  return (
    <Stack spacing={1.5} sx={{ alignItems: 'flex-start' }}>
      {waiting && (
        <Typography variant="body1" color="text.secondary">
          {t('flashcards.driveLoading')}
        </Typography>
      )}
      {status === 'unconfigured' && (
        <Typography variant="body1" color="text.secondary">
          {t('flashcards.driveUnconfigured')}
        </Typography>
      )}
      {status === 'error' && (
        <Typography variant="body1" color="text.secondary">
          {t('flashcards.driveError')}
        </Typography>
      )}
      {status === 'signed-out' && (
        <Typography variant="body1" color="text.secondary">
          {t('flashcards.driveSignInBody')}
        </Typography>
      )}
      {(status === 'signed-out' || status === 'error') && (
        <Button variant="contained" onClick={signIn} sx={{ textTransform: 'none' }}>
          {t('flashcards.driveSignIn')}
        </Button>
      )}
    </Stack>
  );
}
