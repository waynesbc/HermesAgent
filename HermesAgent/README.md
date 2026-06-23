# HermesAgent

HermesAgent is a lightweight repo for agent instructions, project docs, prompts, and small shared source placeholders.

## Layout

- `agents/` role instructions for planner, coder, and reviewer flows
- `docs/` architecture notes and roadmap
- `memory/` lightweight project state, tasks, and decisions for Hermes runs
- `refs/` stable domain references such as beer styles and hop profiles
- `prompts/` reusable LLM prompts
- `src/` shared source code when needed
- `.vscode/` editor settings if you choose to add them later
- `.github/` workflow space if you choose to add CI later

## Local setup

No package install is required. Node.js is enough to run the demo CLI.

### Run the hop demo

```bash
npm run hermes -- "IPA"
```

To record the result into `memory/`:

```bash
npm run hermes:record -- "Pale Ale"
```

See also: [docs/quickstart-old-mac.md](/Users/waynesawada/Desktop/Hermes%20X/HermesAgent/docs/quickstart-old-mac.md)

## Notes

- Keep the repo small and explicit so it remains usable on lower-memory machines.
- Prefer simple markdown instructions over extra automation until a real need appears.
- This repo is now docs-first, not an app shell.
- For taskful runs, Hermes should read `memory/` first, use `refs/` for stable facts, then update `memory/` with decisions and results.
- The local runner is intentionally dependency-free so it stays practical on an old Intel Mac.
