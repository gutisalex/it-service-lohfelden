import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              IT-Service und Beratung Lohfelden
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Qualität spricht sich herum
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ihr kompetenter Partner für Reparaturen und Beratung im Bereich TV, Computer, Audio, Hifi und Kaffeevollautomaten seit 2005
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/contact">Kontakt aufnehmen</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Unsere Dienstleistungen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Dienstleistungen</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wir bieten umfassende Reparatur- und Beratungsleistungen für Privatpersonen und Unternehmen
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>TV Service</CardTitle>
                <CardDescription>Fernseher Reparatur & Installation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Reparatur von Fernsehern</li>
                  <li>• Installation von Neugeräten</li>
                  <li>• Wandhalterung & Einrichtung</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Computer Service</CardTitle>
                <CardDescription>PC & Laptop Reparatur</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Reparatur von PCs & Druckern</li>
                  <li>• Datensicherung</li>
                  <li>• Installation & Netzwerkaufbau</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Antennen Service</CardTitle>
                <CardDescription>Satelliten-Antennen Installation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Befestigung & Einmessen</li>
                  <li>• Umrüstung auf Digital</li>
                  <li>• Kabel verlegen</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Audio & Hifi Service</CardTitle>
                <CardDescription>Hifi-Geräte Reparatur</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Verstärker & CD-Player</li>
                  <li>• Kassettendecks</li>
                  <li>• Röhrenverstärker</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kaffeevollautomaten</CardTitle>
                <CardDescription>Reparatur & Wartung</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Reparatur & Revision</li>
                  <li>• Brüheinheit überholen</li>
                  <li>• Mahlwerk austauschen</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Beratung</CardTitle>
                <CardDescription>Kompetente Kaufberatung</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• TV & Audio Geräte</li>
                  <li>• Computer & Notebooks</li>
                  <li>• Netzwerktechnik</li>
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
      <section className="bg-muted/50 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Über uns</h2>
            <p className="text-lg text-muted-foreground">
              Das 2005 in Lohfelden gegründete Unternehmen IT Service und Beratung wird von <strong>Reinhold Jodeit</strong>, 
              Radio- und Fernsehtechnikermeister sowie staatlich geprüfter Informatiker, geleitet.
            </p>
            <p className="text-lg text-muted-foreground">
              Durch kompetente Beratung helfen wir Ihnen, die richtige Entscheidung beim Kauf von Elektrogeräten zu treffen. 
              In unserer Werkstatt sind wir in der Lage, nahezu jedes Problem schnellstmöglich zu beheben.
            </p>
            <p className="text-lg text-muted-foreground">
              Auf Wunsch kommen wir auch bei Ihnen vorbei und erledigen durchführbare Reparaturen vor Ort.
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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Kontaktieren Sie uns</h2>
          <p className="text-lg text-muted-foreground">
            Rufen Sie noch heute bei uns an und lassen Sie sich einen Termin geben.
          </p>
          <div className="space-y-2">
            <p className="text-2xl font-semibold">0561 - 5190446</p>
            <p className="text-sm text-muted-foreground">Termine nur nach Absprache möglich</p>
          </div>
          <Button asChild size="lg">
            <Link href="/contact">Kontaktformular</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
