'use client';

import { useSyncExternalStore, type ReactNode } from 'react';

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

type ClientOnlyProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

/**
 * Renders `children` only on the client (after hydration); renders `fallback`
 * during static pre-rendering and the first client render. Use it for
 * interactive surfaces whose output depends on browser-only state or randomness
 * (e.g. quizzes that pick a random question) so they never cause a hydration
 * mismatch. These surfaces carry no SEO value, so skipping them at build time is
 * fine. Backed by `useSyncExternalStore` (no `setState` in an effect).
 */
export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const hydrated = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!hydrated) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
