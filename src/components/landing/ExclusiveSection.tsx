import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Crown, Building2, Users, Target, Sparkles, Rocket } from "lucide-react";

const ENROLLMENT_URL = "https://portal.apprbs.com.br/academ-ia/passo/246686";

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
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0_0%_4%)] via-[hsl(0_0%_6%)] to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(45_100%_51%/0.05),transparent_60%)]" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(45_100%_51%/0.4)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(45_100%_51%/0.2)] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-[hsl(0_0%_5%)] border border-[hsl(45_100%_51%/0.4)] rounded-full px-6 py-3 mb-6"
          >
            <Crown className="w-5 h-5 text-[hsl(45_100%_51%)]" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[hsl(45_100%_51%)] to-[hsl(35_100%_70%)] bg-clip-text text-transparent tracking-wider uppercase">
              Programa Exclusivo
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Turmas{" "}
            <span className="bg-gradient-to-r from-[hsl(45_100%_51%)] to-[hsl(35_100%_70%)] bg-clip-text text-transparent">
              exclusivas e personalizadas
            </span>
            <br />
            para sua empresa
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Leve a Inteligência Artificial para dentro da sua organização com um programa 100% adaptado às necessidades da sua equipe.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-[hsl(0_0%_7%)] border border-[hsl(45_100%_51%/0.15)] rounded-2xl p-6 hover:border-[hsl(45_100%_51%/0.4)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[hsl(45_100%_51%/0.03)] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(45_100%_51%/0.2)] to-[hsl(40_80%_40%/0.1)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-[hsl(45_100%_51%)]" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="xl"
            onClick={() => window.open(ENROLLMENT_URL, "_blank")}
            className="bg-gradient-to-r from-[hsl(45_100%_41%)] to-[hsl(40_90%_50%)] text-[hsl(0_0%_5%)] font-bold shadow-[0_0_30px_-5px_hsl(45_100%_51%/0.4)] hover:shadow-[0_0_45px_-5px_hsl(45_100%_51%/0.6)] hover:scale-[1.03] transition-all duration-300"
          >
            <Rocket className="w-5 h-5" />
            Garanta sua vaga
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
