import Link from "next/link";
import {
  Leaf,
  Home as HomeIcon,
  Heart,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";

export default async function HomePage() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-brand text-cream">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-14 px-6 py-20 pb-24 lg:py-28">
          {/* Copy */}
          <div className="min-w-0 flex-1 basis-[480px]">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Wholesome · Natural · Homely
            </p>
            <h1 className="font-heading text-[clamp(42px,6vw,76px)] font-extrabold leading-[1.02] tracking-tight">
              Good food,
              <br />
              the way it used to be.
            </h1>
            <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-cream/80">
              Millets, cold-pressed oils, traditional snacks and natural
              sweeteners — made with simple ingredients and no shortcuts, for
              families who care about what they eat.
            </p>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <Link
                href="/products"
                className="rounded-full bg-accent px-7 py-4 text-base font-semibold text-brand transition-colors hover:bg-accent/90"
              >
                Explore products
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-[1.5px] border-cream px-7 py-4 text-base font-semibold text-cream transition-colors hover:bg-white/10"
              >
                Order on WhatsApp
              </Link>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid min-w-0 flex-1 basis-[400px] grid-cols-2 gap-4">
            <div className="flex h-56 items-end rounded-3xl bg-brand-light p-5 text-sm text-cream/60">
              Millet grains
            </div>
            <div className="mt-12 flex h-56 items-end rounded-3xl bg-accent p-5 text-sm text-brand">
              Cold-pressed oil
            </div>
            <div className="flex h-56 items-end rounded-3xl bg-brand-lighter p-5 text-sm text-cream/60">
              Healthy snacks
            </div>
            <div className="mt-12 flex h-56 items-end rounded-3xl bg-sand p-5 text-sm text-muted">
              Jaggery &amp; honey
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Products ─── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                Our range
              </p>
              <h2 className="font-heading text-[clamp(32px,4vw,48px)] leading-tight tracking-tight text-brand">
                Healthy choices for every meal
              </h2>
            </div>
            <Link
              href="/products"
              className="flex items-center gap-2 font-semibold text-brand transition-colors hover:text-gold"
            >
              View all products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Surabhi ─── */}
      <section className="bg-sand px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            Why Surabhi
          </p>
          <h2 className="mb-12 max-w-3xl font-heading text-[clamp(32px,4vw,48px)] leading-tight tracking-tight text-brand">
            Made the way your grandmother would approve of
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Leaf,
                title: "Natural ingredients",
                desc: "No artificial colours, preservatives or refined shortcuts — just real food.",
              },
              {
                icon: HomeIcon,
                title: "Traditional methods",
                desc: "Wood-pressed oils, stone-ground flours and slow-roasted snacks, made in small batches.",
              },
              {
                icon: Heart,
                title: "Good for the family",
                desc: "Nourishing options for kids, elders and everyone in between.",
              },
              {
                icon: ShieldCheck,
                title: "Fresh & hygienic",
                desc: "Packed fresh in clean conditions so every pack tastes the way it should.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <item.icon
                  className="h-10 w-10 text-brand"
                  strokeWidth={1.6}
                />
                <h3 className="font-heading text-[22px] font-bold text-brand">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How to Order ─── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            How to order
          </p>
          <h2 className="mb-12 font-heading text-[clamp(32px,4vw,48px)] leading-tight tracking-tight text-brand">
            Three simple steps
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                num: "1",
                title: "Pick your products",
                desc: "Browse our range and note what you'd like.",
              },
              {
                num: "2",
                title: "Message us",
                desc: "Send your order on WhatsApp or call us.",
              },
              {
                num: "3",
                title: "Get it delivered",
                desc: "We pack it fresh and deliver to your door.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border border-sand-dark/30 bg-white p-8"
              >
                <div className="font-heading text-5xl font-extrabold text-accent">
                  {step.num}
                </div>
                <h3 className="mt-2 font-heading text-[22px] font-bold text-brand">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-brand px-12 py-16 text-center text-cream">
          <h2 className="font-heading text-[clamp(30px,4vw,44px)] leading-tight tracking-tight">
            Ready to eat better?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-cream/80">
            Browse our products or reach out — we&apos;re happy to help with
            orders, bulk enquiries, or custom packs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="rounded-full bg-accent px-8 py-4 text-base font-semibold text-brand transition-colors hover:bg-accent/90"
            >
              View products
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-[1.5px] border-cream px-8 py-4 text-base font-semibold text-cream transition-colors hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
