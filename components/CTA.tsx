import Link from "next/link";

export default function CTA() {
  return (
    <div className="card mx-auto max-w-5xl p-8 text-center">
      <h3 className="mb-4 text-2xl font-semibold">Ready to find the best gear?</h3>
      <p className="mb-6 text-white/80">
        We test, compare, and curate the internet’s top picks so you don’t have to.
      </p>
      <Link href="/products" className="btn">
        Explore Products
      </Link>
    </div>
  );
}
