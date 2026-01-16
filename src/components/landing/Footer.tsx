import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logoCeuma from "@/assets/logo-ceuma.png";
import logoOxygeni from "@/assets/logo-oxygeni.png";
import logoCircular from "@/assets/logo-circular.png";

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3">
              <img 
                src={logoCircular} 
                alt="Academ.IA CEUMA" 
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-xl font-bold text-primary">Academ.IA CEUMA</h3>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              O centro de treinamentos em Inteligência Artificial mais avançado do Maranhão.
            </p>
          </motion.div>

          {/* Partner Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground">Parceiros</h4>
            <div className="flex flex-col gap-4">
              <a href="https://www.ceuma.br" target="_blank" rel="noopener noreferrer" className="block">
                <img 
                  src={logoCeuma}
                  alt="Universidade Ceuma" 
                  className="h-8 md:h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </a>
              <a href="https://www.linkedin.com/company/oxygenihub" target="_blank" rel="noopener noreferrer" className="block">
                <img 
                  src={logoOxygeni}
                  alt="Oxygeni HUB" 
                  className="h-6 md:h-8 object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground">Contato</h4>
            <div className="space-y-3">
              <a href="tel:+5598984136891" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                (98) 98413-6891
              </a>
              <a href="mailto:contato@oxygeni.com.br" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm break-all">
                <Mail className="w-4 h-4 flex-shrink-0" />
                contato@oxygeni.com.br
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Oxygeni HUB - Universidade Ceuma</p>
                  <p>São Luís, Maranhão</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Institucional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground">Institucional</h4>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="https://www.ceuma.br" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                Universidade Ceuma
              </a>
              <a href="https://www.linkedin.com/company/oxygenihub" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                Oxygeni HUB
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/oxygenihub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-secondary/20 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/oxygenihub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-secondary/20 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col items-center gap-4 text-center">
          {/* Partner logos horizontal */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <img 
              src={logoCeuma}
              alt="Universidade Ceuma" 
              className="h-6 md:h-8 object-contain opacity-70"
            />
            <img 
              src={logoOxygeni}
              alt="Oxygeni HUB" 
              className="h-5 md:h-6 object-contain opacity-70"
            />
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2026 Academ.IA CEUMA - Todos os direitos reservados
          </p>
          <p className="text-xs text-muted-foreground">
            Uma iniciativa do{" "}
            <a href="https://www.linkedin.com/company/oxygenihub" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Oxygeni HUB
            </a>
            {" - "}
            <a href="https://www.ceuma.br" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Universidade Ceuma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
