import { motion } from "motion/react";
import { useParams, Link, Navigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { artisans, collections } from "../data/collections";

export function ArtisanProfile() {
  const { id } = useParams();
  const artisan = artisans.find(a => a.id === id);

  if (!artisan) {
    return <Navigate to="/artisans" replace />;
  }

  const artisanCollections = collections.filter(c =>
    artisan.collections.includes(c.id)
  );

  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] flex items-end mt-16">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <ImageWithFallback
              src={artisan.image}
              alt={artisan.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-12 w-full pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl"
          >
            <p className="text-white/60 text-sm tracking-wide mb-4">MASTER ARTISAN</p>
            <h1 className="text-5xl lg:text-6xl mb-6 tracking-tight">
              {artisan.name}
            </h1>
            <div className="flex gap-8 text-lg mb-8">
              <div>
                <p className="text-white/50 mb-1 text-sm">Location</p>
                <p className="text-white">{artisan.location}</p>
              </div>
              <div>
                <p className="text-white/50 mb-1 text-sm">Specialty</p>
                <p className="text-white">{artisan.specialty}</p>
              </div>
              <div>
                <p className="text-white/50 mb-1 text-sm">Established</p>
                <p className="text-white">{artisan.establishedYear}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl mb-8 tracking-tight">
                About {artisan.name.split(' ')[0]}
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                {artisan.bio}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl mb-4 tracking-tight">Craftsmanship Details</h3>
                <div className="space-y-4 text-white/60">
                  <div className="flex justify-between py-3 border-b border-white/10">
                    <span>Years of Experience</span>
                    <span className="text-white">{new Date().getFullYear() - artisan.establishedYear}+ years</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/10">
                    <span>Specialty</span>
                    <span className="text-white">{artisan.specialty}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/10">
                    <span>Collections</span>
                    <span className="text-white">{artisan.collections.length}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/10">
                    <span>Workshop Location</span>
                    <span className="text-white">{artisan.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections by this Artisan */}
      <section className="py-24 px-6 lg:px-12 bg-zinc-950">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4 tracking-tight">Collections</h2>
            <p className="text-white/60 text-lg">Explore the work of {artisan.name}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisanCollections.map((collection, index) => (
              <Link key={collection.id} to={`/collections/${collection.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                    <ImageWithFallback
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl mb-2">{collection.title}</h3>
                  <p className="text-white/60 text-sm">{collection.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Artisans */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4 tracking-tight">Other Master Artisans</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {artisans
              .filter(a => a.id !== artisan.id)
              .map((otherArtisan, index) => (
                <Link key={otherArtisan.id} to={`/artisans/${otherArtisan.id}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="aspect-square overflow-hidden cursor-pointer relative group"
                  >
                    <ImageWithFallback
                      src={otherArtisan.image}
                      alt={otherArtisan.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 flex items-end p-4">
                      <div>
                        <p className="text-white text-sm font-medium">{otherArtisan.name}</p>
                        <p className="text-white/70 text-xs">{otherArtisan.location}</p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
