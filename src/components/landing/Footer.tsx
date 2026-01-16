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
            <div className="flex items-center gap-3">
              <img src={logoIconSmall} alt="AcademIA Business" className="w-10 h-10" />
              <span className="text-xl font-bold text-foreground">AcademIA Business</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Treinamento executivo em Inteligência Artificial e Automação aplicada a negócios.
            </p>
            <div className="pt-2">
              <span className="text-sm text-muted-foreground">Apoio:</span>
              <p className="text-foreground font-medium">Oxygeni Hub</p>
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
              <a href="mailto:contato@academiabusiness.com.br" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                contato@academiabusiness.com.br
              </a>
              <a href="tel:+5511999999999" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                (11) 99999-9999
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-card rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-secondary/20 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-secondary/20 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 AcademIA Business. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
