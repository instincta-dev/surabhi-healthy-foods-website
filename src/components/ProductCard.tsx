import Image from "next/image";
import Link from "next/link";
import { Clock, Thermometer, Check, ArrowRight, Package } from "lucide-react";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageSrc = product.image_url || "/images/chappathi.png";

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-paper-dark/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl">
      {/* Product Photo */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold tracking-wide text-brand shadow-xs backdrop-blur-xs">
            {product.brand_name}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-deep/85 px-3 py-1 text-xs font-medium text-cream backdrop-blur-xs">
            <Clock className="h-3 w-3 text-accent" />
            {product.prep_time}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-gold">
          <Package className="h-3.5 w-3.5" />
          <span>{product.unit}</span>
        </div>

        <h3 className="font-heading text-xl font-bold leading-snug text-brand">
          {product.name}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-muted">
          {product.description}
        </p>

        {/* Highlights */}
        {product.highlights && product.highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5 border-t border-paper-dark/70 pt-4">
            {product.highlights.slice(0, 3).map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xs font-medium text-ink/85"
              >
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sprout" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Storage & CTA Footer */}
        <div className="mt-auto pt-5">
          <div className="mb-4 flex items-center gap-1.5 rounded-xl bg-sage-tint px-3 py-2 text-xs text-brand">
            <Thermometer className="h-3.5 w-3.5 shrink-0 text-brand" />
            <span className="truncate font-medium">
              {product.shelf_life} · {product.storage}
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-paper-dark/60 pt-4">
            {typeof product.price === "number" ? (
              <div>
                <span className="font-heading text-xl font-extrabold text-brand">
                  ₹{product.price}
                </span>
                <span className="ml-1 text-xs text-muted">/ pack</span>
              </div>
            ) : (
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                Retail &amp; Bulk Packs
              </span>
            )}

            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-deep"
            >
              Enquire
              <ArrowRight className="h-3.5 w-3.5 text-accent" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
