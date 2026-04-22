import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { artisans } from "../data/collections";

export function Artisans() {
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
              src="https://images.unsplash.com/photo-1588006324772-90fd2d83f522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="Indonesian artisans"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-stone-900/60" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-12 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl lg:text-6xl mb-6 tracking-tight text-white">
              Our Master Artisans
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Meet the craftspeople preserving centuries of Indonesian textile heritage
            </p>
          </motion.div>
        </div>
      </section>

      {/* Artisans Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {artisans.map((artisan, index) => (
              <Link key={artisan.id} to={`/artisans/${artisan.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={artisan.image}
                        alt={artisan.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-100 flex items-end p-6">
                      <div className="transform transition-transform group-hover:translate-y-0">
                        <p className="text-white font-medium mb-1">{artisan.name}</p>
                        <p className="text-white/70 text-sm mb-2">{artisan.location}</p>
                        <p className="text-white/50 text-xs">{artisan.specialty}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Artisan Network */}
      <section className="py-24 px-6 lg:px-12 bg-brand-bg-alt">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl mb-6 tracking-tight leading-tight">
                A Network of Master Craftspeople
              </h2>
              <p className="text-brand-text-strong text-lg leading-relaxed mb-6">
                Every artisan on Nusantara has been carefully vetted for their expertise, authenticity, and commitment to preserving traditional Indonesian textile techniques.
              </p>
              <p className="text-brand-text-muted leading-relaxed mb-8">
                From family workshops operating for generations to innovative collectives reviving ancient patterns, our artisans represent the breadth and depth of Indonesia's rich textile heritage.
              </p>
              <Link to="/for-manufacturers">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-brand-border-strong text-brand-text-muted px-8 py-3 text-sm tracking-wide hover:bg-brand-thumbnail transition-colors"
                >
                  Become an Artisan Partner
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-brand-bg-card border border-brand-border p-8">
                <div className="text-4xl font-light mb-4 text-brand-text-subtle">{artisans.length}</div>
                <p className="text-xl mb-2">Master Artisans</p>
                <p className="text-brand-text-muted text-sm">Across Indonesia's major textile regions</p>
              </div>
              <div className="bg-brand-bg-card border border-brand-border p-8">
                <div className="text-4xl font-light mb-4 text-brand-text-subtle">100+</div>
                <p className="text-xl mb-2">Years of Combined Experience</p>
                <p className="text-brand-text-muted text-sm">Preserving traditional techniques</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6 tracking-tight">
              Discover Their Collections
            </h2>
            <p className="text-brand-text-muted text-lg mb-8 max-w-2xl mx-auto">
              Each artisan brings their unique perspective and mastery to their craft
            </p>
            <Link to="/collections">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-brand-btn text-brand-btn-text px-10 py-3.5 text-sm tracking-wide hover:bg-brand-btn-hover transition-colors"
              >
                Browse All Collections
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
