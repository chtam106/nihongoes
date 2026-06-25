import { Suspense, lazy } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Brand } from '@/components/brand';
import { useTranslation } from '@/i18n/use-translation.ts';

const AudioSettings = lazy(() =>
  import('@/components/audio-settings').then((module) => ({ default: module.AudioSettings }))
);
const LanguageSwitcher = lazy(() =>
  import('@/components/language-switcher').then((module) => ({
    default: module.LanguageSwitcher
  }))
);

type HeaderProps = {
  drawerWidth: number;
  isMobile: boolean;
  mobileOpen: boolean;
  onToggleMobile: () => void;
};

export function Header({ drawerWidth, isMobile, mobileOpen, onToggleMobile }: HeaderProps) {
  const { t } = useTranslation();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: (muiTheme) => muiTheme.zIndex.drawer + 1,
        color: 'text.primary',
        bgcolor: (muiTheme) => alpha(muiTheme.palette.background.paper, 0.85),
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)'
      }}
    >
      <Toolbar
        sx={{
          gap: { xs: 1.5, md: 0 },
          px: { xs: 2, sm: 4, md: 0 },
          alignItems: 'center'
        }}
      >
        {isMobile && (
          <IconButton
            edge="start"
            onClick={onToggleMobile}
            aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={mobileOpen}
          >
            {mobileOpen && <CloseIcon />}
            {!mobileOpen && <MenuIcon />}
          </IconButton>
        )}
        {!isMobile && <Box sx={{ width: drawerWidth, flexShrink: 0 }} aria-hidden />}
        <Box
          sx={{
            flexGrow: 1,
            minWidth: 0,
            width: '100%',
            maxWidth: { md: 1200 },
            mx: { md: 'auto' }
          }}
        >
          <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center', px: { md: 6 } }}>
            <Brand showTagline={false} showLogo={false} />
            <Box sx={{ flexGrow: 1 }} />
            <Stack direction="row" spacing={0.5}>
              <Suspense fallback={<Box sx={{ width: 80, height: 40 }} aria-hidden />}>
                <AudioSettings />
                <LanguageSwitcher />
              </Suspense>
            </Stack>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
