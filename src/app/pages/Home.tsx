import { motion } from "motion/react";
import { Link } from "react-router";
import { collections, artisans } from "../data/collections";
import { PageHero } from "../components/PageHero";
import { SectionHeader } from "../components/SectionHeader";
import { CollectionCard } from "../components/CollectionCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        src="https://images.unsplash.com/photo-1641565352066-8e0958c6ba0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        alt="Indonesian batik fashion"
        height="h-screen"
      >
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-6xl lg:text-7xl mb-6 tracking-tight leading-[1.1] text-white">
              Traditional Heritage<br />Meets Modern Fashion
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Discover authentic Indonesian textiles directly from master craftsmen
            </p>
            <div className="flex gap-4">
              <Link to="/collections">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-brand-bg text-brand-text px-8 py-3.5 text-sm tracking-wide hover:bg-brand-bg-alt transition-colors"
                >
                  Explore Collections
                </motion.button>
              </Link>
              <Link to="/for-manufacturers">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-white/30 text-white px-8 py-3.5 text-sm tracking-wide hover:bg-white/10 transition-colors"
                >
                  Register as Manufacturer
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </PageHero>

      {/* Featured Collections */}
      <section id="collections" className="py-24 px-6 lg:px-12">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            title="Featured Collections"
            subtitle="Curated Indonesian craftsmanship, directly from our artisans"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <CollectionCard
                key={collection.id}
                href={`/collections/${collection.id}`}
                src={collection.image}
                alt={collection.title}
                title={collection.title}
                description={collection.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Direct-to-Consumer Value Proposition */}
      <section id="wholesale" className="py-24 px-6 lg:px-12 bg-brand-bg-alt">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl mb-6 tracking-tight leading-tight">
                Direct-to-Consumer Platform Built for Manufacturers
              </h2>
              <p className="text-brand-text-strong text-lg leading-relaxed mb-8">
                Sell directly to customers worldwide. Skip the middlemen, keep your margins, and share your story with buyers who value authentic craftsmanship.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-3xl">01</div>
                  <div>
                    <h3 className="text-xl mb-2">Direct Sales</h3>
                    <p className="text-brand-text-muted">Reach global customers who appreciate authentic textiles</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">02</div>
                  <div>
                    <h3 className="text-xl mb-2">Your Pricing</h3>
                    <p className="text-brand-text-muted">Keep more profit by selling directly</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">03</div>
                  <div>
                    <h3 className="text-xl mb-2">Full Support</h3>
                    <p className="text-brand-text-muted">We handle payments, logistics, and customer service</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5]"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761516659572-a97304ae6c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Indonesian batik textile pattern"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturers Showcase */}
      <section id="manufacturers" className="py-24 px-6 lg:px-12">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            title="Featured Artisans"
            subtitle="Master craftspeople preserving Indonesian textile heritage"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {artisans.map((artisan, index) => (
              <Link key={artisan.id} to={`/artisans/${artisan.id}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="aspect-square overflow-hidden cursor-pointer relative group"
                >
                  <ImageWithFallback
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <p className="text-white text-sm font-medium">{artisan.name}</p>
                      <p className="text-white/70 text-xs">{artisan.location}</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 bg-brand-bg-dark text-brand-text-on-dark">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl mb-6 tracking-tight leading-tight">
              Join the Platform
            </h2>
            <p className="text-brand-text-on-dark-muted text-lg mb-10 max-w-2xl mx-auto">
              Start selling your Indonesian textile collections directly to customers around the world
            </p>
            <Link to="/for-manufacturers">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-brand-btn-text text-brand-btn px-12 py-4 text-sm tracking-wide hover:bg-brand-bg-alt transition-colors"
              >
                Apply as Manufacturer
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
