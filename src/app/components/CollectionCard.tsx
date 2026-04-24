import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CollectionCardProps {
  href: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  meta?: string;
  index?: number;
  variant?: "overlay" | "simple";
  aspectRatio?: string;
}

export function CollectionCard({
  href,
  src,
  alt,
  title,
  description,
  meta,
  index = 0,
  variant = "overlay",
  aspectRatio,
}: CollectionCardProps) {
  const ratio = aspectRatio ?? (variant === "simple" ? "16/9" : "3/4");

  return (
    <Link to={href}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group cursor-pointer"
      >
        <div className={`relative overflow-hidden mb-4 aspect-[${ratio}]`}>
          {variant === "overlay" ? (
            <>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full"
              >
                <ImageWithFallback src={src} alt={alt} className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute inset-0 bg-stone-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm tracking-wide border border-white px-6 py-2">
                  View Collection
                </span>
              </div>
            </>
          ) : (
            <ImageWithFallback
              src={src}
              alt={alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>
        <h3 className="text-xl mb-2">{title}</h3>
        <p className="text-brand-text-muted text-sm">{description}</p>
        {meta && <p className="text-brand-text-faint text-xs mt-1">{meta}</p>}
      </motion.div>
    </Link>
  );
}
