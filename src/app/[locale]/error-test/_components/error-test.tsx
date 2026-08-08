'use client';

import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

function ErrorTestPage() {
  const [crash, setCrash] = useState(false);

  // Throw during RENDER (not in the click handler) so it exercises the real
  // React error boundary path (route-level app/[locale]/error.tsx catches it).
  if (crash) {
    throw new Error('[Error test] Render error from /error-test');
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
        Error test
      </Typography>
      <Button variant="contained" color="error" onClick={() => setCrash(true)}>
        Throw error
      </Button>
    </Box>
  );
}

export default ErrorTestPage;
