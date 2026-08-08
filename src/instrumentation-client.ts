import * as Sentry from '@sentry/nextjs';

// Client-side Sentry init (Next.js loads this in the browser). Production only,
// so `next dev` never reports. Source maps for readable stack traces are
// uploaded at build time by `withSentryConfig` in `next.config.ts`.
if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://bf3133d22cc666760ff3802a937d83e4@o4511653477548032.ingest.us.sentry.io/4511653482004480',
    // NOTE: do not reference `Sentry.replayIntegration` statically - it pulls the
    // ~166KB rrweb Session Replay bundle into the initial JS. It is loaded lazily
    // below instead. The `replays*SampleRate` options still apply once it attaches.
    integrations: [Sentry.browserTracingIntegration()],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0
  });

  // Attach Session Replay lazily (loaded from the Sentry CDN, kept out of the
  // initial bundle) once the browser is idle, so it never blocks first paint.
  // Replay is non-critical, so failures are ignored.
  const attachReplay = () => {
    Sentry.lazyLoadIntegration('replayIntegration')
      .then((replayIntegration) => {
        Sentry.getClient()?.addIntegration(
          replayIntegration({ maskAllText: false, blockAllMedia: false })
        );
      })
      .catch(() => {});
  };

  if (typeof window !== 'undefined') {
    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(attachReplay);
    } else {
      window.setTimeout(attachReplay, 2000);
    }
  }
}

// Instruments App Router client-side navigations for tracing.
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
