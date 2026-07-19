import { CssBaseline, ThemeProvider } from '@mui/material';
import type { Decorator, Preview } from '@storybook/react-vite';
import { NextIntlClientProvider } from 'next-intl';
import '@/index.css';
import type { Locale, TranslationTree } from '@/types/i18n.ts';
import { enMessages } from '@/i18n/messages/en/index.ts';
import { viMessages } from '@/i18n/messages/vi/index.ts';
import { appTheme } from '@/theme/app-theme.ts';
import { __setStorybookPathname } from './next-navigation-mock.ts';

const messagesByLocale: Record<Locale, TranslationTree> = {
  en: enMessages,
  vi: viMessages
};

const withProviders: Decorator = (Story, context) => {
  const locale = context.globals.locale as Locale;
  // Keep the mocked pathname in sync with the toolbar locale (vi under /vi).
  __setStorybookPathname(locale === 'vi' ? '/vi' : '/');

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {/* Remount on locale change so next-intl re-reads the active locale. */}
      <NextIntlClientProvider key={locale} locale={locale} messages={messagesByLocale[locale]}>
        <Story />
      </NextIntlClientProvider>
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [withProviders],
  initialGlobals: {
    locale: 'en'
  },
  globalTypes: {
    locale: {
      description: 'Display language',
      toolbar: {
        title: 'Locale',
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'vi', title: 'Tiếng Việt' }
        ],
        dynamicTitle: true
      }
    }
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  }
};

export default preview;
