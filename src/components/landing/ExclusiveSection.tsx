import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Crown, Building2, Users, Target, Sparkles, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5598991234567?text=Olá! Tenho interesse em turmas exclusivas e personalizadas para minha empresa.";

const features = [
  {
    icon: Building2,
    title: "Sob medida para sua empresa",
    description: "Conteúdo adaptado à realidade e aos desafios específicos do seu negócio.",
  },
  {
    icon: Users,
    title: "Turmas fechadas",
    description: "Treinamento exclusivo para sua equipe, com foco total nos seus objetivos.",
  },
  {
    icon: Target,
    title: "Resultados direcionados",
    description: "Cases práticos baseados nos processos reais da sua operação.",
  },
  {
    icon: Sparkles,
    title: "Acompanhamento dedicado",
    description: "Suporte personalizado e mentoria focada na implementação dentro da sua empresa.",
  },
];

const ExclusiveSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0_0%_3%)] via-[hsl(0_0%_5%)] to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.04),transparent_60%)]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.3)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.15)] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-[hsl(0_0%_5%)] border border-[hsl(var(--gold)/0.3)] rounded-full px-6 py-3 mb-6">
            <Crown className="w-5 h-5 text-[hsl(var(--gold))]" />
            <span className="text-sm font-semibold text-gradient-gold tracking-wider uppercase">
              Programa Exclusivo
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-display">
            Turmas{" "}
            <span className="text-gradient-gold">exclusivas e personalizadas</span>
            <br />
            para sua empresa
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Leve a Inteligência Artificial para dentro da sua organização com um programa 100% adaptado às necessidades da sua equipe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-[hsl(0_0%_6%)] border border-[hsl(var(--gold)/0.12)] rounded-2xl p-6 hover:border-[hsl(var(--gold)/0.3)] transition-all duration-500"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--gold)/0.2)] to-[hsl(var(--gold-dark)/0.1)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-[hsl(var(--gold))]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
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
            size="xl"
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
            className="bg-gradient-to-r from-[hsl(var(--gold-dark))] to-[hsl(var(--gold))] text-[hsl(0_0%_5%)] font-bold hover:scale-[1.03] transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar turma exclusiva
          </Button>
          <p className="text-xs text-muted-foreground mt-4">
            Vagas limitadas por turma para garantir acompanhamento individualizado
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExclusiveSection;
