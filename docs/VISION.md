# MAIster — Vision

## One-liner

**MAIster is the control plane for AI-powered software delivery.**

It turns backlog tasks into supervised agentic delivery Flows: workspace creation, headless agent execution, HITL, AI-Judge, diff review, merge and project learning.

## Why

AI coding agents are useful, but managing several of them manually becomes operational noise: many terminals, lost context, unclear progress, scattered artifacts, weak review and repeated project-specific mistakes.

MAIster should remove the need to babysit coding-agent consoles. The human should manage work at the level of projects, tasks, Flows, reviews and decisions.

## Core product spine

```text
Backlog → Flow → Workspace → Headless Agents → HITL → AI-Judge → Diff Review → Merge → Lessons
```

## Product principles

1. **Flow over prompt**
   Work should be launched through reusable Flows, not ad-hoc agent prompts.

2. **Workspace as first-class object**
   A Flow launch creates an isolated workspace: branch/worktree/config/progress/cleanup/merge.

3. **Web UI first**
   Review, intervention, dialogue and validation require a rich surface. Telegram is useful later for notifications and quick decisions.

4. **Human participates where Flow says**
   HITL is not global. Each Flow step defines whether human input is must/can/autonomous.

5. **Artifacts over chat sludge**
   Specs, plans, diffs, tests, Judge reports, reviews and lessons must be stored as structured artifacts.

6. **Project learns from work**
   Bugs, incidents and reviews should produce lessons and evolve project rules/playbooks - this is the basic platform ability requirement.

7. **Start personal, not enterprise**
   Optimize for one owner and small teams first: low ops, fast iteration, single host. Enterprise governance later if needed.

## MVP goal

Prove the spine on **several real projects in parallel**:

1. Register multiple projects via per-project `maister.yaml` (each with its own
   list of Flows).
2. See all active workspaces across projects on one **Portfolio home**
   (superset.sh-style grid).
3. For each project, manage a **task board** with two columns:
   `Backlog | In Flight`.
4. Create backlog tasks (title + prompt + Flow from project's `flows[]`).
5. Click **Launch** on a Backlog task → workspace auto-created via git
   worktree → Flow launched. Task moves to In Flight. Retry-friendly: a task
   may spawn many runs over its lifetime (1:N) — if a run fails or is
   abandoned, the task returns to Backlog with the Launch button re-enabled.
6. Run Claude Code or Codex headlessly inside the worktree via ACP.
7. Show run progress/logs/artifacts in Web UI (live SSE).
8. Let human answer block-based HITL questions / approve.
9. Show diff and merge-to-main on clean-merge case.
10. Run up to 3 sessions concurrently across projects (global cap, queue the rest).

## Phase 2 correction: mature the harness

MVP proves that MAIster can launch and supervise real work. Phase 2 should
make that loop dependable under daily use.

The product should treat an AI-coding setup as six operating layers:

1. **Eyes**
   Agents need visual feedback and runtime validation, especially for Web UI.
   Phase 2 should add browser-backed preview, screenshots, DOM inspection,
   user-flow checks and visible app/test service state.

2. **Knowledge**
   Project context must be curated, short and fresh. Phase 2 should promote
   local references, project rules, Flow docs and dependency notes as managed
   artifacts. Stale rules must be discoverable and reviewable.

3. **Hands**
   Tools should be narrow and task-shaped. Phase 2 should favor small MCP
   servers, scripts and commands with explicit permissions over broad tool
   bundles that burn context and confuse executor choice.

4. **Invisible automation**
   Formatting, linting, status pings, review checks and recurring project
   routines should run as hooks, skills, slash commands or Flow steps. MAIster
   should expose these as governed project automation, not hidden local magic.

5. **Observability**
   Users should know what finished, what is blocked, what needs review and
   what changed without watching logs. Phase 2 should add event history,
   notification routing, health signals and run summaries.

6. **Economics**
   Tokens, process memory and tool context are product constraints. Phase 2
   should track noisy commands, cache-resume costs, browser/process memory,
   per-run spend and context-heavy tools.

The correction is simple: Phase 2 is not "more integrations" first. It is the
trust layer that lets one owner or a small team run more agents without
turning MAIster into a noisy wrapper around terminals.

## Not MVP

- Cursor / opencode / Aider executor pool;
- autonomous task pulling;
- background project agents;
- A/B experiments;
- Telegram approvals;
- heavy analytics;
- platform-level cross-project skills;
- enterprise RBAC/compliance;
- Temporal-class durable orchestration;
- AI-Judge review artifact (Phase 2);
- project lesson capture (Phase 2);
- full Kanban (Done as drag-target / WIP limits / swim-lanes);
- cross-project task moves;
- GitHub issue / Linear / YouGile sync.
