import { motion } from "motion/react";
import { useParams, Link, Navigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { collections } from "../data/collections";
import { PageHero } from "../components/PageHero";
import { SectionHeader } from "../components/SectionHeader";
import { ProductCard } from "../components/ProductCard";
import { CollectionCard } from "../components/CollectionCard";

export function CollectionDetail() {
  const { id } = useParams();
  const collection = collections.find(c => c.id === id);

  if (!collection) {
    return <Navigate to="/collections" replace />;
  }

  return (
    <>
      {/* Hero with Collection Image */}
      <PageHero
        src={collection.image}
        alt={collection.title}
        height="h-[70vh]"
        overlay="bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent"
        itemsAlign="end"
        offsetTop
        contentPb="pb-16"
      >
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
      </PageHero>

      {/* Products Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            title="Available Pieces"
            subtitle="Each item is crafted by hand using traditional techniques"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {collection.products?.map((product, index) => (
              <ProductCard
                key={product.id}
                href={`/collections/${collection.id}/products/${product.id}`}
                src={product.image}
                alt={product.name}
                name={product.name}
                description={product.description}
                price={product.price}
                index={index}
                variant="full"
              />
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
          <SectionHeader title="Explore More Collections" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections
              .filter(c => c.id !== collection.id)
              .map((otherCollection, index) => (
                <CollectionCard
                  key={otherCollection.id}
                  href={`/collections/${otherCollection.id}`}
                  src={otherCollection.image}
                  alt={otherCollection.title}
                  title={otherCollection.title}
                  description={otherCollection.description}
                  index={index}
                  variant="simple"
                  aspectRatio="16/9"
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
