'use client';

import { type MouseEvent } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ExercisePageLayout } from '@/features/alphabet/exercise/exercise-page-layout.tsx';
import { ExerciseQuiz } from '@/features/alphabet/exercise/exercise-quiz-panel.tsx';
import { ExerciseScopeControls } from '@/features/alphabet/exercise/exercise-scope-controls.tsx';
import { ExerciseScopeHint } from '@/features/alphabet/exercise/exercise-scope-hint.tsx';
import { ExerciseScriptSelect } from '@/features/alphabet/exercise/exercise-script-select.tsx';
import { getScriptLabel } from '@/features/alphabet/exercise/exercise-script-label.ts';
import type { CharacterDirection } from '@/features/alphabet/exercise/exercise-preferences.ts';
import { useCharacterExercisePreferences } from '@/features/alphabet/exercise/use-exercise-preferences.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

function CharacterExercisePage() {
  const { t } = useTranslation();
  const { script, setScript, direction, setDirection, scopeState } =
    useCharacterExercisePreferences();
  const scriptLabel = getScriptLabel(script, t);

  const handleDirectionChange = (
    _event: MouseEvent<HTMLElement>,
    value: CharacterDirection | null
  ) => {
    if (value) {
      setDirection(value);
    }
  };

  return (
    <ExercisePageLayout
      title={t('exercise.chooseCharacter')}
      subtitle={t('exercise.characterDescription')}
      note={<ExerciseScopeHint />}
      controls={
        <>
          <ToggleButtonGroup
            exclusive
            fullWidth
            color="primary"
            value={direction}
            onChange={handleDirectionChange}
            aria-label={t('exercise.chooseCharacter')}
            sx={{ gridColumn: { xs: '1 / -1', lg: 'span 2' } }}
          >
            <ToggleButton value="kana-romaji">
              {t('exercise.characterTabChooseRomaji')}
            </ToggleButton>
            <ToggleButton value="character">{t('exercise.characterTabChooseKana')}</ToggleButton>
          </ToggleButtonGroup>
          <ExerciseScriptSelect script={script} onChange={setScript} />
          <ExerciseScopeControls {...scopeState} overviewFullWidth />
        </>
      }
    >
      <ExerciseQuiz
        key={`${direction}:${script}:${scopeState.scope}`}
        mode={direction}
        script={script}
        scope={scopeState.scope}
        scriptLabel={scriptLabel}
      />
    </ExercisePageLayout>
  );
}

export default CharacterExercisePage;
