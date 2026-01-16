import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Megaphone, PenLine, GraduationCap } from "lucide-react";

const timeline = [
  {
    icon: Megaphone,
    date: "16/01",
    title: "Início da campanha",
    description: "Lançamento oficial do AcademIA Business",
  },
  {
    icon: PenLine,
    date: "19/01 a 28/02",
    title: "Período de inscrições",
    description: "Garanta sua vaga com condições especiais",
  },
  {
    icon: GraduationCap,
    date: "03/03",
    title: "Início das aulas",
    description: "Começo da transformação do seu negócio",
  },
];

const TimelineSection = () => {
  const scrollToCTA = () => {
    document.getElementById("investimento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Cronograma</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Datas importantes que você não pode perder.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-accent to-secondary/20 hidden md:block" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Icon bubble */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                      <item.icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-secondary" />
                      <span className="text-secondary font-bold">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" onClick={scrollToCTA}>
            Não perder essa oportunidade
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
