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
import { alpha } from '@mui/material/styles';
import { HintText } from '@/components/hint-text';
import { QUIZ_CORRECT_COLOR } from '@/constants/quiz.ts';
import {
  EMPTY_FLASHCARD_STORE,
  FLASHCARD_COLLECTIONS_KEY,
  mergeFlashcardStores,
  sanitizeFlashcardStore
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
import { readPersistedValue, writeStorageItem } from '@/utils/use-persistent-state.ts';

export type FlashcardDriveStatus =
  | 'unconfigured'
  | 'signed-out'
  | 'signing-in'
  | 'connected'
  | 'syncing'
  | 'error';

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '';
const GIS_SCRIPT = 'https://accounts.google.com/gsi/client';
const SYNC_DONE_MS = 1600;
const TOKEN_SKEW_SECONDS = 60;
const DEFAULT_TOKEN_SECONDS = 3600;

type DriveSession = {
  token: string;
  expiresAt: number;
  fileId: string | null;
};

let driveSession: DriveSession | null = null;

function readDriveSession() {
  if (!driveSession || Date.now() >= driveSession.expiresAt) {
    driveSession = null;
    return null;
  }

  return driveSession;
}

function rememberDriveSession(token: string, expiresIn: number | undefined, fileId: string | null) {
  const seconds = Math.max(
    (expiresIn ?? DEFAULT_TOKEN_SECONDS) - TOKEN_SKEW_SECONDS,
    TOKEN_SKEW_SECONDS
  );

  driveSession = {
    token,
    expiresAt: Date.now() + seconds * 1000,
    fileId
  };
}

type FlashcardDriveContextValue = {
  status: FlashcardDriveStatus;
  syncDone: boolean;
  signIn: () => void;
  sync: () => void;
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

type FlashcardDriveProviderProps = {
  children: ReactNode;
};

export function FlashcardDriveProvider({ children }: FlashcardDriveProviderProps) {
  const restoredSession = GOOGLE_CLIENT_ID ? readDriveSession() : null;
  const [status, setStatus] = useState<FlashcardDriveStatus>(
    !GOOGLE_CLIENT_ID ? 'unconfigured' : restoredSession ? 'connected' : 'signed-out'
  );
  const [syncDone, setSyncDone] = useState(false);
  const tokenRef = useRef(restoredSession?.token ?? '');
  const fileIdRef = useRef<string | null>(restoredSession?.fileId ?? null);
  const clientRef = useRef<GoogleTokenClient | null>(null);
  const syncDoneTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onTokenRef = useRef<(token: string, expiresIn?: number) => void>(() => {});
  const onFailRef = useRef<() => void>(() => {});

  const clearSyncDone = useCallback(() => {
    if (syncDoneTimer.current) {
      clearTimeout(syncDoneTimer.current);
      syncDoneTimer.current = null;
    }

    setSyncDone(false);
  }, []);

  useEffect(
    () => () => {
      if (syncDoneTimer.current) {
        clearTimeout(syncDoneTimer.current);
      }
    },
    []
  );

  const fail = useCallback(
    (next: FlashcardDriveStatus) => {
      tokenRef.current = '';
      fileIdRef.current = null;
      driveSession = null;
      clearSyncDone();
      setStatus(next);
    },
    [clearSyncDone]
  );

  const acceptToken = useCallback(
    (token: string, expiresIn?: number) => {
      tokenRef.current = token;
      rememberDriveSession(token, expiresIn, fileIdRef.current);
      clearSyncDone();
      setStatus('connected');
    },
    [clearSyncDone]
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
          onTokenRef.current(response.access_token, response.expires_in);
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
    clearSyncDone();
    void loadGis().then(
      () => tokenClient().requestAccessToken(),
      () => fail('error')
    );
  }, [clearSyncDone, fail, tokenClient]);

  const sync = useCallback(() => {
    const token = readDriveSession()?.token ?? '';
    tokenRef.current = token;

    if (!token) {
      fileIdRef.current = null;
      setStatus('signed-out');
      return;
    }

    setStatus('syncing');
    clearSyncDone();

    void (async () => {
      try {
        const local = readPersistedValue(
          FLASHCARD_COLLECTIONS_KEY,
          EMPTY_FLASHCARD_STORE,
          sanitizeFlashcardStore
        );
        const fileId = fileIdRef.current ?? (await findFlashcardFile(token));
        const remote = fileId ? await readFlashcardFile(token, fileId) : EMPTY_FLASHCARD_STORE;
        const merged = mergeFlashcardStores(local, remote);

        writeStorageItem(FLASHCARD_COLLECTIONS_KEY, JSON.stringify(merged));

        const nextFileId = fileId ?? (await createFlashcardFile(token, merged));
        fileIdRef.current = nextFileId;

        if (fileId) {
          await updateFlashcardFile(token, fileId, merged);
        }

        if (driveSession?.token === token) {
          driveSession = { ...driveSession, fileId: nextFileId };
        }

        setStatus('connected');
        setSyncDone(true);
        syncDoneTimer.current = setTimeout(() => {
          syncDoneTimer.current = null;
          setSyncDone(false);
        }, SYNC_DONE_MS);
      } catch (error: unknown) {
        fail(error instanceof DriveApiError && error.status === 401 ? 'signed-out' : 'error');
      }
    })();
  }, [clearSyncDone, fail]);

  const value = useMemo(
    () => ({ status, syncDone, signIn, sync }),
    [signIn, status, sync, syncDone]
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

export function FlashcardDriveConnect() {
  const { t } = useTranslation();
  const { status, syncDone, signIn, sync } = useFlashcardDrive();
  const waiting = status === 'signing-in' || status === 'syncing';
  const connected = status === 'connected' || status === 'syncing';
  const syncLabel =
    status === 'syncing'
      ? t('flashcards.driveSyncing')
      : syncDone
        ? t('flashcards.driveSynced')
        : t('flashcards.driveSync');

  return (
    <Stack spacing={1.5} sx={{ alignItems: 'flex-start' }}>
      <HintText>{t('flashcards.driveTesting')}</HintText>
      <Typography variant="body1" color="text.secondary">
        {t('flashcards.drivePageBody')}
      </Typography>
      {waiting && status === 'signing-in' && (
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
      {(status === 'signed-out' || status === 'error') && (
        <Button variant="contained" onClick={signIn} sx={{ textTransform: 'none' }}>
          {t('flashcards.driveSignIn')}
        </Button>
      )}
      {connected && (
        <Button
          variant="contained"
          onClick={sync}
          disabled={status === 'syncing'}
          sx={{
            textTransform: 'none',
            ...(syncDone && {
              '&.MuiButton-contained, &:hover': {
                bgcolor: alpha(QUIZ_CORRECT_COLOR, 0.16),
                color: '#067a28',
                boxShadow: 'none'
              }
            })
          }}
        >
          {syncLabel}
        </Button>
      )}
    </Stack>
  );
}
