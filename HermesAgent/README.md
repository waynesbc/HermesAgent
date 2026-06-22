# HermesAgent

HermesAgent is a lightweight repo for agent instructions, project docs, prompts, and the existing Expo app in this workspace.

## Layout

- `agents/` role instructions for planner, coder, and reviewer flows
- `docs/` architecture notes and roadmap
- `prompts/` reusable LLM prompts
- `src/` shared source code when needed
- `app/` the current Expo Router app

## Local setup

```bash
npm install
npm run lint
npm run start
```

## Notes

- Keep the repo small and explicit so it remains usable on lower-memory machines.
- Prefer simple markdown instructions over extra automation until a real need appears.

