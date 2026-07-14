import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * Controls scroll position on navigation:
 * - Moving to a new page (PUSH) jumps to the top, or to the anchor when the URL
 *   has a hash.
 * - Going back/forward (POP) restores the offset the page had when you left it.
 * - Replacing the entry (REPLACE, e.g. switching locale) is left untouched so
 *   the view stays where it is.
 *
 * The offset is saved in the effect cleanup (which runs before the next route
 * applies its own scroll), so the programmatic scroll-to-top never clobbers it.
 * Rendered once inside the persistent layout so the saved offsets survive.
 */
export function ScrollManager() {
  const { key, hash } = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef(new Map<string, number>());

  // Opt out of the browser's own scroll restoration so it does not fight ours.
  useEffect(() => {
    if (!('scrollRestoration' in window.history)) {
      return;
    }

    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useLayoutEffect(() => {
    const store = positions.current;
    let raf = 0;
    let frames = 0;

    // Scroll the anchor into view and keep re-aligning across frames until its
    // position settles - this survives lazy-loaded content and late layout
    // shifts (e.g. the async Japanese UI font reflowing the page).
    const id = decodeURIComponent(hash.slice(1));
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

    // Re-apply an offset, retrying for a few frames while lazily-loaded page
    // content is still growing the document height.
    const restore = (offset: number) => {
      window.scrollTo(0, offset);
      frames += 1;

      if (Math.abs(window.scrollY - offset) > 1 && frames < 20) {
        raf = requestAnimationFrame(() => restore(offset));
      }
    };

    if (navigationType === 'PUSH') {
      if (hash) {
        scrollToHash();
      } else {
        window.scrollTo(0, 0);
      }
    } else if (navigationType === 'POP') {
      const saved = store.get(key);

      if (saved == null && hash) {
        scrollToHash();
      } else {
        restore(saved ?? 0);
      }
    }
    // REPLACE: leave the current scroll position as-is.

    return () => {
      cancelAnimationFrame(raf);
      // Remember where this entry was before the next route scrolls.
      store.set(key, window.scrollY);
    };
  }, [key, navigationType, hash]);

  return null;
}
