import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
      </div>
      <div className="mx-auto mt-8 max-w-3xl overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-thin">
        <div className="flex gap-4">
          {projects.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-80 shrink-0 snap-start"
            >
              <Card className="h-full transition-colors hover:border-foreground/20">
                <CardHeader>
                  <CardTitle className="text-base leading-snug flex items-center gap-2">
                    {item.title}
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
