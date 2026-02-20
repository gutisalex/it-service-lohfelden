"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const navItems = [
  { href: "/", label: "Startseite" },
  { href: "/services", label: "Dienstleistungen" },
  { href: "/about", label: "Über uns" },
  { href: "/contact", label: "Kontakt" },
];

function NavLinks({
  pathname,
  onLinkClick,
}: {
  pathname: string;
  onLinkClick?: () => void;
}) {
  return (
    <>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            onClick={onLinkClick}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary relative py-1",
              pathname === item.href
                ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                : "text-muted-foreground",
            )}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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
          <span className="flex flex-col">
            <span className="text-2xl font-bold italic text-primary leading-tight">
              <span className="sr-only">IT</span> - Service und Beratung
            </span>
            <span className="text-xs font-bold italic text-foreground leading-tight text-center">
              Reinhold Jodeit - Meisterbetrieb
            </span>
          </span>
        </Link>

        {/* Desktop: horizontal links */}
        <ul className="hidden md:flex gap-6">
          <NavLinks pathname={pathname} />
        </ul>

        {/* Mobile: burger menu with popover */}
        <Popover open={menuOpen} onOpenChange={setMenuOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-20 w-12 -mr-2 rounded-none"
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {menuOpen ? (
                <X className="size-5" aria-hidden />
              ) : (
                <Menu className="size-5" aria-hidden />
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            side="bottom"
            sideOffset={0}
            className="w-screen max-w-[100vw] relative left-1/2 -translate-x-1/2 rounded-none border-x-0 border-t-0 p-4 shadow-lg md:hidden"
          >
            <ul className="flex flex-col gap-4">
              <NavLinks
                pathname={pathname}
                onLinkClick={() => setMenuOpen(false)}
              />
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
}
