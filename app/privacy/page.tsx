export default function PrivacyPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Datenschutz</h2>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen 
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Cookies</h2>
            <p className="mb-4">
              Diese Website verwendet keine Cookies, die personenbezogene Daten speichern. 
              Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem 
              Rechner keinen Schaden an und enthalten keine Viren.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Server-Log-Files</h2>
            <p className="mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
              Server-Log Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-3 space-y-1 mb-4">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
            </ul>
            <p>
              Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten 
              mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten 
              nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung 
              bekannt werden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Kontaktformular</h2>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
              wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Auskunft, Löschung, Sperrung</h2>
            <p className="mb-4">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten 
              personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung 
              sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu 
              weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im 
              Impressum angegebenen Adresse an uns wenden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Widerspruch Werbe-Mails</h2>
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur 
              Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien 
              wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich 
              rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, 
              etwa durch Spam-E-Mails, vor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
