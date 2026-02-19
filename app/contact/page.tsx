import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt</h1>
          <p className="text-lg text-muted-foreground">
            Wir freuen uns auf Ihre Kontaktaufnahme
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Kontaktdaten</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold mb-1">Adresse</p>
                <address className="not-italic text-muted-foreground">
                  IT-Service und Beratung<br />
                  Rundstraße 30<br />
                  34253 Lohfelden
                </address>
              </div>
              <div>
                <p className="font-semibold mb-1">Telefon</p>
                <a href="tel:+4956151904446" className="text-muted-foreground hover:text-foreground transition-colors">
                  0561 - 5190446
                </a>
              </div>
              <div>
                <p className="font-semibold mb-1">Fax</p>
                <p className="text-muted-foreground">0561 - 5190443</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Öffnungszeiten</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-center">
                    Termine nur nach Absprache möglich!
                  </p>
                </div>
                <p className="text-muted-foreground">
                  Bitte rufen Sie uns an, um einen Termin zu vereinbaren:
                </p>
                <a 
                  href="tel:+4956151904446" 
                  className="block text-center text-xl font-semibold hover:text-primary transition-colors"
                >
                  0561 - 5190446
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Anfahrt</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=9.552%2C51.281%2C9.572%2C51.291&layer=mapnik&marker=51.286%2C9.562"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Standort IT-Service Lohfelden"
              />
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p className="mb-2">
                Unser Ladengeschäft und unsere Werkstatt befinden sich in der Rundstraße 30 in Lohfelden.
              </p>
              <a
                href="https://www.openstreetmap.org/?mlat=51.286&mlon=9.562#map=16/51.286/9.562"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                In größerer Karte anzeigen →
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center space-y-4 bg-muted/50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold">Vor-Ort Service</h2>
          <p className="text-muted-foreground">
            Auf Ihren Wunsch kommen wir auch bei Ihnen vorbei und erledigen durchführbare 
            Reparaturen vor Ort. Rufen Sie uns an, um einen Termin zu vereinbaren.
          </p>
        </div>
      </div>
    </div>
  );
}
