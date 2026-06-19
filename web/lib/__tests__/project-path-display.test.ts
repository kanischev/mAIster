import { describe, expect, it } from "vitest";

import { formatProjectRepoPath } from "@/lib/project-path-display";

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
