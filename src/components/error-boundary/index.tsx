import { Component, type ReactNode } from 'react';

type ErrorBoundaryProps = {
  fallback: ReactNode;
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

/** Catches render errors in descendants and renders a fallback UI. */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch() {
    // Error UI is handled locally; no external reporting.
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
