import { Link } from "wouter";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-primary md:text-2xl">
              Smith Lawn
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              & Landscape Maintenance
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.name}
            </button>
          ))}
          <Button className="gap-2 font-semibold" size="lg" asChild>
            <a href="tel:8286748587">
              <Phone className="h-4 w-4" />
              (828) 674-8587
            </a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="mt-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-lg font-medium"
                >
                  {link.name}
                </button>
              ))}
              <Button className="w-full gap-2" size="lg" asChild>
                <a href="tel:8286748587">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
