export interface ProjectItem {
  name: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
}

export const projects: ProjectItem[] = [
  {
    name: "homebrew-brew",
    title: "Homebrew/brew",
    description:
      "Contributor to Homebrew, the missing package manager for macOS and Linux. Homebrew installs the stuff you need that Apple (or your Linux system) didn't.",
    tags: ["Ruby", "Open Source", "Package Manager"],
    url: "https://github.com/Homebrew/brew",
  },
];
