import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Seite nicht gefunden – IT-Service und Beratung Lohfelden",
};

export default function NotFound() {
  return (
    <div className="flex flex-col">
      <section className="bg-linear-to-b from-primary/5 via-muted/50 to-background py-20 md:py-32 px-4 flex-1">
        <div className="container mx-auto max-w-3xl text-center space-y-8">
          <p className="text-8xl md:text-9xl font-bold text-primary/20 select-none">
            404
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Seite nicht gefunden
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Die gesuchte Seite existiert leider nicht. Möglicherweise wurde sie
            verschoben oder der Link ist fehlerhaft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg">
              <Link href="/">Zur Startseite</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
