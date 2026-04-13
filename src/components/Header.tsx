import { useState, useEffect } from "react";
import { Phone, Menu, X, Zap, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Estimate", href: "#estimate" },
    { name: "Gallery", href: "#gallery" },
    { name: "Safety Tips", href: "#tips" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="bg-amber-500 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Zap className="w-6 h-6 text-white fill-white" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? "text-slate-900" : "text-white"}`}>
            FABTECH ELECTRICAL S
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-amber-500 transition-colors ${
                isScrolled ? "text-slate-600" : "text-slate-100"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className={`hidden lg:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${isScrolled ? "text-slate-500" : "text-amber-500/90"}`}>
            <MapPin className="w-3 h-3" />
            Kitale & Country Wide
          </div>
          <a
            href="mailto:fabianguylord@gmail.com"
            className={`flex items-center gap-2 font-medium ${isScrolled ? "text-slate-600" : "text-slate-200"} hover:text-amber-500 transition-colors`}
          >
            <Mail className="w-4 h-4 text-amber-500" />
            <span className="text-xs xl:text-sm">fabianguylord@gmail.com</span>
          </a>
          <a
            href="tel:+254729334622"
            className={`flex items-center gap-2 font-bold ${isScrolled ? "text-slate-900" : "text-white"}`}
          >
            <Phone className="w-4 h-4 text-amber-500" />
            +254 729 334622
          </a>
          <Button 
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold"
            asChild
          >
            <a href="#booking">Book Now</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? "text-slate-900" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-slate-900" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col p-4 gap-4 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest px-2 py-1 bg-amber-50 rounded-lg self-start">
              <MapPin className="w-3 h-3" />
              Kitale - Country Wide Service
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 font-medium py-2 hover:text-amber-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <hr className="border-slate-100" />
            <a
              href="mailto:fabianguylord@gmail.com"
              className="flex items-center gap-2 font-medium text-slate-600 py-2 hover:text-amber-500"
            >
              <Mail className="w-4 h-4 text-amber-500" />
              fabianguylord@gmail.com
            </a>
            <a
              href="tel:+254729334622"
              className="flex items-center gap-2 font-bold text-slate-900 py-2"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              +254 729 334622
            </a>
            <Button 
              className="w-full bg-amber-500 hover:bg-amber-600 text-white"
              asChild
            >
              <a href="#booking" onClick={() => setIsMenuOpen(false)}>Book Now</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};