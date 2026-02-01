import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Contact } from "@/components/Contact";

describe("Contact", () => {
  it("renders the heading", () => {
    render(<Contact />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders mailto link with correct email", () => {
    const { container } = render(<Contact />);
    const link = container.querySelector('a[href="mailto:vickingssoftware@gmail.com"]');
    expect(link).toBeInTheDocument();
  });

  it("renders Send an Email button text", () => {
    render(<Contact />);
    expect(screen.getAllByText("Send an Email").length).toBeGreaterThanOrEqual(1);
  });
});
