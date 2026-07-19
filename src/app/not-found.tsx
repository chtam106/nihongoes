/**
 * Root-level 404 fallback. The root layout is a passthrough (no `<html>`), and
 * the middleware routes real page paths into the `[locale]` tree (which has its own
 * chrome-wrapped `not-found`), so this bare document is only an edge fallback for
 * paths that never reach a locale segment.
 */
export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100svh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif'
        }}
      >
        <div style={{ textAlign: 'center', padding: 24 }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: 8 }}>Page not found (404)</h1>
          <p style={{ marginBottom: 16 }}>The page you are looking for does not exist.</p>
          <a href="/" style={{ color: '#1976d2' }}>
            Go to homepage
          </a>
        </div>
      </body>
    </html>
  );
}
