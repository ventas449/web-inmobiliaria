"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#propiedades", label: "Propiedades Seleccionadas" },
  { href: "#vender", label: "Vender con Nosotros" },
  { href: "#equipo", label: "El equipo" },
  { href: "#contacto", label: "Contacto" },
  { href: "/compromiso-social", label: "Acción Social" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled ? "bg-forest" : "bg-white/20 backdrop-blur-sm"
              }`}>
                <span className={`font-display text-xl font-bold ${
                  isScrolled ? "text-gold" : "text-white"
                }`}>
                  P&G
                </span>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className={`font-display text-lg font-semibold leading-tight transition-colors ${
                isScrolled ? "text-forest" : "text-white"
              }`}>
                Promocion y Gestion
              </p>
              <p className={`text-xs tracking-widest uppercase transition-colors ${
                isScrolled ? "text-forest-light" : "text-white/80"
              }`}>
                Inmobiliaria
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-gold relative group ${
                  isScrolled ? "text-forest" : "text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+34600000000"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled ? "text-forest" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+34 616385515</span>
            </a>
            <Button variant="gold" size="default">
              Quiero vender mi propiedad
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={isScrolled ? "text-forest" : "text-white"}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-cream border-l-forest/20">
              <div className="flex flex-col h-full py-8">
                <div className="flex items-center gap-3 mb-12">
                  <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center">
                    <span className="font-display text-xl font-bold text-gold">P&G</span>
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold text-forest">
                      Promocion y Gestion
                    </p>
                    <p className="text-xs tracking-widest uppercase text-forest-light">
                      Inmobiliaria
                    </p>
                  </div>
                </div>

                <nav className="flex flex-col gap-6 flex-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-forest hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="pt-8 border-t border-forest/10">
                  <a
                    href="tel:+34600000000"
                    className="flex items-center gap-3 text-forest mb-6"
                  >
                    <Phone className="w-5 h-5 text-gold" />
                    <span className="font-medium">+34 600 000 000</span>
                  </a>
                  <Button variant="gold" size="lg" className="w-full">
                    Quiero vender mi propiedad
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
