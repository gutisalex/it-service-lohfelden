import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von IT-Service und Beratung Lohfelden – Angaben gemäß § 5 TMG.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/imprint",
  },
};

export default function ImprintPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>

        <div className="space-y-6 text-muted-foreground">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              IT-Service und Beratung
              <br />
              Inhaber: Reinhold Jodeit
              <br />
              Rundstraße 30
              <br />
              34253 Lohfelden
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Kontakt
            </h2>
            <p>
              Telefon: 0561 - 5190446
              <br />
              Fax: 0561 - 5190443
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Berufsbezeichnung
            </h2>
            <p>
              Radio- und Fernsehtechnikermeister
              <br />
              Staatlich geprüfter Informatiker
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Haftungsausschluss
            </h2>

            <h3 className="font-semibold text-foreground mt-4 mb-2">
              Haftung für Inhalte
            </h3>
            <p className="mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen.
            </p>

            <h3 className="font-semibold text-foreground mt-4 mb-2">
              Haftung für Links
            </h3>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="font-semibold text-foreground mt-4 mb-2">
              Urheberrecht
            </h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
