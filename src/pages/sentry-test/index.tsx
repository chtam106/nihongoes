import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

function Bomb(): never {
  throw new Error('[Sentry test] Render error from /sentry-test');
}

function SentryTestPage() {
  const [crash, setCrash] = useState(false);

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
      <Button variant="contained" color="error" onClick={() => setCrash(true)}>
        Throw error
      </Button>
      {crash && <Bomb />}
    </Box>
  );
}

export default SentryTestPage;
