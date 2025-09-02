// app/promotions/page.tsx
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Section from "@/components/Section";

export const metadata = {
  title: "Promotions",
  description: "Current deals and promotions curated by Motsistar.",
  alternates: { canonical: "https://motsistar.com/promotions" },
};

export default function PromotionsPage() {
  const promo = products.filter((p) => p.promo);
  return (
    <Section>
      <h1 className="text-3xl md:text-4xl font-bold mb-6">🔥 Promotions</h1>
      {promo.length === 0 ? (
        <p>No active promotions.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {promo.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      )}
    </Section>
  );
}
