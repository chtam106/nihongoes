import { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab, Fade, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';

/** Show only once the page is scrolled past this fraction of its scrollable height. */
const SHOW_AFTER_PROGRESS = 0.15;

/** Treat scrolling as "stopped" once no scroll event fires for this long (ms). */
const SCROLL_IDLE_DELAY = 90;

/**
 * Floating "back to top" button, fixed to the bottom-right of the viewport.
 * Stays hidden while the user is actively scrolling; once scrolling settles it
 * decides whether to show, appearing only when the last movement was downward
 * and the page is scrolled past a threshold (scrolling up keeps it hidden). On
 * desktop it rests 20px above the footer.
 */
export function ScrollToTopButton() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const gap = isDesktop ? 20 : 16;
  const [visible, setVisible] = useState(false);
  const [bottom, setBottom] = useState(gap);

  useEffect(() => {
    let idleTimer: ReturnType<typeof setTimeout> | undefined;
    let lastY = window.scrollY;
    let lastDirection: 'up' | 'down' | null = null;

    // Runs only after scrolling has settled, deciding whether to reveal.
    const decideOnIdle = () => {
      const y = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      // Rest 16px above the viewport bottom until the footer scrolls into view;
      // once it does, sit just above however much of the footer is showing.
      const footer = document.querySelector('footer');
      const footerOverlap = footer
        ? Math.max(0, window.innerHeight - footer.getBoundingClientRect().top)
        : 0;
      setBottom(footerOverlap + gap);
      // Reveal only when the user settled after scrolling down past the threshold.
      setVisible(maxScroll > 0 && lastDirection === 'down' && y / maxScroll >= SHOW_AFTER_PROGRESS);
    };

    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY) {
        lastDirection = 'down';
      } else if (y < lastY) {
        lastDirection = 'up';
      }
      lastY = y;
      // Hide while actively scrolling; re-decide only once it settles.
      setVisible(false);
      clearTimeout(idleTimer);
      idleTimer = setTimeout(decideOnIdle, SCROLL_IDLE_DELAY);
    };

    // Decide once on mount (e.g. when loaded already scrolled) without setting
    // state directly in the effect body.
    idleTimer = setTimeout(decideOnIdle, 0);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', decideOnIdle);
    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', decideOnIdle);
    };
  }, [gap]);

  return (
    <Fade in={visible} unmountOnExit>
      <Fab
        size="medium"
        aria-label={t('common.scrollTop')}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        sx={{
          position: 'fixed',
          right: `${gap}px`,
          bottom: `${bottom}px`,
          zIndex: (muiTheme) => muiTheme.zIndex.fab,
          bgcolor: 'background.paper',
          color: 'text.primary',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 6px 16px rgba(0, 0, 0, 0.14)',
          '&:hover': { bgcolor: 'background.paper' }
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Fade>
  );
}
