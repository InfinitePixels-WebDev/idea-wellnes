import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl uppercase mb-4">
              <span className="text-primary">Idea</span> Wellness
            </h3>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed font-body">
              Redefining fitness through premium training experiences. Push beyond limits. Achieve the extraordinary.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-full border border-secondary-foreground/20 transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_15px_hsl(var(--glow-primary))]">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest mb-6 text-primary">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Programs", "Memberships", "Trainers", "Gallery", "Contact"].map((item) => (
                <Link key={item} to={`/${item.toLowerCase()}`} className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-300 font-body">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest mb-6 text-primary">Programs</h4>
            <div className="flex flex-col gap-3">
              {["Strength Training", "Cardio HIIT", "CrossFit", "Personal Training", "Yoga & Mobility"].map((item) => (
                <span key={item} className="text-sm text-secondary-foreground/60 font-body">{item}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest mb-6 text-primary">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-secondary-foreground/60 font-body">123 Fitness Avenue, Downtown District</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-secondary-foreground/60 font-body">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-secondary-foreground/60 font-body">info@ideawellness.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/40 font-body">© 2026 Idea Wellness. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-secondary-foreground/40 hover:text-primary transition-colors font-body">Privacy Policy</a>
            <a href="#" className="text-xs text-secondary-foreground/40 hover:text-primary transition-colors font-body">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
