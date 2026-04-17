import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import TextReveal from "@/components/TextReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import aboutHero from "@/assets/about-hero.jpg";

const images = [
  { src: gallery1, alt: "Box jumps", category: "Training" },
  { src: gallery5, alt: "Gym interior", category: "Facility" },
  { src: gallery2, alt: "Battle ropes", category: "Training" },
  { src: gallery3, alt: "Barbell grip", category: "Training" },
  { src: heroBg, alt: "Gym floor", category: "Facility" },
  { src: gallery4, alt: "Group class", category: "Community" },
  { src: gallery6, alt: "Pull-ups", category: "Training" },
  { src: aboutHero, alt: "Training session", category: "Community" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const navigateLightbox = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + images.length) % images.length);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero — zoom-out parallax */}
      <motion.section
        ref={heroRef}
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative min-h-[80vh] flex items-end overflow-hidden"
      >
        <div className="absolute inset-0">
          <img src={gallery6} alt="Gallery" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24 w-full">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body"
          >
            Gallery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="display-xl text-foreground"
          >
            Inside<br /><span className="text-gradient">The Arena</span>
          </motion.h1>
        </div>
      </motion.section>

      {/* Text reveal */}
      <section className="section-padding pb-12">
        <div className="max-w-4xl mx-auto">
          <TextReveal
            text="A space designed for those who demand more. Every corner of our facility exists to fuel your potential."
            className="text-xl md:text-3xl lg:text-4xl font-display uppercase leading-tight text-foreground"
          />
        </div>
      </section>

      {/* Parallax divider */}
      <ParallaxSection imgSrc={gallery5} imgAlt="Gym interior" className="h-[25vh] md:h-[35vh]" speed={0.4} overlay={false}>
        <div className="absolute inset-0 bg-background/15" />
      </ParallaxSection>

      {/* Masonry Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => {
              const heights = ["h-72", "h-96", "h-64", "h-80", "h-72", "h-96", "h-64", "h-80"];
              return (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4 }}
                    className={`relative overflow-hidden rounded-2xl group cursor-pointer break-inside-avoid ${heights[i]}`}
                    onClick={() => setLightbox(i)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-xs uppercase tracking-widest text-primary font-semibold font-body">{img.category}</span>
                      <p className="text-sm text-foreground font-body mt-1">{img.alt}</p>
                    </div>
                    <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary/0 group-hover:border-primary transition-all duration-500 rounded-tr-lg" />
                    <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary/0 group-hover:border-primary transition-all duration-500 rounded-bl-lg" />
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 z-10"
            >
              <X className="h-6 w-6 text-foreground" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              className="absolute left-4 md:left-8 p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 z-10"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              className="absolute right-4 md:right-8 p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 z-10"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
