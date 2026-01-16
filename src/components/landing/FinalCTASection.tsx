import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const FinalCTASection = () => {
  const scrollToCTA = () => {
    document.getElementById("investimento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 gradient-hero relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-secondary/30 text-center glow-effect">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
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
              <Button variant="cta" size="xl" onClick={scrollToCTA} className="text-base md:text-lg px-6 md:px-12 w-full sm:w-auto">
                <Rocket className="w-5 h-5 md:w-6 md:h-6" />
                <span className="hidden sm:inline">Inscreva-se agora no AcademIA Business</span>
                <span className="sm:hidden">Inscreva-se agora</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
