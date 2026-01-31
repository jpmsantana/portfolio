import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[70vh] items-center justify-center px-6"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Vickings Software
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Building modern web applications and AI-powered solutions.
        </p>
        <Button className="mt-8" size="lg" asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  );
}
