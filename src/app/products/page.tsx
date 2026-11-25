import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import ProductsCatalog from "@/components/ProductsCatalog";
import { getProducts } from "@/lib/api";
import { BRAND_LINES, COMPANY_NAME, BRAND_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Abhiram's Half Cooked Chappathi, Abhiram's Poori, and Abhiram's Dosa Batter — manufactured fresh daily by Surabhi Healthy Foods.",
};

async function ProductsListLoader() {
  const products = await getProducts();
  return <ProductsCatalog initialProducts={products} />;
}

export default function ProductsPage() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="border-b border-paper-dark/70 bg-gradient-to-b from-cream to-paper/60 px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <span className="inline-block rounded-full border border-paper-dark bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-gold">
            {COMPANY_NAME} · {BRAND_NAME} Catalog
          </span>
          <h1 className="mt-4 max-w-3xl font-heading text-[clamp(36px,4.8vw,56px)] font-extrabold leading-[1.06] tracking-tight text-brand">
            Our three signature kitchen staples
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Browse every retail, family, and bulk pack of{" "}
            <strong className="font-semibold text-brand">
              Abhiram&apos;s Chappathi
            </strong>
            ,{" "}
            <strong className="font-semibold text-brand">
              Abhiram&apos;s Poori
            </strong>
            , and{" "}
            <strong className="font-semibold text-brand">
              Abhiram&apos;s Dosa Batter
            </strong>
            .
          </p>
        </div>
      </section>

      {/* ─── Interactive Filter & Cards ─── */}
      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Suspense
            fallback={
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[460px] animate-pulse rounded-3xl bg-paper"
                  />
                ))}
              </div>
            }
          >
            <ProductsListLoader />
          </Suspense>
        </div>
      </section>

      {/* ─── Side-by-Side Specification Table ─── */}
      <section className="bg-paper/60 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
              Product Specifications
            </p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand">
              Quick comparison across our range
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-paper-dark/80 bg-white shadow-xs">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="border-b border-paper-dark bg-sage-tint/70 text-xs font-bold uppercase tracking-wider text-brand">
                <tr>
                  <th className="px-6 py-4">Product Brand</th>
                  <th className="px-6 py-4">Key Ingredients</th>
                  <th className="px-6 py-4">Prep Time</th>
                  <th className="px-6 py-4">Storage &amp; Shelf Life</th>
                  <th className="px-6 py-4">Available Packs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-paper-dark/60">
                {BRAND_LINES.map((brand) => (
                  <tr
                    key={brand.id}
                    className="transition-colors hover:bg-cream/60"
                  >
                    <td className="px-6 py-5 align-top">
                      <span className="block font-heading text-base font-bold text-brand">
                        {brand.brandName}
                      </span>
                      <span className="text-xs text-muted">{brand.tagline}</span>
                    </td>
                    <td className="px-6 py-5 align-top text-muted">
                      {brand.keyIngredients}
                    </td>
                    <td className="px-6 py-5 align-top font-semibold text-brand">
                      {brand.prepTime}
                    </td>
                    <td className="px-6 py-5 align-top text-muted">
                      <span className="block font-medium text-ink">
                        {brand.shelfLife}
                      </span>
                      <span className="text-xs">{brand.storage}</span>
                    </td>
                    <td className="px-6 py-5 align-top">
                      <ul className="space-y-1">
                        {brand.packSizes.map((pack) => (
                          <li
                            key={pack}
                            className="flex items-center gap-1.5 text-xs font-medium text-ink"
                          >
                            <Check className="h-3.5 w-3.5 text-sprout" />
                            {pack}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-brand px-8 py-8 text-cream">
            <div>
              <h3 className="font-heading text-2xl font-bold">
                Need custom quantities for your store, hostel, or event?
              </h3>
              <p className="mt-1 text-sm text-cream/80">
                Surabhi Healthy Foods supplies supermarkets, Kirana stores, and
                HoReCa kitchens with fresh daily batches.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-brand-deep transition-colors hover:bg-accent/90"
            >
              Request Bulk Pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
