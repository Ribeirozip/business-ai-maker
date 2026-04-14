import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, Cog, TrendingDown, Users, ArrowRight } from "lucide-react";

const pains = [
  {
    icon: Clock,
    title: "Falta de tempo",
    description: "Tarefas operacionais consomem o tempo que deveria ser estratégico.",
  },
  {
    icon: Cog,
    title: "Processos manuais",
    description: "Retrabalho e erros em tarefas que poderiam ser automatizadas.",
  },
  {
    icon: TrendingDown,
    title: "Decisões lentas",
    description: "Dados desorganizados atrasam análises e escolhas importantes.",
  },
  {
    icon: Users,
    title: "Concorrência à frente",
    description: "Outros já estão usando IA para ganhar eficiência e mercado.",
  },
];

const PainSection = () => {
  const scrollToProgram = () => {
    document.getElementById("programa")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-card/50 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 font-display">
            O mercado já mudou.{" "}
            <span className="text-gradient">Sua empresa acompanhou?</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Enquanto você lida com processos lentos, a concorrência está automatizando tudo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 border-premium rounded-2xl hover:shadow-[0_0_30px_-10px_hsl(var(--secondary)/0.15)] transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-destructive/15 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <pain.icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{pain.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pain.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" onClick={scrollToProgram}>
            Quero aplicar IA no meu negócio
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PainSection;
