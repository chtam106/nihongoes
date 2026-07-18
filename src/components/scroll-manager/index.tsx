'use client';

import { useEffect } from 'react';
import { usePathname } from '@/i18n/navigation.tsx';

/**
 * Next's App Router already scrolls to top on forward navigation and restores
 * the offset on back/forward. This only augments anchor (`#hash`) navigation:
 * it re-aligns the target across a few frames so the jump survives lazily
 * loaded content and late layout shifts (e.g. the async Japanese UI font).
 */
export function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const rawHash = window.location.hash;

    if (!rawHash) {
      return;
    }

    const id = decodeURIComponent(rawHash.slice(1));
    let raf = 0;
    let frames = 0;
    let lastTop = Number.NaN;

    const scrollToHash = () => {
      frames += 1;
      const target = document.getElementById(id);

      if (target) {
        target.scrollIntoView({ block: 'start' });
        const top = Math.round(target.getBoundingClientRect().top);

        if (top === lastTop) {
          return;
        }

        lastTop = top;
      }

      if (frames < 60) {
        raf = requestAnimationFrame(scrollToHash);
      }
    };

    scrollToHash();

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
