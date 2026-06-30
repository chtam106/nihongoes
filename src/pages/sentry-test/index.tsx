import { Box, Button, Typography } from '@mui/material';

function SentryTestPage() {
  const handleThrow = () => {
    throw new Error('Example render failure shown by the ErrorBoundary fallback.');
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>
        Sentry test
      </Typography>
      <Button variant="contained" onClick={handleThrow}>
        Send error to Sentry
      </Button>
    </Box>
  );
}

export default SentryTestPage;
