import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Award, ArrowRight, Rocket } from "lucide-react";

const ENROLLMENT_URL = "https://portal.apprbs.com.br/academ-ia/passo/246686";

const InstructorsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
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
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Quem vai te ensinar</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Aprenda com <span className="text-gradient">quem faz</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Os instrutores do AcademIA Business são profissionais atuantes no mercado, que aplicam IA e automação no dia a dia de empresas reais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {[
            {
              icon: Briefcase,
              title: "Profissionais do mercado",
              description: "Instrutores que atuam diariamente com IA em empresas reais"
            },
            {
              icon: Award,
              title: "Experiência comprovada",
              description: "Cases reais de implementação de IA e automação em negócios"
            },
            {
              icon: Users,
              title: "Mentoria personalizada",
              description: "Acompanhamento próximo para aplicar no seu contexto"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-secondary/40 transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
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
            variant="hero" 
            size="lg" 
            onClick={() => window.open(ENROLLMENT_URL, "_blank")}
          >
            <Rocket className="w-5 h-5" />
            Garanta sua vaga
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorsSection;
