import { motion } from "motion/react";
import { useParams, Link, Navigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { collections, artisans } from "../data/collections";
import { Heart, ShoppingBag, CheckCircle, Package, RefreshCw, Shield } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { ProductCard } from "../components/ProductCard";

export function ProductDetail() {
  const { collectionId, productId } = useParams();
  const [selectedSize, setSelectedSize] = useState("");

  const collection = collections.find(c => c.id === collectionId);
  const product = collection?.products?.find(p => p.id === productId);

  if (!collection || !product) {
    return <Navigate to="/collections" replace />;
  }

  const artisan = artisans.find(a => a.collections.includes(collection.id));
  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <>
      {/* Product Detail */}
      <section className="py-24 px-6 lg:px-12 mt-16">
        <div className="max-w-[1600px] mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-2 text-sm text-brand-text-subtle"
          >
            <Link to="/" className="hover:text-brand-text transition-colors">Home</Link>
            <span>/</span>
            <Link to="/collections" className="hover:text-brand-text transition-colors">Collections</Link>
            <span>/</span>
            <Link to={`/collections/${collection.id}`} className="hover:text-brand-text transition-colors">
              {collection.title}
            </Link>
            <span>/</span>
            <span className="text-brand-text">{product.name}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="sticky top-24">
                <div className="aspect-[3/4] bg-brand-thumbnail mb-6">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {[product.image, product.image, product.image, product.image].map((img, i) => (
                    <button
                      key={i}
                      className="aspect-square bg-brand-thumbnail opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`${product.name} view ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <Link
                  to={`/collections/${collection.id}`}
                  className="text-sm tracking-wide text-brand-text-muted hover:text-brand-text transition-colors mb-3 inline-block"
                >
                  {collection.title}
                </Link>
                <h1 className="text-4xl lg:text-5xl mb-4 tracking-tight leading-tight">
                  {product.name}
                </h1>
                <p className="text-3xl mb-6">Rp {product.price.toLocaleString('id-ID')}</p>
                <p className="text-brand-text-strong text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm tracking-wide">Select Size</label>
                  <button className="text-sm text-brand-text-subtle hover:text-brand-text transition-colors underline">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-sm tracking-wide border transition-colors ${
                        selectedSize === size
                          ? "bg-brand-btn text-brand-btn-text border-brand-btn"
                          : "bg-transparent text-brand-text-strong border-brand-border-mid hover:border-brand-border-strong"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-brand-btn text-brand-btn-text py-4 text-sm tracking-wide hover:bg-brand-btn-hover transition-colors flex items-center justify-center gap-3"
                >
                  <ShoppingBag size={20} />
                  Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full border border-brand-border-mid text-brand-text-muted py-4 text-sm tracking-wide hover:bg-brand-bg-alt transition-colors flex items-center justify-center gap-3"
                >
                  <Heart size={20} />
                  Add to Wishlist
                </motion.button>
              </div>

              {/* Product Features */}
              <div className="border-t border-brand-border pt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle size={20} className="text-brand-text-subtle mt-1" />
                  <div>
                    <p className="font-medium mb-1">Authentic Handcrafted</p>
                    <p className="text-brand-text-muted text-sm">Made using traditional {collection.technique.toLowerCase()}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Package size={20} className="text-brand-text-subtle mt-1" />
                  <div>
                    <p className="font-medium mb-1">Free Shipping</p>
                    <p className="text-brand-text-muted text-sm">On orders over Rp 3,000,000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <RefreshCw size={20} className="text-brand-text-subtle mt-1" />
                  <div>
                    <p className="font-medium mb-1">Easy Returns</p>
                    <p className="text-brand-text-muted text-sm">30-day return policy</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield size={20} className="text-brand-text-subtle mt-1" />
                  <div>
                    <p className="font-medium mb-1">Authenticity Guaranteed</p>
                    <p className="text-brand-text-muted text-sm">Certificate of authenticity included</p>
                  </div>
                </div>
              </div>

              {/* Artisan Info */}
              {artisan && (
                <div className="border-t border-brand-border pt-8">
                  <p className="text-sm tracking-wide text-brand-text-subtle mb-4">CRAFTED BY</p>
                  <Link to={`/artisans/${artisan.id}`} className="flex items-center gap-4 group">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <ImageWithFallback
                        src={artisan.image}
                        alt={artisan.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-brand-text-subtle transition-colors">{artisan.name}</p>
                      <p className="text-brand-text-muted text-sm">{artisan.location}</p>
                    </div>
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details Accordion */}
      <section className="py-24 px-6 lg:px-12 bg-brand-bg-alt">
        <div className="max-w-[1600px] mx-auto">
          <div className="space-y-6">
            <details className="group border-b border-brand-border pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl tracking-tight">
                <span>Description</span>
                <span className="text-brand-text-faint group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-6 text-brand-text-muted leading-relaxed space-y-4">
                <p>{product.description}</p>
                <p>
                  This piece is part of our {collection.title} collection, featuring {collection.technique.toLowerCase()}.
                  Each item is individually crafted by skilled artisans in {collection.origin}, ensuring that no two pieces
                  are exactly alike.
                </p>
              </div>
            </details>

            <details className="group border-b border-brand-border pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl tracking-tight">
                <span>Materials & Care</span>
                <span className="text-brand-text-faint group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-6 text-brand-text-muted leading-relaxed">
                <ul className="space-y-2">
                  <li>• 100% natural fibers (cotton or silk)</li>
                  <li>• Hand-dyed using traditional methods</li>
                  <li>• Dry clean recommended or gentle hand wash</li>
                  <li>• Iron on low heat while damp</li>
                  <li>• Store in a cool, dry place away from direct sunlight</li>
                </ul>
              </div>
            </details>

            <details className="group border-b border-brand-border pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl tracking-tight">
                <span>Shipping & Returns</span>
                <span className="text-brand-text-faint group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-6 text-brand-text-muted leading-relaxed space-y-4">
                <p>
                  <strong>Shipping:</strong> We offer worldwide shipping. Orders over Rp 3,000,000 receive free international shipping.
                  Standard delivery takes 7-14 business days.
                </p>
                <p>
                  <strong>Returns:</strong> We accept returns within 30 days of delivery. Items must be unworn and in original
                  condition with tags attached.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader title="You May Also Like" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {collection.products
              ?.filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct, index) => (
                <ProductCard
                  key={relatedProduct.id}
                  href={`/collections/${collection.id}/products/${relatedProduct.id}`}
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  name={relatedProduct.name}
                  price={relatedProduct.price}
                  index={index}
                  variant="minimal"
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
