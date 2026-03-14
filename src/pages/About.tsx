import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import aboutHero from "@/assets/about-hero.jpg";
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

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={aboutHero} alt="About Idea Wellness" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="display-xl text-foreground"
          >
            Built For<br /><span className="text-gradient">Champions</span>
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
              Founded in 2011, <span className="text-foreground font-semibold">Idea Wellness</span> was born from a simple belief: fitness should be transformative, not transactional. We set out to create spaces where ambition meets expertise, where every rep counts, and every member is treated like an athlete.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-8 font-body">
              Today, with 12 locations and over 5,000 active members, we continue to push the boundaries of what a fitness experience can be. Our state-of-the-art facilities, world-class coaching staff, and unwavering commitment to results have made us the choice for those who refuse to settle.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">What Drives Us</p>
            <h2 className="display-lg mb-16 text-foreground">Our<br /><span className="text-gradient">Foundation</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <ScrollReveal key={val.title} delay={i * 0.1}>
                <div className="glow-card p-8 h-full">
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <val.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl uppercase mb-4 text-card-foreground">{val.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-body">{val.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={5000} suffix="+" label="Active Members" />
          <AnimatedCounter end={50} suffix="+" label="Expert Trainers" />
          <AnimatedCounter end={12} label="Locations" />
          <AnimatedCounter end={98} suffix="%" label="Satisfaction Rate" />
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">Leadership</p>
            <h2 className="display-lg mb-16 text-foreground">The Team<br /><span className="text-gradient">Behind It All</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { img: trainer1, name: "Marcus Blake", role: "Founder & Head Coach" },
              { img: trainer2, name: "Elena Vasquez", role: "Training Director" },
              { img: trainer3, name: "Daniel Kim", role: "Performance Lead" },
              { img: trainer4, name: "Priya Sharma", role: "Wellness Director" },
            ].map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 0.1}>
                <div className="glow-card overflow-hidden group">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img src={person.img} alt={person.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="font-display text-sm md:text-base uppercase text-foreground">{person.name}</h3>
                      <p className="text-primary text-xs font-semibold uppercase tracking-wider font-body">{person.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">Our Philosophy</p>
            <h2 className="display-lg mb-8 text-foreground">Strength Is<br /><span className="text-gradient">A Lifestyle</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-body max-w-2xl mx-auto">
              We don't just build bodies — we build discipline, resilience, and confidence. Every session at Idea Wellness is designed to challenge you, inspire you, and push you closer to the person you're meant to become.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
