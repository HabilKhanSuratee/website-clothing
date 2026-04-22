import { motion } from "motion/react";
import { useParams, Link, Navigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { collections } from "../data/collections";
import { ShoppingBag, Heart } from "lucide-react";

export function CollectionDetail() {
  const { id } = useParams();
  const collection = collections.find(c => c.id === id);

  if (!collection) {
    return <Navigate to="/collections" replace />;
  }

  return (
    <>
      {/* Hero with Collection Image */}
      <section className="relative h-[70vh] flex items-end mt-16">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <ImageWithFallback
              src={collection.image}
              alt={collection.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-12 w-full pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-6xl mb-6 tracking-tight text-white">
              {collection.title}
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              {collection.fullDescription}
            </p>
            <div className="flex gap-8 text-sm">
              <div>
                <p className="text-white/50 mb-1">Origin</p>
                <p className="text-white">{collection.origin}</p>
              </div>
              <div>
                <p className="text-white/50 mb-1">Technique</p>
                <p className="text-white">{collection.technique}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4 tracking-tight">Available Pieces</h2>
            <p className="text-brand-text-muted text-lg">Each item is crafted by hand using traditional techniques</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {collection.products?.map((product, index) => (
              <Link key={product.id} to={`/collections/${collection.id}/products/${product.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden mb-4 aspect-[3/4] bg-brand-thumbnail">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button
                        onClick={(e) => e.preventDefault()}
                        className="bg-stone-900/20 backdrop-blur-sm p-2.5 rounded-full hover:bg-stone-900/40 transition-colors"
                      >
                        <Heart size={18} className="text-white" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl mb-1">{product.name}</h3>
                        <p className="text-brand-text-muted text-sm">{product.description}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <p className="text-2xl">Rp {product.price.toLocaleString('id-ID')}</p>
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
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About the Technique */}
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
                About the Craft
              </h2>
              <p className="text-brand-text-strong text-lg leading-relaxed mb-6">
                {collection.fullDescription}
              </p>
              <p className="text-brand-text-muted leading-relaxed mb-8">
                Each piece in the {collection.title} collection is created using {collection.technique.toLowerCase()},
                a time-honored process that has been passed down through generations of Indonesian artisans.
              </p>
              <Link to="/artisans">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-brand-border-strong text-brand-text-muted px-8 py-3 text-sm tracking-wide hover:bg-brand-thumbnail transition-colors"
                >
                  Meet the Artisans
                </motion.button>
              </Link>
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
                alt="Textile detail"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Collections */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4 tracking-tight">Explore More Collections</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections
              .filter(c => c.id !== collection.id)
              .map((otherCollection, index) => (
                <Link key={otherCollection.id} to={`/collections/${otherCollection.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden mb-4 aspect-[16/9]">
                      <ImageWithFallback
                        src={otherCollection.image}
                        alt={otherCollection.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-2xl mb-2">{otherCollection.title}</h3>
                    <p className="text-brand-text-muted">{otherCollection.description}</p>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
