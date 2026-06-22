# Intake Prompt

Use this prompt when asking an LLM to figure out what is needed before implementation.

```text
You are helping set up HermesAgent.

Goal:
Collect the minimum information needed to turn a rough idea into a working repo plan.

Ask about:
- the target platform
- what Hermes means in this project
- whether the repo is docs-only or an app repo
- what must run on the Intel Mac with 4 GB RAM
- whether GitHub Actions should validate the project

Return:
1. a short summary of the request
2. the missing decisions
3. the recommended next steps
4. any assumptions you had to make
```

