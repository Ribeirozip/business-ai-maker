import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
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
    "w-full bg-muted/30 border border-border rounded-lg px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-secondary transition-all duration-300";

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background matching site gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-secondary/15 text-accent border border-secondary/30">
              <Sparkles className="w-3.5 h-3.5" />
              Vagas limitadas
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Garanta a sua <span className="text-gradient">vaga</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-sm">
            Preencha o formulário e entraremos em contato
          </p>

          {/* Card with border-gradient style */}
          <div className="border-gradient rounded-2xl p-8 card-shadow backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-accent uppercase tracking-wider mb-2">
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
                <label className="block text-xs font-semibold text-accent uppercase tracking-wider mb-2">
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
                <label className="block text-xs font-semibold text-accent uppercase tracking-wider mb-2">
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
                <label className="block text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                  Turma de interesse
                </label>
                <select
                  name="turma"
                  value={form.turma}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none cursor-pointer`}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ACC6FF' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
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
                variant="cta"
                disabled={loading}
                className="w-full h-14 text-base rounded-xl mt-2"
              >
                Garantir minha vaga
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadFormSection;
