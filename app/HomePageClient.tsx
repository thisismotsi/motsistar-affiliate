"use client";

{/* Organization structured data */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Motsistar",
      url: "https://motsistar.com",
      logo: "https://motsistar.com/logo.png",
    }),
  }}
/>
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { useSearchParams } from "next/navigation";

export default function HomePageClient() {
  const searchParams = useSearchParams();
  const clickedId = searchParams.get("product");

  const clickedProduct = products.find((p) => p.id === clickedId);
  const featuredProduct = clickedProduct ?? products[products.length - 1];
  const promoProducts = products.filter((p) => p.promo);

  return (
    <>
      {/* Hero */}
      <Section id="hero">
        <div className="relative flex h-[80vh] items-center justify-center overflow-hidden rounded-2xl shadow-glow">
          <Image
            src="/images/hero/hero-3.gif"
            alt="Curated selection"
            fill
            priority
            className="absolute inset-0 object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/60 to-bg/90" />
          <div className="relative z-10 text-center max-w-2xl px-6">
            <h1 className="text-5xl md:text-7xl font-extrabold neon mb-6">
              MOTSISTAR
            </h1>
            <p className="text-lg md:text-xl text-fg/80 mb-8">
      
              We only recommend what we use, are using or have used.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="btn bg-gradient-to-r from-brand-pink to-brand-neon text-bg shadow-glow"
              >
                Shop Curations
              </Link>
              <Link
                href="/affiliate-disclosure"
                className="btn border border-fg/30 text-fg hover:bg-fg/10"
              >
                Affiliate Disclosure
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Big Card */}
      <Section id="featured-big">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center bg-bg rounded-2xl shadow-glow overflow-hidden">
          {/* Left: Content */}
          <div className="p-8 md:p-12 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug text-brand-neon">
              {featuredProduct.name}
            </h2>
            {featuredProduct.description && (
              <p className="text-fg/80 leading-relaxed">
                {featuredProduct.description}
              </p>
            )}
            {featuredProduct.price && (
              <p className="text-xl font-semibold text-brand-accent">
                Price ~ {featuredProduct.price}
              </p>
            )}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <Link
                href={featuredProduct.url}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="px-6 py-3 rounded-lg font-medium border border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-bg transition"
              >
                Get {featuredProduct.name}
              </Link>
              <Link
                href={`/products/${featuredProduct.id}`}
                className="px-6 py-3 rounded-lg font-medium border border-brand-neon text-brand-neon hover:bg-brand-neon hover:text-bg transition"
              >
                View More Details
              </Link>
            </div>
          </div>

          {/* Right: Image with arch style */}
          <div className="relative h-[350px] md:h-[500px] overflow-hidden">
            <div className="absolute inset-0 rounded-tl-[120px] rounded-br-[120px] overflow-hidden">
              <Image
                src={featuredProduct.image}
                alt={featuredProduct.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Promotions */}
      <Section id="promotions">
        <h2 className="mb-6 text-2xl font-bold text-brand-neon">🔥 On Promotion</h2>
        {promoProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {promoProducts.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                name={p.name}
                image={p.image}
                price={p.price}
                rating={p.rating}
                badge={p.badge}
                url={p.url}
              />
            ))}
          </div>
        ) : (
          <p className="text-fg/70">No products currently on promotion.</p>
        )}
      </Section>

      {/* More Picks */}
      <Section id="featured">
        <h2 className="mb-6 text-2xl font-bold">More Picks</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              name={p.name}
              image={p.image}
              price={p.price}
              rating={p.rating}
              badge={p.badge}
              url={p.url}
            />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta">
        <CTA />
      </Section>
    </>
  );
}
