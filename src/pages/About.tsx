import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParallaxSection from "@/components/ParallaxSection";
import TextReveal from "@/components/TextReveal";
import aboutHero from "@/assets/about-hero.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import trainer4 from "@/assets/trainer-4.jpg";

const values = [
  { icon: Target, title: "Our Mission", desc: "To empower every individual to discover their peak potential through premium training, expert guidance, and an unwavering commitment to excellence." },
  { icon: Eye, title: "Our Vision", desc: "To become the global standard for luxury fitness — where cutting-edge science meets an unmatched training atmosphere." },
  { icon: Heart, title: "Our Values", desc: "Discipline, community, innovation, and relentless pursuit of greatness. We believe strength is earned, never given." },
  { icon: Award, title: "Our Standard", desc: "Every detail — from equipment to coaching — meets the highest standard. We accept nothing less than extraordinary." },
];

const timeline = [
  { year: "2011", title: "The Beginning", desc: "Founded with a single location and a vision to redefine fitness." },
  { year: "2014", title: "Community Grows", desc: "Reached 1,000 members and opened our second location." },
  { year: "2018", title: "Going Premium", desc: "Launched our luxury recovery spa and expanded to 8 locations." },
  { year: "2023", title: "Industry Leaders", desc: "Named #1 premium gym brand with 12 locations nationwide." },
];

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const valuesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: valuesScroll } = useScroll({ target: valuesRef, offset: ["start end", "end start"] });
  const valuesRotate = useTransform(valuesScroll, [0, 1], [3, -3]);

  const teamRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: teamScroll } = useScroll({ target: teamRef, offset: ["start end", "end start"] });
  const teamX = useTransform(teamScroll, [0, 1], ["-3%", "3%"]);

  return (
    <div className="overflow-hidden">
      {/* Hero — cinematic parallax */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-end overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img src={aboutHero} alt="About Idea Wellness" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24 w-full">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="display-xl text-foreground"
          >
            Built For<br /><span className="text-gradient">Champions</span>
          </motion.h1>
        </div>
      </section>

      {/* Story text reveal */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <TextReveal
            text="Founded in 2011, Idea Wellness was born from a simple belief: fitness should be transformative, not transactional. We set out to create spaces where ambition meets expertise, where every rep counts, and every member is treated like an athlete."
            className="text-2xl md:text-3xl lg:text-4xl font-display uppercase leading-tight text-foreground"
          />
        </div>
      </section>

      {/* Timeline with parallax lines */}
      <section className="section-padding bg-card">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">Our Journey</p>
            <h2 className="display-lg mb-16 text-foreground">The<br /><span className="text-gradient">Timeline</span></h2>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10 shadow-[0_0_12px_hsl(var(--glow-primary))]" />
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="font-display text-4xl md:text-5xl text-primary/20">{item.year}</span>
                    <h3 className="font-display text-lg uppercase mt-2 text-card-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-body mt-2">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax image break */}
      <ParallaxSection imgSrc={gallery5} imgAlt="Gym training" className="h-[40vh] md:h-[50vh]" speed={0.5} overlay={false}>
        <div className="absolute inset-0 bg-background/20" />
      </ParallaxSection>

      {/* Values — parallax tilt cards */}
      <section ref={valuesRef} className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">What Drives Us</p>
            <h2 className="display-lg mb-16 text-foreground">Our<br /><span className="text-gradient">Foundation</span></h2>
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
                    <p className="text-muted-foreground leading-relaxed font-body">{val.desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats with parallax bg */}
      <ParallaxSection imgSrc={gallery1} imgAlt="Gym interior" className="flex items-center" speed={0.3}>
        <div className="section-padding w-full">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <AnimatedCounter end={5000} suffix="+" label="Active Members" />
            <AnimatedCounter end={50} suffix="+" label="Expert Trainers" />
            <AnimatedCounter end={12} label="Locations" />
            <AnimatedCounter end={98} suffix="%" label="Satisfaction" />
          </div>
        </div>
      </ParallaxSection>

      {/* Team — horizontal parallax drift */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">Leadership</p>
            <h2 className="display-lg mb-16 text-foreground">The Team<br /><span className="text-gradient">Behind It All</span></h2>
          </ScrollReveal>
          <motion.div ref={teamRef} style={{ x: teamX }} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { img: trainer1, name: "Marcus Blake", role: "Founder & Head Coach" },
              { img: trainer2, name: "Elena Vasquez", role: "Training Director" },
              { img: trainer3, name: "Daniel Kim", role: "Performance Lead" },
              { img: trainer4, name: "Priya Sharma", role: "Wellness Director" },
            ].map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 0.1}>
                <div className="group relative">
                  <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                    <img src={person.img} alt={person.name} className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-700" />
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="font-display text-sm md:text-base uppercase text-foreground">{person.name}</h3>
                      <p className="text-primary text-xs font-semibold uppercase tracking-wider font-body">{person.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy — parallax text watermark */}
      <ParallaxSection imgSrc={aboutHero} imgAlt="Training atmosphere" className="flex items-center" speed={0.4}>
        <div className="section-padding w-full relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <ScrollReveal>
              <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">Our Philosophy</p>
              <h2 className="display-lg mb-8 text-foreground">Strength Is<br /><span className="text-gradient">A Lifestyle</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-body max-w-2xl mx-auto">
                We don't just build bodies — we build discipline, resilience, and confidence. Every session at Idea Wellness is designed to challenge you, inspire you, and push you closer to the person you're meant to become.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default About;
