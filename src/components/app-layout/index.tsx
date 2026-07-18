'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { Box, Toolbar } from '@mui/material';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Menu } from '@/components/menu';
import { ScrollManager } from '@/components/scroll-manager';
import { loadJapaneseUiFont } from '@/theme/fonts.ts';
import { useLocation } from '@/i18n/navigation.tsx';

const drawerWidth = 320;

type AppLayoutProps = {
  children?: ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation();
  // Mobile vs desktop is handled purely with CSS breakpoints (below) so the
  // server-rendered markup is correct at first paint - no `useMediaQuery` flash
  // where the desktop drawer briefly appears on mobile.
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/') {
      void loadJapaneseUiFont();
    }
  }, [location.pathname]);

  return (
    <Box sx={{ display: 'flex', minHeight: '100svh' }}>
      <ScrollManager />

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
          flexDirection: 'column'
        }}
      >
        <Toolbar />

        {children}

        <Footer />
      </Box>
    </Box>
  );
}

export default AppLayout;
