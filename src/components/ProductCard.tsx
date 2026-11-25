import type { Product } from "@/types";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-sand-dark/30 bg-white transition-shadow hover:shadow-lg">
      {/* Image placeholder */}
      <div className="flex h-48 items-center justify-center bg-sand-light">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted">
            <ShoppingBag className="h-8 w-8" />
            <span className="text-xs">Product photo</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold">
          {product.category}
        </span>
        <h3 className="font-heading text-xl font-bold text-brand">
          {product.name}
        </h3>
        <p className="flex-1 text-[15px] leading-relaxed text-muted">
          {product.description}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-base font-semibold text-brand">
            ₹{product.price}{" "}
            <span className="text-sm font-normal text-muted">
              / {product.unit}
            </span>
          </span>
          <Link
            href="/contact"
            className="text-[15px] font-semibold text-brand transition-colors hover:text-gold"
          >
            Order →
          </Link>
        </div>
      </div>
    </article>
  );
}
