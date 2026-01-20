import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Instagram, MessageSquare, ExternalLink, Rocket, ArrowRight } from "lucide-react";

const ENROLLMENT_URL = "https://portal.apprbs.com.br/academ-ia/passo/246686";

const VideoSection = () => {
  return (
    <section className="py-16 md:py-24 gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Veja na prática</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Conheça o <span className="text-gradient">AcademIA Business</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Veja depoimentos reais e demonstrações do que você vai aprender.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* Instagram Videos Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group"
          >
            <a 
              href="https://www.instagram.com/oxygenihub/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="h-full bg-gradient-to-br from-[#E4405F]/20 to-[#833AB4]/20 backdrop-blur-sm rounded-2xl p-8 border border-[#E4405F]/30 hover:border-[#E4405F]/60 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E4405F] to-[#833AB4] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Vídeos no Instagram</h3>
                    <p className="text-muted-foreground text-sm">@oxygenihub</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Acompanhe demonstrações de IA, dicas práticas e bastidores do AcademIA Business.
                </p>

                <div className="flex items-center gap-2 text-[#E4405F] font-medium">
                  <Play className="w-5 h-5" />
                  <span>Ver vídeos demonstrativos</span>
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </div>
              </div>
            </a>
          </motion.div>

          {/* Testimonials Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group"
          >
            <a 
              href="https://www.instagram.com/oxygenihub/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="h-full bg-gradient-to-br from-secondary/20 to-accent/20 backdrop-blur-sm rounded-2xl p-8 border border-secondary/30 hover:border-secondary/60 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Depoimentos Reais</h3>
                    <p className="text-muted-foreground text-sm">AcademIA Business</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Veja o que dizem os alunos que já passaram pelo programa e transformaram seus negócios.
                </p>

                <div className="flex items-center gap-2 text-secondary font-medium">
                  <Play className="w-5 h-5" />
                  <span>Ver depoimentos</span>
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </div>
              </div>
            </a>
          </motion.div>
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

export default VideoSection;
