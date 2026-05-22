import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoCircular from "@/assets/logo-circular.png";

const WHATSAPP_URL = "https://wa.me/5598991234567?text=Olá! Tenho interesse nos módulos do AcademIA Business.";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Módulos", href: "#programa" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/40 shadow-lg shadow-background/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNav("#inicio"); }}
            className="flex items-center gap-3"
          >
            <img src={logoCircular} alt="AcademIA" className="h-9 w-9 object-contain" />
            <span className="font-display text-foreground text-xl tracking-tight hidden sm:block">
              Academ<span className="italic text-[hsl(var(--gold))]">.IA</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[hsl(var(--gold)/0.3)] bg-[hsl(var(--gold)/0.05)] hover:bg-[hsl(var(--gold)/0.12)] transition-all text-[10px] font-semibold tracking-[0.2em] uppercase text-[hsl(var(--gold))]"
            >
              <span>Fale conosco</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold))]" />
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-20 lg:hidden"
          >
            <div className="container mx-auto px-4 flex flex-col gap-2 py-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-lg font-medium text-muted-foreground hover:text-foreground py-3 px-4 rounded-xl hover:bg-muted/20 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-4">
                <button
                  onClick={() => { setMobileOpen(false); window.open(WHATSAPP_URL, "_blank"); }}
                  className="w-full px-6 py-4 bg-[hsl(var(--champagne))] hover:bg-[hsl(var(--champagne-bright))] text-[hsl(var(--background))] font-semibold rounded-sm transition-all inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                >
                  <MessageCircle className="w-5 h-5" />
                  Fale conosco
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
