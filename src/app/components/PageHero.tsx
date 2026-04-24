import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PageHeroProps {
  src: string;
  alt: string;
  height?: string;
  overlay?: string;
  itemsAlign?: "center" | "end";
  offsetTop?: boolean;
  contentPb?: string;
  children: React.ReactNode;
}

export function PageHero({
  src,
  alt,
  height = "h-screen",
  overlay = "bg-gradient-to-r from-stone-900/80 via-stone-900/50 to-transparent",
  itemsAlign = "center",
  offsetTop = false,
  contentPb = "",
  children,
}: PageHeroProps) {
  return (
    <section
      className={`relative ${height} flex ${itemsAlign === "end" ? "items-end" : "items-center"} ${offsetTop ? "mt-16" : ""}`}
    >
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <ImageWithFallback src={src} alt={alt} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 ${overlay}`} />
        </motion.div>
      </div>
      <div className={`relative z-10 max-w-[1920px] mx-auto px-6 lg:px-12 w-full ${contentPb}`}>
        {children}
      </div>
    </section>
  );
}
