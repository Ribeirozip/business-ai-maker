import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const LeadFormSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    contato: "",
    turma: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nome.trim() || !form.email.trim() || !form.contato.trim() || !form.turma) {
      toast({ title: "Preencha todos os campos", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast({ title: "E-mail inválido", variant: "destructive" });
      return;
    }

    setLoading(true);

    const turmaLabel =
      form.turma === "turma1"
        ? "Turma 1 (Terça e Quinta)"
        : form.turma === "turma2"
        ? "Turma 2 (Sábado)"
        : "Turmas Exclusivas";

    const msg = encodeURIComponent(
      `Olá! Tenho interesse na AcademIA Business.\n\nNome: ${form.nome.trim()}\nE-mail: ${form.email.trim()}\nContato: ${form.contato.trim()}\nTurma: ${turmaLabel}`
    );

    window.open(`https://wa.me/5598991234567?text=${msg}`, "_blank");

    toast({ title: "Redirecionando para o WhatsApp!" });
    setLoading(false);
  };

  const inputClasses =
    "w-full bg-muted/50 border border-border/60 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary/40 transition-all";

  return (
    <section id="contato" className="relative py-20 md:py-28 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 premium-line" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <div className="text-center mb-10">
            <span className="text-secondary font-semibold text-sm uppercase tracking-[0.2em]">Contato</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-3 font-display">
              Fale com a <span className="text-gradient">nossa equipe</span>
            </h2>
            <p className="text-muted-foreground">
              Preencha o formulário e entraremos em contato
            </p>
          </div>

          <div className="border-premium rounded-2xl p-8 card-shadow">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  name="nome"
                  maxLength={100}
                  value={form.nome}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  maxLength={255}
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="contato"
                  maxLength={20}
                  value={form.contato}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="(99) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Turma de interesse
                </label>
                <select
                  name="turma"
                  value={form.turma}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none cursor-pointer`}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239BA3B5' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                >
                  <option value="" disabled className="bg-card text-foreground">
                    Selecione uma turma
                  </option>
                  <option value="turma1" className="bg-card text-foreground">
                    Turma 1 — Terça e Quinta
                  </option>
                  <option value="turma2" className="bg-card text-foreground">
                    Turma 2 — Sábado
                  </option>
                  <option value="exclusivas" className="bg-card text-foreground">
                    Turmas Exclusivas
                  </option>
                </select>
              </div>

              <Button
                type="submit"
                disabled={loading}
                size="lg"
                className="w-full bg-secondary text-foreground hover:bg-secondary/90 font-semibold h-14 text-base rounded-xl mt-2"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar e falar no WhatsApp
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadFormSection;
