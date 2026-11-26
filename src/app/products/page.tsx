import type { Metadata } from "next";
import { Suspense, ViewTransition } from "react";
import ProductsCatalog from "@/components/ProductsCatalog";
import { getProducts } from "@/lib/api";

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
    <ViewTransition enter="page-blur-fade" exit="page-blur-fade" default="none">
      <section className="bg-cream">
        <Suspense
          fallback={
            <div className="mx-auto max-w-7xl px-5 pt-4 pb-6 sm:px-8">
              <div className="mb-4 h-14 animate-pulse rounded-xl bg-paper" />
              <div className="grid gap-5 lg:grid-cols-[224px_1fr]">
                <div className="h-80 animate-pulse rounded-2xl bg-paper" />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-[420px] animate-pulse rounded-2xl bg-paper"
                    />
                  ))}
                </div>
              </div>
            </div>
          }
        >
          <ProductsListLoader />
        </Suspense>
      </section>
    </ViewTransition>
  );
}
