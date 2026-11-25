"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { FALLBACK_PRODUCTS } from "@/lib/constants";
import type { Product } from "@/types";

export default function ProductsPage() {
  const [category, setCategory] = useState("All");
  const [products, setProducts] = useState<Product[]>(FALLBACK_PRODUCTS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        // Dynamically import to avoid issues during SSR
        const { getProductsByCategory } = await import("@/lib/api");
        const data = await getProductsByCategory(category);
        setProducts(data);
      } catch {
        // Fall back to filtering the static data
        setProducts(
          category === "All"
            ? FALLBACK_PRODUCTS
            : FALLBACK_PRODUCTS.filter((p) => p.category === category)
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [category]);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-brand text-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Our range
          </p>
          <h1 className="max-w-3xl font-heading text-[clamp(38px,5vw,64px)] font-extrabold leading-[1.05] tracking-tight">
            Healthy choices for every meal
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">
            From stone-ground millets to cold-pressed oils, every product is
            made with natural ingredients and traditional methods.
          </p>
        </div>
      </section>

      {/* ─── Products Grid ─── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          {/* Filter */}
          <div className="mb-10">
            <CategoryFilter selected={category} onChange={setCategory} />
          </div>

          {/* Grid */}
          {loading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-80 animate-pulse rounded-2xl bg-sand-dark/30"
                />
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-muted">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
