import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logoIconSmall from "@/assets/logo-icon-small.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-primary">Academ.IA CEUMA</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              O centro de treinamentos em Inteligência Artificial mais avançado do Maranhão.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <img 
                src="https://www.ceuma.br/hubfs/raw_assets/public/CEUMA-THEME-2019/images/logo-ceuma.svg" 
                alt="Universidade Ceuma" 
                className="h-10 brightness-0 invert opacity-80"
              />
              <img 
                src={logoIconSmall} 
                alt="Oxygeni HUB" 
                className="h-10"
              />
              <span className="text-sm font-semibold text-foreground">OXYGENI<span className="text-primary">HUB</span></span>
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
              <a href="tel:+5598984136891" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                (98) 98413-6891
              </a>
              <a href="mailto:contato@oxygeni.com.br" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                contato@oxygeni.com.br
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
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
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="https://www.ceuma.br" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-accent transition-colors">
                Universidade Ceuma
              </a>
              <a href="https://www.linkedin.com/company/oxygenihub" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-accent transition-colors">
                Oxygeni HUB
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
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
        <div className="pt-8 border-t border-border/50 flex flex-col items-center gap-2 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Academ.IA CEUMA - Todos os direitos reservados
          </p>
          <p className="text-sm text-muted-foreground">
            Uma iniciativa do <a href="https://www.linkedin.com/company/oxygenihub" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Oxygeni HUB</a> - <a href="https://www.ceuma.br" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Universidade Ceuma</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
