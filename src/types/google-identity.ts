export type GoogleTokenResponse = {
  access_token?: string;
  error?: string;
  expires_in?: number;
};

export type GoogleTokenClient = {
  requestAccessToken: (override?: { prompt?: string }) => void;
};

export type GoogleTokenClientConfig = {
  client_id: string;
  scope: string;
  callback: (response: GoogleTokenResponse) => void;
  error_callback?: (error: { type: string }) => void;
};

declare global {
  interface Window {
    google?: {
      accounts: {
        oauth2: {
          initTokenClient: (config: GoogleTokenClientConfig) => GoogleTokenClient;
          revoke: (token: string, done: () => void) => void;
        };
      };
    };
  }
}
