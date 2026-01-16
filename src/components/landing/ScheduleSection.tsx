import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";

const classes = [
  {
    name: "Turma Semana",
    schedule: "Terça e Quinta",
    time: "19h às 22h",
    icon: Calendar,
    description: "Ideal para quem prefere estudar durante a semana",
  },
  {
    name: "Turma Sábado",
    schedule: "Sábado",
    time: "14h às 18h",
    icon: Calendar,
    description: "Perfeito para quem tem a semana mais ocupada",
  },
];

const ScheduleSection = () => {
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
            Duas turmas. <span className="text-gradient">Você escolhe.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Flexibilidade para encaixar o treinamento na sua rotina.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {classes.map((classOption, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full gradient-card rounded-2xl p-8 border border-border/50 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2 card-shadow">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <classOption.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 bg-accent/10 rounded-full">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="text-sm text-accent font-medium">Vagas limitadas</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-foreground">{classOption.name}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3 text-foreground">
                    <Calendar className="w-5 h-5 text-secondary" />
                    <span className="font-medium">{classOption.schedule}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Clock className="w-5 h-5 text-secondary" />
                    <span className="font-medium">{classOption.time}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm">{classOption.description}</p>
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
            Escolher minha turma
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
