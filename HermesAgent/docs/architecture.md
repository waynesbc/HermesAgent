# HermesAgent Architecture

HermesAgent is organized as a small repo for agent prompts, project notes, and small shared source placeholders.

## Top-level layout

- `docs/` holds stable project documentation.
- `agents/` holds role-specific instructions for planner, coder, and reviewer agents.
- `prompts/` holds reusable prompt templates for LLM-driven workflows.
- `src/` holds shared source code when the repo grows beyond docs.

## Working rule

Keep the repo lightweight. Prefer simple files, explicit instructions, and small scripts over additional tooling unless a tool clearly saves maintenance.
