import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navigation } from "@/components/Navigation";

describe("Navigation", () => {
  it("renders the brand text", () => {
    render(<Navigation />);
    expect(screen.getByText("Vickings")).toBeInTheDocument();
  });

  it("renders all nav links including Research", () => {
    render(<Navigation />);
    for (const label of ["Home", "About", "Projects", "Research", "Contact"]) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    }
  });

  it("toggles mobile menu on button click", async () => {
    render(<Navigation />);
    const toggles = screen.getAllByLabelText("Toggle menu");
    const toggle = toggles[0];
    const homeLinksBefore = screen.getAllByText("Home").length;
    await userEvent.click(toggle);
    const homeLinksAfter = screen.getAllByText("Home").length;
    expect(homeLinksAfter).toBeGreaterThan(homeLinksBefore);
  });
});
