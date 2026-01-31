import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        <p className="mt-4 text-muted-foreground">
          Interested in working together? Reach out via email.
        </p>
        <Button className="mt-6" asChild>
          <a href="mailto:vickingssoftware@gmail.com">Send an Email</a>
        </Button>
      </div>
    </section>
  );
}
