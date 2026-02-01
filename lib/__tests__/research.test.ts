import { describe, expect, it } from "vitest";
import { researches } from "@/lib/research";

describe("researches data", () => {
  it("is a non-empty array", () => {
    expect(researches.length).toBeGreaterThan(0);
  });

  it("each item has required fields", () => {
    for (const item of researches) {
      expect(item.slug).toBeTruthy();
      expect(item.title).toBeTruthy();
      expect(item.description).toBeTruthy();
      expect(Array.isArray(item.tags)).toBe(true);
    }
  });

  it("each item has non-empty tags", () => {
    for (const item of researches) {
      expect(item.tags.length).toBeGreaterThan(0);
    }
  });
});
