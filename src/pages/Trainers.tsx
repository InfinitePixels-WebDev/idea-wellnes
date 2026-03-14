import { motion } from "framer-motion";
import { Instagram, Twitter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import trainer4 from "@/assets/trainer-4.jpg";

const trainers = [
  {
    img: trainer1,
    name: "Marcus Blake",
    role: "Head Strength Coach",
    tags: ["Powerlifting", "Bodybuilding", "Sports Performance"],
    bio: "15+ years coaching elite athletes. NSCA-CSCS certified with a passion for building raw power.",
  },
  {
    img: trainer2,
    name: "Elena Vasquez",
    role: "HIIT & Cardio Specialist",
    tags: ["HIIT", "Cardio", "Weight Loss", "Endurance"],
    bio: "Former competitive runner turned fitness coach. Specializes in metabolic conditioning and fat loss.",
  },
  {
    img: trainer3,
    name: "Daniel Kim",
    role: "CrossFit Level 3 Trainer",
    tags: ["CrossFit", "Olympic Lifting", "Functional Fitness"],
    bio: "CrossFit Games competitor and certified Level 3 trainer. Builds complete athletes.",
  },
  {
    img: trainer4,
    name: "Priya Sharma",
    role: "Yoga & Wellness Coach",
    tags: ["Yoga", "Mobility", "Meditation", "Recovery"],
    bio: "RYT-500 certified yoga instructor with expertise in sports recovery and mindfulness.",
  },
];

const Trainers = () => {
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
            Our Trainers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="display-xl mb-6 text-foreground"
          >
            World-Class<br /><span className="text-gradient">Coaching</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-2xl font-body"
          >
            Our certified experts bring decades of experience across every discipline. Your goals are their mission.
          </motion.p>
        </div>
      </section>

      {/* Trainer Grid */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainers.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="glow-card overflow-hidden group">
                <div className="relative z-10 flex flex-col sm:flex-row">
                  <div className="sm:w-2/5 relative overflow-hidden">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-full h-64 sm:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="sm:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="font-display text-xl uppercase mb-1 text-card-foreground">{t.name}</h3>
                    <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 font-body">{t.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 font-body">{t.bio}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {t.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground font-body">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href="#" className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300">
                        <Instagram className="h-4 w-4" />
                      </a>
                      <a href="#" className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="display-lg mb-6 text-foreground">Train With<br /><span className="text-gradient">The Best</span></h2>
            <p className="text-lg text-muted-foreground mb-10 font-body">
              Book a personal training session and experience the difference expert coaching makes.
            </p>
            <Link to="/contact" className="btn-primary text-sm">
              Book A Session <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
