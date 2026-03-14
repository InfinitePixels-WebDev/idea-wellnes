import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const plans = [
  {
    name: "Essential",
    price: 49,
    desc: "Perfect for getting started on your fitness journey.",
    features: ["Gym floor access", "Locker room & showers", "2 group classes/week", "Fitness assessment", "Mobile app access"],
    recommended: false,
  },
  {
    name: "Performance",
    price: 89,
    desc: "Our most popular plan for serious athletes.",
    features: ["Unlimited gym access", "All group classes", "1 PT session/month", "Nutrition consultation", "Recovery zone access", "Priority booking", "Guest passes (2/month)"],
    recommended: true,
  },
  {
    name: "Elite",
    price: 149,
    desc: "The ultimate premium fitness experience.",
    features: ["24/7 unlimited access", "All group classes", "4 PT sessions/month", "Custom nutrition plan", "Recovery & spa access", "Priority everything", "Unlimited guest passes", "Exclusive events"],
    recommended: false,
  },
];

const Memberships = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 font-body"
          >
            Membership Plans
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="display-xl mb-6 text-foreground"
          >
            Invest In<br /><span className="text-gradient">Yourself</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto font-body"
          >
            Choose the plan that matches your ambition. Every membership includes world-class facilities and expert support.
          </motion.p>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.15}>
              <div
                className={`glow-card p-8 md:p-10 h-full flex flex-col relative ${
                  plan.recommended
                    ? "border-primary shadow-[0_0_30px_hsl(var(--glow-primary))] scale-[1.02] md:scale-105"
                    : ""
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1.5 font-body">
                    <Star className="h-3 w-3 fill-current" /> Recommended
                  </div>
                )}
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="font-display text-xl uppercase mb-2 text-card-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6 font-body">{plan.desc}</p>
                  <div className="mb-8">
                    <span className="display-lg text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground text-sm font-body">/month</span>
                  </div>
                  <div className="flex flex-col gap-3 mb-10 flex-grow">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm text-muted-foreground font-body">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className={plan.recommended ? "btn-primary text-xs w-full justify-center" : "btn-outline text-xs w-full justify-center"}
                  >
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FAQ-like section */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="display-md mb-6 text-foreground">All Plans Include</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {["Free Towels", "Water Station", "WiFi Access", "Parking", "Mobile App", "Progress Tracking", "Community Events", "Clean Facilities"].map((item) => (
                <div key={item} className="flex items-center gap-2 justify-center">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground font-body">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Memberships;
