import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center mt-16">
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl lg:text-6xl mb-6 tracking-tight leading-tight">
              Preserving Heritage, Empowering Artisans
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Connecting Indonesia's master textile craftspeople directly with a global community that values authentic, handmade fashion
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl mb-6 tracking-tight">Our Mission</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Nusantara was founded to bridge centuries of Indonesian textile heritage with the modern fashion world. We believe that traditional craftsmanship deserves a direct path to customers who appreciate authenticity, quality, and cultural storytelling.
              </p>
              <p className="text-white/60 leading-relaxed">
                By eliminating intermediaries and creating a direct-to-consumer platform, we ensure artisans receive fair compensation for their work while customers gain access to truly unique, handcrafted pieces that carry generations of knowledge and skill.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5]"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1745293007697-efa1084793ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Indonesian artisan"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Indonesian Textile Heritage */}
      <section className="py-24 px-6 lg:px-12 bg-zinc-950">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl mb-6 tracking-tight">Indonesian Textile Traditions</h2>
            <p className="text-white/60 text-lg">
              Indonesia's textile heritage spans over 2,000 years, with each island developing unique techniques and symbolic patterns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Batik",
                description: "Ancient wax-resist dyeing technique using hand-drawn or stamped patterns, recognized by UNESCO as Intangible Cultural Heritage",
                origin: "Java & Bali"
              },
              {
                title: "Songket",
                description: "Luxurious supplementary weft weaving with metallic threads, traditionally reserved for royalty and special ceremonies",
                origin: "Sumatra & Bali"
              },
              {
                title: "Tenun Ikat",
                description: "Complex resist-dyeing process applied to threads before weaving, creating intricate geometric and symbolic patterns",
                origin: "Eastern Indonesia"
              }
            ].map((technique, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black/40 p-8 border border-white/10"
              >
                <h3 className="text-2xl mb-4 tracking-tight">{technique.title}</h3>
                <p className="text-white/60 leading-relaxed mb-4">{technique.description}</p>
                <p className="text-white/40 text-sm tracking-wide">Origin: {technique.origin}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl lg:text-5xl mb-6 tracking-tight">How Nusantara Works</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A transparent platform connecting artisans directly with customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex gap-6">
                <div className="text-4xl font-light text-white/40">01</div>
                <div>
                  <h3 className="text-xl mb-3">For Artisans</h3>
                  <p className="text-white/60 leading-relaxed">
                    Create your profile, upload your collections, set your prices. We handle the technology, payments, and logistics so you can focus on your craft.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-light text-white/40">02</div>
                <div>
                  <h3 className="text-xl mb-3">Direct Sales</h3>
                  <p className="text-white/60 leading-relaxed">
                    When a customer purchases your work, you keep 85% of the sale price. Our transparent platform fee covers payment processing, hosting, and support—far better margins than traditional distribution channels.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex gap-6">
                <div className="text-4xl font-light text-white/40">03</div>
                <div>
                  <h3 className="text-xl mb-3">For Customers</h3>
                  <p className="text-white/60 leading-relaxed">
                    Browse authentic collections, learn artisan stories, and purchase directly from the makers. Every piece comes with its story.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-light text-white/40">04</div>
                <div>
                  <h3 className="text-xl mb-3">Global Delivery</h3>
                  <p className="text-white/60 leading-relaxed">
                    We partner with trusted logistics providers to ensure your handcrafted piece arrives safely, no matter where you are.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12 bg-white text-black">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl mb-6 tracking-tight leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-black/60 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're an artisan looking to reach global customers or a buyer seeking authentic Indonesian textiles
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/for-manufacturers">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-black text-white px-10 py-4 text-sm tracking-wide hover:bg-black/90 transition-colors"
                >
                  Become a Manufacturer
                </motion.button>
              </Link>
              <Link to="/collections">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-black/30 text-black px-10 py-4 text-sm tracking-wide hover:bg-black/5 transition-colors"
                >
                  Shop Collections
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
