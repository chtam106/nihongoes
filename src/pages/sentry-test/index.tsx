import * as Sentry from '@sentry/react';
import { Box, Button, Typography } from '@mui/material';

function SentryTestPage() {
  const handleThrow = () => {
    Sentry.captureException(new Error('[Sentry test] Manual error from /sentry-test'));
    alert('Error sent - check Sentry dashboard');
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Sentry test
      </Typography>
      <Button variant="contained" onClick={handleThrow}>
        Send error to Sentry
      </Button>
    </Box>
  );
}

export default SentryTestPage;
