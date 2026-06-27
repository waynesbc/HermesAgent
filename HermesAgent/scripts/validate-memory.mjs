import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function readJson(path) {
  return JSON.parse(readFileSync(resolve(repoRoot, path), "utf8"));
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const decisions = readJson("memory/decisions.json");
const tasks = readJson("memory/tasks.json");
const projectState = readJson("memory/project-state.json");

// Keep these checks small and explicit so they are easy to maintain.
assert(Array.isArray(decisions.decisions), "memory/decisions.json must contain a decisions array");
assert(Array.isArray(tasks.backlog), "memory/tasks.json must contain a backlog array");
assert(Array.isArray(tasks.completed), "memory/tasks.json must contain a completed array");
assert(Array.isArray(tasks.blocked), "memory/tasks.json must contain a blocked array");
assert(typeof projectState.project === "string", "memory/project-state.json must define project");
assert(typeof projectState.mode === "string", "memory/project-state.json must define mode");

console.log("Memory validation passed.");
