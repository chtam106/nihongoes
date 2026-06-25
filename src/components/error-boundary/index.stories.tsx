import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorBoundary } from '@/components/error-boundary';

/** A child that always throws, so the boundary renders its fallback UI. */
function Boom(): never {
  throw new Error('Example render failure shown by the ErrorBoundary fallback.');
}

const meta = {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof ErrorBoundary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Boom />
  }
};
