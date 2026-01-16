import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Quote, ArrowRight, Lightbulb, Target, Rocket } from "lucide-react";
import logoCircular from "@/assets/logo-circular.png";

const AboutSection = () => {
  const scrollToCTA = () => {
    document.getElementById("investimento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sobre" className="py-16 md:py-24 gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative">
              <motion.img
                src={logoCircular}
                alt="AcademIA Business"
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 object-contain"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-secondary/10 rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 order-1 lg:order-2"
          >
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-secondary font-semibold text-sm uppercase tracking-wider"
              >
                Sobre o Programa
              </motion.span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 md:mb-6">
                O que é o <span className="text-gradient">AcademIA Business</span>?
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Não é um curso técnico.</strong> É um treinamento estratégico para aplicar IA e automação diretamente no seu negócio.
              </p>
              
              <div className="grid gap-4">
                {[
                  { icon: Lightbulb, text: "Aprendizado prático com aplicação imediata" },
                  { icon: Target, text: "Foco em resultados mensuráveis" },
                  { icon: Rocket, text: "Metodologia executiva e objetiva" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="p-2 bg-secondary/20 rounded-lg">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative bg-card/50 backdrop-blur-sm border border-accent/20 rounded-2xl p-6"
            >
              <Quote className="absolute -top-3 -left-3 w-8 h-8 text-secondary" />
              <p className="text-lg md:text-xl font-medium text-foreground italic pl-4">
                "Não é sobre aprender tecnologia.{" "}
                <span className="text-gradient">É sobre usar tecnologia para ganhar tempo e decidir melhor.</span>"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button variant="hero" size="lg" onClick={scrollToCTA}>
                Quero fazer parte da próxima turma
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
