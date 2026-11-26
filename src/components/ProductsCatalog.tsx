"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Check, Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import QuantityFilter from "@/components/QuantityFilter";
import {
  BRAND_LINES,
  COMPANY_NAME,
  PACK_SIZE_FILTERS,
  buildCoreCatalogProducts,
  isValidPackFilter,
  normalizeProductCategory,
  type PackFilterSelection,
} from "@/lib/constants";
import type { PackSizeKey, Product } from "@/types";

interface ProductsCatalogProps {
  initialProducts: Product[];
}

export default function ProductsCatalog({
  initialProducts,
}: ProductsCatalogProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const normalizedCategory = normalizeProductCategory(
    searchParams.get("category")
  );
  const category = normalizedCategory ?? "All";

  const rawSize = searchParams.get("size");
  const globalSize: PackFilterSelection = isValidPackFilter(rawSize)
    ? rawSize
    : "all";

  // Allow per-card variant inspection while keeping side filter synchronized
  const [cardSizeOverrides, setCardSizeOverrides] = useState<
    Record<string, PackSizeKey>
  >({});

  // Enforce strict 3-product scope: Chappathi, Poori, Dosa Batter
  const coreProducts = useMemo(
    () => buildCoreCatalogProducts(initialProducts),
    [initialProducts]
  );

  const visibleProducts = useMemo(() => {
    if (category === "All") return coreProducts;
    return coreProducts.filter((p) => p.category === category);
  }, [coreProducts, category]);

  const activeCategoryGuide = useMemo(() => {
    if (category === "All") return null;
    return BRAND_LINES.find((b) => b.category === category) ?? null;
  }, [category]);

  function updateQueryParams(
    nextCategory: string,
    nextSize: PackFilterSelection
  ) {
    const params = new URLSearchParams();
    if (nextCategory !== "All") params.set("category", nextCategory);
    if (nextSize !== "all") params.set("size", nextSize);
    const qs = params.toString();
    router.replace(qs ? `/products?${qs}` : "/products", { scroll: false });
  }

  function handleCategoryChange(nextCategory: string) {
    updateQueryParams(nextCategory, globalSize);
  }

  function handlePackSizeChange(nextSize: PackFilterSelection) {
    setCardSizeOverrides({});
    updateQueryParams(category, nextSize);
  }

  function handleCardSizeSelect(productId: string, sizeKey: PackSizeKey) {
    setCardSizeOverrides((prev) => ({ ...prev, [productId]: sizeKey }));
  }

  const activeFilterLabel =
    PACK_SIZE_FILTERS.find((f) => f.id === globalSize)?.label ?? "All Sizes";

  return (
    <div className="mx-auto max-w-7xl px-5 pt-4 pb-6 sm:px-8">
      {/* Compact Header Strip + Inline Category Filter */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-paper-dark/50 pb-3.5">
        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-gold">
            {COMPANY_NAME} · Daily Staples
          </p>
          <h1 className="font-heading text-2xl font-extrabold leading-tight tracking-tight text-brand sm:text-[26px]">
            Fresh Packs &amp; Pricing
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <CategoryFilter
            selected={category}
            onChange={handleCategoryChange}
            totalCount={coreProducts.length}
          />
          <span className="hidden rounded-full bg-sage-tint px-3 py-1 text-[11px] font-semibold text-brand xl:inline-flex">
            Pack View: {activeFilterLabel}
          </span>
        </div>
      </div>

      {/* Single-View Split Layout: Compact Left Sidebar + 3-Card Product Grid */}
      <div className="grid gap-4 lg:grid-cols-[224px_1fr] lg:items-start lg:gap-5">
        <QuantityFilter selected={globalSize} onChange={handlePackSizeChange} />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => {
            const effectiveSize: PackFilterSelection =
              cardSizeOverrides[product.id] ?? globalSize;

            return (
              <ProductCard
                key={product.id}
                product={product}
                activePackSize={effectiveSize}
                onSelectCardSize={handleCardSizeSelect}
              />
            );
          })}

          {/* Companion quick-prep card when filtered to a single staple on desktop */}
          {activeCategoryGuide && (
            <div className="hidden flex-col justify-between rounded-2xl border border-paper-dark/50 bg-warm p-5 lg:col-span-2 lg:flex">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold">
                  <Sparkles className="h-3.5 w-3.5" />
                  {activeCategoryGuide.tagline}
                </span>
                <h2 className="mt-3 font-heading text-xl font-bold text-brand">
                  {activeCategoryGuide.headline}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {activeCategoryGuide.summary}
                </p>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {activeCategoryGuide.steps.map((step, i) => (
                    <div
                      key={step.title}
                      className="rounded-xl border border-paper-dark/40 bg-white p-3"
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white">
                        0{i + 1}
                      </span>
                      <p className="mt-2 font-heading text-xs font-bold text-brand">
                        {step.title}
                      </p>
                      <p className="mt-1 text-[11px] leading-relaxed text-muted">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-paper-dark/40 pt-3 text-xs">
                <span className="font-medium text-muted">
                  <strong className="text-brand">Ingredients:</strong>{" "}
                  {activeCategoryGuide.keyIngredients}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-herb">
                  <Check className="h-3.5 w-3.5" />
                  Zero Preservatives
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
