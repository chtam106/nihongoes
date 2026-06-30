import { useState } from 'react';
import * as Sentry from '@sentry/react';
import { Box, Button, Stack, Typography } from '@mui/material';

function Bomb(): never {
  throw new Error('[Sentry test] Render error from /sentry-test');
}

function SentryTestPage() {
  const [crash, setCrash] = useState(false);

  const handleCapture = () => {
    Sentry.captureException(new Error('[Sentry test] Manual error from /sentry-test'));
    alert('Error sent - check Sentry dashboard');
  };

  return (
    <Box
      sx={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        Sentry test
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={handleCapture}>
          Send error (no crash)
        </Button>
        <Button variant="contained" color="error" onClick={() => setCrash(true)}>
          Crash UI (test ErrorBoundary)
        </Button>
      </Stack>
      {crash && <Bomb />}
    </Box>
  );
}

export default SentryTestPage;
