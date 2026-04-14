import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Lightbulb, BarChart3, Rocket, MessageCircle, CheckCircle2 } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5598991234567?text=Olá! Tenho interesse no módulo";

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
    <section id="programa" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 premium-line" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-[0.2em]">Módulos individuais</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 font-display">
            O que você vai <span className="text-gradient">conseguir fazer</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Cada módulo é independente. Escolha o que faz sentido para o seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full border-premium rounded-2xl p-6 md:p-8 hover:shadow-[0_0_40px_-10px_hsl(var(--secondary)/0.2)] transition-all duration-500">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-extrabold text-secondary/20 font-display">{module.number}</span>
                    <div className="w-12 h-12 bg-secondary/15 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <module.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <span className="text-xs bg-secondary/15 text-secondary px-3 py-1 rounded-full font-medium">
                    {module.isProject ? "Projeto Final" : `Módulo ${module.number}`}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground">{module.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{module.description}</p>
                
                {/* Benefit highlight */}
                <div className="bg-secondary/8 rounded-lg p-3 mb-4 border border-secondary/10">
                  <p className="text-sm text-accent font-medium">{module.benefit}</p>
                </div>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-secondary">
                    {module.isProject ? "Você vai desenvolver:" : "Você vai aprender a:"}
                  </p>
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
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
          className="text-center text-muted-foreground max-w-2xl mx-auto"
        >
          Quer mais de um módulo? Entre em contato e monte o pacote ideal para você ou sua equipe.
        </motion.p>
      </div>
    </section>
  );
};

export default ProgramSection;
