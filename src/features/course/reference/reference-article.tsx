'use client';

import { Box, Stack, Typography } from '@mui/material';
import type { ReferenceArticle } from '@/constants/courses/n5/reference/types.ts';
import { GrammarExampleList } from '@/components/grammar-example-sentence';
import { Heading } from '@/components/heading';
import { useTranslation } from '@/i18n/use-translation.ts';

type ReferenceArticleViewProps = {
  article: ReferenceArticle;
};

export function ReferenceArticleView({ article }: ReferenceArticleViewProps) {
  const { locale } = useTranslation();

  return (
    <Box id={article.id}>
      <Heading scale="subsection" component="h3" sx={{ mb: 1.5 }}>
        {article.title[locale]}
      </Heading>

      {article.intro && (
        <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5 }}>
          {article.intro[locale]}
        </Typography>
      )}

      <Stack spacing={2.5}>
        {article.paragraphs.map((paragraph, index) => (
          <Typography key={index} variant="body1">
            {paragraph[locale]}
          </Typography>
        ))}

        {article.subsections?.map((subsection) => (
          <Box key={subsection.title.en}>
            <Heading component="h4" sx={{ mb: 1, fontSize: '1.05rem', fontWeight: 600 }}>
              {subsection.title[locale]}
            </Heading>
            <Stack spacing={1.25} sx={{ mb: subsection.examples?.length ? 1.5 : 0 }}>
              {subsection.paragraphs.map((paragraph, index) => (
                <Typography key={index} variant="body1">
                  {paragraph[locale]}
                </Typography>
              ))}
            </Stack>
            {subsection.examples && <GrammarExampleList examples={subsection.examples} />}
          </Box>
        ))}

        {article.examples && <GrammarExampleList examples={article.examples} />}
      </Stack>
    </Box>
  );
}
