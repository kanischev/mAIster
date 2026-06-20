import { describe, expect, it } from "vitest";

import {
  formatProjectRepoPath,
  formatRunWorktreePath,
} from "@/lib/project-path-display";

describe("formatProjectRepoPath", () => {
  it("replaces the configured repos root with the maister repos marker", () => {
    expect(
      formatProjectRepoPath(
        "/Users/kaa/.maister/repos/mAIster",
        "/Users/kaa/.maister/repos",
      ),
    ).toBe("<maister_repos>/mAIster");
  });

  it("renders the repos root itself as the marker", () => {
    expect(
      formatProjectRepoPath(
        "/Users/kaa/.maister/repos",
        "/Users/kaa/.maister/repos",
      ),
    ).toBe("<maister_repos>");
  });

  it("keeps paths outside the configured repos root unchanged", () => {
    expect(
      formatProjectRepoPath(
        "/Users/kaa/Work/Projects/Personal/mAIster",
        "/Users/kaa/.maister/repos",
      ),
    ).toBe("/Users/kaa/Work/Projects/Personal/mAIster");
  });

  it("does not mask paths that only share the repos root prefix", () => {
    expect(
      formatProjectRepoPath(
        "/Users/kaa/.maister/repos-archive/mAIster",
        "/Users/kaa/.maister/repos",
      ),
    ).toBe("/Users/kaa/.maister/repos-archive/mAIster");
  });
});

describe("formatRunWorktreePath", () => {
  it("replaces the configured worktrees root with the maister worktrees marker", () => {
    expect(
      formatRunWorktreePath(
        "/Users/kaa/.maister/worktrees/mAIster/run-1",
        "/Users/kaa/.maister/worktrees",
      ),
    ).toBe("<maister_worktrees>/mAIster/run-1");
  });

  it("renders the worktrees root itself as the marker", () => {
    expect(
      formatRunWorktreePath(
        "/Users/kaa/.maister/worktrees",
        "/Users/kaa/.maister/worktrees",
      ),
    ).toBe("<maister_worktrees>");
  });

  it("keeps paths outside the configured worktrees root unchanged", () => {
    expect(
      formatRunWorktreePath(
        "/Users/kaa/Work/Projects/Personal/mAIster",
        "/Users/kaa/.maister/worktrees",
      ),
    ).toBe("/Users/kaa/Work/Projects/Personal/mAIster");
  });

  it("does not mask paths that only share the worktrees root prefix", () => {
    expect(
      formatRunWorktreePath(
        "/Users/kaa/.maister/worktrees-archive/mAIster/run-1",
        "/Users/kaa/.maister/worktrees",
      ),
    ).toBe("/Users/kaa/.maister/worktrees-archive/mAIster/run-1");
  });
});
