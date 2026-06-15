import { execSync } from "node:child_process";

import { describe, expect, it } from "vitest";

const THEMES = ["arbus", "classic", "lovelace", "modern"] as const;
const PREFIX = "app/assets/themes";

/**
 * Files changed on this branch versus its fork point from main, including
 * uncommitted changes (repo-root-relative paths). Returns null when the diff
 * can't be computed — no local main ref, or a shallow CI checkout whose merge
 * commit has no reachable merge-base — so the guard degrades to a no-op rather
 * than throwing. It therefore enforces in full-history checkouts (local dev,
 * pre-push) and stays quiet where it can't see enough history to be correct.
 */
function changedThemeFiles(): string[] | null {
  try {
    const baseRef = ["origin/main", "main"].find((ref) => {
      try {
        execSync(`git rev-parse --verify --quiet ${ref}`, { stdio: "pipe" });
        return true;
      } catch {
        return false;
      }
    });
    if (baseRef === undefined) {
      return null;
    }

    const mergeBase = execSync(`git merge-base ${baseRef} HEAD`, {
      stdio: ["pipe", "pipe", "pipe"],
    })
      .toString()
      .trim();

    return execSync(`git diff --name-only ${mergeBase}`, { stdio: ["pipe", "pipe", "pipe"] })
      .toString()
      .split("\n")
      .filter(Boolean);
  } catch {
    return null;
  }
}

describe("theme changelogs", () => {
  const changed = changedThemeFiles();

  for (const theme of THEMES) {
    it(`${theme} must update its CHANGELOG.md when theme files change`, () => {
      if (changed === null) {
        // Couldn't compute a reliable diff (e.g. shallow CI checkout) — skip.
        return;
      }

      const themeDir = `${PREFIX}/${theme}/`;
      const changelog = `${themeDir}CHANGELOG.md`;

      const touchedThemeFiles = changed.filter(
        (f) => f.startsWith(themeDir) && f !== changelog,
      );

      if (touchedThemeFiles.length === 0) {
        return;
      }

      expect(
        changed.includes(changelog),
        `Changed files under ${themeDir} without updating ${changelog}:\n` +
          touchedThemeFiles.map((f) => `  - ${f}`).join("\n") +
          `\n\nAdd an entry to ${changelog} describing the change.`,
      ).toBe(true);
    });
  }
});
