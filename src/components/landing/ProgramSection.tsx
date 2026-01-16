import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, Palette, BarChart3, Trophy, ArrowRight, Clock } from "lucide-react";

const modules = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Engenharia de Prompt & IA Generativa",
    description: "Domine as técnicas de comunicação com IA e aplique modelos generativos aos seus processos de negócio.",
    hours: "15h",
  },
  {
    number: "02",
    icon: Palette,
    title: "UX, Vibe e Design de Soluções com IA",
    description: "Crie experiências inteligentes e soluções centradas no usuário utilizando ferramentas de IA.",
    hours: "15h",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Análise de Dados & Automações",
    description: "Transforme dados em insights acionáveis e automatize processos repetitivos da sua operação.",
    hours: "15h",
  },
  {
    number: "04",
    icon: Trophy,
    title: "Desafio Final",
    description: "Aplicação prática de tudo que aprendeu em um projeto real do seu negócio com mentoria.",
    hours: "15h",
  },
];

const ProgramSection = () => {
  const scrollToCTA = () => {
    document.getElementById("investimento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="programa" className="py-16 md:py-24 gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Programa de 60 horas</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            O que você vai <span className="text-gradient">aprender</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Conteúdo prático, direto ao ponto, focado em aplicação no seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto mb-10 md:mb-12">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-light-blue/10 backdrop-blur-sm rounded-2xl p-6 border border-accent/20 hover:border-secondary/40 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-secondary/30">{module.number}</span>
                    <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <module.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    {module.hours}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{module.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{module.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" onClick={scrollToCTA}>
            Ver conteúdo completo
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramSection;
