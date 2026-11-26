import type { Metadata } from "next";
import { ViewTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  ShieldCheck,
  Sparkles,
  ThermometerSnowflake,
  Award,
  Compass,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_NAME, BRAND_NAME, BRAND_LINES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover Surabhi Healthy Foods — the parent company behind Abhiram's Half Cooked Chappathi, Abhiram's Poori, and Abhiram's Dosa Batter.",
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Grain Sourcing",
    desc: "We select high-grade whole wheat, parboiled rice, and whole urad dal from trusted agricultural suppliers.",
  },
  {
    step: "02",
    title: "RO-Purified Prep",
    desc: "Every dough batch and stone-ground batter uses RO-purified water to preserve natural flavour.",
  },
  {
    step: "03",
    title: "Traditional Craft",
    desc: "Chappathis are lightly tawa-seared, pooris are pressed uniformly, and batters ferment naturally.",
  },
  {
    step: "04",
    title: "Hygienic Sealing",
    desc: "Freshly prepared batches are sealed immediately in clean, food-safe pouches and tubs.",
  },
  {
    step: "05",
    title: "Cold-Chain Dispatch",
    desc: "Maintained at 0°C – 5°C so every pack reaches retail shelves and families ready to cook.",
  },
];

export default function AboutPage() {
  return (
    <ViewTransition enter="page-blur-fade" exit="page-blur-fade" default="none">
      <div>
        {/* ─── Header ─── */}
        <section className="bg-cream px-5 pt-8 pb-8 sm:px-8 sm:pt-12 sm:pb-10 lg:pt-14 lg:pb-10">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-paper-dark/50 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                <Leaf className="h-3.5 w-3.5 text-sprout" />
                About {COMPANY_NAME}
              </span>
              <h1 className="mt-6 font-heading text-[clamp(34px,4.5vw,54px)] font-extrabold leading-[1.06] tracking-tight text-brand">
                Honest Indian staples, made with homestyle discipline.
              </h1>
              <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
                <strong className="font-semibold text-brand">
                  {COMPANY_NAME}
                </strong>{" "}
                is the parent company behind{" "}
                <strong className="font-semibold text-brand">
                  {BRAND_NAME}
                </strong>{" "}
                — bringing convenient, preservative-free{" "}
                <strong className="font-semibold text-ink">
                  Half Cooked Chappathi
                </strong>
                ,{" "}
                <strong className="font-semibold text-ink">
                  Ready-to-Fry Poori
                </strong>
                , and{" "}
                <strong className="font-semibold text-ink">
                  Stone-Ground Dosa Batter
                </strong>{" "}
                to modern Indian households.
              </p>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-deep hover:shadow-sm"
                >
                  Explore Abhiram&apos;s Range
                  <ArrowRight className="h-4 w-4 text-accent" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-paper-dark/50 bg-white px-7 py-3.5 text-sm font-semibold text-brand transition-colors hover:border-brand/30"
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper shadow-lg">
                <Image
                  src="/images/kitchen-craft.png"
                  alt="Surabhi Healthy Foods hygienic preparation kitchen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Brand Architecture ─── */}
        <section className="px-5 pt-2 pb-12 sm:px-8 sm:pb-14">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-2xl border border-paper-dark/40 bg-white p-8 sm:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Company &amp; Brand
                  </p>
                  <h2 className="mt-2 font-heading text-2xl font-bold text-brand sm:text-3xl">
                    {COMPANY_NAME} &amp; the Abhiram&apos;s Promise
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    While{" "}
                    <strong className="text-brand">{COMPANY_NAME}</strong>{" "}
                    oversees quality, sourcing, and production,{" "}
                    <strong className="text-brand">{BRAND_NAME}</strong> is our
                    trusted consumer brand found in refrigerators across homes
                    and retail stores.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <div className="rounded-2xl border border-paper-dark/40 bg-warm p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-paper-dark/40 pb-5">
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                          Parent Company
                        </span>
                        <p className="font-heading text-lg font-bold text-brand">
                          {COMPANY_NAME}
                        </p>
                      </div>
                      <div className="rounded-xl bg-white px-4 py-2">
                        <Image
                          src="/images/abhirams-logo.png"
                          alt={`${BRAND_NAME} Official Logo`}
                          width={100}
                          height={47}
                          className="h-8 w-auto object-contain"
                        />
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {BRAND_LINES.map((b) => (
                        <div
                          key={b.id}
                          className="rounded-xl border border-paper-dark/40 bg-white p-4"
                        >
                          <p className="font-heading text-sm font-bold text-brand">
                            {b.brandName}
                          </p>
                          <p className="mt-1 text-xs text-muted">
                            {b.tagline}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Mission & Vision ─── */}
        <section className="bg-warm px-5 py-12 sm:px-8 sm:py-14">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-paper-dark/40 bg-white p-8 sm:p-10">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/[0.06] text-brand">
                <Award className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-heading text-2xl font-bold text-brand">
                Our Mission
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                To save families hours of daily kitchen prep without compromising
                on nutrition or purity. Every pack of Abhiram&apos;s is prepared
                fresh — never relying on artificial preservatives, soda, or
                softeners.
              </p>
            </div>

            <div className="rounded-2xl border border-paper-dark/40 bg-white p-8 sm:p-10">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Compass className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-heading text-2xl font-bold text-brand">
                Our Vision
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                To make{" "}
                <span className="font-semibold text-brand">
                  {COMPANY_NAME}
                </span>{" "}
                and{" "}
                <span className="font-semibold text-brand">{BRAND_NAME}</span>{" "}
                synonymous with trustworthy ready-to-cook Indian food — serving
                households and commercial kitchens with consistent excellence.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 5-Step Process ─── */}
        <section className="px-5 pt-12 pb-8 sm:px-8 sm:pt-14 sm:pb-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                Quality Standards
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-brand sm:text-4xl">
                How we keep every batch clean &amp; natural
              </h2>
            </div>

            <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-5">
              {PROCESS_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col rounded-2xl border border-paper-dark/40 bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <span className="font-heading text-3xl font-extrabold text-gold">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-heading text-base font-bold text-brand">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Stats Banner ─── */}
        <section className="px-5 pt-2 pb-14 sm:px-8 sm:pb-16">
          <div className="mx-auto max-w-7xl rounded-2xl bg-brand p-8 text-cream sm:p-14">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: ShieldCheck,
                  value: "0%",
                  label: "Preservatives & Softeners",
                },
                {
                  icon: Leaf,
                  value: "100%",
                  label: "Natural Grains & Ingredients",
                },
                {
                  icon: Sparkles,
                  value: "3",
                  label: "Signature Brand Lines",
                },
                {
                  icon: ThermometerSnowflake,
                  value: "0–5°C",
                  label: "Cold-Chain Care",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-6"
                >
                  <stat.icon className="h-5 w-5 text-accent" />
                  <div className="mt-4 font-heading text-3xl font-extrabold text-white">
                    {stat.value}
                  </div>
                  <p className="mt-1.5 text-sm text-cream/60">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-cream/70">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  Retail &amp; Supermarket
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  HoReCa &amp; Bulk Supply
                </span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-brand-deep transition-colors hover:bg-accent/90"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ViewTransition>
  );
}
