"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Startseite" },
  { href: "/services", label: "Dienstleistungen" },
  { href: "/about", label: "Über uns" },
  { href: "/contact", label: "Kontakt" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b bg-background">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link
          href="/"
          className="flex shrink-0 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
        >
          <Image
            src="/logo.png"
            alt="IT-Service und Beratung Lohfelden"
            width={320}
            height={56}
            className="h-16 w-auto object-contain"
            priority
          />
          <span className="hidden md:flex flex-col">
            <span className="text-2xl font-bold italic text-primary leading-tight">
              - Service und Beratung
            </span>
            <span className="text-xs font-bold italic text-foreground leading-tight text-center">
              Reinhold Jodeit - Meisterbetrieb
            </span>
          </span>
        </Link>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
