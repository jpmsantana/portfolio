import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { researches } from "@/lib/research";

export function Research() {
  return (
    <section id="research" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Research</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/research">View all</Link>
          </Button>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-3xl overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-thin">
        <div className="flex gap-4">
          {researches.map((item) => (
            <Link
              key={item.slug}
              href={`/research/${item.slug}`}
              className="block w-80 shrink-0 snap-start"
            >
              <Card className="h-full transition-colors hover:border-foreground/20">
                <CardHeader>
                  <CardTitle className="text-base leading-snug">
                    {item.title}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
