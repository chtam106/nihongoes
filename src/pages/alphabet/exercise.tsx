import { useEffect, useMemo, useRef, useState } from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import {
  Autocomplete,
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import type { SelectChangeEvent } from '@mui/material/Select'
import {
  exerciseOverviewScopeOptions,
  getExerciseRowScopeGroup,
  getExerciseRowScopeOptionsForOverview,
  resolveExerciseScope,
  type AlphabetRowOption,
  type ExerciseOverviewScope,
  type ExerciseRowScope,
} from '@/constants/alphabet-charts.ts'
import {
  createQuizSession,
  type ExerciseMode,
  type ExerciseScope,
  type QuizQuestion,
  type QuizSession,
  type Script,
} from '@/pages/alphabet/exercise-quiz.ts'
import { KanaDisplay } from '@/components/kana-display.tsx'
import { playKanaAudio, playWrongAnswerSound } from '@/utils/kana-audio.ts'

function sessionKey(script: Script, mode: ExerciseMode, scope: ExerciseScope) {
  return `${script}-${mode}-${scope}`
}

function resultBorderSx(color: 'success.main' | 'error.main') {
  return {
    borderWidth: 2,
    borderColor: color,
    color: color,
    '&.Mui-disabled': {
      borderWidth: 2,
      borderColor: color,
      color: color,
      opacity: 1,
    },
  }
}

function ExercisePage() {
  const [script, setScript] = useState<Script>('hiragana')
  const [mode, setMode] = useState<ExerciseMode>('romaji')
  const [overviewScope, setOverviewScope] = useState<ExerciseOverviewScope>('all')
  const [rowScope, setRowScope] = useState<ExerciseRowScope | ''>('')
  const scope = resolveExerciseScope(overviewScope, rowScope)
  const [initialQuiz] = useState(() => {
    const session = createQuizSession('hiragana', 'romaji', 'all')

    return { session, question: session.next() }
  })
  const sessionRef = useRef<QuizSession>(initialQuiz.session)
  const sessionKeyRef = useRef(sessionKey('hiragana', 'romaji', 'all'))
  const [question, setQuestion] = useState<QuizQuestion>(initialQuiz.question)
  const [wrongAnswers, setWrongAnswers] = useState<string[]>([])
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false)

  useEffect(() => {
    const key = sessionKey(script, mode, scope)

    if (key === sessionKeyRef.current) {
      return
    }

    sessionKeyRef.current = key
    sessionRef.current = createQuizSession(script, mode, scope)
    setQuestion(sessionRef.current.next())
    setWrongAnswers([])
    setAnsweredCorrectly(false)
  }, [script, mode, scope])

  const handleScriptChange = (event: SelectChangeEvent<Script>) => {
    setScript(event.target.value)
  }

  const handleModeChange = (event: SelectChangeEvent<ExerciseMode>) => {
    setMode(event.target.value)
  }

  const handleOverviewScopeChange = (event: SelectChangeEvent<ExerciseOverviewScope>) => {
    setOverviewScope(event.target.value)
    setRowScope('')
  }

  const handleRowScopeChange = (_event: unknown, option: AlphabetRowOption | null) => {
    setRowScope(option ? (option.value as ExerciseRowScope) : '')
  }

  const rowScopeOptions = useMemo(
    () => getExerciseRowScopeOptionsForOverview(overviewScope),
    [overviewScope],
  )

  const selectedRowOption = rowScopeOptions.find((option) => option.value === rowScope) ?? null

  const handleAnswer = (answer: string) => {
    if (answeredCorrectly || wrongAnswers.includes(answer)) {
      return
    }

    if (answer === question.correctAnswer) {
      setAnsweredCorrectly(true)
      playKanaAudio(question.correctItem.romaji, question.correctItem.char)
    } else {
      setWrongAnswers((previous) => [...previous, answer])
      playWrongAnswerSound()
    }
  }

  useEffect(() => {
    if (!answeredCorrectly) {
      return
    }

    const timer = window.setTimeout(() => {
      setQuestion(sessionRef.current.next())
      setWrongAnswers([])
      setAnsweredCorrectly(false)
    }, 1000)

    return () => {
      window.clearTimeout(timer)
    }
  }, [answeredCorrectly])

  const scriptLabel = script === 'hiragana' ? 'Hiragana' : 'Katakana'

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Exercise
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Practice the Japanese alphabet.
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
          gap: 2,
          mb: 4,
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="script-select-label">Script</InputLabel>
          <Select<Script>
            labelId="script-select-label"
            id="script-select"
            value={script}
            label="Script"
            onChange={handleScriptChange}
          >
            <MenuItem value="hiragana">Hiragana</MenuItem>
            <MenuItem value="katakana">Katakana</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="mode-select-label">Mode</InputLabel>
          <Select<ExerciseMode>
            labelId="mode-select-label"
            id="mode-select"
            value={mode}
            label="Mode"
            onChange={handleModeChange}
          >
            <MenuItem value="romaji">Guess romaji</MenuItem>
            <MenuItem value="character">Guess {scriptLabel}</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="scope-select-label">Scope</InputLabel>
          <Select<ExerciseOverviewScope>
            labelId="scope-select-label"
            id="scope-select"
            value={overviewScope}
            label="Scope"
            onChange={handleOverviewScopeChange}
          >
            {exerciseOverviewScopeOptions.map((option) => (
              <MenuItem key={option.value} value={option.value as ExerciseOverviewScope}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Autocomplete
          id="row-select"
          options={rowScopeOptions}
          groupBy={overviewScope === 'all' ? (option) => getExerciseRowScopeGroup(option.value) : undefined}
          getOptionLabel={(option) => option.label}
          value={selectedRowOption}
          onChange={handleRowScopeChange}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          renderInput={(params) => (
            <TextField {...params} label="Row" placeholder="Optional — pick a specific row" />
          )}
          slotProps={{
            listbox: {
              sx: { maxHeight: 320 },
            },
          }}
        />
      </Box>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          border: 1,
          borderColor: 'divider',
          textAlign: 'center',
        }}
      >
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
          {mode === 'romaji' ? `What is the romaji for this ${scriptLabel}?` : `What is the ${scriptLabel} character?`}
        </Typography>

        <Box
          sx={{
            mb: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          {mode === 'romaji' ? (
            <>
              <KanaDisplay cell={question.correctItem} variant="prompt" />
              <IconButton
                aria-label={`Play ${question.correctItem.char}, ${question.correctItem.romaji}`}
                onClick={() =>
                  playKanaAudio(question.correctItem.romaji, question.correctItem.char)
                }
                sx={{ color: 'text.secondary' }}
              >
                <VolumeUpIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </>
          ) : (
            <Typography variant="h2" component="span" sx={{ lineHeight: 1.1 }}>
              {question.correctItem.romaji}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 2,
          }}
        >
          {question.optionItems.map((item) => {
            const value = mode === 'romaji' ? item.romaji : item.char
            const isWrongAnswer = wrongAnswers.includes(value)
            const isCorrectAnswer = value === question.correctAnswer
            const showGreen = answeredCorrectly && isCorrectAnswer
            const showRed = isWrongAnswer && !answeredCorrectly

            return (
              <Button
                key={item.romaji}
                variant="outlined"
                onClick={() => handleAnswer(value)}
                disabled={answeredCorrectly || isWrongAnswer}
                sx={{
                  py: 2,
                  fontSize: mode === 'character' ? '1.5rem' : '1rem',
                  ...(showGreen && resultBorderSx('success.main')),
                  ...(showRed && resultBorderSx('error.main')),
                }}
              >
                {mode === 'character' ? (
                  <KanaDisplay cell={item} variant="option" />
                ) : (
                  item.romaji
                )}
              </Button>
            )
          })}
        </Box>
      </Paper>
    </Container>
  )
}

export default ExercisePage
