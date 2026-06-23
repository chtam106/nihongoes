import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from '@/components/app-layout.tsx'
import HiraganaPage from '@/pages/alphabet/hiragana/index.tsx'
import AlphabetPage from '@/pages/alphabet/index.tsx'
import KatakanaPage from '@/pages/alphabet/katakana/index.tsx'
import ExerciseHubPage from '@/pages/alphabet/exercise/index.tsx'
import CharacterExercisePage from '@/pages/alphabet/exercise/character/index.tsx'
import ListenExercisePage from '@/pages/alphabet/exercise/listen/index.tsx'
import RomajiExercisePage from '@/pages/alphabet/exercise/romaji/index.tsx'
import ScriptPairExercisePage from '@/pages/alphabet/exercise/script-pair/index.tsx'
import HomePage from '@/pages/index.tsx'
import CoursePage from '@/pages/course/course-page.tsx'
import LessonPage from '@/pages/course/lesson-page.tsx'
import ExercisePage from '@/pages/course/exercise-page.tsx'
import ListeningPage from '@/pages/course/listening-page.tsx'
import ReadingPage from '@/pages/course/reading-page.tsx'
import { COURSE_LEVELS, coursePath } from '@/constants/courses/index.ts'
import { routes } from '@/constants/routes.ts'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={routes.home} element={<HomePage />} />

        {COURSE_LEVELS.map((level) => {
          const base = coursePath(level)

          return (
            <Fragment key={level}>
              <Route path={base} element={<CoursePage level={level} />} />
              <Route path={`${base}/lesson/:lessonId`} element={<LessonPage level={level} />} />
              <Route
                path={`${base}/lesson/:lessonId/exercise`}
                element={<ExercisePage level={level} />}
              />
              <Route
                path={`${base}/lesson/:lessonId/listening`}
                element={<ListeningPage level={level} />}
              />
              <Route
                path={`${base}/lesson/:lessonId/reading`}
                element={<ReadingPage level={level} />}
              />
            </Fragment>
          )
        })}

        <Route path={routes.alphabet.index} element={<AlphabetPage />} />
        <Route path={routes.alphabet.hiragana} element={<HiraganaPage />} />
        <Route path={routes.alphabet.katakana} element={<KatakanaPage />} />
        <Route path={routes.alphabet.exercise.index} element={<ExerciseHubPage />} />
        <Route path={routes.alphabet.exercise.romaji} element={<RomajiExercisePage />} />
        <Route path={routes.alphabet.exercise.character} element={<CharacterExercisePage />} />
        <Route path={routes.alphabet.exercise.listen} element={<ListenExercisePage />} />
        <Route path={routes.alphabet.exercise.scriptPair} element={<ScriptPairExercisePage />} />
      </Route>
    </Routes>
  )
}

export default App
