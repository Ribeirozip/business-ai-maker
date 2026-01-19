import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Lightbulb, BarChart3, Rocket, ArrowRight, Clock, CheckCircle2 } from "lucide-react";

const ENROLLMENT_URL = "https://portal.apprbs.com.br/academ-ia/passo/246686";

const modules = [
  {
    number: "01",
    icon: Brain,
    title: "IA para Produtividade e Negócios",
    description: "Use Inteligência Artificial para ganhar tempo, aumentar produtividade e tomar decisões melhores no dia a dia da sua empresa.",
    topics: [
      "Usar IA em tarefas do dia a dia",
      "Criar comandos eficientes para gerar resultados",
      "Automatizar atividades repetitivas e intelectuais",
      "Apoiar decisões estratégicas com IA",
    ],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design de Soluções Inteligentes",
    description: "Crie soluções digitais inteligentes e eficientes, mesmo sem ser programador ou designer.",
    topics: [
      "Criar soluções centradas no usuário",
      "Estruturar fluxos inteligentes",
      "Pensar produtos e serviços com IA",
      "Melhorar experiências com tecnologia",
    ],
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Análise de Dados e Automações",
    description: "Transforme dados em informações claras para tomada de decisão e automatize processos do seu negócio.",
    topics: [
      "Interpretar dados do negócio",
      "Criar análises simples e visuais",
      "Automatizar tarefas manuais",
      "Reduzir custos operacionais",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Projeto Aplicado a Negócios",
    description: "Coloque todo o conhecimento em prática desenvolvendo um projeto real aplicado ao seu negócio, com orientação e mentoria.",
    topics: [
      "Uma solução prática usando IA e automação",
      "Um projeto aplicável imediatamente",
      "Um case real para o negócio ou carreira",
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
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Programa de 60 horas</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            O que você vai <span className="text-gradient">aprender</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Conteúdo prático, direto ao ponto, focado em aplicação real no seu negócio.
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
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{module.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{module.description}</p>
                
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
          Ao final do AcademIA Business, você estará preparado para aplicar Inteligência Artificial e automações para aumentar produtividade, reduzir custos e tomar decisões melhores no seu negócio.
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
            Ver conteúdo completo
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramSection;
