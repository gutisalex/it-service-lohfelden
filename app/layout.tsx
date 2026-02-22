import type { Metadata } from "next";
import { Open_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

/** Sans font matching logo: bold italic sans (Open Sans ≈ Arial/Helvetica-style) */
const openSans = Open_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.it-service-lohfelden.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IT-Service und Beratung Lohfelden | Reinhold Jodeit",
    template: "%s | IT-Service Lohfelden",
  },
  description:
    "Ihr Fachbetrieb in Lohfelden für Reparatur von Fernsehern, Computern, Audio- & Hifi-Geräten, Kaffeevollautomaten sowie Installation von Satelliten-Antennen. Seit 2005 – Qualität spricht sich herum.",
  keywords: [
    "IT-Service Lohfelden",
    "Fernseher Reparatur Lohfelden",
    "Computer Reparatur Lohfelden",
    "Hifi Reparatur Lohfelden",
    "Kaffeevollautomat Reparatur Lohfelden",
    "Satelliten-Antenne Installation Lohfelden",
    "Reinhold Jodeit",
    "Radio- und Fernsehtechnikermeister",
    "IT-Service Kassel",
    "Elektronik Reparatur Lohfelden",
  ],
  authors: [{ name: "Reinhold Jodeit" }],
  creator: "Reinhold Jodeit",
  publisher: "IT-Service und Beratung Lohfelden",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "IT-Service und Beratung Lohfelden",
    title: "IT-Service und Beratung Lohfelden | Reinhold Jodeit",
    description:
      "Ihr Fachbetrieb in Lohfelden für Reparatur von Fernsehern, Computern, Audio- & Hifi-Geräten, Kaffeevollautomaten sowie Installation von Satelliten-Antennen. Seit 2005.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IT-Service und Beratung Lohfelden",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT-Service und Beratung Lohfelden | Reinhold Jodeit",
    description:
      "Ihr Fachbetrieb in Lohfelden für Reparatur von Fernsehern, Computern, Audio- & Hifi-Geräten, Kaffeevollautomaten sowie Installation von Satelliten-Antennen.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.it-service-lohfelden.de/#business",
  name: "IT-Service und Beratung Lohfelden",
  alternateName: "IT-Service Jodeit",
  description:
    "Fachbetrieb für Reparatur von Fernsehern, Computern, Audio- & Hifi-Geräten, Kaffeevollautomaten sowie Installation von Satelliten-Antennen in Lohfelden.",
  url: "https://www.it-service-lohfelden.de",
  telephone: "+49-561-5190446",
  faxNumber: "+49-561-5190443",
  foundingDate: "2005",
  founder: {
    "@type": "Person",
    name: "Reinhold Jodeit",
    jobTitle:
      "Radio- und Fernsehtechnikermeister, Staatlich geprüfter Informatiker",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rundstraße 30",
    addressLocality: "Lohfelden",
    postalCode: "34253",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.2765779,
    longitude: 9.5474161,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    description: "Termine nur nach Absprache",
  },
  areaServed: [
    { "@type": "City", name: "Lohfelden" },
    { "@type": "City", name: "Kassel" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dienstleistungen",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "TV Reparatur" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Computer Reparatur" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Satelliten-Antennen Installation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Audio & Hifi Reparatur" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kaffeevollautomat Reparatur",
        },
      },
    ],
  },
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Bank Transfer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${openSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
