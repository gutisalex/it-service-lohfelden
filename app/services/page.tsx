import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unsere Dienstleistungen</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            IT-Service und Beratung hat sich im Laufe der Jahre als leistungsstarker und qualitativ 
            hochwertiger Ansprechpartner für Reparaturen und Verkauf in der Unterhaltungselektronik bewiesen.
          </p>
        </div>

        <div className="space-y-12">
          {/* TV Service */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">TV Service</CardTitle>
              <CardDescription>Reparatur und Installation von Fernsehgeräten</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reparatur von Fernsehern aller Marken und Modelle</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Abholung des Geräts und bei Bedarf Aufstellen eines Leihgeräts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Installation von Neugeräten (Wandhalterung, Programmbelegung)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Computer Service */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Computer Service</CardTitle>
              <CardDescription>Umfassende PC- und Netzwerkdienstleistungen</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reparaturen von PCs und Druckern</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Datensicherung und Datenrettung</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Komplett-Installationen Windows, Linux oder Mac OS</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Hardwareaustausch und Aufrüstung</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Kaufberatung von PCs und Notebooks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Zusammenstellung eines individuellen PC-Setups nach Ihren Wünschen</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Einrichtung Ihres Internet-Anschlusses</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Einrichtung eines Netzwerkes (Privat oder Firmennetzwerk)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Einrichtung von Linux oder Windows Servern mit Datensicherung</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Optimierung von Heimnetzwerken (Smarthome)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Antennen Service */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Antennen Service</CardTitle>
              <CardDescription>Installation und Einrichtung von Satelliten-Antennen</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Umrüstung des analogen Anschlusses auf einen digitalen Anschluss</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Befestigung des Spiegels</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Optimales Einmessen der Antenne anhand diverser Messgeräte</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Kabel verlegen und Dosen setzen</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Audio und Hifi Service */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Audio und Hifi Service</CardTitle>
              <CardDescription>Reparatur von Audio- und Hifi-Geräten</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reparaturen von Videorecordern, Tonkopfreinigung</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Transistorverstärker</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Kassettendecks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>CD-Player</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Röhrenverstärker</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Spulentonbandgeräte</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Kaffeevollautomaten Service */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Kaffeevollautomaten Service</CardTitle>
              <CardDescription>Professionelle Reparatur und Wartung</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reparaturen von Kaffeevollautomaten</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Aus- und Einbau der Brüheinheit</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Aus- und Einbau des Mahlwerks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Überholen und Revidieren der Brüheinheit</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Überholen und Revidieren des Drainageventils</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ersetzen und Justieren der Mahlscheiben</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Überholen und Revidieren des Auslaufventils</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center space-y-4 bg-muted/50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold">Interesse an unseren Dienstleistungen?</h2>
          <p className="text-muted-foreground">
            Kontaktieren Sie uns für eine persönliche Beratung oder einen Reparaturtermin.
          </p>
          <p className="text-xl font-semibold">Tel: 0561 - 5190446</p>
        </div>
      </div>
    </div>
  );
}
