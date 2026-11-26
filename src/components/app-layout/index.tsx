'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { Box, Toolbar } from '@mui/material';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Menu } from '@/components/menu';
import { ScrollManager } from '@/components/scroll-manager';
import { DailyReviewPrompt } from '@/features/flashcards/daily-review-prompt.tsx';
import { loadJapaneseUiFont } from '@/theme/fonts.ts';
import { installRubyAwareCopyHandler } from '@/utils/ruby-selection.ts';

const drawerWidth = 320;

type AppLayoutProps = {
  children?: ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  // Mobile vs desktop is handled purely with CSS breakpoints (below) so the
  // server-rendered markup is correct at first paint - no `useMediaQuery` flash
  // where the desktop drawer briefly appears on mobile.
  const [mobileOpen, setMobileOpen] = useState(false);

  // Load on every page, the home page included: its nav cards show kana/kanji
  // symbols (あ, ア, 漢, 部). Loading after hydration keeps it off the critical
  // path, and unicode-range means only the subsets actually used are fetched.
  useEffect(() => {
    void loadJapaneseUiFont();
  }, []);

  useEffect(() => installRubyAwareCopyHandler(), []);

  return (
    <Box sx={{ display: 'flex', minHeight: '100svh', '@media print': { minHeight: 'auto' } }}>
      <ScrollManager />
      <DailyReviewPrompt />

      <Header
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((previous) => !previous)}
      />

      <Menu
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          '@media print': { width: '100%' }
        }}
      >
        <Toolbar className="no-print" />

        {children}

        <Footer />
      </Box>
    </Box>
  );
}

export default AppLayout;
