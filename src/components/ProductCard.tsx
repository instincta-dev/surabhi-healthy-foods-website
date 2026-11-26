"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Thermometer, Check, ArrowRight, Package } from "lucide-react";
import { resolveVariantForPack, type PackFilterSelection } from "@/lib/constants";
import type { PackSizeKey, Product } from "@/types";

interface ProductCardProps {
  product: Product;
  activePackSize: PackFilterSelection;
  onSelectCardSize?: (productId: string, sizeKey: PackSizeKey) => void;
}

export default function ProductCard({
  product,
  activePackSize,
  onSelectCardSize,
}: ProductCardProps) {
  const imageSrc = product.image_url || "/images/chappathi.png";
  const variant = resolveVariantForPack(product, activePackSize);
  const variants = product.variants ?? [];
  const enquiryLabel = `${product.brand_name} — ${variant.variantName} (${variant.unit})`;

  return (
    <article className="animate-fade-in-up group flex flex-col overflow-hidden rounded-2xl border border-paper-dark/55 bg-white shadow-2xs transition-all duration-200 hover:border-brand/25 hover:shadow-md">
      {/* Compact Image Header */}
      <div className="relative h-36 w-full shrink-0 overflow-hidden bg-paper xl:h-40">
        <Image
          src={imageSrc}
          alt={`${product.brand_name} — ${variant.unit}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-2 p-3">
          <span className="rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-brand shadow-2xs backdrop-blur-sm">
            {product.brand_name}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-deep/85 px-2.5 py-1 text-[11px] font-medium text-cream backdrop-blur-sm">
            <Clock className="h-3 w-3 text-accent" />
            {product.prep_time}
          </span>
        </div>
      </div>

      {/* Compact Card Body */}
      <div className="flex flex-1 flex-col p-4">
        {/* Dynamic Pack Weight / Count & Tier Badge */}
        <div className="flex flex-wrap items-center justify-between gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-warm px-2.5 py-0.5 text-[11.5px] font-bold text-gold transition-colors">
            <Package className="h-3 w-3" />
            {variant.unit}
          </span>
          <span className="text-[11px] font-semibold text-herb">
            {variant.variantName}
          </span>
        </div>

        {/* Title & Dynamic Variant Summary */}
        <h2 className="mt-2 font-heading text-base font-bold leading-snug text-brand sm:text-[17px]">
          {product.name}
        </h2>
        <p className="mt-1 line-clamp-2 min-h-[34px] text-xs leading-relaxed text-muted">
          {variant.servingNote}
        </p>

        {/* Compact Highlights + Storage Strip */}
        <ul className="mt-2.5 space-y-1 border-t border-paper-dark/35 pt-2.5">
          {product.highlights.slice(0, 2).map((item) => (
            <li
              key={item}
              className="flex items-center gap-1.5 truncate text-[11.5px] font-medium text-ink/85"
            >
              <Check className="h-3 w-3 shrink-0 text-herb" />
              <span className="truncate">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-2.5 flex items-center gap-1.5 rounded-lg bg-sage-tint/75 px-2.5 py-1.5 text-[11px] text-brand">
          <Thermometer className="h-3 w-3 shrink-0 text-herb" />
          <span className="truncate font-medium">
            {product.shelf_life} · {product.storage}
          </span>
        </div>

        {/* Inline Pack Size Selector Chips */}
        {variants.length > 0 && (
          <div className="mt-3 flex items-center gap-1">
            {variants.map((v) => {
              const isSelected = v.sizeKey === variant.sizeKey;
              return (
                <button
                  key={v.sizeKey}
                  type="button"
                  onClick={() => onSelectCardSize?.(product.id, v.sizeKey)}
                  aria-pressed={isSelected}
                  className={`flex-1 rounded-lg py-1 text-center text-[11px] font-semibold transition-all ${
                    isSelected
                      ? "bg-brand text-white shadow-2xs"
                      : "bg-warm text-muted hover:bg-paper hover:text-brand"
                  }`}
                >
                  {v.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Dynamic Price & Enquire Footer */}
        <div className="mt-auto pt-3">
          <div className="flex items-center justify-between gap-2 border-t border-paper-dark/40 pt-3">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-heading text-xl font-extrabold leading-none text-brand">
                  ₹{variant.price}
                </span>
                <span className="text-[11px] font-medium text-muted">
                  / pack
                </span>
              </div>
              {variant.unitRate && (
                <span className="mt-0.5 block text-[10.5px] font-medium text-muted">
                  {variant.unitRate}
                </span>
              )}
            </div>

            <Link
              href={`/contact?product=${encodeURIComponent(enquiryLabel)}`}
              className="inline-flex items-center gap-1 rounded-full bg-brand px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-deep"
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
