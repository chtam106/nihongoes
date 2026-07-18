'use client';

import { useCallback } from 'react';
import {
  useParams as useNextParams,
  usePathname as useNextPathname,
  useRouter
} from 'next/navigation';

/**
 * Compatibility layer that replaces the handful of `react-router-dom` hooks the
 * app relied on, backed by Next's App Router file-based dynamic segments
 * (`[lang]`, `[level]`, `[track]`, `[lessonId]`).
 */

export type RouteParams = Record<string, string | undefined>;

/** Route params from the matched dynamic segments (lang, level, track, ...). */
export function useParams<T extends RouteParams = RouteParams>(): T {
  return useNextParams() as T;
}

/** The current pathname with any trailing slash normalized away (except root). */
export function usePathname(): string {
  const pathname = useNextPathname();

  if (!pathname) {
    return '/';
  }

  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.replace(/\/+$/, '') || '/';
  }

  return pathname;
}

export type AppLocation = {
  pathname: string;
  search: string;
  hash: string;
  key: string;
};

/** Minimal `useLocation` shim. `search`/`hash` are read from `window` on demand. */
export function useLocation(): AppLocation {
  const pathname = usePathname();
  const search = typeof window === 'undefined' ? '' : window.location.search;
  const hash = typeof window === 'undefined' ? '' : window.location.hash;

  return { pathname, search, hash, key: `${pathname}${search}` };
}

export type NavigateOptions = {
  replace?: boolean;
};

export type NavigateFn = (to: string, options?: NavigateOptions) => void;

export function useNavigate(): NavigateFn {
  const router = useRouter();

  return useCallback(
    (to, options) => {
      if (options?.replace) {
        router.replace(to);
      } else {
        router.push(to);
      }
    },
    [router]
  );
}
