import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/Hero";

describe("Hero", () => {
  it("renders the heading", () => {
    render(<Hero />);
    expect(screen.getByText("Vickings Software")).toBeInTheDocument();
  });

  it("renders the Get in Touch link", () => {
    render(<Hero />);
    expect(screen.getAllByText("Get in Touch").length).toBeGreaterThan(0);
  });
});
