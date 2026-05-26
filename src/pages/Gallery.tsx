import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useMemo } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import TextReveal from "@/components/TextReveal";

const images = [
  { src: "/converted_jpg/IMG_3920.jpg", alt: "IDEA® Wellness Premium Indoor & Outdoor Gym Venue", category: "Facility" },
  { src: "/converted_jpg/IMG_0631.jpg", alt: "Elite Holistic Fitness and Core Conditioning Training Arena", category: "Facility" },
  { src: "/converted_jpg/IMG_0632.jpg", alt: "CrossFit Core Rig and Group Functional Training Cairo", category: "Training" },
  { src: "/converted_jpg/IMG_0633.jpg", alt: "High-Intensity Weight Loss and Aerobic Workouts", category: "Performance" },
  { src: "/converted_jpg/IMG_0634.jpg", alt: "Professional Strength Training Dumbbell & Weight Selection", category: "Facility" },
  { src: "/converted_jpg/IMG_0635.jpg", alt: "Stretching, Pilates and Core Classes in Heliopolis", category: "Training" },
  { src: "/converted_jpg/IMG_0636.jpg", alt: "Outdoor CrossFit and Aerobics Space Sheraton", category: "Facility" },
  { src: "/converted_jpg/IMG_0637.jpg", alt: "Premium Olympic Dumbbells and Weightlifting Racks", category: "Facility" },
  { src: "/converted_jpg/IMG_0638.jpg", alt: "Endurance, Cardiovascular and Fat Attack Training Cairo", category: "Training" },
  { src: "/converted_jpg/IMG_0639.jpg", alt: "Elite Training & Group Workouts at Sheraton Heliopolis", category: "Facility" },
  { src: "/converted_jpg/IMG_0640.jpg", alt: "High-Energy Group Workout for Adults and Kids Cairo", category: "Training" },
  { src: "/converted_jpg/IMG_0641.jpg", alt: "Personal Training & Olympic Lifting Session with Marc Bahoury", category: "Performance" },
  { src: "/converted_jpg/IMG_0642.jpg", alt: "Barbell Squats and Core Strengthening Exercises", category: "Training" },
  { src: "/converted_jpg/IMG_0643.jpg", alt: "Dynamic Kickboxing and Cardio Boxing Class Cairo", category: "Training" },
  { src: "/converted_jpg/IMG_0644.jpg", alt: "Spacious Multi-Functional Gymnastics and Ballet Hall", category: "Facility" },
  { src: "/converted_jpg/IMG_0645.jpg", alt: "Athletic Conditioning and Spinning Cycling Room", category: "Performance" },
  { src: "/converted_jpg/IMG_0646.jpg", alt: "CrossFit Box Jumps and Strength Conditioning Program", category: "Training" },
  { src: "/converted_jpg/IMG_0647.jpg", alt: "Passionate Community of 600+ Organically Growing Members", category: "Facility" },
  { src: "/converted_jpg/IMG_0648.jpg", alt: "Personalized Bodybuilding & Body Detailing Coach Heliopolis", category: "Training" },
  { src: "/converted_jpg/IMG_0649.jpg", alt: "Sleek Indoor Turf Track for Sled Pushes and Agility Drills", category: "Facility" },
  { src: "/converted_jpg/IMG_0650.jpg", alt: "High-Intensity Interval Training HIIT for Rapid Weight Loss", category: "Performance" },
  { src: "/converted_jpg/IMG_0651.jpg", alt: "Modern Cardio Station with Treadmills and Assault Bikes", category: "Facility" },
  { src: "/converted_jpg/IMG_0652.jpg", alt: "Flexibility and Dynamic Mobility Training Heliopolis", category: "Training" },
  { src: "/converted_jpg/IMG_0653.jpg", alt: "Private Training and Nutritional Counseling Cairo", category: "Performance" },
  { src: "/converted_jpg/IMG_0654.jpg", alt: "Calisthenics, Pull-up Bars and Gymnastics Training Setup", category: "Training" },
  { src: "/converted_jpg/IMG_0655.jpg", alt: "Pilates Reformers & Core Strengthening Station", category: "Facility" },
  { src: "/converted_jpg/IMG_0656.jpg", alt: "Premium CrossFit and Olympic Lifter Olympic Barbells", category: "Training" },
  { src: "/converted_jpg/IMG_0657.jpg", alt: "Relaxing Yoga, Zumba, and Dance Studio Heliopolis", category: "Facility" },
  { src: "/converted_jpg/IMG_0658.jpg", alt: "North Coast Beach Fitness Competition Stella Heneish", category: "Training" },
  { src: "/converted_jpg/IMG_0659.jpg", alt: "Expert Certified Personal Trainers in Cairo & New Cairo", category: "Performance" },
  { src: "/converted_jpg/IMG_0660.jpg", alt: "Comprehensive Bodyweight and HIIT Group Workout", category: "Training" },
  { src: "/converted_jpg/IMG_0661.jpg", alt: "Friendly, Supportive, and Highly Motivating Gym Family", category: "Facility" }
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(12);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const categories = useMemo(() => {
    return ["All", "Training", "Facility", "Performance"];
  }, []);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return images;
    return images.filter(img => img.category === activeCategory);
  }, [activeCategory]);

  const navigateLightbox = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + filteredImages.length) % filteredImages.length);
  };

  const heights = ["h-72", "h-96", "h-64", "h-80", "h-72", "h-96", "h-64", "h-80"];

  return (
    <div className="overflow-hidden">
      {/* Hero — zoom-out parallax */}
      <motion.section
        ref={heroRef}
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative min-h-[85vh] flex items-end overflow-hidden"
      >
        <div className="absolute inset-0">
          <img src="/converted_jpg/IMG_3920.jpg" alt="IDEA® Wellness Indoor and Outdoor Premium Venue in Cairo" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24 w-full">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body"
          >
            IDEA® GALLERY
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="display-xl text-foreground"
          >
            INSIDE THE<br /><span className="text-gradient">IDEA® ARENA</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.4 }}
            className="text-sm md:text-base text-muted-foreground font-body max-w-xl mt-4"
          >
            Explore our state-of-the-art indoor gym halls, high-energy outdoor CrossFit setups, beach training setups, and the organic IDEA® family family in action.
          </motion.p>
        </div>
      </motion.section>

      {/* Text reveal */}
      <section className="section-padding pb-8">
        <div className="max-w-4xl mx-auto">
          <TextReveal
            text="A luxury wellness space engineered for those who demand peak physical and emotional performance. Every corner of our Sheraton Heliopolis, New Cairo, and North Coast arenas fuels your ultimate potential."
            className="text-xl md:text-3xl lg:text-4xl font-display uppercase leading-tight text-foreground"
          />
        </div>
      </section>

      {/* Categories Filter Tabs */}
      <section className="px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setLightbox(null);
                setVisibleCount(12);
              }}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold font-body transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--glow-primary))]"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Parallax divider */}
      <ParallaxSection imgSrc="/converted_jpg/IMG_0639.jpg" imgAlt="IDEA® Wellness Indoor and Outdoor Fitness Hub" className="h-[25vh] md:h-[35vh]" speed={0.4} overlay={false}>
        <div className="absolute inset-0 bg-background/20" />
      </ParallaxSection>

      {/* Masonry Grid */}
      <section className="section-padding pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredImages.slice(0, visibleCount).map((img, i) => {
                return (
                  <ScrollReveal key={img.src} delay={(i % 6) * 0.05}>
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ y: -6 }}
                      className={`relative overflow-hidden rounded-2xl group cursor-pointer break-inside-avoid ${heights[i % heights.length]}`}
                      onClick={() => setLightbox(i)}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                      />
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </AnimatePresence>
          </div>

          {visibleCount < filteredImages.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setVisibleCount((prev) => Math.min(prev + 12, filteredImages.length))}
                className="btn-outline text-xs"
              >
                Load More Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && filteredImages[lightbox] && (
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
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-full max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[lightbox].src}
                alt={filteredImages[lightbox].alt}
                loading="eager"
                decoding="sync"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-border/20 z-10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
