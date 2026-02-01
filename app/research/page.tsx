import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { researches } from "@/lib/research";

export const metadata: Metadata = {
  title: "Research",
  description: "Research articles and data-driven analyses.",
};

export default function ResearchPage() {
  return (
    <>
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center px-6 py-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/#research">&larr; Back</Link>
          </Button>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Research</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Data-driven analyses and machine learning explorations.
        </p>

        <div className="mt-12 space-y-6">
          {researches.map((item) => (
            <Link
              key={item.slug}
              href={`/research/${item.slug}`}
              className="block"
            >
              <Card className="transition-colors hover:border-foreground/20">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
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
      </main>
    </>
  );
}
