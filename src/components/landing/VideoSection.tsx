import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, MessageCircle, ArrowRight, User, Code, Brain } from "lucide-react";
import { useRef, useState } from "react";

const WHATSAPP_URL = "https://wa.me/5598991234567?text=Olá! Tenho interesse nos módulos do AcademIA Business.";

const testimonials = [
  {
    name: "Guilherme Rosa",
    role: "Desenvolvedor",
    icon: Code,
    color: "from-secondary to-accent",
    borderColor: "border-secondary/20 hover:border-secondary/40",
    videoUrl: "/pinkman.mp4",
  },
  {
    name: "Ana Vitória",
    role: "Desenvolvedora",
    icon: User,
    color: "from-accent to-primary",
    borderColor: "border-accent/20 hover:border-accent/40",
    videoUrl: "/anaVitoria.mp4",
  },
  {
    name: "Marcelo Murilo",
    role: "Desenvolvedor de IA",
    icon: Brain,
    color: "from-primary to-secondary",
    borderColor: "border-primary/20 hover:border-primary/40",
    videoUrl: "/marceloMurilo.mp4",
  },
];

const VideoSection = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section id="depoimentos" className="py-20 md:py-28 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-[0.2em]">Depoimentos reais</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 font-display">
            Quem decide já está{" "}
            <span className="text-gradient">se preparando</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Veja o que dizem os alunos que já tiveram experiência com os
            conteúdos abordados no AcademIA Business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon;
            const isPlaying = playingIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`h-full bg-card/30 backdrop-blur-sm rounded-2xl overflow-hidden border ${testimonial.borderColor} transition-all duration-300 hover:-translate-y-2`}>
                  <div className="relative aspect-[9/16] bg-black overflow-hidden">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={testimonial.videoUrl}
                      className="w-full h-full object-cover"
                      playsInline
                      preload="metadata"
                      onEnded={() => setPlayingIndex(null)}
                    />
                    {!isPlaying && (
                      <div
                        className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm cursor-pointer"
                        onClick={() => {
                          videoRefs.current.forEach((video, i) => {
                            if (video && i !== index) video.pause();
                          });
                          setPlayingIndex(index);
                          videoRefs.current[index]?.play();
                        }}
                      >
                        <div className={`w-20 h-20 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${testimonial.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                        <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
            className="bg-secondary text-foreground hover:bg-secondary/90 font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            Fale com um consultor
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
