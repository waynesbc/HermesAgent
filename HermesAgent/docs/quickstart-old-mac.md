# Old Mac Quickstart

Use this on the isolated Intel Mac to run the basic Hermes hop demo.

## Requirements

- Node.js installed
- A local clone of this repo

## Run

1. Open a terminal in the repo root.
2. Run a demo query:

```bash
node src/index.js "IPA"
```

3. Or use the npm script:

```bash
npm run hermes -- "IPA"
```

4. To record the run into `memory/`:

```bash
npm run hermes:record -- "Helles Lager"
```

## What It Does

- reads `memory/project-state.json`
- reads `refs/beer_styles.json`
- reads `refs/hop_catalog.json`
- ranks hop candidates for the beer style
- prints a JSON report
- optionally updates `memory/` when `--record` is used

## Notes

- No `npm install` is required for the demo runner.
- No build step is required.
- Keep this Mac isolated from personal accounts when testing riskier browser or MCP workflows.
