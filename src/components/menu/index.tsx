import { Suspense, lazy } from 'react';
import { Box, Drawer, Toolbar } from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';

const AppDrawerContent = lazy(() => import('@/components/app-drawer-content'));

type MenuProps = {
  drawerWidth: number;
  isMobile: boolean;
  mobileOpen: boolean;
  onClose: () => void;
};

export function Menu({ drawerWidth, isMobile, mobileOpen, onClose }: MenuProps) {
  const { t } = useTranslation();
  const shouldRenderDrawerContent = !isMobile || mobileOpen;

  return (
    <Box
      component="nav"
      aria-label={t('nav.mainNavigation')}
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
    >
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            border: 'none',
            overflow: 'hidden',
            boxShadow: '1px 0 2px rgba(0, 0, 0, 0.06), 2px 0 8px rgba(0, 0, 0, 0.04)'
          }
        }}
      >
        {shouldRenderDrawerContent && (
          <Suspense
            fallback={
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Toolbar />
              </Box>
            }
          >
            <AppDrawerContent onNavigate={onClose} />
          </Suspense>
        )}
      </Drawer>
    </Box>
  );
}

export default Menu;
