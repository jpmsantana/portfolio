import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/Hero";

describe("Hero", () => {
  it("renders the heading", () => {
    render(<Hero />);
    expect(screen.getByText("Vickings Software")).toBeInTheDocument();
  });

  it("renders the subtitle text", () => {
    render(<Hero />);
    expect(
      screen.getAllByText(
        "Building modern web applications and AI-powered solutions."
      ).length
    ).toBeGreaterThanOrEqual(1);
  });

  it("renders CTA linking to #contact", () => {
    const { container } = render(<Hero />);
    const cta = container.querySelector('a[href="#contact"]');
    expect(cta).toBeInTheDocument();
    expect(cta?.textContent).toContain("Get in Touch");
  });
});
