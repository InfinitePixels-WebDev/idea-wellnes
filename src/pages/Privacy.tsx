import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const sections = [
  {
    title: "1. Introduction",
    body: [
      "IDEA® Wellness (\"IDEA® Wellness\", \"we\", \"us\", or \"our\") is committed to protecting the privacy of our members, trainees, and website visitors. This Privacy Policy explains how we collect, use, share, and safeguard your personal information when you visit our facilities in Sheraton Heliopolis, New Cairo, and the North Coast (Ramla North Coast), or when you use this website.",
      "By using our website or services, you agree to the practices described in this policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "We may collect the following types of information:",
    ],
    list: [
      "Contact details you provide — such as your name, email address, and phone number when you fill out our contact form or book a session.",
      "Health & fitness information you choose to share with our coaches, such as fitness goals, training preferences, and relevant health notes needed to design a safe program.",
      "Membership and booking details related to the classes and sessions you attend.",
      "Technical information automatically collected when you browse the site, such as your device type, browser, and general usage data.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: ["We use the information we collect to:"],
    list: [
      "Respond to your inquiries and booking requests.",
      "Design and deliver personalized training and nutrition programs.",
      "Manage your membership and communicate class schedules or updates.",
      "Improve our website, classes, and overall member experience.",
      "Send you relevant offers or news, only where you have agreed to receive them.",
    ],
  },
  {
    title: "4. How We Share Your Information",
    body: [
      "We do not sell your personal information. We only share it with our coaching team and trusted service providers who help us operate our business (for example, scheduling or communication tools), and only to the extent needed to provide our services. We may also disclose information where required by law.",
    ],
  },
  {
    title: "5. Cookies & Website Analytics",
    body: [
      "Our website may use cookies and similar technologies to help the site function correctly and to understand how visitors use it. You can control or disable cookies through your browser settings, though some features may not work as intended if you do.",
    ],
  },
  {
    title: "6. Data Security",
    body: [
      "We take reasonable technical and organizational measures to protect your personal information against unauthorized access, loss, or misuse. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "7. Your Rights",
    body: [
      "You have the right to access, correct, or request deletion of the personal information we hold about you, and to withdraw your consent to marketing communications at any time. To exercise any of these rights, please contact us using the details below.",
    ],
  },
  {
    title: "8. Children's Privacy",
    body: [
      "For our Kids Fit and Ballet programs, information about minors is provided and managed by a parent or legal guardian. We only collect what is necessary to deliver these programs safely and with the guardian's consent.",
    ],
  },
  {
    title: "9. Changes To This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised \"Last updated\" date. We encourage you to review it periodically.",
    ],
  },
];

const Privacy = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-end overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img
            src="/converted_jpg/IMG_0631.jpg"
            alt="IDEA® Wellness Gym Privacy Policy"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24 w-full">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-primary text-sm tracking-[0.2em] font-semibold mb-4 font-body"
          >
            Legal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="display-xl mb-4 text-foreground"
          >
            Privacy &<br /><span className="text-gradient">Policy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-muted-foreground font-body"
          >
            Last updated: August 6, 2026
          </motion.p>
        </motion.div>
      </section>

      {/* Policy content */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((section, i) => (
            <ScrollReveal key={section.title} delay={i * 0.05}>
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">{section.title}</h2>
                {section.body.map((paragraph, j) => (
                  <p key={j} className="text-muted-foreground font-body leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-3 mt-2">
                    {section.list.map((item, k) => (
                      <li key={k} className="flex items-start gap-3 text-muted-foreground font-body leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ScrollReveal>
          ))}

          {/* Contact block */}
          <ScrollReveal delay={0.1}>
            <div className="glow-card p-8 md:p-10">
              <div className="relative z-10">
                <h2 className="font-display text-2xl md:text-3xl mb-4 text-card-foreground">10. Contact Us</h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or how we handle your personal information, please reach out to us:
                </p>
                <ul className="space-y-4 font-body">
                  <li className="flex items-start gap-3">
                    <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                    <a href="mailto:marcbahoury@idea-egy.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      marcbahoury@idea-egy.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                    <a href="tel:+201229560999" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      +20 1229560999
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      Sheraton Heliopolis | New Cairo | North Coast (Ramla North Coast)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
