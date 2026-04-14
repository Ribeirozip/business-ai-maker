import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5598991234567?text=Olá! Tenho interesse nos módulos do AcademIA Business.";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-secondary/8 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="border-premium rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center premium-shadow">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-display"
            >
              Enquanto você decide,{" "}
              <span className="text-gradient">seu concorrente automatiza.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto"
            >
              Não deixe para depois. A transformação do seu negócio começa agora.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                size="xl" 
                onClick={() => window.open(WHATSAPP_URL, "_blank")} 
                className="bg-secondary text-foreground hover:bg-secondary/90 font-bold text-base md:text-lg px-6 md:px-12 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                <span className="hidden sm:inline">Fale com um consultor agora</span>
                <span className="sm:hidden">Fale conosco</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
