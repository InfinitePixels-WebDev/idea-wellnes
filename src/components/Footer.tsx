import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import logo from "@/assets/idea-wellness-logo.png";

const Footer = () => {
  const footerLinks = [
    {
      title: "Navigate",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Trainers", href: "/trainers" },
        { label: "Gallery", href: "/gallery" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Facilities",
      links: [
        { label: "Weight Room", href: "#" },
        { label: "Cardio Zone", href: "#" },
        { label: "Recovery Spa", href: "#" },
        { label: "Boxing Ring", href: "#" },
        { label: "Olympic Pool", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Instagram size={18} />, label: "Instagram", href: "#" },
    { icon: <Facebook size={18} />, label: "Facebook", href: "#" },
    { icon: <Twitter size={18} />, label: "Twitter", href: "#" },
    { icon: <Youtube size={18} />, label: "Youtube", href: "#" },
  ];

  return (
    <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* CTA banner */}
      <div className="border-b border-secondary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-2xl md:text-4xl uppercase text-secondary-foreground leading-tight">
              Ready To <span className="text-primary">Transform?</span>
            </h3>
            <p className="text-secondary-foreground/50 text-sm font-body mt-2 max-w-md">
              Start your journey today and discover what you're truly capable of.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-primary text-xs shrink-0 group"
          >
            Get Started <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 md:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Idea Wellness"
                className="h-8 w-auto invert"
              />
            </Link>
            <p className="text-secondary-foreground/40 text-sm leading-relaxed font-body">
              Where strength meets luxury. Premium fitness experiences designed for champions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/40 transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(var(--glow-primary))] hover:-translate-y-1"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-display text-xs uppercase tracking-[0.2em] mb-6 text-primary">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-secondary-foreground/40 hover:text-primary hover:translate-x-1 transition-all duration-300 font-body inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.2em] mb-6 text-primary">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                <a href="mailto:info@ideawellness.com" className="text-sm text-secondary-foreground/40 hover:text-primary transition-colors font-body">
                  info@ideawellness.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                <a href="tel:+15551234567" className="text-sm text-secondary-foreground/40 hover:text-primary transition-colors font-body">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-secondary-foreground/40 font-body">
                  123 Fitness Avenue, Downtown
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-secondary-foreground/15 to-transparent mb-6" />

        {/* Copyright */}
        <p className="text-center text-xs text-secondary-foreground/25 font-body">
          © {new Date().getFullYear()} Idea Wellness. All rights reserved.
        </p>
      </div>

      {/* Full-width watermark */}
      <div className="w-full overflow-hidden pb-2">
        <h2 className="font-display text-[10.5vw] md:text-[11vw] leading-[0.85] uppercase text-secondary-foreground/[0.03] whitespace-nowrap select-none tracking-[-0.02em] md:tracking-tighter text-center">
          IDEA WELLNESS
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
