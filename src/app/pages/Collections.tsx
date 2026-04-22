import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { collections } from "../data/collections";

export function Collections() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center mt-16">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761516659497-8478e39d2b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="Indonesian textiles"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-12 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl lg:text-6xl mb-6 tracking-tight">
              Our Collections
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Explore centuries-old Indonesian textile traditions reimagined for contemporary fashion
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {collections.map((collection, index) => (
              <Link key={collection.id} to={`/collections/${collection.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={collection.image}
                        alt={collection.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm tracking-wide border border-white px-8 py-3">
                        Explore Collection
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl tracking-tight">{collection.title}</h3>
                    <p className="text-white/60 leading-relaxed">{collection.description}</p>
                    <div className="pt-2 space-y-1">
                      <p className="text-sm text-white/50">
                        <span className="text-white/70">Origin:</span> {collection.origin}
                      </p>
                      <p className="text-sm text-white/50">
                        <span className="text-white/70">Technique:</span> {collection.technique}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-zinc-950">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6 tracking-tight">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Browse our artisan profiles to discover more unique collections and custom work
            </p>
            <Link to="/artisans">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-white/30 text-white px-10 py-3.5 text-sm tracking-wide hover:bg-white/10 transition-colors"
              >
                Meet Our Artisans
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
