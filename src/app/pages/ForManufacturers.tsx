import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Check } from "lucide-react";

export function ForManufacturers() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center mt-16">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1588006324772-90fd2d83f522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="Indonesian artisan at work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/40" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl lg:text-7xl mb-6 tracking-tight leading-[1.1] text-white">
              Sell Your Craft<br />Directly to the World
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Join Indonesia's premier direct-to-consumer platform for traditional textiles. Keep your margins, tell your story, reach global customers.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-btn-text text-brand-btn px-12 py-4 text-sm tracking-wide hover:bg-brand-bg-alt transition-colors"
            >
              Apply Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl lg:text-5xl mb-6 tracking-tight">Why Manufacturers Choose Nusantara</h2>
            <p className="text-brand-text-muted text-lg max-w-2xl mx-auto">
              Built specifically for Indonesian textile artisans who want to grow their business globally
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Higher Margins",
                description: "Keep 85% of each sale. No middlemen, no distributors taking their cut. You set your prices, we handle everything else.",
                stat: "85%"
              },
              {
                title: "Global Reach",
                description: "Access customers in 50+ countries who specifically seek authentic, handcrafted Indonesian textiles.",
                stat: "50+"
              },
              {
                title: "Full Support",
                description: "We manage payments, shipping, customer service, and platform maintenance. You focus on creating.",
                stat: "24/7"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-brand-bg-alt border border-brand-border p-8"
              >
                <div className="text-5xl font-light mb-6 text-brand-text-faint">{benefit.stat}</div>
                <h3 className="text-2xl mb-4 tracking-tight">{benefit.title}</h3>
                <p className="text-brand-text-muted leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 lg:px-12 bg-brand-bg-alt">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4 tracking-tight">Getting Started is Simple</h2>
            <p className="text-brand-text-muted text-lg">From application to first sale in as little as one week</p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Apply & Get Verified",
                description: "Submit your application with examples of your work. We verify authenticity and craftsmanship quality.",
                timeline: "2-3 days"
              },
              {
                step: "02",
                title: "Set Up Your Profile",
                description: "Create your artisan profile, share your story, and upload high-quality photos of your collections.",
                timeline: "1-2 days"
              },
              {
                step: "03",
                title: "List Your Products",
                description: "Add your pieces with descriptions and pricing. Our team provides photography guidelines and support.",
                timeline: "2-3 days"
              },
              {
                step: "04",
                title: "Start Selling",
                description: "Your collections go live. When customers purchase, we handle payment processing and coordinate shipping.",
                timeline: "Ongoing"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-8 items-start border-l-2 border-brand-border-mid pl-8 pb-8"
              >
                <div className="text-5xl font-light text-brand-text-faint min-w-[80px]">{step.step}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl tracking-tight">{step.title}</h3>
                    <span className="text-sm text-brand-text-faint tracking-wide">{step.timeline}</span>
                  </div>
                  <p className="text-brand-text-muted leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl mb-8 tracking-tight">Everything You Need to Succeed</h2>

              <div className="space-y-4">
                {[
                  "Dedicated artisan profile page",
                  "Unlimited product listings",
                  "Secure payment processing",
                  "Global shipping coordination",
                  "Customer service support",
                  "Marketing & promotion",
                  "Analytics dashboard",
                  "Photography guidelines"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-center gap-4"
                  >
                    <div className="bg-brand-thumbnail p-1.5 rounded-full">
                      <Check size={18} className="text-brand-text-strong" />
                    </div>
                    <span className="text-lg text-brand-text-strong">{feature}</span>
                  </motion.div>
                ))}
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
                alt="Indonesian textile detail"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 px-6 lg:px-12 bg-brand-bg-alt">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl lg:text-5xl mb-6 tracking-tight">Who Can Apply?</h2>
            <p className="text-brand-text-muted text-lg">
              We partner with verified Indonesian textile manufacturers and artisans
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-bg-card border border-brand-border p-10"
          >
            <h3 className="text-2xl mb-6 tracking-tight">Requirements:</h3>
            <ul className="space-y-4 text-brand-text-muted">
              <li className="flex gap-3">
                <span className="text-brand-text-faint">•</span>
                <span>Registered business or cooperative in Indonesia</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-text-faint">•</span>
                <span>Demonstrated expertise in traditional Indonesian textile techniques (batik, songket, tenun, etc.)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-text-faint">•</span>
                <span>Ability to fulfill orders and maintain quality standards</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-text-faint">•</span>
                <span>Commitment to ethical and sustainable practices</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-text-faint">•</span>
                <span>Portfolio of previous work (minimum 10 pieces)</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12 bg-brand-bg-dark text-brand-text-on-dark">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl mb-6 tracking-tight leading-tight">
              Ready to Join Nusantara?
            </h2>
            <p className="text-brand-text-on-dark-muted text-lg mb-10 max-w-2xl mx-auto">
              Start your application today and reach customers around the world who value authentic Indonesian craftsmanship
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-btn-text text-brand-btn px-12 py-4 text-sm tracking-wide hover:bg-brand-bg-alt transition-colors"
            >
              Submit Application
            </motion.button>
            <p className="text-brand-text-faint text-sm mt-6">
              Questions? <Link to="/about" className="text-brand-text-on-dark hover:underline">Learn more about how we work</Link>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
