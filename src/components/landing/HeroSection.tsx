import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, ChevronDown, Brain, Zap, BarChart3, Timer } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import logoCeuma from "@/assets/logo-ceuma.png";
import logoOxygeni from "@/assets/logo-oxygeni.png";

const ENROLLMENT_URL = "https://portal.apprbs.com.br/academ-ia/passo/246686";

const HeroSection = () => {
  const scrollToProgram = () => {
    document.getElementById("programa")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-secondary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2"
            >
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Turmas com vagas limitadas</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Inteligência Artificial e Automação{" "}
              <span className="text-gradient">para quem decide.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              <strong className="text-accent">Aprenda IA com quem faz.</strong> Um treinamento executivo prático para gestores e empresários aplicarem IA no negócio e ganharem eficiência, escala e vantagem competitiva.
            </p>

            {/* Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: Brain, text: "IA aplicada ao negócio real" },
                { icon: Zap, text: "Automação de processos" },
                { icon: BarChart3, text: "Decisão baseada em dados" },
                { icon: Timer, text: "Foco em produtividade" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-foreground/90"
                >
                  <div className="p-2 bg-secondary/20 rounded-lg">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button 
                variant="hero" 
                size="xl" 
                onClick={() => window.open(ENROLLMENT_URL, "_blank")} 
                className="w-full sm:w-auto"
              >
                <Rocket className="w-5 h-5" />
                Garanta sua vaga agora
              </Button>
              <Button variant="heroOutline" size="lg" onClick={scrollToProgram} className="w-full sm:w-auto">
                Ver programa completo
                <ChevronDown className="w-4 h-4" />
              </Button>
            </motion.div>

            {/* Partner Logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <span className="text-xs text-muted-foreground">Uma iniciativa de:</span>
              <div className="flex items-center gap-4 md:gap-6">
                <img 
                  src={logoCeuma}
                  alt="Universidade Ceuma" 
                  className="h-6 md:h-8 object-contain opacity-80"
                />
                <img 
                  src={logoOxygeni}
                  alt="Oxygeni HUB" 
                  className="h-5 md:h-6 object-contain opacity-80"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Logo visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl scale-110" />
              
              {/* Main logo */}
              <motion.img
                src={logoIcon}
                alt="AcademIA Business"
                className="relative w-80 h-80 object-contain floating-animation"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Orbiting elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Brain className="w-8 h-8 text-foreground" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Zap className="w-6 h-6 text-foreground" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
