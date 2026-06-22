# HermesAgent Architecture

HermesAgent is organized as a small repo for agent prompts, project notes, and supporting app code.

## Top-level layout

- `.github/` holds CI and repository automation.
- `docs/` holds stable project documentation.
- `agents/` holds role-specific instructions for planner, coder, and reviewer agents.
- `prompts/` holds reusable prompt templates for LLM-driven workflows.
- `src/` holds shared source code when the repo grows beyond docs.
- `app/` is the existing Expo Router app in this workspace.

## Working rule

Keep the repo lightweight. Prefer simple files, explicit instructions, and small scripts over additional tooling unless a tool clearly saves maintenance.

