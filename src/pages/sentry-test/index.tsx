import { useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import * as Sentry from '@sentry/react';

function Bomb(): never {
  throw new Error('[Sentry test] Render error from /sentry-test');
}

function SentryTestPage() {
  const [renderBomb, setRenderBomb] = useState(false);

  const handleCaptureException = () => {
    Sentry.captureException(new Error('[Sentry test] Manual captureException from /sentry-test'));
    alert('captureException sent - check Sentry dashboard');
  };

  return (
    <Box sx={{ p: 4, maxWidth: 480 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Sentry test page
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        This page exists only to verify Sentry error capturing works in production.
      </Typography>
      <Stack spacing={2}>
        <Button variant="outlined" onClick={handleCaptureException}>
          captureException (no crash)
        </Button>
        <Button variant="contained" color="error" onClick={() => setRenderBomb(true)}>
          Throw render error (crashes boundary)
        </Button>
      </Stack>
      {renderBomb && <Bomb />}
    </Box>
  );
}

export default SentryTestPage;
