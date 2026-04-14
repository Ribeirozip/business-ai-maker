import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Award, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5598991234567?text=Olá! Tenho interesse nos módulos do AcademIA Business.";

const InstructorsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-[0.2em]">Quem vai te ensinar</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 font-display">
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
              <div className="h-full border-premium rounded-2xl p-6 hover:shadow-[0_0_30px_-10px_hsl(var(--secondary)/0.15)] transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/15 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
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
            size="lg" 
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
            className="bg-secondary text-foreground hover:bg-secondary/90 font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            Fale com um consultor
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorsSection;
