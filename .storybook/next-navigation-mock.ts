// Storybook (Vite) has no Next.js App Router runtime, so the app's
// `next/navigation` import is aliased to this mock (see `.storybook/main.ts`).
// The preview decorator sets the pathname from the locale toolbar.

let pathname = '/';

export function __setStorybookPathname(next: string) {
  pathname = next;
}

export function usePathname() {
  return pathname;
}

export function useRouter() {
  const noop = () => {};

  return { push: noop, replace: noop, back: noop, forward: noop, refresh: noop, prefetch: noop };
}

export function useParams() {
  return {};
}

export function useSearchParams() {
  return new URLSearchParams();
}
