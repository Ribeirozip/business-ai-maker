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
  const scrollToCTA = () => {
    document.getElementById("investimento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-card/50 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            O mercado já mudou.{" "}
            <span className="text-gradient">Sua empresa acompanhou?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Enquanto você lida com processos lentos, a concorrência está automatizando tudo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 gradient-card rounded-2xl border border-border/50 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1 card-shadow">
                <div className="w-14 h-14 bg-destructive/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
          <Button variant="hero" size="lg" onClick={scrollToCTA}>
            Quero aplicar IA no meu negócio
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PainSection;
