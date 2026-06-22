import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from '@/components/app-layout.tsx'
import HiraganaPage from '@/pages/alphabet/hiragana.tsx'
import AlphabetPage from '@/pages/alphabet/alphabet.tsx'
import KatakanaPage from '@/pages/alphabet/katakana.tsx'
import ExercisePage from '@/pages/alphabet/exercise.tsx'
import { routes } from '@/constants/routes.ts'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={routes.home} element={<Navigate to={routes.alphabet.index} replace />} />
        <Route path={routes.alphabet.index} element={<AlphabetPage />} />
        <Route path={routes.alphabet.hiragana} element={<HiraganaPage />} />
        <Route path={routes.alphabet.katakana} element={<KatakanaPage />} />
        <Route path={routes.alphabet.exercise} element={<ExercisePage />} />
      </Route>
    </Routes>
  )
}

export default App
