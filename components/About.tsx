import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const primaryStack = ["Ruby", "Rails", "JavaScript", "React", "TypeScript"];
const secondaryStack = [
  "Python",
  "Go",
  "Vue",
  "Next.js",
  "Nuxt",
  "DevOps",
];

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight">About</h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Developer since 2017 with 8+ years of experience building web
          applications across the full stack. Over the past 1.5 years, I&apos;ve
          been focused on AI and agentic solutions — integrating large language
          models into real-world products and workflows.
        </p>

        <Separator className="my-8" />

        <div className="space-y-4">
          <div>
            <p className="mb-2 text-sm font-medium">Primary Stack</p>
            <div className="flex flex-wrap gap-2">
              {primaryStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium">Also Worked With</p>
            <div className="flex flex-wrap gap-2">
              {secondaryStack.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
