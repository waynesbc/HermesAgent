# HermesAgent Working Rules

Use these rules when making changes in this repository:

- Follow `docs/architecture.md`.
- Keep `src/index.ts` as the entry point.
- Never modify `refs/`.
- Make incremental, safe changes aligned with the existing agent configs.
- Validate changes through `scripts/`.
- Log meaningful updates in `memory/decisions.json` and `memory/tasks.json`.
- Add brief explanations for complex fixes.
- Add short code comment blocks where they help future developers understand the code.

If a task starts to require a larger model or broader context, say so directly and suggest moving up a model level.
