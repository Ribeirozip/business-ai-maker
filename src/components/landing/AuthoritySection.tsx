import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";
import logoCeuma from "@/assets/logo-ceuma.png";
import logoOxygeni from "@/assets/logo-oxygeni.png";

const testimonials = [
  {
    quote: "A IA mudou completamente como gerencio minha equipe. Decisões mais rápidas, menos retrabalho.",
    author: "Carlos M.",
    role: "Diretor de Operações",
  },
  {
    quote: "Automatizei processos que consumiam 20 horas por semana. Agora foco no que realmente importa.",
    author: "Patricia S.",
    role: "Empresária",
  },
  {
    quote: "Finalmente entendi como aplicar IA de forma prática. Não é sobre tecnologia, é sobre resultado.",
    author: "Roberto L.",
    role: "Gestor Financeiro",
  },
];

const AuthoritySection = () => {
  const scrollToCTA = () => {
    document.getElementById("investimento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Quem decide, <span className="text-gradient">já está se preparando.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Profissionais que transformaram seus negócios com IA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full gradient-card rounded-2xl p-5 md:p-6 border border-border/50 hover:border-secondary/40 transition-all duration-300 card-shadow">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                
                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-5 h-5 md:w-6 md:h-6 text-secondary/30" />
                  <p className="text-foreground leading-relaxed pl-4 text-sm md:text-base">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                {/* Author */}
                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold text-foreground text-sm md:text-base">{testimonial.author}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mb-10 md:mb-12"
        >
          <p className="text-sm text-muted-foreground mb-6">Uma iniciativa de</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <a 
              href="https://www.ceuma.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <img 
                src={logoCeuma}
                alt="Universidade Ceuma" 
                className="h-14 md:h-20 object-contain"
              />
            </a>
            <a 
              href="https://www.linkedin.com/company/oxygenihub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <img 
                src={logoOxygeni}
                alt="Oxygeni HUB" 
                className="h-10 md:h-14 object-contain"
              />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" onClick={scrollToCTA}>
            Quero estar nesse grupo
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;
