import { Box, Container, Link, Typography } from '@mui/material';
import { routes } from '@/constants/routes.ts';
import { Link as LocaleHref } from '@/i18n/navigation.tsx';

// The footer copy stays in English regardless of the selected locale.
const FOOTER_VIBE = 'Designed by CHT, coded with AI.';
const CONTACT_EMAIL = 'chtam106@gmail.com';
const CONTACT_HREF = `mailto:${CONTACT_EMAIL}?subject=Nihongoes`;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      className="no-print"
      component="footer"
      sx={{
        mt: 'auto',
        py: 3,
        px: 2,
        textAlign: 'center',
        boxShadow: '0 -1px 2px rgba(0, 0, 0, 0.035), 0 -2px 8px rgba(0, 0, 0, 0.025)'
      }}
    >
      <Container maxWidth="md" disableGutters>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
          {FOOTER_VIBE}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, fontSize: '0.875rem' }}>
          <Link href={CONTACT_HREF} color="primary" underline="hover">
            Contact us
          </Link>
          {' · '}
          <Link component={LocaleHref} href={routes.privacy} color="primary" underline="hover">
            Privacy
          </Link>
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: 'block', mt: 0.5, fontSize: '0.75rem' }}
        >
          © {year} Nihongoes · Not a single right is reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
