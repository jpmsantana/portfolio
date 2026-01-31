import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Projects } from "@/components/Projects";

describe("Projects", () => {
  it("renders the heading", () => {
    render(<Projects />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("renders the Coming Soon card", () => {
    render(<Projects />);
    expect(screen.getAllByText("Coming Soon").length).toBeGreaterThan(0);
  });
});
