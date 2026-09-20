import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import TextReveal from "@/components/TextReveal";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  branch: string;
  facility?: string;
}

const images = [
  { src: "/converted_jpg/IMG_3920.jpg", alt: "Idea Wellness Premium Indoor & Outdoor Gym Venue", category: "Facility", branch: "Heliopolis Branch" },
  { src: "/converted_jpg/IMG_0631.jpg", alt: "Elite Holistic Fitness and Core Conditioning Training Arena", category: "Facility", branch: "New Cairo Branch" },
  { src: "/converted_jpg/IMG_0632.jpg", alt: "CrossFit Core Rig and Group Functional Training Cairo", category: "Training", branch: "Ramla North Coast" },
  { src: "/converted_jpg/IMG_0633.jpg", alt: "High-Intensity Weight Loss and Aerobic Workouts", category: "Performance", branch: "Heliopolis Branch" },
  { src: "/converted_jpg/IMG_0634.jpg", alt: "Professional Strength Training Dumbbell & Weight Selection", category: "Facility", branch: "New Cairo Branch" },
  { src: "/converted_jpg/IMG_0635.jpg", alt: "Stretching, Pilates and Core Classes in Heliopolis", category: "Training", branch: "Ramla North Coast" },
  { src: "/converted_jpg/IMG_0636.jpg", alt: "Outdoor CrossFit and Aerobics Space Sheraton", category: "Facility", branch: "Heliopolis Branch" },
  { src: "/converted_jpg/IMG_0637.jpg", alt: "Premium Olympic Dumbbells and Weightlifting Racks", category: "Facility", branch: "New Cairo Branch" },
  { src: "/converted_jpg/IMG_0638.jpg", alt: "Endurance, Cardiovascular and Fat Attack Training Cairo", category: "Training", branch: "Ramla North Coast" },
  { src: "/converted_jpg/IMG_0639.jpg", alt: "Elite Training & Group Workouts at Sheraton Heliopolis", category: "Facility", branch: "Heliopolis Branch" },
  { src: "/converted_jpg/IMG_0640.jpg", alt: "High-Energy Group Workout for Adults and Kids Cairo", category: "Training", branch: "New Cairo Branch" },
  { src: "/converted_jpg/IMG_0641.jpg", alt: "Personal Training & Olympic Lifting Session with Marc Bahoury", category: "Performance", branch: "Ramla North Coast" },
  { src: "/converted_jpg/IMG_0642.jpg", alt: "Barbell Squats and Core Strengthening Exercises", category: "Training", branch: "Heliopolis Branch" },
  { src: "/converted_jpg/IMG_0643.jpg", alt: "Dynamic Kickboxing and Cardio Boxing Class Cairo", category: "Training", branch: "New Cairo Branch" },
  { src: "/converted_jpg/IMG_0644.jpg", alt: "Spacious Multi-Functional Gymnastics and Ballet Hall", category: "Facility", branch: "Ramla North Coast" },
  { src: "/converted_jpg/IMG_0645.jpg", alt: "Performance Cardio and Strength Workout Cairo", category: "Performance", branch: "Heliopolis Branch" },
  { src: "/converted_jpg/IMG_0646.jpg", alt: "CrossFit Box Jumps and Strength Conditioning Program", category: "Training", branch: "New Cairo Branch" },
  { src: "/converted_jpg/IMG_0647.jpg", alt: "Passionate Community of 600+ Organically Growing Members", category: "Facility", branch: "Ramla North Coast" },
  { src: "/converted_jpg/IMG_0648.jpg", alt: "Personalized Bodybuilding & Body Detailing Coach Heliopolis", category: "Training", branch: "Heliopolis Branch" },
  { src: "/converted_jpg/IMG_0650.jpg", alt: "High-Intensity Interval Training HIIT for Rapid Weight Loss", category: "Performance", branch: "Ramla North Coast" },
  { src: "/converted_jpg/IMG_0651.jpg", alt: "Modern Cardio Station with Treadmills and Assault Bikes", category: "Facility", branch: "Heliopolis Branch" },
  { src: "/converted_jpg/IMG_0652.jpg", alt: "Flexibility and Dynamic Mobility Training Heliopolis", category: "Training", branch: "New Cairo Branch" },
  { src: "/converted_jpg/IMG_0653.jpg", alt: "Private Training and Nutritional Counseling Cairo", category: "Performance", branch: "Ramla North Coast" },
  { src: "/converted_jpg/IMG_0654.jpg", alt: "Calisthenics, Pull-up Bars and Gymnastics Training Setup", category: "Training", branch: "Heliopolis Branch" },
  { src: "/converted_jpg/IMG_0655.jpg", alt: "Pilates Reformers & Core Strengthening Station", category: "Facility", branch: "New Cairo Branch" },
  { src: "/converted_jpg/IMG_0657.jpg", alt: "Relaxing Yoga, Zumba, and Dance Studio Heliopolis", category: "Facility", branch: "Heliopolis Branch" },
  { src: "/converted_jpg/IMG_0660.jpg", alt: "Comprehensive Bodyweight and HIIT Group Workout", category: "Training", branch: "Heliopolis Branch" },
  { src: "/converted_jpg/IMG_0661.jpg", alt: "Friendly, Supportive, and Highly Motivating Gym Family", category: "Facility", branch: "New Cairo Branch" }
];

