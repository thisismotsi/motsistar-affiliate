"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import AffiliateLink from "@/components/AffiliateLink";

export default function ProductDetails({ product }: { product: any }) {
  const media = product.media ?? [product.image];
  const [activeIndex, setActiveIndex] = useState(0);

  // JSON-LD
  const jsonLd = useMemo(() => {
    const priceNumber = product.price?.replace(/[^0-9.]/g, "");
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      image: media,
      description: product.description,
      brand: product.merchant,
      aggregateRating:
        typeof product.rating === "number"
          ? {
              "@type": "AggregateRating",
              ratingValue: product.rating.toFixed(1),
              reviewCount: 100,
            }
          : undefined,
      offers: product.price
        ? {
            "@type": "Offer",
            url: product.url,
            priceCurrency: "USD",
            price: priceNumber ?? "0",
            availability: "https://schema.org/InStock",
          }
        : undefined,
    };
  }, [product, media]);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <h1 className="text-3xl md:text-5xl font-extrabold text-center">{product.name}</h1>

      {/* Main image */}
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-glow bg-bg">
        <Image
          src={media[activeIndex]}
          alt={`${product.name} main`}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, 1024px" placeholder="blur"
  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto justify-center py-2">
        {media.map((src: string, i: number) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Show image ${i + 1}`}
            className={`relative w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden border-2 transition ${
              i === activeIndex ? "border-brand-neon shadow-glow" : "border-white/10 opacity-80 hover:opacity-100"
            }`}
          >
            <Image src={src} alt={`${product.name} thumb ${i + 1}`} fill className="object-contain" placeholder="blur"
  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+"/>
          </button>
        ))}
      </div>

      {/* Info */}
      <div className="space-y-3 text-fg/90">
        {product.price && <p className="text-2xl font-bold text-brand-accent">Price: {product.price}</p>}
        {typeof product.rating === "number" && <p>Rating: ⭐ {product.rating.toFixed(1)} / 5</p>}
        {product.description && <p className="leading-relaxed">{product.description}</p>}
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <AffiliateLink
          href={product.url}
          className="btn bg-gradient-to-r from-brand-pink to-brand-neon text-black text-lg px-8 py-4"
        >
          Get {product.name}
        </AffiliateLink>
      </div>
    </div>
  );
}
