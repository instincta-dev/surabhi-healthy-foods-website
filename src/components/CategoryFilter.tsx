"use client";

import { PRODUCT_CATEGORIES } from "@/lib/constants";

interface CategoryFilterProps {
  selected: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({
  selected,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {PRODUCT_CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            selected === cat
              ? "bg-brand text-cream"
              : "bg-sand-light text-muted hover:bg-sand-dark/40 hover:text-brand"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
