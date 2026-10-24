export const LOGIN_PATH = '/login';

export const RETURN_TO_QUERY = 'returnTo';

export const AUTH_REASON_QUERY = 'auth_reason';

export function stripAuthQuery(href: string) {
  try {
    const url = new URL(href);
    url.searchParams.delete('auth');
    url.searchParams.delete('auth_reason');

    return url.toString();
  } catch {
    return href;
  }
}

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

export function loginPath(returnTo?: string, authReason?: string | null) {
  const params = new URLSearchParams();

  if (returnTo) {
    params.set(RETURN_TO_QUERY, stripAuthQuery(returnTo));
  }

  if (authReason) {
    params.set(AUTH_REASON_QUERY, authReason);
  }

  const query = params.toString();

  if (!query) {
    return LOGIN_PATH;
  }

  return `${LOGIN_PATH}?${query}`;
}
