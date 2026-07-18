import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { ErrorFallbackContent } from '@/components/error-fallback';

const meta = {
  title: 'Components/ErrorFallback',
  component: ErrorFallbackContent,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof ErrorFallbackContent>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The themed error screen used by `app/[lang]/error.tsx` and the
 * `Sentry.ErrorBoundary` chrome fallback. Placed in a full-height box so the
 * centering is visible (in the app the surrounding layout provides the height).
 */
export const Default: Story = {
  render: () => (
    <Box sx={{ minHeight: '100vh', display: 'flex' }}>
      <ErrorFallbackContent />
    </Box>
  )
};
