# Nihongoes

A free, bilingual (English + Vietnamese) site for learning Japanese, from kana to JLPT courses. It is a Next.js App Router app deployed on Vercel. See `README.md` for setup, CI and the release flow.

Project rules live in `.claude/rules/`:

- `project-conventions.md`: workflow, Git and deploy, i18n, audio, lint (always loaded)
- `remember-learnings.md`: how to save what the user teaches (always loaded)
- `page-structure.md`: route folder layout (loads for `src/app/**`)
- `n5-course.md`: shared course engine (loads for `src/features/course/**` and `src/constants/courses/**`)
- `n4-course.md`: N4 lesson authoring (loads for `src/constants/courses/n4/**`)

When the user teaches a lasting convention, update the matching rule file. Do not keep it only in chat or in the per-machine memory folder.
