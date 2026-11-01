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
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography
} from '@mui/material';
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
  GOOGLE_EMAIL_SCOPE,
  readFlashcardFile,
  readGoogleEmail,
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
const SYNC_RESULT_MS = 2000;
const TOKEN_SKEW_SECONDS = 60;
const DEFAULT_TOKEN_SECONDS = 3600;

export type FlashcardSyncMode = 'drive' | 'local' | 'merge';

type SyncResult = 'ok' | 'aborted' | 'error';

type DriveSession = {
  token: string;
  expiresAt: number;
  fileId: string | null;
  email: string | null;
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
    fileId,
    email: driveSession?.token === token ? driveSession.email : null
  };
}

function rememberDriveEmail(token: string, email: string) {
  if (!driveSession || driveSession.token !== token) {
    return;
  }

  driveSession = { ...driveSession, email };
}

type FlashcardDriveContextValue = {
  status: FlashcardDriveStatus;
  email: string | null;
  signIn: () => void;
  signOut: () => void;
  sync: (mode: FlashcardSyncMode) => Promise<SyncResult>;
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
  const tokenRef = useRef(restoredSession?.token ?? '');
  const fileIdRef = useRef<string | null>(restoredSession?.fileId ?? null);
  const [email, setEmail] = useState<string | null>(restoredSession?.email ?? null);
  const clientRef = useRef<GoogleTokenClient | null>(null);
  const onTokenRef = useRef<(token: string, expiresIn?: number) => void>(() => {});
  const onFailRef = useRef<() => void>(() => {});

  const fail = useCallback((next: FlashcardDriveStatus) => {
    tokenRef.current = '';
    fileIdRef.current = null;
    driveSession = null;
    setEmail(null);
    setStatus(next);
  }, []);

  const acceptToken = useCallback((token: string, expiresIn?: number) => {
    tokenRef.current = token;
    rememberDriveSession(token, expiresIn, fileIdRef.current);
    setEmail(null);
    setStatus('connected');
    void readGoogleEmail(token).then((nextEmail) => {
      if (!nextEmail || readDriveSession()?.token !== token) {
        return;
      }

      rememberDriveEmail(token, nextEmail);
      setEmail(nextEmail);
    });
  }, []);

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
      scope: `${DRIVE_APPDATA_SCOPE} ${GOOGLE_EMAIL_SCOPE}`,
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

  const signOut = useCallback(() => {
    const token = tokenRef.current || readDriveSession()?.token || '';
    tokenRef.current = '';
    fileIdRef.current = null;
    driveSession = null;
    setEmail(null);
    setStatus('signed-out');

    if (token) {
      window.google?.accounts.oauth2.revoke(token, () => {});
    }
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

  const sync = useCallback(
    (mode: FlashcardSyncMode) => {
      const token = readDriveSession()?.token ?? '';
      tokenRef.current = token;

      if (!token) {
        fileIdRef.current = null;
        setStatus('signed-out');
        return Promise.resolve<SyncResult>('aborted');
      }

      setStatus('syncing');

      return (async (): Promise<SyncResult> => {
        try {
          const local = readPersistedValue(
            FLASHCARD_COLLECTIONS_KEY,
            EMPTY_FLASHCARD_STORE,
            sanitizeFlashcardStore
          );
          const fileId = fileIdRef.current ?? (await findFlashcardFile(token));
          const remote = fileId ? await readFlashcardFile(token, fileId) : EMPTY_FLASHCARD_STORE;

          if (readDriveSession()?.token !== token) {
            return 'aborted';
          }

          const next =
            mode === 'drive'
              ? remote
              : mode === 'local'
                ? local
                : mergeFlashcardStores(local, remote);

          if (mode !== 'local') {
            writeStorageItem(FLASHCARD_COLLECTIONS_KEY, JSON.stringify(next));
          }

          if (readDriveSession()?.token !== token) {
            return 'aborted';
          }

          if (mode !== 'drive') {
            const nextFileId = fileId ?? (await createFlashcardFile(token, next));

            if (fileId) {
              await updateFlashcardFile(token, fileId, next);
            }

            const session = readDriveSession();

            if (!session || session.token !== token) {
              return 'aborted';
            }

            fileIdRef.current = nextFileId;
            driveSession = { ...session, fileId: nextFileId };
          } else if (fileId) {
            const session = readDriveSession();

            if (!session || session.token !== token) {
              return 'aborted';
            }

            fileIdRef.current = fileId;
            driveSession = { ...session, fileId };
          }

          setStatus('connected');
          return 'ok';
        } catch (error: unknown) {
          if (readDriveSession()?.token !== token) {
            return 'aborted';
          }

          fail(error instanceof DriveApiError && error.status === 401 ? 'signed-out' : 'error');
          return 'error';
        }
      })();
    },
    [fail]
  );

  const value = useMemo(
    () => ({ status, email, signIn, signOut, sync }),
    [email, signIn, signOut, status, sync]
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

type SyncDialogPhase = 'closed' | 'choose' | 'loading' | 'done';

const SYNC_CHOICES: { mode: FlashcardSyncMode; title: string; body: string }[] = [
  {
    mode: 'drive',
    title: 'flashcards.driveSyncFromDrive',
    body: 'flashcards.driveSyncFromDriveBody'
  },
  {
    mode: 'local',
    title: 'flashcards.driveSyncFromBrowser',
    body: 'flashcards.driveSyncFromBrowserBody'
  },
  {
    mode: 'merge',
    title: 'flashcards.driveSyncMerge',
    body: 'flashcards.driveSyncMergeBody'
  }
];

export function FlashcardDriveConnect() {
  const { t } = useTranslation();
  const { status, email, signIn, signOut, sync } = useFlashcardDrive();
  const [phase, setPhase] = useState<SyncDialogPhase>('closed');
  const [syncMode, setSyncMode] = useState<FlashcardSyncMode>('merge');
  const connected = status === 'connected' || status === 'syncing';

  useEffect(() => {
    if (phase !== 'done') {
      return;
    }

    const timer = setTimeout(() => setPhase('closed'), SYNC_RESULT_MS);

    return () => clearTimeout(timer);
  }, [phase]);

  const chooseSync = (mode: FlashcardSyncMode) => {
    setPhase('loading');
    void sync(mode).then((result) => {
      setPhase(result === 'ok' ? 'done' : 'closed');
    });
  };

  return (
    <Stack spacing={1.5} sx={{ alignItems: 'flex-start', alignSelf: 'stretch', width: '100%' }}>
      <Typography variant="body1" color="text.secondary">
        {t('flashcards.drivePageBody')}
      </Typography>
      {status === 'signing-in' && (
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
        <Button
          variant="contained"
          onClick={signIn}
          sx={{ alignSelf: 'center', textTransform: 'none' }}
        >
          {t('flashcards.driveSignIn')}
        </Button>
      )}
      {connected && (
        <Box
          sx={{
            display: 'inline-grid',
            gap: 1.5,
            justifyItems: 'stretch',
            alignSelf: 'center'
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              setSyncMode('merge');
              setPhase('choose');
            }}
            disabled={status === 'syncing'}
            sx={{
              textTransform: 'none',
              ...(email && { flexDirection: 'column', whiteSpace: 'normal', lineHeight: 1.4 })
            }}
          >
            {t('flashcards.driveSync')}
            {email && (
              <Box
                component="span"
                sx={{ display: 'block', overflowWrap: 'anywhere', fontSize: '14px' }}
              >
                ({email})
              </Box>
            )}
          </Button>
          <Button variant="outlined" onClick={signOut} sx={{ textTransform: 'none' }}>
            {t('flashcards.driveSignOut')}
          </Button>
        </Box>
      )}
      <Dialog
        open={phase !== 'closed'}
        onClose={() => {
          if (phase === 'loading') {
            return;
          }

          setPhase('closed');
        }}
        fullWidth
        maxWidth="sm"
      >
        {phase === 'choose' && (
          <>
            <DialogTitle sx={{ fontWeight: 600 }}>{t('flashcards.driveSync')}</DialogTitle>
            <DialogContent>
              <RadioGroup
                value={syncMode}
                onChange={(event) => setSyncMode(event.target.value as FlashcardSyncMode)}
              >
                {SYNC_CHOICES.map((choice) => (
                  <FormControlLabel
                    key={choice.mode}
                    value={choice.mode}
                    control={
                      <Radio
                        color="primary"
                        sx={{
                          color: 'primary.main',
                          '&:hover': { backgroundColor: 'transparent' }
                        }}
                      />
                    }
                    label={
                      <Box>
                        <Typography component="span" sx={{ display: 'block', fontWeight: 600 }}>
                          {t(choice.title)}
                        </Typography>
                        <Typography
                          component="span"
                          sx={{ display: 'block', color: 'text.secondary' }}
                        >
                          {t(choice.body)}
                        </Typography>
                      </Box>
                    }
                    sx={{ alignItems: 'flex-start', mx: 0 }}
                  />
                ))}
              </RadioGroup>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2 }}>
              <Button
                variant="contained"
                onClick={() => chooseSync(syncMode)}
                sx={{ textTransform: 'none' }}
              >
                {t('flashcards.driveSync')}
              </Button>
            </DialogActions>
          </>
        )}
        {phase === 'loading' && (
          <DialogContent>
            <Stack spacing={2} sx={{ alignItems: 'center', py: 3 }}>
              <CircularProgress />
              <Typography variant="body1">{t('flashcards.driveSyncing')}</Typography>
            </Stack>
          </DialogContent>
        )}
        {phase === 'done' && (
          <DialogContent>
            <Typography variant="body1" sx={{ py: 3, textAlign: 'center' }}>
              {t('flashcards.driveSyncDone')}
            </Typography>
          </DialogContent>
        )}
      </Dialog>
    </Stack>
  );
}
