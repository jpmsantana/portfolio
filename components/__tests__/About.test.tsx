import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { About } from "@/components/About";

describe("About", () => {
  it("renders the heading", () => {
    render(<About />);
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("renders all primary stack badges", () => {
    render(<About />);
    for (const tech of ["Ruby", "Rails", "JavaScript", "React", "TypeScript"]) {
      expect(screen.getAllByText(tech).length).toBeGreaterThanOrEqual(1);
    }
  });

  it("renders all secondary stack badges", () => {
    render(<About />);
    for (const tech of ["Python", "Go", "Vue", "Next.js", "Nuxt", "DevOps"]) {
      expect(screen.getAllByText(tech).length).toBeGreaterThanOrEqual(1);
    }
  });

  it("renders the separator between sections", () => {
    const { container } = render(<About />);
    const separator = container.querySelector('[data-slot="separator"]');
    expect(separator).toBeInTheDocument();
  });
});
