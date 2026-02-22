import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie Reinhold Jodeit kennen – Radio- und Fernsehtechnikermeister und staatlich geprüfter Informatiker. IT-Service und Beratung in Lohfelden seit 2005.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Über uns | IT-Service Lohfelden",
    description:
      "Reinhold Jodeit – Radio- und Fernsehtechnikermeister und staatlich geprüfter Informatiker. IT-Service und Beratung in Lohfelden seit 2005.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Über uns</h1>
          <p className="text-xl text-muted-foreground italic">
            &ldquo;Qualität spricht sich herum&rdquo;
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Reinhold Jodeit</CardTitle>
              <p className="text-muted-foreground">
                Radio- und Fernsehtechnikermeister
                <br />
                Staatlich geprüfter Informatiker
              </p>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                &ldquo;Qualität spricht sich herum&rdquo; - das ist das Motto von Reinhold
                Jodeit, dem Radio- und Fernsehtechnikmeister von IT-Service und
                Beratung in Lohfelden.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Qualifikationen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-1">
                  19. April 1983
                </p>
                <p>
                  Industriemeister in der Fachrichtung
                  Elektromechanik-Elektronik
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">
                  9. November 1990
                </p>
                <p>Meisterprüfung im Radio- und Fernsehtechniker-Handwerk</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Firmengeschichte</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-1">2005</p>
                <p>
                  Herr Jodeit gründete die Firma IT-Service und Beratung. In
                  einer kleinen Werkstatt im Keller seines Hauses in der
                  Rundstraße 30 in Lohfelden reparierte er elektronische Geräte
                  aller Art. Auf engstem Raum wurden dort Fernsehgeräte und
                  Computer auf Herz und Nieren geprüft und repariert.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">2007</p>
                <p>
                  Am 01.08.2007 nahm Herr Jodeit den ersten Auszubildenden in
                  seinen Betrieb auf. Nach einer 3 1/2 jährigen Ausbildung
                  konnte Herr Schluz seine Gesellenprüfung mit Erfolg
                  abschließen und wurde daraufhin fest eingestellt.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">2008</p>
                <p>
                  Die Firma IT-Service und Beratung eröffnete ein Ladengeschäft
                  in der Hauptstraße 44 in Lohfelden. Hier können sich Kunden
                  beraten lassen und die neuesten Geräte begutachten und testen
                  oder sich einfach nur ein paar Tipps einholen.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Heute</p>
                <p>
                  Unser Ladengeschäft und unsere Werkstatt befinden sich in der
                  Rundstraße 30 in Lohfelden. Durch eine kompetente Beratung
                  helfen wir unseren Kunden, ihre Entscheidung beim Kauf von
                  Elektrogeräten zu erleichtern.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Unser Ansatz</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                In unserem Ladengeschäft bieten wir Fernseher, Hifi-Geräte,
                Soundsysteme, PCs, Notebooks, Drucker inklusive Zubehör und
                diverse Software wie Windows oder Antiviren-Programme an.
              </p>
              <p>
                Wenn Ihr Gerät, ob Fernseher, Notebook, PC, Drucker oder ein
                anderes technisches Gerät nicht mehr funktioniert, dann finden
                Sie in uns einen preiswerten und kompetenten Ansprechpartner. In
                unserer Werkstatt sind wir in der Lage, nahezu jedes Problem
                schnellstmöglich zu beheben.
              </p>
              <p>
                Auf Ihren Wunsch kommen wir auch bei Ihnen vorbei und erledigen
                durchführbare Reparaturen vor Ort.
              </p>
              <p className="font-semibold text-foreground text-lg pt-4">
                Wir stehen für Qualität und Service zu einem fairen Preis!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Partner</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Wir arbeiten mit führenden Partnern in der Branche zusammen:
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="text-muted-foreground">
                  <p className="font-semibold">ElectronicPartner</p>
                </div>
                <div className="text-muted-foreground">
                  <p className="font-semibold">Terra</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
