import path from 'node:path';
import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: '@storybook/react-vite',
  viteFinal: async (viteConfig) =>
    mergeConfig(viteConfig, {
      resolve: {
        // The app targets Next.js; stub the Next-only modules so component
        // stories render under the Storybook Vite builder.
        alias: [
          {
            find: /^next\/navigation$/,
            replacement: path.resolve(process.cwd(), '.storybook/next-navigation-mock.ts')
          },
          {
            find: /^next\/link$/,
            replacement: path.resolve(process.cwd(), '.storybook/next-link-mock.tsx')
          }
        ]
      }
    })
};

export default config;
