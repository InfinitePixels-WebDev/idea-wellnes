import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
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

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-nav shadow-lg"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="relative z-50">
            <img
              src={logo}
              alt="Idea Wellness"
              className="h-8 md:h-10 w-auto dark:invert"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                  location.pathname === link.to
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute inset-0 rounded-full border border-primary/30" />
                )}
              </Link>
            ))}
            <div className="ml-4 flex items-center gap-3">
              <ThemeToggle />
              <Link to="/contact" className="btn-primary text-xs py-3 px-6">
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="relative z-50 p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu - simple CSS transition, no framer-motion */}
      <div
        className={`lg:hidden fixed inset-0 bg-background/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-6 transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setOpen(false)}
            className={`font-display text-3xl uppercase tracking-wider transition-colors duration-300 hover:text-primary ${
              location.pathname === link.to ? "text-primary" : "text-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary text-sm mt-4">
          Get In Touch
        </Link>
      </div>
    </>
  );
};

export default Navbar;
