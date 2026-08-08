'use client';

import { useEffect } from 'react';
import { usePathname } from '@/i18n/navigation.tsx';
import { scrollToHashTarget } from '@/utils/scroll-to-hash.ts';

/**
 * Next's App Router already scrolls to top on forward navigation and restores
 * the offset on back/forward. This only augments anchor (`#hash`) navigation:
 * it re-aligns the target across a few frames so the jump survives lazily
 * loaded content and late layout shifts (e.g. the async Japanese UI font).
 */
export function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    return scrollToHashTarget(window.location.hash);
  }, [pathname]);

  useEffect(() => {
    const handlePopState = () => {
      scrollToHashTarget(window.location.hash);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return null;
}
