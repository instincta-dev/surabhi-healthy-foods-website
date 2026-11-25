"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Thermometer, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { BRAND_LINES } from "@/lib/constants";

const IMAGE_MAP: Record<string, string> = {
  chappathi: "/images/chappathi.png",
  poori: "/images/poori.png",
  "dosa-batter": "/images/dosa-batter.png",
};

export default function SignatureShowcase() {
  const [activeId, setActiveId] = useState<string>(BRAND_LINES[0].id);
  const activeBrand =
    BRAND_LINES.find((b) => b.id === activeId) ?? BRAND_LINES[0];

  return (
    <div className="rounded-[32px] border border-paper-dark/80 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
      {/* Tabs */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-paper-dark/80 pb-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
            From Pack to Plate
          </p>
          <h2 className="mt-1 font-heading text-2xl font-bold text-brand sm:text-3xl">
            How each Abhiram&apos;s staple cooks in minutes
          </h2>
        </div>

        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Select product preparation guide"
        >
          {BRAND_LINES.map((brand) => {
            const isSelected = brand.id === activeId;
            return (
              <button
                key={brand.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveId(brand.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  isSelected
                    ? "bg-brand text-white shadow-xs"
                    : "bg-paper text-muted hover:bg-paper-dark/60 hover:text-brand"
                }`}
              >
                {brand.brandName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="grid items-center gap-10 lg:grid-cols-12">
        {/* Left Image + Specs */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-paper">
            <Image
              src={IMAGE_MAP[activeBrand.id] ?? "/images/chappathi.png"}
              alt={activeBrand.brandName}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-brand shadow-xs backdrop-blur-xs">
                <Clock className="h-3.5 w-3.5 text-accent" />
                {activeBrand.prepTime}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-deep/90 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-xs">
                <Thermometer className="h-3.5 w-3.5 text-accent" />
                {activeBrand.shelfLife}
              </span>
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-sage-tint p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-brand">
              Simple Ingredients
            </p>
            <p className="mt-1 text-sm font-medium text-ink">
              {activeBrand.keyIngredients}
            </p>
          </div>
        </div>

        {/* Right Details + 3 Steps */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-paper px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            {activeBrand.brandName} · {activeBrand.tagline}
          </div>

          <h3 className="mt-3 font-heading text-2xl font-extrabold text-brand sm:text-3xl">
            {activeBrand.headline}
          </h3>

          <p className="mt-3 text-base leading-relaxed text-muted">
            {activeBrand.summary}
          </p>

          {/* 3-Step Preparation */}
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {activeBrand.steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-paper-dark/80 bg-cream/70 p-4"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-bold text-accent">
                  0{index + 1}
                </span>
                <h4 className="mt-2.5 font-heading text-base font-bold text-brand">
                  {step.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Pack Sizes + Highlights */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-paper-dark/80 pt-6">
            <div className="flex flex-wrap gap-2">
              {activeBrand.highlights.map((h) => (
                <span
                  key={h}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-ink"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-sprout" />
                  {h}
                </span>
              ))}
            </div>

            <Link
              href={`/products?category=${encodeURIComponent(activeBrand.category)}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-deep"
            >
              View {activeBrand.category} Packs
              <ArrowRight className="h-4 w-4 text-accent" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
