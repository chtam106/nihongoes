/** Scroll to a hash target, retrying until layout stabilizes (fonts, lazy content). */
export function scrollToHashTarget(rawHash: string) {
  if (!rawHash) {
    window.scrollTo({ top: 0 });
    return () => {};
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
}

/** Push a section id onto the URL hash without triggering a browser scroll jump. */
export function pushSectionHash(id: string) {
  const nextHash = `#${id}`;

  if (window.location.hash === nextHash) {
    return;
  }

  window.history.pushState(null, '', `${window.location.pathname}${window.location.search}${nextHash}`);
}
