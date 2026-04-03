import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

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

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-primary" />,
      text: "info@ideawellness.com",
      href: "mailto:info@ideawellness.com",
    },
    {
      icon: <Phone size={18} className="text-primary" />,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: <MapPin size={18} className="text-primary" />,
      text: "123 Fitness Avenue, Downtown District",
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
      <FooterBackgroundGradient />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-28 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand section */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-display text-sm">
                IW
              </span>
              <span className="font-display text-xl uppercase">
                <span className="text-primary">Idea</span> Wellness
              </span>
            </Link>
            <p className="text-secondary-foreground/50 text-sm leading-relaxed font-body">
              Where strength meets luxury. Premium fitness experiences designed for champions.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-display text-sm uppercase tracking-widest mb-6 text-primary">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="flex items-center gap-2">
                    <Link
                      to={link.href}
                      className="text-sm text-secondary-foreground/50 hover:text-primary hover:translate-x-1 transition-all duration-300 font-body"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest mb-6 text-primary">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors font-body"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm text-secondary-foreground/50 font-body">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-secondary-foreground/20 to-transparent mb-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social icons */}
          <div className="flex gap-3">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full border border-secondary-foreground/15 flex items-center justify-center transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(var(--glow-primary))] hover:-translate-y-1"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-secondary-foreground/30 font-body">
            © {new Date().getFullYear()} Idea Wellness. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="relative z-10 h-32 md:h-48 flex items-center justify-center mt-4">
        <TextHoverEffect text="IDEA WELLNESS" />
      </div>
    </footer>
  );
};

export default Footer;
