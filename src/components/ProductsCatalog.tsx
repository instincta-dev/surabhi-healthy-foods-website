"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { FALLBACK_PRODUCTS } from "@/lib/constants";
import type { Product } from "@/types";

interface ProductsCatalogProps {
  initialProducts: Product[];
}

const VALID_CATEGORIES = new Set(["All", "Chappathi", "Poori", "Dosa Batter"]);

export default function ProductsCatalog({
  initialProducts,
}: ProductsCatalogProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawCategory = searchParams.get("category") ?? "All";
  const category = VALID_CATEGORIES.has(rawCategory) ? rawCategory : "All";

  const products =
    initialProducts.length > 0 ? initialProducts : FALLBACK_PRODUCTS;

  const counts = useMemo(() => {
    const map: Record<string, number> = {
      All: products.length,
      Chappathi: 0,
      Poori: 0,
      "Dosa Batter": 0,
    };
    for (const p of products) {
      map[p.category] = (map[p.category] ?? 0) + 1;
    }
    return map;
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (category === "All") return products;
    return products.filter((p) => p.category === category);
  }, [products, category]);

  function handleCategoryChange(nextCategory: string) {
    if (nextCategory === "All") {
      router.replace("/products", { scroll: false });
    } else {
      router.replace(`/products?category=${encodeURIComponent(nextCategory)}`, {
        scroll: false,
      });
    }
  }

  return (
    <div>
      {/* Filter Bar */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <CategoryFilter
          selected={category}
          onChange={handleCategoryChange}
          counts={counts}
        />
        <p className="text-sm text-muted">
          Showing{" "}
          <span className="font-semibold text-brand">
            {filteredProducts.length}
          </span>{" "}
          {filteredProducts.length === 1 ? "pack" : "packs"}
        </p>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-paper-dark bg-white py-16 text-center">
          <p className="text-base font-medium text-muted">
            No products available under this category right now.
          </p>
        </div>
      )}
    </div>
  );
}
