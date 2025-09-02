// app/sitemap.ts
import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://motsistar.com";
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/products`, priority: 0.8 },
    { url: `${base}/promotions`, priority: 0.7 },
    { url: `${base}/affiliate-disclosure`, priority: 0.5 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/products/${p.id}`,
    priority: 0.8,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...productRoutes];
}
