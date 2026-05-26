import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParallaxSection from "@/components/ParallaxSection";
import TextReveal from "@/components/TextReveal";

const testimonials = [
  { 
    name: "Nayrine", 
    text: "The Ladies only Class HAS the GREATEST VIBES WITH THE BEST COACH 🙌🏽. It’s Always private either inside the Gym or outside with closed / observed Doors. Usually a 1 Month Class and the results really SHOW by the end of each Round 👍🏽👏🏽. Highly Recommend 🌟🌟", 
    rating: 5 
  },
  { 
    name: "Emy Abdo", 
    text: "Great gym with amazing coaches who truly care, guide and motivate you. The atmosphere is always positive and the place is always clean. A happy place that keeps you moving forward.🤍🌟", 
    rating: 5 
  },
  { 
    name: "Michael Aswad", 
    text: "A great gym for crossfit and the owner is sociable and friendly. Classes are amazing and you should definitely join if you are seeking a fit healthy lifestyle. Outdoors space is also available for your workouts", 
    rating: 5 
  },
  { 
    name: "Augusto Poersch", 
    text: "Best gym in Cairo!", 
    rating: 5 
  },
  { 
    name: "Isis Farid", 
    text: "Nice people. Excellent coaches. Friendly atmosphere. High quality of equipment and great motivation.", 
    rating: 5 
  },
  { 
    name: "Marina Abdelmessih", 
    text: "Amazing vibes! The coaches are extremely supportive, highly educated, and they motivate you in every class.", 
    rating: 5 
  },
  { 
    name: "Ahmed Kamel", 
    text: "Best outdoor fitness and sport Venue in Heliopolis. Excellent equipment and Marc is a top coach.", 
    rating: 5 
  },
  { 
    name: "Marc Latif", 
    text: "Great coach, great atmosphere, great training sessions. I've seen massive improvements in my stamina.", 
    rating: 5 
  },
  { 
    name: "مصطفي أبوزيد", 
    text: "I loved it great place. Clean environment, helpful trainers, and extremely engaging community.", 
    rating: 5 
  },
  { 
    name: "Ahmad Wadoud", 
    text: "تمثال رمسيس المذكور في كتاب الله خلد ويقول للمغادر في ذوق ووجهه له وداعا عد تاثيتا في القريب العاجل لقد شربت من نهر الجنة وسوف تعود ثانيتا لارض نهر الجنة وعلى فكره يا خواجه ده مش الاصلي ده تحفة هاي كوبي من الاصلي نحته فنان مصري حديث عشان بس تصدقوا ان احنا الفراعنة جينات يا عصومه", 
    rating: 5 
  }
];

