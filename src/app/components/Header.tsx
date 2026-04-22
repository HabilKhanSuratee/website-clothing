import { motion } from "motion/react";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl tracking-[0.3em] font-light"
            >
              NUSANTARA
            </motion.div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/collections" className="text-sm tracking-wide hover:text-white/70 transition-colors">
              Collections
            </Link>
            <Link to="/for-manufacturers" className="text-sm tracking-wide hover:text-white/70 transition-colors">
              For Manufacturers
            </Link>
            <Link to="/artisans" className="text-sm tracking-wide hover:text-white/70 transition-colors">
              Our Artisans
            </Link>
            <Link to="/about" className="text-sm tracking-wide hover:text-white/70 transition-colors">
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <button className="hover:text-white/70 transition-colors">
              <Search size={18} />
            </button>
            <button className="hover:text-white/70 transition-colors">
              <User size={18} />
            </button>
            <button className="hover:text-white/70 transition-colors">
              <Heart size={18} />
            </button>
            <button className="hover:text-white/70 transition-colors">
              <ShoppingBag size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
