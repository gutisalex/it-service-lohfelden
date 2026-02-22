"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Sun,
  Moon,
  Home,
  Wrench,
  Info,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const navItems = [
  { href: "/", label: "Startseite", icon: Home },
  { href: "/services", label: "Dienstleistungen", icon: Wrench },
  { href: "/about", label: "Über uns", icon: Info },
  { href: "/contact", label: "Kontakt", icon: Mail },
];

/** Facebook SVG icon (no lucide equivalent) */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

/** Dark / light mode toggle — renders two buttons, one visible per theme */
function ThemeToggle({
  className,
  showLabel = false,
}: {
  className?: string;
  showLabel?: boolean;
}) {
  const { setTheme } = useTheme();

  const btnClass = cn(
    "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer bg-transparent border-0 p-0",
    className,
  );

  return (
    <>
      {/* Shown in light mode */}
      <button
        aria-label="Dunkles Design aktivieren"
        className={cn(btnClass, "dark:hidden")}
        onClick={() => setTheme("dark")}
      >
        <Moon className="size-4 shrink-0" aria-hidden />
        {showLabel && <span>Dunkles Design</span>}
      </button>
      {/* Shown in dark mode */}
      <button
        aria-label="Helles Design aktivieren"
        className={cn(btnClass, "hidden dark:inline-flex")}
        onClick={() => setTheme("light")}
      >
        <Sun className="size-4 shrink-0" aria-hidden />
        {showLabel && <span>Helles Design</span>}
      </button>
    </>
  );
}

function NavLinks({
  pathname,
  showIcons = false,
  onLinkClick,
}: {
  pathname: string;
  showIcons?: boolean;
  onLinkClick?: () => void;
}) {
  return (
    <>
      {navItems.map(({ href, label, icon: Icon }) => (
        <li key={href}>
          <Link
            href={href}
            onClick={onLinkClick}
            className={cn(
              "inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary relative py-1",
              pathname === href
                ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                : "text-muted-foreground",
            )}
          >
            {showIcons && <Icon className="size-4 shrink-0" aria-hidden />}
            {label}
          </Link>
        </li>
      ))}
    </>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable body scroll while the mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return (
    <>
      {/* Mobile backdrop */}
      <div
        aria-hidden
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-200 md:hidden",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      />

      <nav className="sticky top-0 z-50 border-b bg-background">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
          >
            <Image
              src="/logo.png"
              alt="IT-Service und Beratung Lohfelden"
              width={320}
              height={56}
              className="h-14 w-auto object-contain md:h-16"
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

          {/* Desktop: nav links + action icons */}
          <div className="hidden md:flex items-center gap-2">
            <ul className="flex gap-6 mr-2">
              <NavLinks pathname={pathname} />
            </ul>

            {/* Phone */}
            <Button
              variant="ghost"
              size="icon"
              asChild
              aria-label="Anrufen: 0561 5190446"
            >
              <a href="tel:+495615190446">
                <Phone className="size-4" aria-hidden />
              </a>
            </Button>

            {/* Facebook */}
            <Button
              variant="ghost"
              size="icon"
              asChild
              aria-label="Facebook-Seite besuchen"
            >
              <a
                href="https://www.facebook.com/people/IT-Service-und-Beratung-Lohfelden/100063614197564/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="size-4" />
              </a>
            </Button>

            {/* Dark mode toggle */}
            <ThemeToggle className="inline-flex items-center justify-center rounded-md h-9 w-9 hover:bg-accent hover:text-accent-foreground transition-colors text-foreground" />
          </div>

          {/* Mobile: burger only */}
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
                {/* Nav links with icons */}
                <NavLinks
                  pathname={pathname}
                  showIcons
                  onLinkClick={() => setMenuOpen(false)}
                />

                {/* Divider */}
                <li aria-hidden className="border-t border-border" />

                {/* Phone */}
                <li>
                  <a
                    href="tel:+495615190446"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Phone className="size-4 shrink-0" aria-hidden />
                    0561 – 5190446
                  </a>
                </li>

                {/* Facebook */}
                <li>
                  <a
                    href="https://www.facebook.com/people/IT-Service-und-Beratung-Lohfelden/100063614197564/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FacebookIcon className="size-4 shrink-0" />
                    Facebook
                  </a>
                </li>

                {/* Theme toggle */}
                <li>
                  <ThemeToggle showLabel />
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </>
  );
}
