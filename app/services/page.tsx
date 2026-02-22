import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Dienstleistungen",
  description:
    "Unsere Dienstleistungen in Lohfelden: TV-Reparatur, Computer-Service, Satelliten-Antennen-Installation, Audio- & Hifi-Reparatur, Kaffeevollautomat-Reparatur und IT-Beratung.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Dienstleistungen | IT-Service Lohfelden",
    description:
      "TV-Reparatur, Computer-Service, Satelliten-Antennen-Installation, Audio- & Hifi-Reparatur, Kaffeevollautomat-Reparatur und IT-Beratung in Lohfelden.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unsere Dienstleistungen
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            IT-Service und Beratung hat sich im Laufe der Jahre als
            leistungsstarker und qualitativ hochwertiger Ansprechpartner für
            Reparaturen und Verkauf in der Unterhaltungselektronik bewiesen.
          </p>
        </div>

        <div className="space-y-12">
          {/* TV Service */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">TV Service</CardTitle>
              <CardDescription>
                Reparatur und Installation von Fernsehgeräten
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-3 space-y-3 text-muted-foreground">
                <li>Reparatur von Fernsehern aller Marken und Modelle</li>
                <li>
                  Abholung des Geräts und bei Bedarf Aufstellen eines Leihgeräts
                </li>
                <li>
                  Installation von Neugeräten (Wandhalterung, Programmbelegung)
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Computer Service */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Computer Service</CardTitle>
              <CardDescription>
                Umfassende PC- und Netzwerkdienstleistungen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-3 space-y-3 text-muted-foreground">
                <li>Reparaturen von PCs und Druckern</li>
                <li>Datensicherung und Datenrettung</li>
                <li>Komplett-Installationen Windows, Linux oder Mac OS</li>
                <li>Hardwareaustausch und Aufrüstung</li>
                <li>Kaufberatung von PCs und Notebooks</li>
                <li>
                  Zusammenstellung eines individuellen PC-Setups nach Ihren
                  Wünschen
                </li>
                <li>Einrichtung Ihres Internet-Anschlusses</li>
                <li>
                  Einrichtung eines Netzwerkes (Privat oder Firmennetzwerk)
                </li>
                <li>
                  Einrichtung von Linux oder Windows Servern mit Datensicherung
                </li>
                <li>Optimierung von Heimnetzwerken (Smarthome)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Antennen Service */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Antennen Service</CardTitle>
              <CardDescription>
                Installation und Einrichtung von Satelliten-Antennen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-3 space-y-3 text-muted-foreground">
                <li>
                  Umrüstung des analogen Anschlusses auf einen digitalen
                  Anschluss
                </li>
                <li>Befestigung des Spiegels</li>
                <li>
                  Optimales Einmessen der Antenne anhand diverser Messgeräte
                </li>
                <li>Kabel verlegen und Dosen setzen</li>
              </ul>
            </CardContent>
          </Card>

          {/* Audio und Hifi Service */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Audio und Hifi Service</CardTitle>
              <CardDescription>
                Reparatur von Audio- und Hifi-Geräten
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-3 space-y-3 text-muted-foreground">
                <li>Reparaturen von Videorecordern, Tonkopfreinigung</li>
                <li>Transistorverstärker</li>
                <li>Kassettendecks</li>
                <li>CD-Player</li>
                <li>Röhrenverstärker</li>
                <li>Spulentonbandgeräte</li>
              </ul>
            </CardContent>
          </Card>

          {/* Kaffeevollautomaten Service */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Kaffeevollautomaten Service
              </CardTitle>
              <CardDescription>
                Professionelle Reparatur und Wartung
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-3 space-y-3 text-muted-foreground">
                <li>Reparaturen von Kaffeevollautomaten</li>
                <li>Aus- und Einbau der Brüheinheit</li>
                <li>Aus- und Einbau des Mahlwerks</li>
                <li>Überholen und Revidieren der Brüheinheit</li>
                <li>Überholen und Revidieren des Drainageventils</li>
                <li>Ersetzen und Justieren der Mahlscheiben</li>
                <li>Überholen und Revidieren des Auslaufventils</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center space-y-4 bg-muted/50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold">
            Interesse an unseren Dienstleistungen?
          </h2>
          <p className="text-muted-foreground">
            Kontaktieren Sie uns für eine persönliche Beratung oder einen
            Reparaturtermin.
          </p>
          <a
            href="tel:+495615190446"
            className="text-xl font-semibold text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
          >
            Tel: 0561 - 5190446
          </a>
        </div>
      </div>
    </div>
  );
}
