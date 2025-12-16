"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import Button from "./ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, anchor: string | null, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // If it's a menu page link, navigate to menu page
    if (href === "/menu") {
      router.push("/menu");
      return;
    }

    // If we're on the menu page and clicking a home page link, navigate to home first
    if (pathname === "/menu" && anchor) {
      router.push("/");
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.querySelector(anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }

    // If we're on the home page, scroll to section
    if (pathname === "/" && anchor) {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (href: string, anchor: string | null) => {
    if (href === "/menu") {
      return pathname === "/menu";
    }
    // For home page, only "Home" link should be active
    if (pathname === "/" && anchor === "#hero") {
      return true;
    }
    return false;
  };

  const navLinks = [
    { href: "/", anchor: "#hero", label: "Home" },
    { href: "/menu", anchor: null, label: "Menu" },
    { href: "/", anchor: "#about", label: "About" },
    { href: "/", anchor: "#hours-location", label: "Hours and Location" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-brand-cream transition-shadow ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logoV2.png"
              alt="Excellent Pizza Logo"
              width={144}
              height={144}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={`${link.href}-${link.anchor || ""}`}
                href={link.anchor ? `${link.href}${link.anchor}` : link.href}
                className={`text-brand-navy font-body hover:text-brand-red transition-colors ${
                  isActive(link.href, link.anchor) ? "font-bold" : "font-medium"
                }`}
                onClick={(e) => handleNavClick(link.href, link.anchor, e)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Button
              href="tel:5086726619"
              icon={Phone}
              className="hidden md:inline-flex text-sm"
            >
              (508) 672-6619
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-brand-navy hover:text-brand-red transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-brand-navy/10 mt-4 pt-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={`${link.href}-${link.anchor || ""}`}
                  href={link.anchor ? `${link.href}${link.anchor}` : link.href}
                  className={`text-brand-navy font-body hover:text-brand-red transition-colors py-2 ${
                    isActive(link.href, link.anchor) ? "font-bold" : "font-medium"
                  }`}
                  onClick={(e) => handleNavClick(link.href, link.anchor, e)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                href="tel:5086726619"
                icon={Phone}
                className="mt-2 w-full justify-center text-sm"
              >
                (508) 672-6619
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

