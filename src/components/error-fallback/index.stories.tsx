import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { ErrorFallback, ErrorFallbackContent } from '@/components/error-fallback';

const meta = {
  title: 'Components/ErrorFallback',
  component: ErrorFallback,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof ErrorFallback>;

export default meta;

type Story = StoryObj<typeof meta>;

/** The top-level client error boundary fallback (wraps its own app chrome). */
export const Default: Story = {
  render: () => <ErrorFallback />
};

/**
 * The chrome-less body used by the route-level `app/[lang]/error.tsx`. In the app
 * it renders inside `AppLayout`'s main; here it is placed in a full-height box so
 * the centering is visible.
 */
export const Content: Story = {
  render: () => (
    <Box sx={{ minHeight: '100vh', display: 'flex' }}>
      <ErrorFallbackContent />
    </Box>
  )
};