const outdoorImageSources = new Set([
  "/converted_jpg/IMG_0645.jpg",
  "/converted_jpg/IMG_0646.jpg",
  "/converted_jpg/IMG_0647.jpg",
  "/converted_jpg/IMG_0648.jpg",
  "/converted_jpg/IMG_0649.jpg",
  "/converted_jpg/IMG_0650.jpg",
  "/converted_jpg/IMG_0651.jpg",
  "/converted_jpg/IMG_0652.jpg",
  "/converted_jpg/IMG_0653.jpg",
  "/converted_jpg/IMG_0654.jpg",
  "/converted_jpg/IMG_0655.jpg",
  "/converted_jpg/IMG_0656.jpg",
  "/converted_jpg/IMG_0657.jpg",
  "/converted_jpg/IMG_0658.jpg",
  "/converted_jpg/IMG_0659.jpg",
  "/converted_jpg/IMG_0660.jpg",
  "/converted_jpg/IMG_0661.jpg",
]);

const heliopolisImages = images.map((image) => ({
  ...image,
  branch: "Heliopolis Branch",
  facility: outdoorImageSources.has(image.src) ? "Outdoor training facility" : "Gym",
}));

const newCairoImages = [
  "B1.jpeg",
  "B2.jpeg",
  "B3.jpeg",
  "B4.jpeg",
  "B5.jpeg",
  "B6.jpeg",
].map((fileName) => ({
  src: `${import.meta.env.BASE_URL}content/Branches/NewCairo/${fileName}`,
  alt: `New Cairo branch ${fileName.replace(".jpeg", "")}`,
  category: "Facility",
  branch: "New Cairo Branch",
  facility: fileName === "B3.jpeg" ? "Outdoor training facility" : "Gym",
}));

const gounaImages = ["G1.jpeg", "G2.jpeg", "G3.jpeg", "G4.jpeg"].map((fileName) => ({
  src: `${import.meta.env.BASE_URL}content/Branches/Gouna/${fileName}`,
  alt: `El Gouna branch ${fileName.replace(".jpeg", "")}`,
  category: "Facility",
  branch: "El Gouna",
}));

const sahelImages = ["S1.jpeg", "S2.jpeg", "S3.jpeg", "S4.jpeg", "S5.jpeg", "S6.jpeg", "S7.jpeg"].map((fileName) => ({
  src: `${import.meta.env.BASE_URL}content/Branches/Sahel/${fileName}`,
  alt: `Sahel branch ${fileName.replace(".jpeg", "")}`,
  category: "Facility",
  branch: "Sahel",
}));

const tajSultanImages = [{
  src: `${import.meta.env.BASE_URL}content/Branches/Taj-Sultan/taj-sultan.jpeg`,
  alt: "Taj Sultan branch",
  category: "Facility",
  branch: "Taj Sultan",
}];

const galleryImages: GalleryImage[] = [
  ...heliopolisImages,
  ...newCairoImages,
  ...gounaImages,
  ...sahelImages,
  ...tajSultanImages,
];

