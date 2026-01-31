import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navigation } from "@/components/Navigation";

describe("Navigation", () => {
  it("renders the brand text", () => {
    render(<Navigation />);
    expect(screen.getByText("Vickings")).toBeInTheDocument();
  });

  it("renders all nav links", () => {
    render(<Navigation />);
    for (const label of ["Home", "About", "Projects", "Contact"]) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    }
  });
});
