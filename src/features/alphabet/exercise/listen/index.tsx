'use client';

import { ExercisePageLayout } from '@/features/alphabet/exercise/exercise-page-layout.tsx';
import { ExerciseQuiz } from '@/features/alphabet/exercise/exercise-quiz-panel.tsx';
import { ExerciseScopeControls } from '@/features/alphabet/exercise/exercise-scope-controls.tsx';
import { ExerciseScopeHint } from '@/features/alphabet/exercise/exercise-scope-hint.tsx';
import { ExerciseScriptSelect } from '@/features/alphabet/exercise/exercise-script-select.tsx';
import { getScriptLabel } from '@/features/alphabet/exercise/exercise-script-label.ts';
import { useListenExercisePreferences } from '@/features/alphabet/exercise/use-exercise-preferences.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

function ListenExercisePage() {
  const { t } = useTranslation();
  const { script, setScript, scopeState } = useListenExercisePreferences();
  const scriptLabel = getScriptLabel(script, t);

  return (
    <ExercisePageLayout
      title={t('exercise.listenPickShort')}
      subtitle={t('exercise.listenDescription')}
      note={<ExerciseScopeHint />}
      controls={
        <>
          <ExerciseScriptSelect script={script} onChange={setScript} />
          <ExerciseScopeControls {...scopeState} />
        </>
      }
    >
      <ExerciseQuiz
        key={`${script}:${scopeState.scope}`}
        mode="listen"
        script={script}
        scope={scopeState.scope}
        scriptLabel={scriptLabel}
      />
    </ExercisePageLayout>
  );
}

export default ListenExercisePage;
