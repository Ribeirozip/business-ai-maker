import { motion } from "framer-motion";
import logoCeuma from "@/assets/logo-ceuma.png";
import logoOxygeni from "@/assets/logo-oxygeni.png";

const AuthoritySection = () => {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Partner Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">Uma iniciativa de</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <a 
              href="https://www.ceuma.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <img 
                src={logoCeuma}
                alt="Universidade Ceuma" 
                className="h-14 md:h-20 object-contain"
              />
            </a>
            <a 
              href="https://www.linkedin.com/company/oxygenihub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <img 
                src={logoOxygeni}
                alt="Oxygeni HUB" 
                className="h-10 md:h-14 object-contain"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;
