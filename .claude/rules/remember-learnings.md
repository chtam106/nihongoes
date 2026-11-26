---
description: Persist conventions and preferences the user teaches into Claude rules
---

# Remember what the user teaches

When the user states a convention, preference, correction, or says things like
"remember this", "luôn ghi nhớ", "from now on…", "tao muốn… luôn…", treat it as
durable knowledge and persist it — do not rely on chat memory alone.

## How

1. Find the most relevant existing rule in `.claude/rules/` (e.g. `project-conventions.md`, `n5-course.md`) and update it. Create a new focused `.md` rule only if no existing one fits: add `paths:` frontmatter to scope it to some files; without it the rule always loads. Write project rules here, in the repo, not in the per-machine Claude memory folder.
2. Write the learning as a short, actionable bullet (what to do, and the concrete how). Prefer imperative phrasing and include file paths/snippets when useful.
3. Keep rules concise and de-duplicated: if a new instruction supersedes an old one, edit the old bullet instead of appending a contradictory one.
4. Apply the learning immediately to the current change too, not just the rule.

## Scope

- Capture: coding conventions, styling/design decisions, layout rules, tooling/workflow gotchas, naming, and explicit "always/never" preferences.
- Don't capture: one-off task details, secrets, or anything the user marks as temporary.
