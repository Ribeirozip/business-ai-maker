import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Lightbulb, BarChart3, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";

const ENROLLMENT_URL = "https://portal.apprbs.com.br/academ-ia/passo/246686";

const modules = [
  {
    number: "01",
    icon: Brain,
    title: "Automatizar tarefas manuais do dia a dia",
    description: "Aprenda a usar IA para eliminar tarefas repetitivas e ganhar horas na sua rotina.",
    benefit: "Você vai parar de perder tempo com o operacional e focar no que realmente importa.",
    topics: [
      "Usar IA em tarefas do dia a dia",
      "Criar comandos simples que geram resultados",
      "Automatizar atividades manuais e repetitivas",
      "Ganhar tempo para o que realmente importa",
    ],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Usar IA para entender melhor o cliente",
    description: "Descubra como a IA pode ajudar você a conhecer melhor seus clientes e tomar decisões mais certeiras.",
    benefit: "Você vai entender o que seu cliente quer, antes mesmo dele pedir.",
    topics: [
      "Criar soluções centradas no cliente",
      "Estruturar fluxos inteligentes de atendimento",
      "Pensar produtos e serviços com IA",
      "Melhorar a experiência do cliente",
    ],
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Criar gráficos simples e visuais para decisões rápidas",
    description: "Transforme dados em gráficos simples e visuais que qualquer pessoa entende.",
    benefit: "Você vai tomar decisões mais rápidas olhando para informações claras, não planilhas confusas.",
    topics: [
      "Interpretar dados do seu negócio",
      "Criar gráficos simples e visuais",
      "Automatizar relatórios",
      "Tomar decisões baseadas em dados",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Criar um case real aplicado ao seu negócio",
    description: "Coloque tudo em prática e saia do curso com um projeto funcionando na sua empresa.",
    benefit: "Você não vai aprender por teoria. Vai usar IA para resolver problemas reais do seu negócio.",
    topics: [
      "Uma solução prática usando IA e automação",
      "Um projeto aplicável imediatamente",
      "Um case real para o seu negócio",
    ],
    isProject: true,
  },
];

const ProgramSection = () => {
  return (
    <section id="programa" className="py-16 md:py-24 gradient-hero relative overflow-hidden">
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
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Curso de 60 horas</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            O que você vai <span className="text-gradient">conseguir fazer</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Casos práticos que você vai resolver durante o curso. Linguagem simples, resultado direto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto mb-10 md:mb-12">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-light-blue/10 backdrop-blur-sm rounded-2xl p-6 border border-accent/20 hover:border-secondary/40 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-secondary/30">{module.number}</span>
                    <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <module.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                    {module.isProject ? "Projeto Final" : `Caso ${module.number}`}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{module.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{module.description}</p>
                
                {/* Benefit highlight */}
                <div className="bg-secondary/10 rounded-lg p-3 mb-4">
                  <p className="text-sm text-accent font-medium">{module.benefit}</p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-secondary">
                    {module.isProject ? "Você vai desenvolver:" : "Você vai aprender a:"}
                  </p>
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-muted-foreground max-w-3xl mx-auto mb-8"
        >
          Você não vai aprender IA por teoria. Vai usar IA para resolver problemas reais do seu negócio.
        </motion.p>

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

export default ProgramSection;
