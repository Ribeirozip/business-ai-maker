import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
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
    "w-full bg-white/10 border-none rounded-lg px-4 py-3.5 text-foreground placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors";

  return (
    <section className="relative py-24 bg-secondary">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-3">
            Garanta a sua vaga
          </h2>
          <p className="text-white/70 text-center mb-10">
            Preencha o formulário e entraremos em contato
          </p>

          <div className="rounded-2xl bg-white/10 p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
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
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
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
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
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
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                  Turma de interesse
                </label>
                <select
                  name="turma"
                  value={form.turma}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none cursor-pointer`}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                >
                  <option value="" disabled className="bg-primary text-white">
                    Selecione uma turma
                  </option>
                  <option value="turma1" className="bg-primary text-white">
                    Turma 1 — Terça e Quinta
                  </option>
                  <option value="turma2" className="bg-primary text-white">
                    Turma 2 — Sábado
                  </option>
                  <option value="exclusivas" className="bg-primary text-white">
                    Turmas Exclusivas
                  </option>
                </select>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-14 text-base font-bold rounded-xl mt-2 bg-white text-primary hover:bg-white/90"
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
