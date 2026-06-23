import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import './index.css'
import App from './app.tsx'
import { LanguageProvider } from '@/i18n/context.tsx'
import { FONT_FAMILY_UI } from '@/theme/fonts.ts'

const theme = createTheme({
  typography: {
    fontFamily: FONT_FAMILY_UI,
  },
})

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        <BrowserRouter basename={routerBasename || undefined}>
          <App />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
