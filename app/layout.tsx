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

export const metadata: Metadata = {
  title: "IT-Service und Beratung Lohfelden",
  description: "Reparatur von TV-, Audio-, Hifi-Geräten, Computern, Kaffeevollautomaten und Installation von Satelliten-Antennen in Lohfelden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
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
