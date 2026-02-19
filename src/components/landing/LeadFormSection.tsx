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

    // Monta a mensagem para WhatsApp
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

  return (
    <section className="relative py-20 bg-[hsl(230_100%_3%)]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 59px, hsl(var(--accent)) 59px, hsl(var(--accent)) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, hsl(var(--accent)) 59px, hsl(var(--accent)) 60px)",
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Garanta a sua vaga!
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Preencha o formulário e entraremos em contato
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nome */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Nome completo
              </label>
              <input
                type="text"
                name="nome"
                maxLength={100}
                value={form.nome}
                onChange={handleChange}
                className="w-full bg-transparent border border-foreground/20 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                placeholder="Seu nome"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                maxLength={255}
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-foreground/20 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            {/* Contato */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Telefone / WhatsApp
              </label>
              <input
                type="tel"
                name="contato"
                maxLength={20}
                value={form.contato}
                onChange={handleChange}
                className="w-full bg-transparent border border-foreground/20 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                placeholder="(99) 99999-9999"
              />
            </div>

            {/* Turma */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Turma de interesse
              </label>
              <select
                name="turma"
                value={form.turma}
                onChange={handleChange}
                className="w-full bg-transparent border border-foreground/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
              >
                <option value="" disabled className="bg-background text-foreground">
                  Selecione uma turma
                </option>
                <option value="turma1" className="bg-background text-foreground">
                  Turma 1 — Terça e Quinta
                </option>
                <option value="turma2" className="bg-background text-foreground">
                  Turma 2 — Sábado
                </option>
                <option value="exclusivas" className="bg-background text-foreground">
                  Turmas Exclusivas
                </option>
              </select>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-14 text-base font-bold bg-foreground text-background hover:bg-foreground/90 rounded-lg mt-4"
            >
              Garantir minha vaga
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadFormSection;
