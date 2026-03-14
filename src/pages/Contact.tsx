import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

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
            Contact Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="display-xl mb-6 text-foreground"
          >
            Let's<br /><span className="text-gradient">Connect</span>
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <ScrollReveal>
            <div className="glow-card p-8 md:p-12">
              <div className="relative z-10">
                <h2 className="font-display text-2xl uppercase mb-2 text-card-foreground">Send A Message</h2>
                <p className="text-sm text-muted-foreground mb-8 font-body">We'll get back to you within 24 hours.</p>
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-display text-xl uppercase text-card-foreground mb-2">Message Sent!</h3>
                    <p className="text-sm text-muted-foreground font-body">We'll be in touch soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block font-body">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsl(var(--glow-primary))] transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block font-body">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsl(var(--glow-primary))] transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block font-body">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsl(var(--glow-primary))] transition-all duration-300"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block font-body">Message</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsl(var(--glow-primary))] transition-all duration-300 resize-none"
                        placeholder="Tell us about your fitness goals..."
                      />
                    </div>
                    <button type="submit" className="btn-primary text-xs mt-2">
                      Send Message <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <ScrollReveal delay={0.1}>
              <div className="glow-card p-8">
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm uppercase mb-1 text-card-foreground">Location</h3>
                    <p className="text-sm text-muted-foreground font-body">123 Fitness Avenue, Downtown District, New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="glow-card p-8">
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm uppercase mb-1 text-card-foreground">Phone</h3>
                    <p className="text-sm text-muted-foreground font-body">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="glow-card p-8">
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm uppercase mb-1 text-card-foreground">Email</h3>
                    <p className="text-sm text-muted-foreground font-body">info@ideawellness.com</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="glow-card p-8">
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm uppercase mb-1 text-card-foreground">Hours</h3>
                    <div className="text-sm text-muted-foreground font-body space-y-1">
                      <p>Mon–Fri: 5:00 AM – 11:00 PM</p>
                      <p>Sat–Sun: 6:00 AM – 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal delay={0.5}>
              <div className="glow-card overflow-hidden h-64 md:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjIiTiA3M8KwNTknMDguNSJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Idea Wellness Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
