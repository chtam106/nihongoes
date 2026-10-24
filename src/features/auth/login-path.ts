export const LOGIN_PATH = '/login';

export const RETURN_TO_QUERY = 'returnTo';

export function safeReturnTo(value: string | null, fallback: string): string {
  if (!value) {
    return fallback;
  }

  try {
    const url = new URL(value);

    if (typeof window !== 'undefined' && url.origin === window.location.origin) {
      return url.toString();
    }
  } catch {
    return fallback;
  }

  return fallback;
}

export function loginPath(returnTo?: string) {
  if (!returnTo) {
    return LOGIN_PATH;
  }

  return `${LOGIN_PATH}?${RETURN_TO_QUERY}=${encodeURIComponent(returnTo)}`;
}
