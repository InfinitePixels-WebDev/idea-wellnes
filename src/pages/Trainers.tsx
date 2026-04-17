import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Twitter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import TextReveal from "@/components/TextReveal";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import trainer4 from "@/assets/trainer-4.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const trainers = [
  {
    img: trainer1,
    name: "Marcus Blake",
    role: "Head Strength Coach",
    tags: ["Powerlifting", "Bodybuilding", "Sports Performance"],
    bio: "15+ years coaching elite athletes. NSCA-CSCS certified with a passion for building raw power.",
  },
  {
    img: trainer2,
    name: "Elena Vasquez",
    role: "HIIT & Cardio Specialist",
    tags: ["HIIT", "Cardio", "Weight Loss", "Endurance"],
    bio: "Former competitive runner turned fitness coach. Specializes in metabolic conditioning and fat loss.",
  },
  {
    img: trainer3,
    name: "Daniel Kim",
    role: "CrossFit Level 3 Trainer",
    tags: ["CrossFit", "Olympic Lifting", "Functional Fitness"],
    bio: "CrossFit Games competitor and certified Level 3 trainer. Builds complete athletes.",
  },
  {
    img: trainer4,
    name: "Priya Sharma",
    role: "Yoga & Wellness Coach",
    tags: ["Yoga", "Mobility", "Meditation", "Recovery"],
    bio: "RYT-500 certified yoga instructor with expertise in sports recovery and mindfulness.",
  },
];

const Trainers = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  const profilesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: profilesScroll } = useScroll({ target: profilesRef, offset: ["start end", "end start"] });
  const profilesY = useTransform(profilesScroll, [0, 1], [50, -50]);

  return (
    <div className="overflow-hidden">
      {/* Hero — split layout with parallax */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-end overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img src={gallery2} alt="Training session" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-10 md:pb-16 w-full">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body"
          >
            Our Trainers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="display-xl mb-6 text-foreground"
          >
            World-Class<br /><span className="text-gradient">Coaching</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-muted-foreground max-w-xl font-body"
          >
            Our certified experts bring decades of experience across every discipline.
          </motion.p>
        </motion.div>
      </section>

      {/* Philosophy text reveal */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <TextReveal
            text="Our coaches don't just train your body. They rewire your mindset, refine your technique, and push you beyond what you thought possible."
            className="text-xl md:text-3xl lg:text-4xl font-display uppercase leading-tight text-foreground"
          />
        </div>
      </section>

      {/* Parallax image divider */}
      <ParallaxSection imgSrc={gallery5} imgAlt="Gym atmosphere" className="h-[30vh] md:h-[40vh]" speed={0.5} overlay={false}>
        <div className="absolute inset-0 bg-background/20" />
      </ParallaxSection>

      {/* Trainer profiles — alternating full-width cards */}
      <section ref={profilesRef} className="section-padding">
        <motion.div style={{ y: profilesY }} className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-24">
          {trainers.map((t, i) => {
            return (
              <ScrollReveal key={t.name} delay={0.1}>
                <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6 md:gap-12 items-center`}>
                  {/* Image side */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-2/5 relative group"
                  >
                    <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-700" />
                      {/* Corner accents */}
                      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/0 group-hover:border-primary transition-all duration-500 rounded-tr-lg" />
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/0 group-hover:border-primary transition-all duration-500 rounded-bl-lg" />
                    </div>
                    {/* Floating number */}
                    <span className="absolute -top-6 -left-4 md:-left-8 font-display text-7xl md:text-9xl text-primary/10 select-none">
                      0{i + 1}
                    </span>
                  </motion.div>

                  {/* Content side */}
                  <div className="w-full md:w-3/5">
                    <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-2 font-body">{t.role}</p>
                    <h2 className="font-display text-3xl md:text-4xl uppercase mb-4 text-foreground">{t.name}</h2>
                    <div className="w-12 h-0.5 bg-primary mb-6" />
                    <p className="text-muted-foreground leading-relaxed mb-6 font-body text-lg">{t.bio}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {t.tags.map((tag) => (
                        <span key={tag} className="text-xs px-4 py-2 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300 font-body cursor-default">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:shadow-[0_0_15px_hsl(var(--glow-primary))] hover:-translate-y-1 transition-all duration-300">
                        <Instagram className="h-4 w-4" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:shadow-[0_0_15px_hsl(var(--glow-primary))] hover:-translate-y-1 transition-all duration-300">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </motion.div>
      </section>

      {/* CTA with parallax */}
      <ParallaxSection imgSrc={trainer1} imgAlt="Training" className="flex items-center" speed={0.3}>
        <div className="section-padding w-full">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="display-lg mb-6 text-foreground">Train With<br /><span className="text-gradient">The Best</span></h2>
              <p className="text-lg text-muted-foreground mb-10 font-body">
                Book a session and experience the difference expert coaching makes.
              </p>
              <Link to="/contact" className="btn-primary text-sm">
                Book A Session <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Trainers;
