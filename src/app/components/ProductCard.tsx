import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, ShoppingBag } from "lucide-react";

interface ProductCardProps {
  href: string;
  src: string;
  alt: string;
  name: string;
  description?: string;
  price: number;
  index?: number;
  variant?: "full" | "minimal";
}

export function ProductCard({
  href,
  src,
  alt,
  name,
  description,
  price,
  index = 0,
  variant = "full",
}: ProductCardProps) {
  return (
    <Link to={href}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group cursor-pointer"
      >
        <div className="relative overflow-hidden mb-4 aspect-[3/4] bg-brand-thumbnail">
          <ImageWithFallback
            src={src}
            alt={alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {variant === "full" && (
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={(e) => e.preventDefault()}
                className="bg-stone-900/20 backdrop-blur-sm p-2.5 rounded-full hover:bg-stone-900/40 transition-colors"
              >
                <Heart size={18} className="text-white" />
              </button>
            </div>
          )}
        </div>

        {variant === "full" ? (
          <div className="space-y-3">
            <div>
              <h3 className="text-xl mb-1">{name}</h3>
              {description && <p className="text-brand-text-muted text-sm">{description}</p>}
            </div>
            <div className="flex justify-between items-center pt-2">
              <p className="text-2xl">Rp {price.toLocaleString("id-ID")}</p>
              <motion.button
                onClick={(e) => e.preventDefault()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-btn text-brand-btn-text px-6 py-2.5 text-sm tracking-wide hover:bg-brand-btn-hover transition-colors flex items-center gap-2"
              >
                <ShoppingBag size={16} />
                Add to Cart
              </motion.button>
            </div>
          </div>
        ) : (
          <>
            <h3 className="mb-2">{name}</h3>
            <p className="text-xl">Rp {price.toLocaleString("id-ID")}</p>
          </>
        )}
      </motion.div>
    </Link>
  );
}
