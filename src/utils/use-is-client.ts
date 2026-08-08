import { useSyncExternalStore } from 'react';

/** False during SSR/static render; true once the client has mounted. */
export function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}
