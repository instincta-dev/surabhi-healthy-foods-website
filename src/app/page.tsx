import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  ShieldCheck,
  Clock,
  ThermometerSnowflake,
  ArrowRight,
  Check,
  Store,
  UtensilsCrossed,
  Home as HomeIcon,
} from "lucide-react";
import SignatureShowcase from "@/components/SignatureShowcase";
import { BRAND_LINES, COMPANY_NAME, BRAND_NAME } from "@/lib/constants";

const LINE_IMAGES: Record<string, string> = {
  chappathi: "/images/chappathi.png",
  poori: "/images/poori.png",
  "dosa-batter": "/images/dosa-batter.png",
};

export default function HomePage() {
  return (
    <>
      {/* ─── Editorial Hero ─── */}
      <section className="relative overflow-hidden border-b border-paper-dark/70 bg-gradient-to-b from-cream via-cream to-paper/65">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:py-20">
          {/* Left Copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-paper-dark bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-gold shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-sprout" />
              {COMPANY_NAME} · Presents {BRAND_NAME}
            </div>

            <h1 className="mt-6 font-heading text-[clamp(38px,4.8vw,62px)] font-extrabold leading-[1.03] tracking-tight text-brand">
              Wholesome Indian staples, ready in minutes.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Discover{" "}
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
              </strong>{" "}
              — prepared fresh daily by {COMPANY_NAME} using 100% natural grains
              and zero preservatives.
            </p>

            {/* Primary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-deep hover:shadow"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 text-accent" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-paper-dark bg-white px-7 py-4 text-sm font-semibold text-brand transition-colors hover:border-brand/40 hover:bg-paper/40"
              >
                Retail &amp; Bulk Enquiries
              </Link>
            </div>

            {/* Trust Micro-Bar */}
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-paper-dark/80 pt-7 sm:grid-cols-4">
              {[
                { icon: Leaf, text: "100% Natural" },
                { icon: ShieldCheck, text: "Zero Preservatives" },
                { icon: Clock, text: "Ready in Seconds" },
                { icon: ThermometerSnowflake, text: "Chilled Freshness" },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 text-xs font-semibold text-ink/85"
                >
                  <badge.icon className="h-4 w-4 shrink-0 text-brand" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="relative aspect-[7/5] overflow-hidden rounded-[32px] border border-paper-dark/80 bg-white shadow-xl">
                <Image
                  src="/images/hero-spread.png"
                  alt="Abhiram's Half Cooked Chappathi, Ready-to-Fry Poori, and Fresh Dosa Batter spread"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Floating Brand Lockup Card */}
              <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-paper-dark bg-white/95 p-4 shadow-lg backdrop-blur-md sm:absolute sm:-bottom-6 sm:left-6 sm:right-6 sm:mt-0">
                <div className="flex items-center gap-3.5">
                  <Image
                    src="/images/abhirams-logo.png"
                    alt="Abhiram's Official Brand Logo"
                    width={96}
                    height={45}
                    className="h-9 w-auto shrink-0 object-contain"
                  />
                  <div className="border-l border-paper-dark pl-3.5">
                    <p className="font-heading text-sm font-bold text-brand">
                      Three Daily Kitchen Essentials
                    </p>
                    <p className="text-xs text-muted">
                      Half Cooked Chappathi · Poori · Dosa Batter
                    </p>
                  </div>
                </div>
                <Link
                  href="/products"
                  className="hidden shrink-0 rounded-full bg-sage-tint px-4 py-2 text-xs font-bold text-brand transition-colors hover:bg-brand hover:text-white sm:inline-flex"
                >
                  View Range
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Signature Three-Brand Range ─── */}
      <section className="px-5 py-24 sm:px-8 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                Our Signature Brands
              </p>
              <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">
                Three essentials crafted for everyday meals
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand transition-colors hover:text-gold"
            >
              See all pack sizes &amp; specs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {BRAND_LINES.map((line) => (
              <article
                key={line.id}
                className="group flex flex-col overflow-hidden rounded-[28px] border border-paper-dark/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                  <Image
                    src={LINE_IMAGES[line.id] ?? "/images/chappathi.png"}
                    alt={line.brandName}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-brand shadow-xs backdrop-blur-xs">
                      <Clock className="h-3.5 w-3.5 text-accent" />
                      {line.prepTime}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-gold">
                    {line.tagline}
                  </span>
                  <h3 className="mt-1.5 font-heading text-2xl font-extrabold text-brand">
                    {line.brandName}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {line.summary}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-paper-dark/70 pt-5">
                    {line.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs font-medium text-ink"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sprout" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {line.packSizes.map((pack) => (
                        <span
                          key={pack}
                          className="rounded-lg bg-paper px-2.5 py-1 text-[11px] font-semibold text-ink/85"
                        >
                          {pack}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/products?category=${encodeURIComponent(line.category)}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage-tint px-5 py-3 text-sm font-bold text-brand transition-colors group-hover:bg-brand group-hover:text-white"
                    >
                      Explore {line.brandName}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Interactive Prep & Nutrition Guide ─── */}
      <section className="bg-paper/65 px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SignatureShowcase />
        </div>
      </section>

      {/* ─── Parent Company Quality Promise ─── */}
      <section className="bg-brand px-5 py-24 text-cream sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/15 bg-brand-deep shadow-2xl">
              <Image
                src="/images/kitchen-craft.png"
                alt="Surabhi Healthy Foods clean kitchen and whole wheat dough preparation"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
              Parent Company · {COMPANY_NAME}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Hygienic preparation you can serve your family with confidence
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/80">
              Behind every pack of Abhiram&apos;s stands{" "}
              <strong className="font-semibold text-white">
                {COMPANY_NAME}
              </strong>{" "}
              — committed to clean grain sourcing, RO-purified water, zero
              chemical preservatives, and food-grade chilled packaging.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Zero Preservatives or Soda",
                  desc: "No dough softeners in our chappathis and no baking soda in our batter — just real fermentation and clean heat.",
                },
                {
                  title: "Chakki-Fresh & Stone-Ground",
                  desc: "Traditional grinding preserves natural wheat bran nutrients and authentic South Indian dosa aroma.",
                },
                {
                  title: "Strict Hygiene Controls",
                  desc: "Clean stainless-steel preparation, food-grade separators, and batch-dated sealing every morning.",
                },
                {
                  title: "Retail & Institutional Ready",
                  desc: "Consistent weight, soft texture, and chilled dispatch tailored for both homes and bulk buyers.",
                },
              ].map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="font-heading text-lg font-bold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream/75">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:text-white"
              >
                Read our story &amp; 5-step process
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Who We Serve & CTA ─── */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
              Supply Channels
            </p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand sm:text-4xl">
              Built for busy homes, retail stores &amp; kitchens
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: HomeIcon,
                title: "Family Kitchens",
                desc: "Hot puffed chappathis, crisp pooris, and weekend dosas in minutes — ideal for working parents and elders.",
              },
              {
                icon: Store,
                title: "Supermarkets & Kirana",
                desc: "Attractive retail pouches and 1 kg / 2 kg batter packs with dependable daily chiller replenishment.",
              },
              {
                icon: UtensilsCrossed,
                title: "Hotels, Hostels & Catering",
                desc: "50-piece half-cooked chappathi bulk packs and commercial batter volumes that cut kitchen prep time.",
              },
            ].map((channel) => (
              <div
                key={channel.title}
                className="rounded-3xl border border-paper-dark/80 bg-white p-8"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-tint text-brand">
                  <channel.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-brand">
                  {channel.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {channel.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-[32px] border border-paper-dark bg-paper px-8 py-10 sm:px-12">
            <div>
              <h3 className="font-heading text-2xl font-extrabold text-brand sm:text-3xl">
                Ready to stock or order Abhiram&apos;s products?
              </h3>
              <p className="mt-1.5 text-base text-muted">
                Reach out to {COMPANY_NAME} for pricing, sample packs, or daily
                supply routes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/products"
                className="rounded-full border border-paper-dark bg-white px-6 py-3.5 text-sm font-semibold text-brand transition-colors hover:border-brand/40"
              >
                Browse Catalog
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-deep"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 text-accent" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
