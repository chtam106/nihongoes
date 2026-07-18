import { useCallback, useSyncExternalStore } from 'react';

/**
 * Read and validate a JSON value from localStorage, falling back to `fallback`
 * when storage is unavailable, empty, malformed, or fails the `sanitize` guard.
 * `sanitize` receives the parsed value and must coerce it into a safe `T`.
 */
export function readPersistedValue<T>(
  key: string,
  fallback: T,
  sanitize: (value: unknown) => T
): T {
  if (typeof window === 'undefined') {
    return fallback;
  }

  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) {
      return fallback;
    }

    return sanitize(JSON.parse(raw));
  } catch {
    return fallback;
  }
}

function writePersistedValue<T>(key: string, value: T) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore quota/availability errors - persistence is best-effort.
  }
}

// A cached snapshot per key so `useSyncExternalStore` returns a stable reference
// until the underlying raw string changes (React requires a cached snapshot).
type Snapshot = { raw: string | null; value: unknown };
const snapshots = new Map<string, Snapshot>();
const listeners = new Map<string, Set<() => void>>();

function currentRaw(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function computeValue<T>(raw: string | null, fallback: T, sanitize: (value: unknown) => T): T {
  if (!raw) {
    return fallback;
  }

  try {
    return sanitize(JSON.parse(raw));
  } catch {
    return fallback;
  }
}

function getClientSnapshot<T>(key: string, fallback: T, sanitize: (value: unknown) => T): T {
  const raw = currentRaw(key);
  const cached = snapshots.get(key);

  if (cached && cached.raw === raw) {
    return cached.value as T;
  }

  const value = computeValue(raw, fallback, sanitize);
  snapshots.set(key, { raw, value });

  return value;
}

function notify(key: string) {
  listeners.get(key)?.forEach((listener) => listener());
}

function subscribeKey(key: string, callback: () => void) {
  let set = listeners.get(key);

  if (!set) {
    set = new Set();
    listeners.set(key, set);
  }

  set.add(callback);

  const onStorage = (event: StorageEvent) => {
    if (event.key === key) {
      snapshots.delete(key);
      callback();
    }
  };

  window.addEventListener('storage', onStorage);

  return () => {
    set.delete(callback);
    window.removeEventListener('storage', onStorage);
  };
}

/**
 * Like `useState`, but the value is seeded from and mirrored to localStorage
 * under `key`. Every update writes the new value back so the selection survives
 * reloads. Pass a `sanitize` guard to validate previously stored data.
 *
 * Backed by `useSyncExternalStore`: during static pre-rendering and the first
 * client (hydration) render it returns `fallback` (matching the server HTML),
 * then swaps to the stored value - so it never causes a hydration mismatch.
 */
export function usePersistentState<T>(key: string, fallback: T, sanitize: (value: unknown) => T) {
  const subscribe = useCallback(
    (callback: () => void) => {
      if (typeof window === 'undefined') {
        return () => {};
      }

      return subscribeKey(key, callback);
    },
    [key]
  );

  const getSnapshot = useCallback(
    () => getClientSnapshot(key, fallback, sanitize),
    [key, fallback, sanitize]
  );

  const getServerSnapshot = useCallback(() => fallback, [fallback]);

  const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setPersistedValue = useCallback(
    (next: T | ((previous: T) => T)) => {
      const previous = getClientSnapshot(key, fallback, sanitize);
      const resolved = typeof next === 'function' ? (next as (previous: T) => T)(previous) : next;
      writePersistedValue(key, resolved);
      snapshots.set(key, { raw: JSON.stringify(resolved), value: resolved });
      notify(key);
    },
    [key, fallback, sanitize]
  );

  return [value, setPersistedValue] as const;
}
