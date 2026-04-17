import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedThemeToggler as ThemeToggle } from "./ui/animated-theme-toggler";
import logo from "@/assets/idea-wellness-logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/trainers", label: "Trainers" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);
  const topNav = !scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="relative z-50 group">
            <img
              src={logo}
              alt="Idea Wellness"
              className={`h-8 md:h-9 w-auto transition-opacity duration-300 group-hover:opacity-70 ${
                topNav ? "invert" : "dark:invert"
              }`}
            />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="group relative text-[11px] uppercase tracking-[0.25em] font-medium py-2"
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        isActive
                          ? topNav
                            ? "text-white"
                            : "text-foreground"
                          : topNav
                            ? "text-white/70 group-hover:text-white"
                            : "text-muted-foreground/80 group-hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </span>
                    {/* Active indicator — animated underline */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className={`absolute -bottom-0.5 left-0 right-0 h-px ${
                          topNav ? "bg-white" : "bg-foreground"
                        }`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {/* Hover underline */}
                    {!isActive && (
                      <span
                        className={`absolute -bottom-0.5 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out ${
                          topNav ? "bg-white/50" : "bg-foreground/40"
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center gap-5 pl-8 border-l border-border/40">
              <ThemeToggle className={topNav ? "text-white/80 hover:text-white" : undefined} />
              <Link
                to="/contact"
                className={`text-[11px] uppercase tracking-[0.25em] font-medium transition-colors duration-300 ${
                  topNav ? "text-white hover:text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Get In Touch →
              </Link>
            </div>
          </div>

          {/* Mobile toggle — animated hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle className={topNav && !open ? "text-white/80 hover:text-white" : undefined} />
            <button
              onClick={toggleMenu}
              className="relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`block w-6 h-[1.5px] origin-center ${
                  topNav && !open ? "bg-white" : "bg-foreground"
                }`}
              />
              <motion.span
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className={`block w-6 h-[1.5px] origin-center ${
                  topNav && !open ? "bg-white" : "bg-foreground"
                }`}
              />
              <motion.span
                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`block w-6 h-[1.5px] origin-center ${
                  topNav && !open ? "bg-white" : "bg-foreground"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu — staggered animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-background/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-2"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.05 + i * 0.07, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`font-display text-3xl uppercase tracking-wider transition-colors duration-300 hover:text-primary block py-2 ${
                    location.pathname === link.to ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary text-sm mt-6">
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
