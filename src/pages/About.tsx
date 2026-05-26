import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParallaxSection from "@/components/ParallaxSection";
import TextReveal from "@/components/TextReveal";
import TimelineDemo from "@/components/timeline-demo";

const values = [
  { 
    icon: Target, 
    title: "Our Mission", 
    desc: "To empower individuals to reach their full potential by increasing health awareness, providing expert guidance, and delivering sustainable lifestyle choices that enhance overall quality of life." 
  },
  { 
    icon: Eye, 
    title: "Our Vision", 
    desc: "To be recognized as Cairo's leading indoor and outdoor fitness destination — combining physical strength, emotional well-being, and community support in a professional environment." 
  },
  { 
    icon: Heart, 
    title: "Holistic Philosophy", 
    desc: "We integrate exercise, nutrition, and lifestyle guidance. We believe consistency is built on enjoyment, turning your high-energy workouts into consistent long-term habits." 
  },
  { 
    icon: Award, 
    title: "Elite Standards", 
    desc: "From limited class sizes (max 30) ensuring personal attention, to certified CrossFit & ISSA coaching and 24/7 flexibility, we represent the peak of fitness standards." 
  },
];

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const valuesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: valuesScroll } = useScroll({ target: valuesRef, offset: ["start end", "end start"] });
  const valuesRotate = useTransform(valuesScroll, [0, 1], [2, -2]);

  const teamRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: teamScroll } = useScroll({ target: teamRef, offset: ["start end", "end start"] });
  const teamX = useTransform(teamScroll, [0, 1], ["-2%", "2%"]);

  return (
    <div className="overflow-hidden">
      {/* Hero — cinematic parallax */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-end overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img src="/converted_jpg/IMG_3920.jpg" alt="IDEA® Wellness Indoor and Outdoor Fitness Arena Cairo" loading="lazy" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24 w-full">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body"
          >
            WHO WE ARE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display uppercase leading-[0.95] tracking-tight text-foreground"
          >
            ESTABLISHED IN 2014<br /><span className="text-gradient">BY MARC T. BAHOURY</span>
          </motion.h1>
        </div>
      </section>

      {/* Story text reveal */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <TextReveal
            text="IDEA® Wellness is a premier wellness brand delivering integrated health and fitness solutions. Combining physical fitness and emotional wellness, our full-spectrum philosophy empowers clients to look, feel, and perform at their absolute best."
            className="text-2xl md:text-3xl lg:text-4xl font-display uppercase leading-tight text-foreground"
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding py-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">Our Journey</p>
            <h2 className="display-lg mb-16 text-foreground">The Milestones Of<br /><span className="text-gradient">IDEA® Wellness</span></h2>
          </ScrollReveal>
        </div>
        <TimelineDemo />
      </section>

      {/* Parallax image break */}
      <ParallaxSection imgSrc="/converted_jpg/IMG_0636.jpg" imgAlt="IDEA® Wellness CrossFit Group Class Cairo" className="h-[40vh] md:h-[50vh]" speed={0.5} overlay={false}>
        <div className="absolute inset-0 bg-background/20" />
      </ParallaxSection>

      {/* Values — parallax tilt cards */}
      <section ref={valuesRef} className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">Why Choose Us</p>
            <h2 className="display-lg mb-16 text-foreground">The Foundation Of<br /><span className="text-gradient">Our Brand</span></h2>
          </ScrollReveal>
          <motion.div style={{ rotateX: valuesRotate }} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 perspective-[1200px]">
            {values.map((val, i) => (
              <ScrollReveal key={val.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="glow-card p-8 md:p-10 h-full group"
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(var(--glow-primary))] transition-all duration-500">
                        <val.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-display text-xl uppercase text-card-foreground">{val.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed font-body text-sm md:text-base">{val.desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats with parallax bg */}
      <ParallaxSection imgSrc="/converted_jpg/IMG_0631.jpg" imgAlt="IDEA® Wellness Workout Atmosphere" className="flex items-center" speed={0.3}>
        <div className="section-padding w-full">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <AnimatedCounter end={600} suffix="+" label="Organically Grown Members" />
            <AnimatedCounter end={15} suffix="+" label="Designed Classes" />
            <AnimatedCounter end={3} label="Elite Locations" />
            <AnimatedCounter end={18} suffix="+" label="Passionate Coaches" />
          </div>
        </div>
      </ParallaxSection>

      {/* Meet our Founder section - highly customized for Marc T. Bahoury */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">Meet Our Founder</p>
            <h2 className="display-lg mb-16 text-foreground">Founder &<br /><span className="text-gradient">Head Coach</span></h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Founder Image */}
            <ScrollReveal className="lg:col-span-5" delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] group">
                <img 
                  src="/converted_jpg/IMG_0641.jpg" 
                  alt="Marc T. Bahoury - Founder & Head Coach of IDEA® Wellness" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs uppercase tracking-widest text-primary font-semibold font-body">Marc T. Bahoury</span>
                  <p className="text-sm text-foreground mt-1 font-body">CrossFit L1, L2, CF Gymnastics & ISSA Certified Personal Trainer</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Founder Story */}
            <ScrollReveal className="lg:col-span-7" delay={0.2}>
              <div className="space-y-6">
                <h3 className="font-display text-2xl md:text-3xl uppercase text-foreground">MARC BAHOURY</h3>
                <p className="text-primary text-xs uppercase tracking-[0.25em] font-semibold font-body">THE JOURNEY FROM PHARMACY TO WELLNESS CHAMPION</p>
                
                <div className="space-y-4 text-muted-foreground font-body text-sm md:text-base leading-relaxed">
                  <p>
                    Marc, a graduate of the <strong>German University in Cairo (GUC)</strong> with a degree in pharmacy, excelled in his early career as a professional pharmacist for the multinational healthcare giant <strong>Novartis</strong>. 
                  </p>
                  <p>
                    However, his true calling lay elsewhere. Believing deeply that exercise is the core key to living a well-balanced, healthy life, Marc made the bold decision to pursue his absolute passion for physical fitness. He transitioned to become a professional personal trainer, dedicating his knowledge of biochemistry and physical anatomy to helping a wide array of clients reach their physical potential.
                  </p>
                  <p>
                    Marc has successfully trained diverse groups of trainees, including children, the elderly, and individuals with special needs. He remains strongly confident that no matter who you are, <strong>an inner athlete lays within you, just waiting to be unlocked.</strong>
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/40 font-body">
                  <div>
                    <h4 className="font-semibold text-foreground text-xs uppercase tracking-widest mb-2">Qualifications</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• CrossFit L1 & L2 Certified</li>
                      <li>• CrossFit Gymnastics Specialist</li>
                      <li>• ISSA General Fitness</li>
                      <li>• Certified Personal Trainer</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-xs uppercase tracking-widest mb-2">Background</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• B.Sc. Pharmacy (GUC)</li>
                      <li>• Former Pharmacist at Novartis</li>
                      <li>• 11+ Years Fitness Experience</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Methodology Section (Replaces leadership cards to avoid fake trainers) */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">Core Methodology</p>
            <h2 className="display-lg mb-16 text-foreground">Our Four Pillars Of<br /><span className="text-gradient">Member Success</span></h2>
          </ScrollReveal>
          <motion.div ref={teamRef} style={{ x: teamX }} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { img: "/converted_jpg/IMG_0633.jpg", title: "Group Classes", desc: "CrossFit, Pilates, Boxing, Dance, and Zumba under professional guidance." },
              { img: "/converted_jpg/IMG_0653.jpg", title: "Private Sessions", desc: "One-on-one tailored strength programs and intensive personal training." },
              { img: "/converted_jpg/IMG_0640.jpg", title: "Kids Fitness", desc: "Engaging and structured fitness programs and ballet for kids & juniors." },
              { img: "/converted_jpg/IMG_0659.jpg", title: "Nutrition Support", desc: "Meal planning, healthy recipes, and strategic food preparation tips." },
            ].map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.1}>
                <div className="group relative">
                  <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                    <img src={pillar.img} alt={pillar.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="font-display text-sm md:text-base uppercase text-foreground">{pillar.title}</h3>
                      <p className="text-muted-foreground text-[10px] md:text-xs leading-relaxed font-body mt-1">{pillar.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy — parallax text watermark */}
      <ParallaxSection imgSrc="/converted_jpg/IMG_0661.jpg" imgAlt="IDEA® Wellness Training Group Class Egypt" className="flex items-center" speed={0.4}>
        <div className="section-padding w-full relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <ScrollReveal>
              <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">Our Philosophy</p>
              <h2 className="display-lg mb-8 text-foreground">STRENGTH & LIFE IS<br /><span className="text-gradient">INTEGRATED</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-body max-w-2xl mx-auto">
                We empower members to build sustainable habits. By increasing awareness of their body, fitness levels, and food choices, we provide the tools needed to adopt consistent lifestyle changes that decrease health risks.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default About;
