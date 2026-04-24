import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, User, Heart, ShoppingBag, Menu, X, Sun, Moon } from "lucide-react";
import { Link, useNavigate } from "react-router";

const navLinks = [
  { to: "/collections", label: "Collections" },
  { to: "/for-manufacturers", label: "For Manufacturers" },
  { to: "/artisans", label: "Our Artisans" },
  { to: "/about", label: "About" },
];

type ThemeConfig = {
  name: string;
  cssClass: string;
  icon: React.ReactNode;
};

// To add a theme: append an entry here, then add a .theme-<name> block in theme.css.
// icon = the symbol that represents this theme (shown on the button when this theme is next).
const THEMES: ThemeConfig[] = [
  { name: "light",     cssClass: "",                icon: <Sun size={18} /> },
  { name: "dark",      cssClass: "dark",            icon: <Moon size={18} /> },
  { name: "botanical",  cssClass: "theme-botanical",  icon: <span className="inline-flex items-center justify-center w-[18px] h-[18px] text-sm font-bold leading-none select-none">1</span> },
  { name: "olive",      cssClass: "theme-olive",      icon: <span className="inline-flex items-center justify-center w-[18px] h-[18px] text-sm font-bold leading-none select-none">2</span> },
  { name: "caramel",    cssClass: "theme-caramel",    icon: <span className="inline-flex items-center justify-center w-[18px] h-[18px] text-sm font-bold leading-none select-none">3</span> },
  { name: "coffee",     cssClass: "theme-coffee",     icon: <span className="inline-flex items-center justify-center w-[18px] h-[18px] text-sm font-bold leading-none select-none">4</span> },
  { name: "ember",      cssClass: "theme-ember",      icon: <span className="inline-flex items-center justify-center w-[18px] h-[18px] text-sm font-bold leading-none select-none">5</span> },
  { name: "mocha",      cssClass: "theme-mocha",      icon: <span className="inline-flex items-center justify-center w-[18px] h-[18px] text-sm font-bold leading-none select-none">6</span> },
  { name: "vivid",      cssClass: "theme-vivid",      icon: <span className="inline-flex items-center justify-center w-[18px] h-[18px] text-sm font-bold leading-none select-none">7</span> },
  { name: "nusantara",  cssClass: "theme-nusantara",  icon: <span className="inline-flex items-center justify-center w-[18px] h-[18px] text-sm font-bold leading-none select-none">8</span> },
];

function useTheme() {
  const [index, setIndex] = useState(() => {
    if (typeof window === "undefined") return 0;
    const stored = localStorage.getItem("theme");
    const found = THEMES.findIndex(t => t.name === stored);
    return found >= 0 ? found : 0;
  });

  useEffect(() => {
    const current = THEMES[index];
    THEMES.forEach(t => { if (t.cssClass) document.documentElement.classList.remove(t.cssClass); });
    if (current.cssClass) document.documentElement.classList.add(current.cssClass);
    localStorage.setItem("theme", current.name);
  }, [index]);

  const cycle = () => setIndex(i => (i + 1) % THEMES.length);
  const next = THEMES[(index + 1) % THEMES.length];

  return { current: THEMES[index], cycle, next };
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { current, cycle, next } = useTheme();
  const navigate = useNavigate();

  function handleMobileNav(to: string) {
    setMenuOpen(false);
    navigate(to);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-header-bg/95 text-brand-header-text backdrop-blur-md">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl tracking-[0.3em] font-light"
            >
              NUSANTARA
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="text-sm tracking-wide hover:text-brand-text-on-dark-muted transition-colors">
                {label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <button className="hover:text-brand-text-on-dark-muted transition-colors">
              <Search size={18} />
            </button>
            <button className="hover:text-brand-text-on-dark-muted transition-colors">
              <User size={18} />
            </button>
            <button className="hover:text-brand-text-on-dark-muted transition-colors">
              <Heart size={18} />
            </button>
            <button className="hover:text-brand-text-on-dark-muted transition-colors">
              <ShoppingBag size={18} />
            </button>
            <button
              onClick={cycle}
              className="hover:text-brand-text-on-dark-muted transition-colors"
              aria-label={`Current theme: ${current.name}. Switch to ${next.name}`}
            >
              {current.icon}
            </button>
            {/* Hamburger — mobile only */}
            <button
              className="md:hidden hover:text-brand-text-on-dark-muted transition-colors"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-brand-header-bg px-6 py-4 flex flex-col gap-4"
          >
            {navLinks.map(({ to, label }) => (
              <button
                key={to}
                onClick={() => handleMobileNav(to)}
                className="text-left text-sm tracking-wide hover:text-brand-text-on-dark-muted transition-colors py-1"
              >
                {label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
