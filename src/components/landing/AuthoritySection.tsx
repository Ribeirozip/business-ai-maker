import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

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
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Quem decide, <span className="text-gradient">já está se preparando.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Profissionais que transformaram seus negócios com IA.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full gradient-card rounded-2xl p-6 border border-border/50 hover:border-secondary/40 transition-all duration-300 card-shadow">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                
                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-secondary/30" />
                  <p className="text-foreground leading-relaxed pl-4">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                {/* Author */}
                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
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
            Quero estar nesse grupo
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;
