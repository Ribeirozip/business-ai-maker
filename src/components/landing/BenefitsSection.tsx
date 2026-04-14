import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp, Settings, Timer, Rocket, Users2, ArrowRight, AlertTriangle, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5598991234567?text=Olá! Tenho interesse nos módulos do AcademIA Business.";

const benefits = [
  {
    icon: TrendingUp,
    title: "Ganho de produtividade",
    description: "Faça mais em menos tempo com processos otimizados por IA.",
  },
  {
    icon: Settings,
    title: "Redução de tarefas manuais",
    description: "Automatize o operacional e foque no estratégico.",
  },
  {
    icon: Timer,
    title: "Decisão mais rápida",
    description: "Dados organizados para escolhas certeiras.",
  },
  {
    icon: AlertTriangle,
    title: "Decisões imediatas críticas",
    description: "Aprenda a tomar decisões rápidas e estratégicas com apoio de dados e IA.",
  },
  {
    icon: Rocket,
    title: "Aplicação imediata",
    description: "Tudo que você aprende pode ser usado no dia seguinte.",
  },
  {
    icon: Users2,
    title: "Networking qualificado",
    description: "Conecte-se com gestores e empresários do mercado.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 md:py-28 gradient-hero relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-display">
            Por que fazer o <span className="text-gradient">AcademIA Business</span>?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Resultados tangíveis para o seu negócio e carreira.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-10 md:mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full border-premium rounded-2xl p-6 hover:shadow-[0_0_30px_-10px_hsl(var(--secondary)/0.15)] transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-primary/15 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
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
          <Button 
            size="lg" 
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
            className="bg-secondary text-foreground hover:bg-secondary/90 font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            Fale com um consultor
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
