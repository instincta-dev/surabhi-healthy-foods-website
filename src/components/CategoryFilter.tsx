"use client";

import { PRODUCT_CATEGORIES } from "@/lib/constants";

interface CategoryFilterProps {
  selected: string;
  onChange: (category: string) => void;
  counts?: Record<string, number>;
}

const LABELS: Record<string, string> = {
  All: "All Products",
  Chappathi: "Abhiram's Chappathi",
  Poori: "Abhiram's Poori",
  "Dosa Batter": "Abhiram's Dosa Batter",
};

export default function CategoryFilter({
  selected,
  onChange,
  counts,
}: CategoryFilterProps) {
  return (
    <div
      className="flex flex-wrap items-center gap-2.5"
      role="tablist"
      aria-label="Filter products by brand line"
    >
      {PRODUCT_CATEGORIES.map((cat) => {
        const active = selected === cat;
        const count = counts?.[cat];

        return (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(cat)}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              active
                ? "bg-brand text-white shadow-sm"
                : "border border-paper-dark bg-white text-muted hover:border-brand/40 hover:text-brand"
            }`}
          >
            <span>{LABELS[cat] ?? cat}</span>
            {typeof count === "number" && (
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  active
                    ? "bg-white/20 text-white"
                    : "bg-paper text-muted"
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
