import { ViewTransition } from "react";
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
    <ViewTransition enter="page-blur-fade" exit="page-blur-fade" default="none">
      <div>
        {/* ─── Hero ─── */}
        <section className="relative overflow-hidden bg-cream">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-10 pb-14 sm:px-8 sm:pt-12 sm:pb-16 lg:grid-cols-12 lg:gap-12 lg:pt-14 lg:pb-16">
            {/* Copy */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-paper-dark/60 bg-white/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-herb" />
                {COMPANY_NAME} · {BRAND_NAME}
              </div>

              <h1 className="mt-7 font-heading text-[clamp(36px,4.5vw,58px)] font-extrabold leading-[1.05] tracking-tight text-brand">
                Wholesome Indian staples,{" "}
                <span className="text-herb">ready in minutes.</span>
              </h1>

              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
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
                — prepared fresh daily with 100% natural grains and zero
                preservatives.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2.5 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-brand-deep hover:shadow-md"
                >
                  Explore Products
                  <ArrowRight className="h-4 w-4 text-accent" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-paper-dark/60 bg-white px-7 py-3.5 text-sm font-semibold text-brand transition-colors duration-200 hover:border-brand/30 hover:bg-sage-tint"
                >
                  Retail &amp; Bulk Enquiries
                </Link>
              </div>

              {/* Trust Bar */}
              <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-3.5 border-t border-paper-dark/50 pt-8 sm:grid-cols-4">
                {[
                  { icon: Leaf, text: "100% Natural" },
                  { icon: ShieldCheck, text: "Zero Preservatives" },
                  { icon: Clock, text: "Ready in Seconds" },
                  { icon: ThermometerSnowflake, text: "Chilled Freshness" },
                ].map((badge) => (
                  <div
                    key={badge.text}
                    className="flex items-center gap-2 text-[12px] font-medium text-muted"
                  >
                    <badge.icon className="h-4 w-4 shrink-0 text-sprout" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-paper shadow-lg">
                  <Image
                    src="/images/hero-spread.png"
                    alt="Abhiram's Half Cooked Chappathi, Ready-to-Fry Poori, and Fresh Dosa Batter spread"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Floating Card */}
                <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-paper-dark/50 bg-white/95 p-4 shadow-md backdrop-blur-md sm:absolute sm:-bottom-6 sm:left-5 sm:right-5 sm:mt-0">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/abhirams-logo.png"
                      alt="Abhiram's Official Brand Logo"
                      width={80}
                      height={38}
                      className="h-8 w-auto shrink-0 object-contain"
                    />
                    <div className="border-l border-paper-dark/50 pl-3">
                      <p className="font-heading text-sm font-bold text-brand">
                        Three Kitchen Essentials
                      </p>
                      <p className="text-xs text-muted">
                        Chappathi · Poori · Dosa Batter
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/products"
                    className="hidden shrink-0 rounded-full bg-brand/[0.06] px-4 py-2 text-xs font-semibold text-brand transition-colors hover:bg-brand hover:text-white sm:inline-flex"
                  >
                    View Range
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Three Brand Lines ─── */}
        <section className="px-5 pt-4 pb-14 sm:px-8 sm:pt-6 sm:pb-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-6 sm:mb-10">
              <div className="max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Our Products
                </p>
                <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-brand sm:text-4xl">
                  Three essentials crafted for everyday meals
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-sprout"
              >
                See all packs &amp; specs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {BRAND_LINES.map((line) => (
                <article
                  key={line.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-paper-dark/50 bg-white transition-all duration-300 hover:border-brand/20 hover:shadow-lg"
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
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-brand backdrop-blur-sm">
                        <Clock className="h-3.5 w-3.5 text-accent" />
                        {line.prepTime}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                      {line.tagline}
                    </span>
                    <h3 className="mt-1.5 font-heading text-xl font-bold text-brand">
                      {line.brandName}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {line.summary}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-paper-dark/40 pt-5">
                      {line.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs font-medium text-ink/80"
                        >
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sprout" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-5">
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {line.packSizes.map((pack) => (
                          <span
                            key={pack}
                            className="rounded-lg bg-paper px-2.5 py-1 text-[11px] font-medium text-muted"
                          >
                            {pack}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/products?category=${encodeURIComponent(line.category)}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand/[0.05] px-5 py-3 text-sm font-semibold text-brand transition-colors group-hover:bg-brand group-hover:text-white"
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

        {/* ─── Prep Guide ─── */}
        <section className="bg-warm px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <SignatureShowcase />
          </div>
        </section>

        {/* ─── Quality Promise ─── */}
        <section className="bg-brand px-5 py-14 text-cream sm:px-8 sm:py-18">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-deep shadow-2xl">
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                {COMPANY_NAME}
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
                Hygienic preparation you can trust
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/70">
                Behind every pack of Abhiram&apos;s stands{" "}
                <strong className="font-semibold text-white">
                  {COMPANY_NAME}
                </strong>{" "}
                — committed to clean grain sourcing, RO-purified water, zero
                preservatives, and food-grade chilled packaging.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Zero Preservatives or Soda",
                    desc: "No dough softeners in our chappathis and no baking soda in our batter — just real fermentation.",
                  },
                  {
                    title: "Chakki-Fresh & Stone-Ground",
                    desc: "Traditional grinding preserves natural wheat bran nutrients and authentic dosa aroma.",
                  },
                  {
                    title: "Strict Hygiene Controls",
                    desc: "Clean stainless-steel preparation, food-grade separators, and batch-dated sealing.",
                  },
                  {
                    title: "Retail & Institutional Ready",
                    desc: "Consistent weight, soft texture, and chilled dispatch for homes and bulk buyers.",
                  },
                ].map((point) => (
                  <div
                    key={point.title}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-5"
                  >
                    <h3 className="font-heading text-base font-bold text-white">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-cream/60">
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-white"
                >
                  Read our story &amp; process
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Supply Channels ─── */}
        <section className="px-5 py-14 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                Supply Channels
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-brand sm:text-4xl">
                Built for busy homes, retail &amp; kitchens
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: HomeIcon,
                  title: "Family Kitchens",
                  desc: "Hot chappathis, crisp pooris, and weekend dosas in minutes — ideal for working parents and elders.",
                },
                {
                  icon: Store,
                  title: "Supermarkets & Kirana",
                  desc: "Attractive retail pouches and 1 kg / 2 kg batter packs with daily chiller replenishment.",
                },
                {
                  icon: UtensilsCrossed,
                  title: "Hotels, Hostels & Catering",
                  desc: "50-piece chappathi bulk packs and commercial batter volumes that cut kitchen prep time.",
                },
              ].map((channel) => (
                <div
                  key={channel.title}
                  className="rounded-2xl border border-paper-dark/40 bg-white p-7 transition-shadow duration-300 hover:shadow-md"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/[0.06] text-brand">
                    <channel.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-brand">
                    {channel.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {channel.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-warm px-8 py-8 sm:px-10">
              <div>
                <h3 className="font-heading text-2xl font-bold text-brand sm:text-3xl">
                  Ready to stock Abhiram&apos;s products?
                </h3>
                <p className="mt-1.5 text-base text-muted">
                  Reach out for pricing, sample packs, or daily supply routes.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="rounded-full border border-paper-dark/50 bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:border-brand/30"
                >
                  Browse Catalog
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-deep"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4 text-accent" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ViewTransition>
  );
}
