import { Link as RouterLink } from 'react-router-dom'
import { Container, Link, List, ListItem, Paper, Typography } from '@mui/material'
import { routes } from '@/constants/routes.ts'

const alphabetLinks = [
  {
    to: routes.alphabet.hiragana,
    title: 'Hiragana',
    description: 'ひらがな — basic Japanese syllabary',
  },
  {
    to: routes.alphabet.katakana,
    title: 'Katakana',
    description: 'カタカナ — used for foreign words and emphasis',
  },
  {
    to: routes.alphabet.exercise,
    title: 'Exercise',
    description: 'Practice hiragana and katakana',
  },
]

function AlphabetPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Alphabet
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Choose a writing system to study.
      </Typography>

      <Paper elevation={2}>
        <List disablePadding>
          {alphabetLinks.map((item, index) => (
            <ListItem key={item.to} divider={index < alphabetLinks.length - 1} sx={{ p: 0 }}>
              <Link
                component={RouterLink}
                to={item.to}
                underline="none"
                color="inherit"
                sx={{
                  display: 'block',
                  width: '100%',
                  px: 2,
                  py: 2,
                  '&:hover': { bgcolor: 'action.hover' },
                }}
              >
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  )
}

export default AlphabetPage
