import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Research } from "@/components/Research";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Research", () => {
  it("renders the heading", () => {
    render(<Research />);
    expect(screen.getByText("Research")).toBeInTheDocument();
  });

  it("renders research item title", () => {
    render(<Research />);
    expect(
      screen.getAllByText(
        "Decoding Work From Home Burnout: A Machine Learning Deep Dive"
      ).length
    ).toBeGreaterThanOrEqual(1);
  });

  it("renders tags as badges", () => {
    render(<Research />);
    expect(screen.getAllByText("Machine Learning").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Data Analysis").length).toBeGreaterThanOrEqual(1);
  });

  it("renders View all link", () => {
    const { container } = render(<Research />);
    const link = container.querySelector('a[href="/research"]');
    expect(link).toBeInTheDocument();
    expect(link?.textContent).toContain("View all");
  });
});
