'use client';

import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

function SentryTestPage() {
  const [crash, setCrash] = useState(false);

  // Throw during RENDER (not in the click handler) so it exercises the real
  // React error boundary path (route-level app/[lang]/error.tsx catches it),
  // which is also how Sentry captures a render error.
  if (crash) {
    throw new Error('[Sentry test] Render error from /sentry-test');
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
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
      <Button variant="contained" color="error" onClick={() => setCrash(true)}>
        Throw error
      </Button>
    </Box>
  );
}

export default SentryTestPage;
