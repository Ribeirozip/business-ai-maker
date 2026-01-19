import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Lightbulb, Zap } from "lucide-react";

const CommunitySection = () => {
  const benefits = [
    {
      icon: MessageCircle,
      text: "Discutir Inteligência Artificial aplicada a negócios"
    },
    {
      icon: Lightbulb,
      text: "Compartilhar insights sobre produtividade e automação"
    },
    {
      icon: Users,
      text: "Se conectar com pessoas que tomam decisão"
    },
    {
      icon: Zap,
      text: "Receber conteúdos, provocações e novidades em primeira mão"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#000942] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-72 h-48 md:h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6"
          >
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Comunidade Exclusiva</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Entre na Comunidade do{" "}
            <span className="text-primary">AcademIA Business</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Conecte-se com gestores, empresários e profissionais que já entenderam que{" "}
            <strong className="text-white">Inteligência Artificial e automação</strong> são decisões estratégicas.
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 mb-8"
          >
            <p className="text-white font-medium mb-6 text-left">
              A Comunidade do AcademIA Business é um espaço exclusivo para quem quer:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-left"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm md:text-base">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-white/80 text-sm md:text-base">
                <strong className="text-white">Não é grupo de spam.</strong>{" "}
                É um ambiente para quem decide e executa.
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <Button
              asChild
              size="xl"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base md:text-lg px-8 py-6 rounded-xl shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300 w-full sm:w-auto"
            >
              <a 
                href="https://chat.whatsapp.com/IzWrzjAhCZj5lPSocVx54V" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Entrar na Comunidade do WhatsApp
              </a>
            </Button>

            {/* Microcopy */}
            <p className="text-muted-foreground text-xs md:text-sm flex flex-wrap items-center justify-center gap-2">
              <span>Gratuito</span>
              <span className="text-primary">•</span>
              <span>Sem spam</span>
              <span className="text-primary">•</span>
              <span>Conteúdo estratégico</span>
              <span className="text-primary">•</span>
              <span>Networking qualificado</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
