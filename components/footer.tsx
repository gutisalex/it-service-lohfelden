import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-t-primary/20 bg-muted/40 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold mb-3">IT-Service und Beratung</h3>
            <p className="text-sm text-muted-foreground">
              Qualität spricht sich herum
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Kontakt</h3>
            <address className="text-sm text-muted-foreground not-italic">
              <p>Rundstraße 30</p>
              <p>34253 Lohfelden</p>
              <p className="mt-2">Tel: 0561 - 5190446</p>
              <p>Fax: 0561 - 5190443</p>
            </address>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Links</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/imprint" className="hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} IT-Service und Beratung Lohfelden. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
