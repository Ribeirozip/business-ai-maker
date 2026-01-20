import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, CreditCard, CheckCircle2, Calendar, Rocket } from "lucide-react";

const ENROLLMENT_URL = "https://portal.apprbs.com.br/academ-ia/passo/246686";

const InvestmentSection = () => {
  return (
    <section id="investimento" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Investimento</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Um investimento que se paga com o ganho de eficiência.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <div className="gradient-card rounded-3xl p-1 glow-effect">
            <div className="bg-card rounded-[22px] p-8 md:p-10">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 bg-secondary/20 text-secondary font-semibold px-4 py-2 rounded-full text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  Oferta Especial de Lançamento
                </span>
              </div>

              {/* Price - Only installment */}
              <div className="text-center mb-6">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-2">
                  6x de R$ 279<span className="text-2xl">,00</span>
                </div>
                <p className="text-muted-foreground">no cartão de crédito</p>
              </div>

              {/* Class start dates */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center gap-2 p-3 bg-accent/10 rounded-xl">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span className="text-foreground font-medium">Turma 1 — Início: 28/02</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-3 bg-secondary/10 rounded-xl">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <span className="text-foreground font-medium">Turma 2 — Início: 01/03</span>
                </div>
              </div>

              {/* What's included */}
              <div className="space-y-3 mb-8">
                {[
                  "60 horas de conteúdo prático",
                  "Acesso ao material complementar",
                  "Certificado de conclusão",
                  "Networking com executivos",
                  "Projeto prático aplicado ao seu negócio",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                variant="cta" 
                size="xl" 
                className="w-full"
                onClick={() => window.open(ENROLLMENT_URL, "_blank")}
              >
                <Rocket className="w-5 h-5" />
                Garanta sua vaga
              </Button>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-4 mt-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  Compra segura
                </div>
                <div className="flex items-center gap-1">
                  <CreditCard className="w-4 h-4" />
                  Parcelamento
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentSection;
