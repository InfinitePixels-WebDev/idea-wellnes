import { motion } from "framer-motion";
import { Dumbbell, Zap, Users, Heart, Timer, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const programs = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    desc: "Progressive overload programs designed to build raw power and muscular development. From beginner to advanced powerlifting.",
    features: ["Personalized Programming", "Form Analysis", "Progressive Overload", "Competition Prep"],
    img: gallery6,
  },
  {
    icon: Zap,
    title: "Cardio HIIT",
    desc: "High-intensity interval training that maximizes calorie burn and cardiovascular endurance in efficient, explosive sessions.",
    features: ["Heart Rate Monitored", "30-45 Min Sessions", "Full Body Burn", "All Fitness Levels"],
    img: gallery2,
  },
  {
    icon: Users,
    title: "CrossFit",
    desc: "Functional fitness combining gymnastics, weightlifting, and conditioning for complete athletic performance.",
    features: ["WOD Programming", "Olympic Lifting", "Gymnastics Skills", "Community Driven"],
    img: gallery1,
  },
  {
    icon: Timer,
    title: "Personal Training",
    desc: "One-on-one coaching with certified experts who design bespoke programs tailored to your specific goals.",
    features: ["1-on-1 Coaching", "Custom Nutrition Plan", "Progress Tracking", "Flexible Scheduling"],
    img: gallery3,
  },
  {
    icon: Heart,
    title: "Yoga & Mobility",
    desc: "Restore balance and flexibility through guided yoga flows, mobility work, and mindful movement practices.",
    features: ["Vinyasa Flow", "Recovery Focused", "Breathwork", "Meditation"],
    img: gallery4,
  },
];

const Programs = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body"
          >
            Our Programs
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="display-xl mb-6 text-foreground"
          >
            Find Your<br /><span className="text-gradient">Fire</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-2xl font-body"
          >
            From strength to serenity, our diverse program lineup is designed to challenge every aspect of your fitness journey.
          </motion.p>
        </div>
      </section>

      {/* Programs */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {programs.map((prog, i) => (
            <ScrollReveal key={prog.title} delay={i * 0.05}>
              <div className={`glow-card overflow-hidden group ${i % 2 === 0 ? "" : ""}`}>
                <div className={`relative z-10 flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="md:w-2/5 relative overflow-hidden">
                    <img
                      src={prog.img}
                      alt={prog.title}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-${i % 2 === 0 ? "r" : "l"} from-transparent to-card/80 hidden md:block`} />
                  </div>
                  <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <prog.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl uppercase mb-4 text-card-foreground">{prog.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6 font-body">{prog.desc}</p>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {prog.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground font-body">{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/memberships" className="btn-primary text-xs self-start">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="display-lg mb-6 text-foreground">Can't Decide?<br /><span className="text-gradient">Try Them All</span></h2>
            <p className="text-lg text-muted-foreground mb-10 font-body">
              Our premium membership gives you unlimited access to every program.
            </p>
            <Link to="/memberships" className="btn-primary text-sm">
              View Memberships <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Programs;