const facilities = [
  { 
    title: "CrossFit & HIIT", 
    desc: "Sheraton Heliopolis & New Cairo premier indoor/outdoor rigs.", 
    img: "/converted_jpg/IMG_0632.jpg" 
  },
  { 
    title: "Pilates & Core Training", 
    desc: "Personalized core detailing and bodyweight gymnastics alignment.", 
    img: "/converted_jpg/IMG_0635.jpg" 
  },
  { 
    title: "Boxing & Kickboxing", 
    desc: "High-energy training sessions to build peak aerobic conditioning.", 
    img: "/converted_jpg/IMG_0643.jpg" 
  },
  { 
    title: "Nutrition & Lifestyle", 
    desc: "Customized meal plans, calorie recipes, and food preparation tips.", 
    img: "/converted_jpg/IMG_0653.jpg" 
  },
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
          <img src="/converted_jpg/IMG_3920.jpg" alt="IDEA® Wellness Indoor and Outdoor Gym Cairo" loading="lazy" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/45 to-background" />
        
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-left w-full px-6 md:px-12 lg:px-20 pt-28 pb-16 md:pt-20 md:pb-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-primary text-sm uppercase tracking-[0.4em] font-semibold mb-6 font-body">
              PREMIUM FITNESS & HOLISTIC WELLNESS
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="display-xl mb-8 text-foreground"
          >
            UNLOCK YOUR
            <br />
            <span className="text-gradient">INNER ATHLETE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-body leading-relaxed"
          >
            Cairo's leading indoor and outdoor training destination. Founded by pharmacist Marc T. Bahoury, we combine high-energy group workouts with customized nutrition planning.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-start"
          >
            <Link to="/contact" className="btn-primary text-sm">
              Book A Session <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/gallery" className="btn-outline text-sm">
              Explore The Arena
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll down — vertical animation on side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden md:flex absolute bottom-10 right-8 z-10 flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/60 font-semibold [writing-mode:vertical-rl] rotate-180">
            Scroll Down
          </span>
          <motion.div
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      </section>

      {/* Marquee text band */}
      <div ref={marqueeRef} className="py-8 md:py-12 bg-primary overflow-hidden">
        <motion.div style={{ x: marqueeX }} className="flex whitespace-nowrap gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-display text-2xl md:text-4xl uppercase text-primary-foreground/90 flex items-center gap-8">
              CrossFit <span className="text-primary-foreground/40">✦</span> Pilates <span className="text-primary-foreground/40">✦</span> Bodybuilding <span className="text-primary-foreground/40">✦</span> Nutrition <span className="text-primary-foreground/40">✦</span> Kids Fit <span className="text-primary-foreground/40">✦</span> Community
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
                { end: 600, suffix: "+", label: "Organic Family Members" },
                { end: 15, suffix: "+", label: "Designed Class Types" },
                { end: 18, suffix: "", label: "Expert Passionate Trainers" },
                { end: 11, suffix: "+", label: "Years Strong Brand" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40, rotate: -1.5 }}
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
      <ParallaxSection imgSrc="/converted_jpg/IMG_0631.jpg" imgAlt="IDEA® Wellness Heliopolis Gym Floor" className="min-h-[60vh] md:min-h-[70vh] flex items-center" speed={0.4}>
        <div className="section-padding w-full">
          <div className="max-w-4xl mx-auto text-center">
            <TextReveal
              text="Combining health, performance, and enjoyment. We empower you to adopt sustainable lifestyle choices, enhancing your energy levels and reducing overall health risks."
              className="text-2xl md:text-4xl lg:text-5xl font-display uppercase leading-tight text-foreground"
            />
          </div>
        </div>
      </ParallaxSection>

      {/* Programs — staggered asymmetric grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">CORE SPECIALTIES</p>
            <h2 className="display-lg mb-16 text-foreground">Premium Classes &<br /><span className="text-gradient">Lifestyle Support</span></h2>
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
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <motion.div
                        className="transform transition-transform duration-500"
                      >
                        <h3 className="font-display text-xl md:text-2xl uppercase text-foreground mb-1">{f.title}</h3>
                      </motion.div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program pillars on home page leadership placeholder */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">COACHING LEADERSHIP</p>
            <h2 className="display-lg mb-16 text-foreground">Meet Head Coach &<br /><span className="text-gradient">The IDEA® System</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "/converted_jpg/IMG_0641.jpg", name: "Marc Bahoury", role: "Founder & Head Coach (CrossFit L1/L2, ISSA)" },
              { img: "/converted_jpg/IMG_0659.jpg", name: "18+ Expert Coaches", role: "Passionate & Highly Educated Trainers" },
              { img: "/converted_jpg/IMG_0633.jpg", name: "Tailored Classes", desc: "Max 30 Trainees per class for full guidance", role: "Indoor & Outdoor Group Training" },
            ].map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.15}>
                <div className="group relative">
                  <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                    <img
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-85" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-700" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10 font-body">
                      <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-1 font-body">{item.role}</p>
                      <h3 className="font-display text-xl md:text-2xl uppercase text-foreground">{item.name}</h3>
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
            <Link to="/about" className="btn-outline text-sm group">
              Read Our Full Story <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Parallax image break */}
      <ParallaxSection imgSrc="/converted_jpg/IMG_0639.jpg" imgAlt="IDEA® Wellness North Coast Beach Activation" className="h-[40vh] md:h-[50vh]" speed={0.5} overlay={false}>
        <div className="absolute inset-0 bg-background/25" />
      </ParallaxSection>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">REAL MEMBER REVIEWS</p>
            <h2 className="display-lg mb-16 text-foreground">Supported By An<br /><span className="text-gradient">Active Community</span></h2>
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
                  <p className="text-lg md:text-2xl text-foreground leading-relaxed mb-8 font-body italic max-w-3xl mx-auto px-4">
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
      <section className="section-padding bg-card font-body">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">OUR SPACE</p>
            <h2 className="display-lg mb-16 text-foreground">Explore The<br /><span className="text-gradient">IDEA® Training Arena</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { img: "/converted_jpg/IMG_0631.jpg", span: "col-span-2 row-span-2" },
              { img: "/converted_jpg/IMG_0636.jpg", span: "" },
              { img: "/converted_jpg/IMG_0637.jpg", span: "" },
              { img: "/converted_jpg/IMG_0647.jpg", span: "" },
              { img: "/converted_jpg/IMG_0661.jpg", span: "" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className={item.span}>
                <div className="relative overflow-hidden rounded-xl group cursor-pointer aspect-square h-full">
                  <img
                    src={item.img}
                    alt={`IDEA Wellness Arena ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-700" />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-12">
            <Link to="/gallery" className="btn-outline text-sm group">
              Explore Gallery <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
