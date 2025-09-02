"use client";
import Section from "@/components/Section";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";

export default function ProductsPage() {
  const promoProducts = products.filter(p => p.promo);

  return (
    <>
      <Section id="promotions">
        <h1 className="mb-6 text-3xl font-bold">🔥 Promotions</h1>
        {promoProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {promoProducts.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard
                  id={p.id}
                  name={p.name}
                  image={p.image}
                  price={p.price}
                  rating={p.rating}
                  badge={p.badge}
                  url={p.url}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-white/70">No promotions at this time.</p>
        )}
      </Section>

      {/* All products */}
      <Section id="all-products">
        <h1 className="mb-6 text-3xl font-bold">All Products</h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <ProductCard
                id={p.id}
                name={p.name}
                image={p.image}
                price={p.price}
                rating={p.rating}
                badge={p.badge}
                url={p.url}
              />
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
