import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  name: string;
  image: string;
  price?: string;
  rating?: number;
  badge?: string;
  url: string;
};

export default function ProductCard({ id, name, image, price, rating, badge, url }: Props) {
  return (
    <div className="card p-4 flex flex-col items-center text-center">
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden rounded-xl">
        <Image src={image} alt={name} fill className="object-cover" placeholder="blur"
  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+"/>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        {badge && (
          <span className="text-xs px-2 py-1 rounded-full bg-brand-pink text-bg">
            {badge}
          </span>
        )}
        {price && <p className="text-brand-accent font-bold">{price}</p>}
        {rating && (
          <p className="text-sm text-fg/70">⭐ {rating.toFixed(1)}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        <Link
          href={url}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="px-4 py-2 text-sm border border-brand-pink text-brand-pink rounded-lg hover:bg-brand-pink hover:text-bg transition"
        >
          Get {name}
        </Link>
        <Link
          href={`/products/${id}`}
          className="px-4 py-2 text-sm border border-brand-neon text-brand-neon rounded-lg hover:bg-brand-neon hover:text-bg transition"
        >
          View more Details
        </Link>
      </div>
    </div>
  );
}
