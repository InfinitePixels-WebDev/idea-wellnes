import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParallaxSection from "@/components/ParallaxSection";
import TextReveal from "@/components/TextReveal";
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

const testimonials = [
  { name: "Sarah Mitchell", text: "Idea Wellness completely transformed my approach to fitness. The trainers are world-class and the facility is unmatched.", rating: 5 },
  { name: "James Rodriguez", text: "Best gym I've ever been to. The energy, the community, the results — everything is premium.", rating: 5 },
  { name: "Emily Chen", text: "Lost 30 pounds in 6 months. The personalized attention you get here is incredible.", rating: 5 },
];

const facilities = [
  { title: "Weight Room", desc: "10,000 sq ft of premium iron", img: gallery6 },
  { title: "Recovery Spa", desc: "Cryotherapy & infrared saunas", img: gallery4 },
  { title: "Boxing Ring", desc: "Full-size competition ring", img: gallery2 },
  { title: "Cardio Zone", desc: "State-of-the-art equipment", img: gallery3 },
];

const Index = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], [0, 200]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  const marqueeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: marqueeScroll } = useScroll({
    target: marqueeRef,
    offset: ["start end", "end start"],
  });
  const marqueeX = useTransform(marqueeScroll, [0, 1], ["0%", "-50%"]);

  return (
    <div className="overflow-hidden">
      {/* Hero — fullscreen parallax */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img src={heroBg} alt="Idea Wellness gym" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-primary text-sm uppercase tracking-[0.4em] font-semibold mb-6 font-body">
              Premium Fitness Experience
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="display-xl mb-8 text-foreground"
          >
            Forge Your
            <br />
            <span className="text-gradient">Strongest Self</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
          >
            Where elite training meets luxury wellness. Push beyond limits in a facility built for champions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="btn-primary text-sm">
              Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/about" className="btn-outline text-sm">
              Discover More
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-1.5 mt-[10px]">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-3 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Marquee text band */}
      <div ref={marqueeRef} className="py-8 md:py-12 bg-primary overflow-hidden">
        <motion.div style={{ x: marqueeX }} className="flex whitespace-nowrap gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-display text-2xl md:text-4xl uppercase text-primary-foreground/90 flex items-center gap-8">
              Strength <span className="text-primary-foreground/40">✦</span> Discipline <span className="text-primary-foreground/40">✦</span> Community <span className="text-primary-foreground/40">✦</span> Excellence
            </span>
          ))}
        </motion.div>
      </div>

      {/* Stats — floating cards */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { end: 5000, suffix: "+", label: "Active Members" },
                { end: 50, suffix: "+", label: "Expert Trainers" },
                { end: 12, suffix: "", label: "Locations" },
                { end: 15, suffix: "+", label: "Years Strong" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40, rotate: -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="glow-card p-6 md:p-8 text-center group hover:border-primary/50 transition-all duration-500"
                >
                  <div className="relative z-10">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} label={stat.label} />
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy — text reveal + parallax image */}
      <ParallaxSection imgSrc={gallery1} imgAlt="Gym atmosphere" className="min-h-[60vh] md:min-h-[70vh] flex items-center" speed={0.4}>
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <TextReveal
              text="We don't just build bodies. We forge discipline, resilience, and unshakeable confidence. Every session is a step toward the strongest version of yourself."
              className="text-2xl md:text-4xl lg:text-5xl font-display uppercase leading-tight text-foreground"
            />
          </div>
        </div>
      </ParallaxSection>

      {/* Facilities — staggered asymmetric grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">World-Class</p>
            <h2 className="display-lg mb-16 text-foreground">Our<br /><span className="text-gradient">Facilities</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {facilities.map((f, i) => {
              const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];
              const heights = ["h-72 md:h-96", "h-72 md:h-96", "h-72 md:h-80", "h-72 md:h-80"];
              return (
                <ScrollReveal key={f.title} delay={i * 0.1} className={spans[i]}>
                  <div className={`relative overflow-hidden rounded-2xl group cursor-pointer ${heights[i]}`}>
                    <motion.img
                      src={f.img}
                      alt={f.title}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <motion.div
                        initial={false}
                        className="transform transition-transform duration-500 group-hover:-translate-y-2"
                      >
                        <h3 className="font-display text-xl md:text-2xl uppercase text-foreground mb-1">{f.title}</h3>
                        <p className="text-sm text-muted-foreground font-body opacity-0 group-hover:opacity-100 transition-opacity duration-500">{f.desc}</p>
                      </motion.div>
                    </div>
                    {/* Corner accent */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/0 group-hover:border-primary transition-all duration-500 rounded-tr-lg" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/0 group-hover:border-primary transition-all duration-500 rounded-bl-lg" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trainers — horizontal cards with parallax */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">Expert Team</p>
            <h2 className="display-lg mb-16 text-foreground">Meet Your<br /><span className="text-gradient">Coaches</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: trainer1, name: "Marcus Blake", role: "Head Strength Coach" },
              { img: trainer2, name: "Elena Vasquez", role: "HIIT Specialist" },
              { img: trainer3, name: "Daniel Kim", role: "CrossFit Pro" },
            ].map((trainer, i) => (
              <ScrollReveal key={trainer.name} delay={i * 0.15}>
                <div className="group relative">
                  <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                    <img
                      src={trainer.img}
                      alt={trainer.name}
                      className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-700" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-1 font-body">{trainer.role}</p>
                      <h3 className="font-display text-xl md:text-2xl uppercase text-foreground">{trainer.name}</h3>
                    </div>
                  </div>
                  {/* Floating number */}
                  <span className="absolute -top-3 -right-3 font-display text-6xl text-primary/10 group-hover:text-primary/20 transition-colors duration-500 select-none">
                    0{i + 1}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-12">
            <Link to="/trainers" className="btn-outline text-sm group">
              View All Trainers <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Parallax image break */}
      <ParallaxSection imgSrc={gallery5} imgAlt="Training session" className="h-[40vh] md:h-[50vh]" speed={0.5} overlay={false}>
        <div className="absolute inset-0 bg-background/30" />
      </ParallaxSection>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">Testimonials</p>
            <h2 className="display-lg mb-16 text-foreground">What Members<br /><span className="text-gradient">Say</span></h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="relative">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Big quote mark */}
                <span className="font-display text-[120px] md:text-[180px] text-primary/10 absolute -top-16 left-1/2 -translate-x-1/2 select-none leading-none">"</span>
                <div className="pt-12 md:pt-16">
                  <div className="flex justify-center gap-1 mb-8">
                    {Array.from({ length: testimonials[testimonialIdx].rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-xl md:text-3xl text-foreground leading-relaxed mb-8 font-body italic">
                    "{testimonials[testimonialIdx].text}"
                  </p>
                  <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
                  <p className="text-primary font-semibold uppercase tracking-wider text-sm font-body">
                    {testimonials[testimonialIdx].name}
                  </p>
                </div>
              </motion.div>
              <div className="flex justify-center gap-4 mt-10">
                <button
                  onClick={() => setTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="p-3 rounded-full border border-border hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(var(--glow-primary))] transition-all duration-300"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                {/* Dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTestimonialIdx(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === testimonialIdx ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setTestimonialIdx((prev) => (prev + 1) % testimonials.length)}
                  className="p-3 rounded-full border border-border hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(var(--glow-primary))] transition-all duration-300"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery mosaic */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">Our Space</p>
            <h2 className="display-lg mb-16 text-foreground">Inside<br /><span className="text-gradient">The Arena</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { img: gallery1, span: "col-span-2 row-span-2" },
              { img: gallery2, span: "" },
              { img: gallery3, span: "" },
              { img: gallery5, span: "" },
              { img: gallery4, span: "" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className={item.span}>
                <div className="relative overflow-hidden rounded-xl group cursor-pointer aspect-square h-full">
                  <img
                    src={item.img}
                    alt={`Gym ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-700" />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-12">
            <Link to="/gallery" className="btn-outline text-sm group">
              View Full Gallery <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
