import { Suspense, lazy } from 'react';
import { Box, Drawer, Toolbar, type SxProps, type Theme } from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';

const AppDrawerContent = lazy(() => import('@/components/app-drawer-content'));

type MenuProps = {
  drawerWidth: number;
  mobileOpen: boolean;
  onClose: () => void;
};

/**
 * Responsive navigation drawer. Mobile (temporary) and desktop (permanent)
 * drawers are both rendered and toggled with CSS breakpoints, so the correct
 * one shows from first paint (no `useMediaQuery` flash on mobile).
 */
export function Menu({ drawerWidth, mobileOpen, onClose }: MenuProps) {
  const { t } = useTranslation();

  const paperSx: SxProps<Theme> = {
    width: drawerWidth,
    boxSizing: 'border-box',
    border: 'none',
    overflow: 'hidden',
    boxShadow: '1px 0 2px rgba(0, 0, 0, 0.035), 2px 0 8px rgba(0, 0, 0, 0.025)'
  };

  const drawerContent = (
    <Suspense
      fallback={
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Toolbar />
        </Box>
      }
    >
      <AppDrawerContent onNavigate={onClose} />
    </Suspense>
  );

  return (
    <Box
      component="nav"
      aria-label={t('nav.mainNavigation')}
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': paperSx }}
      >
        {mobileOpen && drawerContent}
      </Drawer>

      <Drawer
        variant="permanent"
        open
        sx={{ display: { xs: 'none', md: 'block' }, '& .MuiDrawer-paper': paperSx }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}

export default Menu;
