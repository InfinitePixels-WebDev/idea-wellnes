import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <footer ref={ref} className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-display text-[15vw] uppercase text-secondary-foreground/[0.03] whitespace-nowrap select-none">
          Idea Wellness
        </span>
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-12">
        {/* Top CTA area */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-20">
          <div>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body">Ready to start?</p>
            <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95] text-secondary-foreground">
              Your Journey<br /><span className="text-primary">Begins Now</span>
            </h2>
          </div>
          <Link to="/contact" className="btn-primary text-sm shrink-0 group">
            Get In Touch <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-secondary-foreground/20 to-transparent mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl uppercase mb-4">
              <span className="text-primary">Idea</span> Wellness
            </h3>
            <p className="text-secondary-foreground/50 text-sm leading-relaxed font-body">
              Where strength meets luxury. Premium fitness experiences designed for champions.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-secondary-foreground/15 flex items-center justify-center transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(var(--glow-primary))] hover:-translate-y-1"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest mb-6 text-primary">Navigate</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Trainers", to: "/trainers" },
                { label: "Gallery", to: "/gallery" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <Link key={item.label} to={item.to} className="text-sm text-secondary-foreground/50 hover:text-primary hover:translate-x-1 transition-all duration-300 font-body">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest mb-6 text-primary">Facilities</h4>
            <div className="flex flex-col gap-3">
              {["Weight Room", "Cardio Zone", "Recovery Spa", "Boxing Ring", "Olympic Pool"].map((item) => (
                <span key={item} className="text-sm text-secondary-foreground/50 font-body">{item}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest mb-6 text-primary">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-secondary-foreground/50 font-body">123 Fitness Avenue, Downtown District</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-secondary-foreground/50 font-body">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-secondary-foreground/50 font-body">info@ideawellness.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-secondary-foreground/10 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/30 font-body">© 2026 Idea Wellness. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-secondary-foreground/30 hover:text-primary transition-colors font-body">Privacy Policy</a>
            <a href="#" className="text-xs text-secondary-foreground/30 hover:text-primary transition-colors font-body">Terms of Service</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
