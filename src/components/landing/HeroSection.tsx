import { motion } from "framer-motion";
import { ChevronDown, Crown, MessageCircle } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import logoCeuma from "@/assets/logo-ceuma.png";
import logoOxygeni from "@/assets/logo-oxygeni.png";

const WHATSAPP_URL = "https://wa.me/5598991234567?text=Olá! Tenho interesse nos módulos do AcademIA Business.";

const HeroSection = () => {
  const scrollToProgram = () => {
    document.getElementById("programa")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen gradient-hero overflow-hidden flex items-center pt-24">
      {/* Ambient atmospheric glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-primary/10 blur-[140px] rounded-full" />
        <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[hsl(var(--gold)/0.04)] blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[hsl(var(--gold)/0.3)] bg-[hsl(var(--gold)/0.05)] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold))]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--gold))] font-semibold">
                Módulos disponíveis — vagas limitadas
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
                O maior centro de formação em IA do Maranhão
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-light text-foreground">
                IA aplicada ao <br />
                <span className="font-display italic font-normal text-[hsl(var(--champagne-bright))]">
                  seu negócio
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg font-light">
                Transforme sua operação com inteligência artificial de ponta. Uma formação executiva desenhada para líderes que buscam o estado da arte em produtividade.
              </p>
            </div>

            {/* Editorial features */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-8 border-l border-border pl-8 max-w-lg">
              {[
                { label: "Estratégia", text: "IA aplicada ao mundo real" },
                { label: "Performance", text: "Automação de processos" },
                { label: "Análise", text: "Decisão baseada em dados" },
                { label: "Eficiência", text: "Foco em produtividade" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.08 }}
                >
                  <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] mb-1 font-semibold">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-foreground/85">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                onClick={() => window.open(WHATSAPP_URL, "_blank")}
                className="px-8 py-4 bg-[hsl(var(--champagne))] hover:bg-[hsl(var(--champagne-bright))] text-[hsl(var(--background))] font-semibold rounded-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[hsl(var(--champagne)/0.15)] inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" />
                Fale com um consultor
              </button>
              <button
                onClick={scrollToProgram}
                className="px-8 py-4 border border-border hover:border-[hsl(var(--gold)/0.6)] text-foreground font-medium rounded-sm transition-all flex items-center justify-center gap-3 text-sm uppercase tracking-wider"
              >
                Ver módulos
                <ChevronDown className="w-4 h-4 text-[hsl(var(--gold))]" />
              </button>
            </motion.div>

            {/* Exclusive classes CTA */}
            <motion.a
              href="https://wa.me/5598991234567?text=Olá! Tenho interesse em turmas exclusivas e personalizadas para minha empresa."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="group flex items-center gap-3 bg-[hsl(0_0%_4%)] border border-[hsl(var(--gold)/0.25)] rounded-sm px-5 py-3 w-fit cursor-pointer transition-all duration-300 hover:border-[hsl(var(--gold)/0.6)]"
            >
              <div className="p-1.5 bg-[hsl(var(--gold)/0.1)] rounded-sm">
                <Crown className="w-4 h-4 text-[hsl(var(--gold))]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-[hsl(var(--champagne-bright))] tracking-wide">
                  Turmas exclusivas para sua empresa
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
                  Treinamentos personalizados sob medida
                </span>
              </div>
              <MessageCircle className="w-4 h-4 text-[hsl(var(--gold))] opacity-60 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            {/* Partner Logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap items-center gap-6 pt-2"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Uma iniciativa de</span>
              <div className="flex items-center gap-6 md:gap-8">
                <img src={logoCeuma} alt="Universidade Ceuma" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-90 transition-opacity" />
                <img src={logoOxygeni} alt="Oxygeni HUB" className="h-7 md:h-9 object-contain opacity-60 hover:opacity-90 transition-opacity" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Editorial visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--background))] rounded-sm border border-border/60 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="absolute w-full h-full bg-primary/10 blur-3xl" />
                  <img
                    src={logoIcon}
                    alt="AcademIA Business"
                    className="relative w-64 h-64 object-contain opacity-90"
                  />
                </div>

                {/* Floating labels */}
                <div className="absolute top-8 right-6 bg-[hsl(var(--background)/0.6)] backdrop-blur-md border border-[hsl(var(--gold)/0.2)] px-4 py-2 rounded-sm">
                  <span className="text-[9px] text-[hsl(var(--gold))] font-bold uppercase tracking-[0.2em] block">Precision</span>
                  <span className="text-[11px] text-foreground font-medium">Neural Engine 9.2</span>
                </div>
                <div className="absolute bottom-8 left-6 bg-[hsl(var(--background)/0.6)] backdrop-blur-md border border-border px-4 py-2 rounded-sm">
                  <span className="text-[9px] text-[hsl(var(--gold))] font-bold uppercase tracking-[0.2em] block">Processing</span>
                  <span className="text-[11px] text-foreground font-medium">Real-time Synthesis</span>
                </div>
              </div>

              {/* Fine line corner decorations */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-[hsl(var(--gold)/0.4)] pointer-events-none" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-border pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[hsl(var(--gold))]" />
      </div>
    </section>
  );
};

export default HeroSection;
