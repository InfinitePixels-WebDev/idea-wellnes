import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Heart, Zap, Users, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import heroBg from "@/assets/hero-bg.jpg";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const programs = [
  { icon: Dumbbell, title: "Strength Training", desc: "Build raw power with progressive overload programming." },
  { icon: Zap, title: "HIIT Cardio", desc: "Torch calories with high-intensity interval sessions." },
  { icon: Users, title: "CrossFit", desc: "Functional fitness that builds complete athletes." },
  { icon: Heart, title: "Yoga & Mobility", desc: "Restore, recover, and build flexible strength." },
];

const testimonials = [
  { name: "Sarah Mitchell", text: "Idea Wellness completely transformed my approach to fitness. The trainers are world-class.", rating: 5 },
  { name: "James Rodriguez", text: "Best gym I've ever been to. The energy, the community, the results — everything is premium.", rating: 5 },
  { name: "Emily Chen", text: "Lost 30 pounds in 6 months. The personalized programs are incredible.", rating: 5 },
];

const Index = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Idea Wellness gym" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-6 font-body"
          >
            Premium Fitness Experience
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="display-xl mb-8 text-foreground"
          >
            Forge Your
            <br />
            <span className="text-gradient">Strongest Self</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
          >
            Where elite training meets luxury wellness. Push beyond limits in a facility built for champions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/memberships" className="btn-primary text-sm">
              Join Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/memberships" className="btn-outline text-sm">
              View Memberships
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-card">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={5000} suffix="+" label="Active Members" />
          <AnimatedCounter end={50} suffix="+" label="Expert Trainers" />
          <AnimatedCounter end={12} label="Locations" />
          <AnimatedCounter end={15} suffix="+" label="Years Experience" />
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">Our Programs</p>
            <h2 className="display-lg mb-16 text-foreground">Train Without<br /><span className="text-gradient">Limits</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((prog, i) => (
              <ScrollReveal key={prog.title} delay={i * 0.1}>
                <div className="glow-card p-8 h-full group cursor-pointer">
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <prog.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display text-lg uppercase mb-3 text-card-foreground">{prog.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-body">{prog.desc}</p>
                    <div className="mt-6 flex items-center text-primary text-sm font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Preview */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">Expert Team</p>
            <h2 className="display-lg mb-16 text-foreground">Meet Your<br /><span className="text-gradient">Coaches</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: trainer1, name: "Marcus Blake", role: "Strength Coach" },
              { img: trainer2, name: "Elena Vasquez", role: "HIIT Specialist" },
              { img: trainer3, name: "Daniel Kim", role: "CrossFit Pro" },
            ].map((trainer, i) => (
              <ScrollReveal key={trainer.name} delay={i * 0.15}>
                <div className="glow-card overflow-hidden group">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={trainer.img}
                      alt={trainer.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 z-10">
                      <h3 className="font-display text-xl uppercase text-foreground">{trainer.name}</h3>
                      <p className="text-primary text-sm font-semibold uppercase tracking-wider font-body">{trainer.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-12">
            <Link to="/trainers" className="btn-outline text-sm">
              View All Trainers <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">Testimonials</p>
            <h2 className="display-lg mb-16 text-foreground">What Our<br /><span className="text-gradient">Members Say</span></h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="relative">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glow-card p-10 md:p-16"
              >
                <div className="relative z-10">
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: testimonials[testimonialIdx].rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-lg md:text-2xl text-foreground leading-relaxed mb-8 font-body italic">
                    "{testimonials[testimonialIdx].text}"
                  </p>
                  <p className="text-primary font-semibold uppercase tracking-wider text-sm font-body">
                    {testimonials[testimonialIdx].name}
                  </p>
                </div>
              </motion.div>
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={() => setTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setTestimonialIdx((prev) => (prev + 1) % testimonials.length)}
                  className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">Our Space</p>
            <h2 className="display-lg mb-16 text-foreground">Inside<br /><span className="text-gradient">The Arena</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className={`relative overflow-hidden rounded-lg group cursor-pointer ${i === 0 || i === 4 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}>
                  <img
                    src={img}
                    alt={`Idea Wellness gallery ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-12">
            <Link to="/gallery" className="btn-outline text-sm">
              View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="display-lg mb-6 text-foreground">Ready To<br /><span className="text-gradient">Transform?</span></h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto font-body">
              Join Idea Wellness today and start your journey towards becoming the strongest version of yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/memberships" className="btn-primary text-sm animate-pulse-glow">
                Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-outline text-sm">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
