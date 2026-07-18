'use client';

import { Component, type ReactNode } from 'react';
import * as Sentry from '@sentry/nextjs';
import { useLocation } from '@/i18n/navigation.tsx';
import { ErrorFallback } from '@/components/error-fallback';

type ErrorBoundaryClassProps = {
  children: ReactNode;
  resetKey: string;
};

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

/**
 * App-level boundary for RENDER errors in the app chrome (`AppLayout` and above
 * the route segment, which the route-level `app/[lang]/error.tsx` cannot reach).
 *
 * It deliberately relies ONLY on React's `getDerivedStateFromError` /
 * `componentDidCatch` - it does NOT attach global `window 'error'` /
 * `unhandledrejection` listeners. Those listeners fired for ANY uncaught error on
 * the page (recoverable hydration errors, event-handler throws, third-party
 * scripts) and turned each into a full-screen fallback. Uncaught async/handler
 * errors are still reported by Sentry's own global handlers and should be handled
 * where they occur, not by blanking the whole app.
 */
export class ErrorBoundaryClass extends Component<ErrorBoundaryClassProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): Partial<ErrorBoundaryState> {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    // This boundary sits inside Sentry's own error boundary, so an error it
    // catches would not otherwise reach Sentry - report it explicitly.
    Sentry.captureException(error);
  }

  componentDidUpdate(prevProps: ErrorBoundaryClassProps) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}

/** Clears a prior page error when the route changes without remounting the app tree. */
export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const location = useLocation();
  const resetKey = `${location.pathname}${location.search}`;

  return <ErrorBoundaryClass resetKey={resetKey}>{children}</ErrorBoundaryClass>;
}
