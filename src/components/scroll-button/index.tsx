'use client';

import { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';
import { useIsClient } from '@/utils/use-is-client.ts';
import { useUserPreferences } from '@/utils/user-preferences.ts';

type ScrollDirection = 'up' | 'down';

/**
 * Floating scroll button, fixed to the bottom-right of the viewport.
 * Stays visible while the page can scroll, including during an active scroll.
 * The arrow follows the last direction: down jumps to the bottom, up jumps to
 * the top. At either end, where that direction cannot continue, the arrow flips.
 * On desktop it rests 20px above the footer.
 */
export function ScrollButton() {
  const { t } = useTranslation();
  const isClient = useIsClient();
  const [preferences] = useUserPreferences();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const gap = isDesktop ? 20 : 16;
  const [direction, setDirection] = useState<ScrollDirection | null>(null);
  const [shown, setShown] = useState(false);
  const [bottom, setBottom] = useState(gap);

  useEffect(() => {
    let lastY = window.scrollY;
    let lastDirection: ScrollDirection | null = null;

    const placeAboveFooter = () => {
      const footer = document.querySelector('footer');
      const footerOverlap = footer
        ? Math.max(0, window.innerHeight - footer.getBoundingClientRect().top)
        : 0;
      const next = footerOverlap + gap;
      setBottom((current) => (current === next ? current : next));
    };

    const sync = () => {
      const y = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      // At an end the current direction cannot continue, so offer the other way.
      let next = lastDirection;
      if (maxScroll > 1 && lastDirection) {
        if (y >= maxScroll - 1) {
          next = 'up';
        } else if (y <= 0) {
          next = 'down';
        }
      }

      setDirection(next);
      setShown(maxScroll > 1 && next !== null);
      placeAboveFooter();
    };

    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY) {
        lastDirection = 'down';
      } else if (y < lastY) {
        lastDirection = 'up';
      }
      lastY = y;
      sync();
    };

    const idleTimer = setTimeout(placeAboveFooter, 0);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', sync);
    };
  }, [gap]);

  const handleClick = () => {
    if (direction === 'down') {
      const top = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({ top });
      return;
    }

    window.scrollTo({ top: 0 });
  };

  if (!isClient || !preferences.showScrollToTop || !shown || !direction) {
    return null;
  }

  const goingDown = direction === 'down';

  return (
    <Fab
      className="no-print"
      size="medium"
      aria-label={goingDown ? t('common.scrollBottom') : t('common.scrollTop')}
      onClick={handleClick}
      sx={{
        position: 'fixed',
        right: { xs: 16, md: 20 },
        bottom: `${bottom}px`,
        zIndex: (muiTheme) => muiTheme.zIndex.fab,
        bgcolor: 'background.paper',
        color: 'primary.main',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 6px 16px rgba(0, 0, 0, 0.14)',
        '&:hover': { bgcolor: 'background.paper' }
      }}
    >
      {goingDown && <KeyboardArrowDownIcon />}
      {!goingDown && <KeyboardArrowUpIcon />}
    </Fab>
  );
}
