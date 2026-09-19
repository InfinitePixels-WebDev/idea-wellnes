import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import TextReveal from "@/components/TextReveal";
import { trainers } from "@/data/trainers";

const Trainers = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <div className="overflow-hidden">
      {/* Hero — split layout with parallax */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-end overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img src="/converted_jpg/IMG_3920.jpg" alt="Training session" loading="lazy" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-10 md:pb-16 w-full">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-primary text-sm tracking-[0.2em] font-semibold mb-4 font-body"
          >
            Our Trainers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="display-xl mb-6 text-foreground"
          >
            World-Class<br /><span className="text-gradient">Coaching</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-muted-foreground max-w-xl font-body"
          >
            Our certified experts bring decades of experience across every discipline.
          </motion.p>
        </motion.div>
      </section>

      {/* Philosophy text reveal */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <TextReveal
            text="Our coaches don't just train your body. They rewire your mindset, refine your technique, and push you beyond what you thought possible."
            className="text-xl md:text-3xl lg:text-4xl font-display leading-tight text-foreground"
          />
        </div>
      </section>

      {/* Parallax image divider */}
      <ParallaxSection imgSrc="/converted_jpg/IMG_0639.jpg" imgAlt="Gym atmosphere" className="h-[30vh] md:h-[40vh]" speed={0.5} overlay={false}>
        <div className="absolute inset-0 bg-background/20" />
      </ParallaxSection>

      {/* Trainer profiles */}
      <section className="section-padding">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 md:gap-24">
          {trainers.map((trainer, index) => (
            <ScrollReveal key={trainer.slug} delay={0.1}>
              <article className={`grid min-w-0 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20 ${index % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className={`group min-w-0 ${index % 2 === 0 ? "" : "md:order-2"}`}
                >
                  <div className="aspect-[3/4] overflow-hidden border border-border bg-muted p-2 sm:p-3">
                    <img
                      src={trainer.image}
                      alt={`Coach ${trainer.name}`}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </motion.div>

                <div className={`min-w-0 ${index % 2 === 0 ? "" : "md:order-1"}`}>
                  <h2 className="break-words font-display text-3xl text-foreground md:text-4xl">
                    Coach {trainer.name}
                  </h2>
                  <div className="my-5 h-0.5 w-12 bg-primary" />
                  {trainer.role && (
                    <p className="mb-4 font-body text-base font-semibold text-foreground">
                      {trainer.role}
                    </p>
                  )}
                  <p className="max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
                    {trainer.bio}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA with parallax */}
      <ParallaxSection imgSrc="/converted_jpg/IMG_0631.jpg" imgAlt="Training" className="flex items-center" speed={0.3}>
        <div className="section-padding w-full">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="display-lg mb-6 text-foreground">Train With<br /><span className="text-gradient">The Best</span></h2>
              <p className="text-lg text-muted-foreground mb-10 font-body">
                Book a session and experience the difference expert coaching makes.
              </p>
              <Link to="/contact" className="btn-primary text-sm">
                Book A Session <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Trainers;
