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

  it("renders description text for coming soon card", () => {
    render(<Projects />);
    expect(
      screen.getAllByText("Project showcases will be added here shortly.").length
    ).toBeGreaterThanOrEqual(1);
  });
});
