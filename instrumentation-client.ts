import * as Sentry from '@sentry/nextjs';

// Client-side Sentry init (Next.js loads this in the browser). Production only,
// so `next dev` never reports. Source maps for readable stack traces are
// uploaded at build time by `withSentryConfig` in `next.config.ts`.
if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://bf3133d22cc666760ff3802a937d83e4@o4511653477548032.ingest.us.sentry.io/4511653482004480',
    integrations: [
      Sentry.browserTracingIntegration(),
      // Disable built-in masking: this site has no sensitive user data.
      Sentry.replayIntegration({ maskAllText: false, blockAllMedia: false })
    ],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0
  });
}

// Instruments App Router client-side navigations for tracing.
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