const branches = ["Heliopolis Branch", "New Cairo Branch", "Taj Sultan", "El Gouna", "Sahel"];
const facilityTabs = ["Gym", "Outdoor training facility"];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeBranch, setActiveBranch] = useState<string>("Heliopolis Branch");
  const [activeFacility, setActiveFacility] = useState<string>("Gym");
  const [visibleCount, setVisibleCount] = useState(12);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const filteredImages = useMemo(() => {
    return galleryImages.filter(img => {
      const matchBranch = img.branch === activeBranch;
      const hasFacilityTabs = activeBranch === "Heliopolis Branch" || activeBranch === "New Cairo Branch";
      const matchFacility = !hasFacilityTabs
        || img.facility === activeFacility
        || (activeBranch === "New Cairo Branch" && !img.facility);
      return matchBranch && matchFacility;
    });
  }, [activeBranch, activeFacility]);

  const navigateLightbox = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + filteredImages.length) % filteredImages.length);
  };

  useEffect(() => {
    if (lightbox === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowLeft") navigateLightbox(-1);
      if (event.key === "ArrowRight") navigateLightbox(1);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox, filteredImages]);

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
            className="text-primary text-sm tracking-[0.2em] font-semibold mb-4 font-body"
          >
            Idea® Gallery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="display-xl text-foreground"
          >
            Inside The<br /><span className="text-gradient">Idea® Arena</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.4 }}
            className="text-sm md:text-base text-muted-foreground font-body max-w-xl mt-4"
          >
            Explore our state-of-the-art indoor gym halls, high-energy outdoor CrossFit setups, beach training setups, and the organic IDEA® family in action.
          </motion.p>
        </div>
      </motion.section>

      {/* Text reveal */}
      <section className="section-padding pb-8">
        <div className="max-w-4xl mx-auto">
          <TextReveal
            text="A luxury wellness space engineered for those who demand peak physical and emotional performance. Every corner of our Sheraton Heliopolis, New Cairo, and North Coast arenas fuels your ultimate potential."
            className="text-xl md:text-3xl lg:text-4xl font-display leading-tight text-foreground"
          />
        </div>
      </section>

      {/* Filter Tabs (Branches & Categories) */}
      <section className="px-6 md:px-12 lg:px-20 py-8 space-y-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          {/* Branch row */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {branches.map((branch) => (
              <button
                key={branch}
                onClick={() => {
                  setActiveBranch(branch);
                  setActiveFacility("Gym");
                  setLightbox(null);
                  setVisibleCount(12);
                }}
                className={`px-6 py-2.5 rounded-full text-xs tracking-wider font-semibold font-body transition-all duration-300 ${
                  activeBranch === branch
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--glow-primary))]"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border/40"
                }`}
              >
                {branch}
              </button>
            ))}
          </div>

          {/* Facility row */}
          {(activeBranch === "Heliopolis Branch" || activeBranch === "New Cairo Branch") && (
            <div className="flex flex-wrap justify-center items-center gap-3">
              {facilityTabs.map((facility) => (
                <button
                  key={facility}
                  onClick={() => {
                    setActiveFacility(facility);
                    setLightbox(null);
                    setVisibleCount(12);
                  }}
                  className={`px-5 py-2 rounded-full text-xs tracking-wider font-semibold font-body transition-all duration-300 ${
                    activeFacility === facility
                      ? "bg-foreground text-background shadow-md"
                      : "bg-card/50 text-muted-foreground hover:text-foreground hover:bg-muted border border-border/40"
                  }`}
                >
                  {facility}
                </button>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Parallax divider */}
      {/* Masonry Grid */}
      <section className="section-padding pt-16">
        <div className="max-w-7xl mx-auto">
          {filteredImages.length > 0 ? (
            <motion.div
              key={`${activeBranch}-${activeFacility}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredImages.slice(0, visibleCount).map((img, i) => (
                <button
                  type="button"
                  key={img.src}
                  aria-label={`Open ${img.alt}`}
                  className="group relative aspect-[4/3] min-w-0 cursor-pointer overflow-hidden rounded-2xl p-0 text-left transition-transform duration-300 hover:-translate-y-1"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="eager"
                    decoding="async"
                    className="block w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {activeBranch === "Taj Sultan" && (
                    <div className="absolute inset-x-0 bottom-0 bg-background/80 px-5 py-4 text-center backdrop-blur-sm">
                      <p className="text-primary text-xs font-semibold tracking-[0.2em] font-body">Taj Sultan</p>
                      <p className="mt-1 font-display text-xl text-foreground">Coming Soon</p>
                    </div>
                  )}
                </button>
              ))}
            </motion.div>
          ) : (
            <div className="min-h-64 flex flex-col items-center justify-center text-center border border-border/40 rounded-2xl bg-card/30 px-6">
              <p className="text-primary text-sm tracking-[0.2em] font-semibold mb-3 font-body">{activeBranch}</p>
              <h2 className="font-display text-3xl text-foreground">Coming Soon</h2>
              <p className="mt-3 max-w-md text-muted-foreground font-body">
                Photos for this location will be added when the branch is ready.
              </p>
            </div>
          )}

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

      {lightbox !== null && filteredImages[lightbox] && createPortal(
        <div
          className="fixed inset-0 z-[200] flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-background/95 p-6"
          style={{ overscrollBehavior: "none" }}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close image viewer"
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 z-[203] rounded-full border border-border p-3 hover:border-primary hover:text-primary"
          >
            <X className="h-6 w-6 text-foreground" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => { event.stopPropagation(); navigateLightbox(-1); }}
            className="absolute left-4 top-1/2 z-[203] -translate-y-1/2 rounded-full border border-border p-3 hover:border-primary hover:text-primary md:left-8"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => { event.stopPropagation(); navigateLightbox(1); }}
            className="absolute right-4 top-1/2 z-[203] -translate-y-1/2 rounded-full border border-border p-3 hover:border-primary hover:text-primary md:right-8"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>
          <div
            className="flex h-full w-full items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={filteredImages[lightbox].src}
              alt={filteredImages[lightbox].alt}
              className="max-h-[calc(100dvh-3rem)] max-w-[calc(100vw-3rem)] object-contain rounded-lg border border-border/20 shadow-2xl"
            />
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
};

export default Gallery;
