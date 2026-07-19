import NotFoundPage from '@/components/not-found-page';

/**
 * Localized 404 shown within the app chrome. Reached when a page/layout under
 * `[lang]` calls `notFound()` or an unknown path resolves into the locale tree.
 */
export default function NotFound() {
  return <NotFoundPage />;
}
