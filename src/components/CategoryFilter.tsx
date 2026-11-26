"use client";

import { PRODUCT_CATEGORIES } from "@/lib/constants";

interface CategoryFilterProps {
  selected: string;
  onChange: (category: string) => void;
  totalCount: number;
}

const LABELS: Record<string, string> = {
  All: "All Staples",
  Chappathi: "Chappathi",
  Poori: "Poori",
  "Dosa Batter": "Dosa Batter",
};

export default function CategoryFilter({
  selected,
  onChange,
  totalCount,
}: CategoryFilterProps) {
  return (
    <div
      className="flex flex-wrap items-center gap-1.5"
      role="tablist"
      aria-label="Filter by product category"
    >
      {PRODUCT_CATEGORIES.map((cat) => {
        const active = selected === cat;

        return (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(cat)}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-150 sm:text-[13px] ${
              active
                ? "bg-brand text-white shadow-xs"
                : "border border-paper-dark/60 bg-white text-muted hover:border-brand/35 hover:text-brand"
            }`}
          >
            <span>{LABELS[cat] ?? cat}</span>
            {cat === "All" && (
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${
                  active ? "bg-white/20 text-white" : "bg-paper text-muted"
                }`}
              >
                {totalCount}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
