import { Link as RouterLink } from 'react-router-dom';
import type { ComponentType } from 'react';
import type { SvgIconProps } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import SpellcheckOutlinedIcon from '@mui/icons-material/SpellcheckOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { Box, Button, Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material';
import { Heading } from '@/components/heading.tsx';
import { PageContainer } from '@/components/page-container.tsx';
import { routes } from '@/constants/routes.ts';
import { useTranslation } from '@/i18n/use-translation.ts';
import { interactiveSurfaceSx } from '@/theme/surfaces.ts';

type ExerciseCard = {
  to: string;
  title: string;
  description: string;
  icon: ComponentType<SvgIconProps>;
};

function ExerciseHubPage() {
  const { t } = useTranslation();

  const cards: ExerciseCard[] = [
    {
      to: routes.alphabet.exercise.romaji,
      title: t('exercise.guessRomaji'),
      description: t('exercise.romajiDescription'),
      icon: TranslateOutlinedIcon
    },
    {
      to: routes.alphabet.exercise.character,
      title: t('exercise.chooseCharacter'),
      description: t('exercise.characterDescription'),
      icon: SpellcheckOutlinedIcon
    },
    {
      to: routes.alphabet.exercise.listen,
      title: t('exercise.listenPickShort'),
      description: t('exercise.listenDescription'),
      icon: HeadphonesOutlinedIcon
    },
    {
      to: routes.alphabet.exercise.scriptPair,
      title: t('exercise.scriptPair'),
      description: t('exercise.scriptPairDescription'),
      icon: SwapHorizOutlinedIcon
    },
    {
      to: routes.alphabet.exercise.writing,
      title: t('exercise.writing'),
      description: t('exercise.writingDescription'),
      icon: DrawOutlinedIcon
    }
  ];

  return (
    <PageContainer>
      <Button
        component={RouterLink}
        to={routes.alphabet.index}
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 2, ml: -1 }}
      >
        {t('common.back')}
      </Button>

      <Heading component="h1" gutterBottom>
        {t('exercise.title')}
      </Heading>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {t('exercise.hubSubtitle')}
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
          gap: 2
        }}
      >
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <Card key={card.to} elevation={0} sx={[interactiveSurfaceSx, { height: '100%' }]}>
              <CardActionArea
                component={RouterLink}
                to={card.to}
                sx={{ height: '100%', alignItems: 'stretch' }}
              >
                <CardContent>
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
                    <Typography
                      variant="h5"
                      component="span"
                      sx={{ display: 'inline-flex', lineHeight: 1 }}
                    >
                      <Icon fontSize="inherit" />
                    </Typography>
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                      {card.title}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
    </PageContainer>
  );
}

export default ExerciseHubPage;
