import type { Metadata } from "next";
import Link from "next/link";
import {
  Tv,
  Monitor,
  Radio,
  Coffee,
  Satellite,
  MessageCircle,
  Award,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "IT-Service und Beratung Lohfelden | Reinhold Jodeit",
  description:
    "Ihr Fachbetrieb in Lohfelden seit 2005: Reparatur von Fernsehern, Computern, Audio- & Hifi-Geräten, Kaffeevollautomaten sowie Installation von Satelliten-Antennen. Jetzt Termin vereinbaren!",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IT-Service und Beratung Lohfelden | Reinhold Jodeit",
    description:
      "Ihr Fachbetrieb in Lohfelden seit 2005: Reparatur von Fernsehern, Computern, Audio- & Hifi-Geräten, Kaffeevollautomaten sowie Installation von Satelliten-Antennen.",
    url: "/",
  },
};

const serviceChips = [
  { icon: Tv, label: "TV & Fernseher" },
  { icon: Monitor, label: "Computer & PC" },
  { icon: Radio, label: "Audio & Hifi" },
  { icon: Coffee, label: "Kaffeevollautomaten" },
  { icon: Satellite, label: "Satelliten-Antennen" },
  { icon: MessageCircle, label: "Beratung" },
];

const trustBadges = [
  { icon: Award, label: "Meisterbetrieb" },
  { icon: Clock, label: "Seit 2005" },
  { icon: MapPin, label: "Lohfelden & Kassel" },
  { icon: CheckCircle2, label: "Vor-Ort-Service" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-primary/5 to-muted/50 min-h-[calc(100vh-5rem)] flex flex-col justify-center px-4 py-8 md:py-16">
        {/* Decorative background elements */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {/* Subtle dot-grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        {/* Main content — vertically centred */}
        <div className="relative container mx-auto max-w-5xl">
          <div className="text-center space-y-8">
            {/* Trust badges row */}
            <div className="flex flex-wrap gap-2 justify-center">
              {trustBadges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
                >
                  <Icon className="size-3.5 shrink-0" aria-hidden />
                  {label}
                </span>
              ))}
            </div>

            {/* Main heading */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
                IT-Service und Beratung
                <br />
                <span className="text-foreground">Lohfelden</span>
              </h1>
              {/* Slogan as a styled accent line */}
              <p className="inline-flex items-center gap-2 text-base md:text-lg font-semibold italic text-primary/70">
                <span className="h-px w-8 bg-primary/40 rounded-full" />
                Qualität spricht sich herum
                <span className="h-px w-8 bg-primary/40 rounded-full" />
              </p>
            </div>

            {/* Sub-description */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ihr kompetenter Partner für Reparaturen und Beratung im Bereich
              TV, Computer, Audio, Hifi und Kaffeevollautomaten —{" "}
              <strong className="text-foreground font-semibold">
                persönlich, zuverlässig, erfahren.
              </strong>
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button asChild size="lg" className="shadow-md shadow-primary/20">
                <Link href="/contact">Kontakt aufnehmen</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Unsere Dienstleistungen</Link>
              </Button>
            </div>

            {/* Service chips */}
            <div className="pt-4 border-t border-border/60">
              <p className="text-xs text-muted-foreground mb-3 uppercase tracking-widest font-medium">
                Unsere Fachgebiete
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {serviceChips.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground shadow-sm hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    <Icon className="size-4 shrink-0" aria-hidden />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bouncing scroll-down arrow */}
        <a
          href="#services"
          aria-label="Zu den Dienstleistungen scrollen"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ChevronDown className="size-7" aria-hidden />
        </a>
      </section>

      {/* Services Overview */}
      <section id="services" className="scroll-mt-20 py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unsere Dienstleistungen
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wir bieten umfassende Reparatur- und Beratungsleistungen für
              Privatpersonen und Unternehmen
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>TV Service</CardTitle>
                <CardDescription>
                  Fernseher Reparatur & Installation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-3 space-y-2 text-sm text-muted-foreground">
                  <li>Reparatur von Fernsehern</li>
                  <li>Installation von Neugeräten</li>
                  <li>Wandhalterung & Einrichtung</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Computer Service</CardTitle>
                <CardDescription>PC & Laptop Reparatur</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-3 space-y-2 text-sm text-muted-foreground">
                  <li>Reparatur von PCs & Druckern</li>
                  <li>Datensicherung</li>
                  <li>Installation & Netzwerkaufbau</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Antennen Service</CardTitle>
                <CardDescription>
                  Satelliten-Antennen Installation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-3 space-y-2 text-sm text-muted-foreground">
                  <li>Befestigung & Einmessen</li>
                  <li>Umrüstung auf Digital</li>
                  <li>Kabel verlegen</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Audio & Hifi Service</CardTitle>
                <CardDescription>Hifi-Geräte Reparatur</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-3 space-y-2 text-sm text-muted-foreground">
                  <li>Verstärker & CD-Player</li>
                  <li>Kassettendecks</li>
                  <li>Röhrenverstärker</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kaffeevollautomaten</CardTitle>
                <CardDescription>Reparatur & Wartung</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-3 space-y-2 text-sm text-muted-foreground">
                  <li>Reparatur & Revision</li>
                  <li>Brüheinheit überholen</li>
                  <li>Mahlwerk austauschen</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Beratung</CardTitle>
                <CardDescription>Kompetente Kaufberatung</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-3 space-y-2 text-sm text-muted-foreground">
                  <li>TV & Audio Geräte</li>
                  <li>Computer & Notebooks</li>
                  <li>Netzwerktechnik</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">Alle Dienstleistungen ansehen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-linear-to-b from-primary/5 to-muted/50 py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Über uns
            </h2>
            <p className="text-lg text-muted-foreground">
              Das 2005 in Lohfelden gegründete Unternehmen IT Service und
              Beratung wird von <strong>Reinhold Jodeit</strong>, Radio- und
              Fernsehtechnikermeister sowie staatlich geprüfter Informatiker,
              geleitet.
            </p>
            <p className="text-lg text-muted-foreground">
              Durch kompetente Beratung helfen wir Ihnen, die richtige
              Entscheidung beim Kauf von Elektrogeräten zu treffen. In unserer
              Werkstatt sind wir in der Lage, nahezu jedes Problem
              schnellstmöglich zu beheben.
            </p>
            <p className="text-lg text-muted-foreground">
              Auf Wunsch kommen wir auch bei Ihnen vorbei und erledigen
              durchführbare Reparaturen vor Ort.
            </p>
            <div className="text-center pt-6">
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Mehr über uns erfahren</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-20 px-4 bg-primary/3">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Kontaktieren Sie uns
          </h2>
          <p className="text-lg text-muted-foreground">
            Rufen Sie noch heute bei uns an und lassen Sie sich einen Termin
            geben.
          </p>
          <div className="space-y-2">
            <a
              href="tel:+495615190446"
              className="text-2xl font-semibold text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            >
              0561 - 5190446
            </a>
            <p className="text-sm text-muted-foreground">
              Termine nur nach Absprache möglich
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/contact">Kontaktformular</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
