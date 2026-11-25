import type { Metadata } from "next";
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
    title: "Careful Grain Sourcing",
    desc: "We select high-grade whole wheat, parboiled rice, and whole urad dal from trusted agricultural suppliers.",
  },
  {
    step: "02",
    title: "RO-Purified Preparation",
    desc: "Every dough batch and stone-ground batter uses RO-purified water to preserve natural flavour and hygiene.",
  },
  {
    step: "03",
    title: "Traditional Craft at Scale",
    desc: "Chappathis are lightly tawa-seared, pooris are pressed uniformly, and batters ferment naturally without soda.",
  },
  {
    step: "04",
    title: "Food-Grade Hygienic Sealing",
    desc: "Freshly prepared batches are sealed immediately in clean, food-safe pouches and tubs to lock in softness.",
  },
  {
    step: "05",
    title: "Chilled Cold-Chain Dispatch",
    desc: "Maintained at 0°C – 5°C so every pack reaches retail shelves and family kitchens ready to cook.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Editorial Header ─── */}
      <section className="border-b border-paper-dark/70 bg-gradient-to-b from-cream to-paper/60 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-paper-dark bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-gold">
              <Leaf className="h-3.5 w-3.5 text-sprout" />
              About {COMPANY_NAME}
            </span>
            <h1 className="mt-5 font-heading text-[clamp(36px,4.8vw,58px)] font-extrabold leading-[1.06] tracking-tight text-brand">
              Honest Indian staples, made with homestyle discipline.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              <strong className="font-semibold text-brand">{COMPANY_NAME}</strong>{" "}
              is the parent food manufacturing company behind{" "}
              <strong className="font-semibold text-brand">{BRAND_NAME}</strong>{" "}
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
              to modern Indian households and food businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-deep"
              >
                Explore Abhiram&apos;s Range
                <ArrowRight className="h-4 w-4 text-accent" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-paper-dark bg-white px-7 py-3.5 text-sm font-semibold text-brand transition-colors hover:border-brand/40"
              >
                Partner With Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-paper-dark bg-white shadow-lg">
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

      {/* ─── Brand Architecture Lockup ─── */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[32px] border border-paper-dark/80 bg-white p-8 shadow-xs sm:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                  Company &amp; Brand Architecture
                </p>
                <h2 className="mt-2 font-heading text-3xl font-bold text-brand">
                  Surabhi Healthy Foods &amp; the Abhiram&apos;s Promise
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  While <strong className="text-brand">{COMPANY_NAME}</strong>{" "}
                  oversees quality assurance, sourcing, hygienic production, and
                  distribution,{" "}
                  <strong className="text-brand">{BRAND_NAME}</strong> is our
                  trusted consumer-facing brand found in refrigerators across
                  homes and retail stores.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-paper-dark bg-cream p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-paper-dark pb-5">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                        Parent Company
                      </span>
                      <p className="font-heading text-xl font-extrabold text-brand">
                        {COMPANY_NAME}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white px-4 py-2 shadow-xs">
                      <Image
                        src="/images/abhirams-logo.png"
                        alt={`${BRAND_NAME} Official Logo`}
                        width={120}
                        height={57}
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {BRAND_LINES.map((b) => (
                      <div
                        key={b.id}
                        className="rounded-2xl border border-paper-dark/80 bg-white p-4"
                      >
                        <p className="font-heading text-sm font-bold text-brand">
                          {b.brandName}
                        </p>
                        <p className="mt-1 text-xs text-muted">{b.tagline}</p>
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
      <section className="bg-paper/60 px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-paper-dark/80 bg-white p-8 sm:p-10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-tint text-brand">
              <Award className="h-6 w-6 text-brand" />
            </div>
            <h2 className="mt-5 font-heading text-2xl font-bold text-brand sm:text-3xl">
              Our Mission
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              To save families hours of daily kitchen prep without ever
              compromising on nutrition or purity. Every pack of Abhiram&apos;s
              Chappathi, Poori, and Dosa Batter is prepared fresh using clean
              ingredients — never relying on artificial preservatives, soda, or
              dough softeners.
            </p>
          </div>

          <div className="rounded-3xl border border-paper-dark/80 bg-white p-8 sm:p-10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-paper text-gold">
              <Compass className="h-6 w-6 text-accent-hover" />
            </div>
            <h2 className="mt-5 font-heading text-2xl font-bold text-brand sm:text-3xl">
              Our Vision
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              To make <span className="font-semibold text-brand">{COMPANY_NAME}</span>{" "}
              and the <span className="font-semibold text-brand">{BRAND_NAME}</span>{" "}
              label synonymous with trustworthy ready-to-cook Indian food —
              serving both neighborhood households and commercial hospitality
              kitchens with consistent excellence.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 5-Step Hygienic Process ─── */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
              Quality &amp; Hygiene Standards
            </p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand sm:text-4xl">
              How we keep every batch clean, soft, and natural
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="flex flex-col rounded-3xl border border-paper-dark/80 bg-white p-6"
              >
                <span className="font-heading text-3xl font-extrabold text-accent">
                  {item.step}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold text-brand">
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

      {/* ─── Core Pillars Banner ─── */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-brand p-8 text-cream sm:p-14">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                value: "0%",
                label: "Preservatives & Chemical Softeners",
              },
              {
                icon: Leaf,
                value: "100%",
                label: "Natural Grains & Pure Ingredients",
              },
              {
                icon: Sparkles,
                value: "3",
                label: "Dedicated Signature Brand Lines",
              },
              {
                icon: ThermometerSnowflake,
                value: "0–5°C",
                label: "Hygienic Cold-Chain Care",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <stat.icon className="h-6 w-6 text-accent" />
                <div className="mt-4 font-heading text-4xl font-extrabold text-white">
                  {stat.value}
                </div>
                <p className="mt-1.5 text-sm text-cream/75">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-cream/85">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                Retail &amp; Supermarket Distribution
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                HoReCa &amp; Catering Bulk Supply
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
    </>
  );
}
