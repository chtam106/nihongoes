import { Fragment } from 'react';
import { Box, ButtonBase, Typography } from '@mui/material';
import { focusVisibleSx } from '@/theme/focus.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import type { Locale } from '@/i18n/translations.ts';

const locales: { code: Locale; shortLabel: string; labelKey: 'language.en' | 'language.vi' }[] = [
  { code: 'en', shortLabel: 'EN', labelKey: 'language.en' },
  { code: 'vi', shortLabel: 'VI', labelKey: 'language.vi' }
];

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useTranslation();

  return (
    <Box
      role="group"
      aria-label={t('language.label')}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        height: 40,
        gap: 0.75
      }}
    >
      {locales.map(({ code, shortLabel, labelKey }, index) => {
        const selected = locale === code;

        return (
          <Fragment key={code}>
            {index > 0 && (
              <Typography
                variant="caption"
                component="span"
                aria-hidden
                sx={{ fontSize: '0.75rem', color: 'text.secondary', userSelect: 'none' }}
              >
                |
              </Typography>
            )}
            <ButtonBase
              onClick={() => setLocale(code)}
              aria-pressed={selected}
              aria-label={t(labelKey)}
              sx={(theme) => ({
                display: 'inline-flex',
                alignItems: 'center',
                p: 0,
                m: 0,
                minWidth: 0,
                minHeight: 0,
                bgcolor: 'transparent',
                color: selected ? 'primary.main' : 'text.secondary',
                fontSize: '0.75rem',
                fontWeight: selected ? 700 : 500,
                letterSpacing: 0.4,
                lineHeight: 1,
                '&:hover': {
                  bgcolor: 'transparent',
                  color: 'primary.main'
                },
                '&.Mui-focusVisible': focusVisibleSx(theme)
              })}
            >
              {shortLabel}
            </ButtonBase>
          </Fragment>
        );
      })}
    </Box>
  );
}
