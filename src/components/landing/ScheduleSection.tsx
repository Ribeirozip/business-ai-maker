import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5598991234567?text=Olá! Tenho interesse em uma turma do AcademIA Business.";

const classes = [
  {
    name: "Turma 1",
    schedule: "Terça e Quinta",
    time: "19h às 21:30",
    description: "Ideal para quem prefere estudar durante a semana",
    startDate: "28/02",
  },
  {
    name: "Turma 2",
    schedule: "Sábado",
    time: "14h às 19h",
    description: "Perfeito para quem não consegue estudar na semana",
    startDate: "01/03",
  },
];

const ScheduleSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 premium-line" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-display">
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
              <div className="h-full border-premium rounded-2xl p-8 hover:shadow-[0_0_30px_-10px_hsl(var(--secondary)/0.15)] transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-secondary/15 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 bg-secondary/10 rounded-full">
                    <Users className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-secondary font-medium">Vagas limitadas</span>
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

                <div className="bg-secondary/8 rounded-lg p-3 mb-4 border border-secondary/10">
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
            size="lg" 
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
            className="bg-secondary text-foreground hover:bg-secondary/90 font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            Garantir vaga na turma
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
