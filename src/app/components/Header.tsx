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

function useDarkMode() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return [dark, setDark] as const;
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useDarkMode();
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
              onClick={() => setDark(d => !d)}
              className="hover:text-brand-text-on-dark-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
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
