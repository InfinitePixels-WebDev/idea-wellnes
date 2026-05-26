import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import TextReveal from "@/components/TextReveal";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  const formRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: formScroll } = useScroll({ target: formRef, offset: ["start end", "end start"] });
  const formY = useTransform(formScroll, [0, 1], [60, -60]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    { 
      icon: MapPin, 
      title: "Our Arenas", 
      value: "Main Branch: Sheraton Al Matar, El Nozha, Cairo Governorate | Locations in New Cairo & North Coast (Stella & Sidi Heneish)" 
    },
    { 
      icon: Phone, 
      title: "Phone Support", 
      value: "+20 1229560999" 
    },
    { 
      icon: Mail, 
      title: "Email Inquiry", 
      value: "marcbahoury@idea-egy.com" 
    },
    { 
      icon: Clock, 
      title: "Operational Hours", 
      value: "Trainee Access: 24/7 Accessibility | Scheduled Group Workouts: 6:00 AM – 11:00 PM Daily" 
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-end overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img src="/converted_jpg/IMG_3920.jpg" alt="Contact IDEA® Wellness Gym Sheraton Heliopolis" loading="lazy" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24 w-full">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body"
          >
            CONTACT IDEA® WELLNESS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="display-xl mb-4 text-foreground"
          >
            START YOUR<br /><span className="text-gradient">TRANSFORMATION</span>
          </motion.h1>
        </motion.div>
      </section>

      {/* Text reveal */}
      <section className="section-padding pb-8">
        <div className="max-w-3xl mx-auto">
          <TextReveal
            text="Have questions about our CrossFit programs, Pilates classes, corporate wellness, or nutrition support? We are ready to help you unlock the inner athlete."
            className="text-xl md:text-2xl lg:text-3xl font-display uppercase leading-tight text-foreground"
          />
        </div>
      </section>

      {/* Content */}
      <section ref={formRef} className="section-padding pt-8">
        <motion.div style={{ y: formY }} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Form — 3 cols */}
          <ScrollReveal className="lg:col-span-3">
            <div className="glow-card p-8 md:p-12">
              <div className="relative z-10">
                <h2 className="font-display text-2xl md:text-3xl uppercase mb-2 text-card-foreground">Send A Message</h2>
                <p className="text-sm text-muted-foreground mb-8 font-body">Reach out directly to Marc Bahoury and the coaching team. We'll get back to you within 24 hours.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_hsl(var(--glow-primary))]">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-display text-xl uppercase text-card-foreground mb-2">Message Sent Successfully!</h3>
                    <p className="text-sm text-muted-foreground font-body">Thank you for contacting us. We will be in touch shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block font-body">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground text-sm font-body focus:outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(var(--glow-primary))] transition-all duration-300"
                          placeholder="E.g., Youssef Aly"
                        />
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block font-body">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground text-sm font-body focus:outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(var(--glow-primary))] transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block font-body">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground text-sm font-body focus:outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(var(--glow-primary))] transition-all duration-300"
                        placeholder="E.g., +20 122 9560999"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block font-body">Message / Fitness Goals</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground text-sm font-body focus:outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(var(--glow-primary))] transition-all duration-300 resize-none"
                        placeholder="Tell us about your fitness goals, preferred class times, or inquiries..."
                      />
                    </div>
                    <button type="submit" className="btn-primary text-xs mt-2 w-full md:w-auto md:self-start">
                      Send Message <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Info — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {contactInfo.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                  className="glow-card p-6 group"
                >
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(var(--glow-primary))] transition-all duration-500">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm uppercase mb-1 text-card-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}

            {/* Google Map of Sheraton Heliopolis Area */}
            <ScrollReveal delay={0.5}>
              <div className="glow-card overflow-hidden h-48 md:h-64 rounded-2xl">
                <iframe
                  src="https://maps.google.com/maps?q=Idea%20Wellness,%20Sheraton%20Al%20Matar,%20El%20Nozha,%20Cairo&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IDEA Wellness Sheraton Heliopolis Location Map"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </ScrollReveal>
          </div>
        </motion.div>
      </section>

      {/* Parallax CTA */}
      <ParallaxSection imgSrc="/converted_jpg/IMG_0639.jpg" imgAlt="IDEA® Wellness Indoor Gym Space" className="flex items-center mt-12" speed={0.3}>
        <div className="section-padding w-full">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="display-lg mb-6 text-foreground">VISIT THE<br /><span className="text-gradient">IDEA® ARENA TODAY</span></h2>
              <p className="text-lg text-muted-foreground font-body">
                Step inside Egypt's most dynamic indoor & outdoor workout space and see what makes the organically growing IDEA® Wellness family stand out.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Contact;
