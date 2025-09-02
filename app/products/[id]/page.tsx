// app/products/[id]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/lib/products";
import ProductDetails from "./ProductDetails.client";

// --- Metadata per product ---
export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return {};

  const title = product.name;
  const description = product.description ?? "Product details and our honest take.";
  const url = `https://motsistar.com/products/${product.id}`;
  const image = product.image;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website", // ✅ use allowed type
      images: [{ url: image, width: 1200, height: 630, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return notFound();

  return <ProductDetails product={product} />;
}
