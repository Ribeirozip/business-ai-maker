import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, ArrowRight, Rocket } from "lucide-react";

const ENROLLMENT_URL = "https://portal.apprbs.com.br/academ-ia/passo/246686";

const classes = [
  {
    name: "Turma 1",
    schedule: "Terça e Quinta",
    time: "19h às 21:30",
    icon: Calendar,
    description: "Ideal para quem prefere estudar durante a semana",
    startDate: "28/02",
  },
  {
    name: "Turma 2",
    schedule: "Sábado",
    time: "14h às 19h",
    icon: Calendar,
    description: "Perfeito para quem não consegue estudar na semana",
    startDate: "01/03",
  },
];

const ScheduleSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Duas turmas. <span className="text-gradient">Você escolhe.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Flexibilidade para encaixar o curso na sua rotina.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto mb-10 md:mb-12">
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

                {/* Start date highlight */}
                <div className="bg-accent/10 rounded-lg p-3 mb-4">
                  <p className="text-sm text-accent font-medium">
                    📅 Início: {classOption.startDate}
                  </p>
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

export default ScheduleSection;
