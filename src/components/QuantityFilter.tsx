"use client";

import Link from "next/link";
import { Scale, Check, ThermometerSnowflake, ArrowRight } from "lucide-react";
import {
  PACK_SIZE_FILTERS,
  type PackFilterSelection,
} from "@/lib/constants";

interface QuantityFilterProps {
  selected: PackFilterSelection;
  onChange: (sizeId: PackFilterSelection) => void;
}

export default function QuantityFilter({
  selected,
  onChange,
}: QuantityFilterProps) {
  return (
    <aside
      aria-label="Pack size and weight filter"
      className="flex flex-col rounded-2xl border border-paper-dark/50 bg-white p-3.5 shadow-2xs sm:p-4"
    >
      <div className="mb-2.5 flex items-center justify-between gap-2 px-1">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-gold">
          <Scale className="h-3.5 w-3.5" />
          Pack Size
        </span>
        {selected !== "all" && (
          <button
            type="button"
            onClick={() => onChange("all")}
            className="text-[11px] font-semibold text-brand underline-offset-2 hover:underline"
          >
            Reset
          </button>
        )}
      </div>

      {/* Horizontal pills on mobile/tablet, compact vertical stack on lg sidebar */}
      <div
        className="flex flex-wrap gap-1.5 lg:flex-col"
        role="radiogroup"
        aria-label="Select pack size or weight"
      >
        {PACK_SIZE_FILTERS.map((option) => {
          const active = selected === option.id;

          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(option.id)}
              className={`group flex items-center justify-between gap-2 rounded-xl border px-3 py-2 text-left transition-all duration-150 lg:w-full ${
                active
                  ? "border-brand bg-brand text-white shadow-xs"
                  : "border-paper-dark/45 bg-cream/60 text-ink hover:border-brand/35 hover:bg-warm"
              }`}
            >
              <div className="min-w-0">
                <span className="block text-[13px] font-bold leading-tight">
                  {option.label}
                </span>
                <span
                  className={`hidden text-[11px] leading-tight lg:block ${
                    active ? "text-cream/80" : "text-muted"
                  }`}
                >
                  {option.subtitle}
                </span>
              </div>

              <span
                className={`hidden h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors lg:flex ${
                  active
                    ? "border-accent bg-accent text-brand-deep"
                    : "border-paper-dark bg-white text-transparent group-hover:border-brand/40"
                }`}
              >
                <Check className="h-2.5 w-2.5 stroke-[3]" />
              </span>
            </button>
          );
        })}
      </div>

      {/* Compact freshness & bulk footer inside sidebar on desktop */}
      <div className="mt-3.5 hidden border-t border-paper-dark/40 pt-3 lg:block">
        <div className="flex items-start gap-2 rounded-xl bg-sage-tint/80 px-2.5 py-2 text-[11px] leading-snug text-brand">
          <ThermometerSnowflake className="mt-0.5 h-3.5 w-3.5 shrink-0 text-herb" />
          <span>Prepared fresh daily · Store at 0°C – 5°C</span>
        </div>
        <Link
          href="/contact"
          className="mt-2.5 inline-flex w-full items-center justify-between rounded-xl px-2 py-1.5 text-[11.5px] font-semibold text-brand transition-colors hover:bg-warm"
        >
          <span>Bulk &amp; HoReCa quotes</span>
          <ArrowRight className="h-3.5 w-3.5 text-gold" />
        </Link>
      </div>
    </aside>
  );
}
