import type {
  PackSizeKey,
  Product,
  ProductBrand,
  ProductCategory,
  ProductVariant,
} from "@/types";

export const COMPANY_NAME = "Surabhi Healthy Foods";
export const BRAND_NAME = "Abhiram's";
export const SITE_NAME = "Abhiram's by Surabhi Healthy Foods";
export const SITE_DESCRIPTION =
  "Surabhi Healthy Foods — Makers of Abhiram's Half Cooked Chappathi, Abhiram's Poori, and Abhiram's Dosa Batter. Fresh, preservative-free everyday Indian staples.";
export const SITE_URL = "https://surabhihealthyfoods.com";

export const CONTACT = {
  phone: "+91 98470 00000",
  whatsapp: "919847000000",
  email: "hello@surabhihealthyfoods.com",
  address: "Surabhi Healthy Foods Kitchen & Unit, City, State — PIN",
  hours: "Mon – Sat, 6:00 AM – 8:00 PM",
  serviceArea: "Retail Stores, Home Deliveries & Bulk HoReCa Supply",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
] as const;

export const PRODUCT_CATEGORIES = [
  "All",
  "Chappathi",
  "Poori",
  "Dosa Batter",
] as const;

export type PackFilterSelection = "all" | PackSizeKey;

export interface PackSizeFilterOption {
  id: PackFilterSelection;
  label: string;
  subtitle: string;
}

export const PACK_SIZE_FILTERS: readonly PackSizeFilterOption[] = [
  { id: "all", label: "All Sizes", subtitle: "Recommended pack view" },
  { id: "250g", label: "250g", subtitle: "Trial · Mini pack" },
  { id: "500g", label: "500g", subtitle: "Everyday · Standard" },
  { id: "1kg", label: "1 kg", subtitle: "Value · Family pack" },
  { id: "2kg", label: "2 kg", subtitle: "Bulk · HoReCa pack" },
] as const;

const VALID_PACK_FILTERS = new Set<string>(PACK_SIZE_FILTERS.map((q) => q.id));

/**
 * Normalize category strings (including alternate spellings like "Chapati")
 * into our three core product lines, returning null for anything else.
 */
export function normalizeProductCategory(
  raw: string | null | undefined
): ProductCategory | null {
  if (!raw) return null;
  const cleaned = raw.trim().toLowerCase();
  if (cleaned === "chappathi" || cleaned === "chapati") return "Chappathi";
  if (cleaned === "poori" || cleaned === "puri") return "Poori";
  if (cleaned === "dosa batter" || cleaned === "dosa & idli batter") {
    return "Dosa Batter";
  }
  return null;
}

export function isValidPackFilter(
  id: string | null | undefined
): id is PackFilterSelection {
  return Boolean(id && VALID_PACK_FILTERS.has(id));
}

export interface BrandLineInfo {
  id: "chappathi" | "poori" | "dosa-batter";
  brandName: ProductBrand;
  category: ProductCategory;
  tagline: string;
  headline: string;
  summary: string;
  prepTime: string;
  shelfLife: string;
  storage: string;
  keyIngredients: string;
  packSizes: string[];
  steps: { title: string; detail: string }[];
  highlights: string[];
  accentColor: string;
}

export const BRAND_LINES: BrandLineInfo[] = [
  {
    id: "chappathi",
    brandName: "Abhiram's Chappathi",
    category: "Chappathi",
    tagline: "Half Cooked Whole Wheat Chappathi",
    headline: "Soft, flaky chappathis ready in 30 seconds.",
    summary:
      "Prepared daily from 100% chakki-ground whole wheat flour, RO-purified water, and a touch of salt — lightly half-cooked on clean griddles so every chappathi puffs soft and warm in your kitchen.",
    prepTime: "30 sec on Tawa",
    shelfLife: "7 Days (0°C – 5°C)",
    storage: "Refrigerated at 0°C – 5°C",
    keyIngredients: "100% Whole Wheat Atta, RO Water, Salt",
    packSizes: ["6 Pcs (250g)", "12 Pcs (500g)", "25 Pcs (1 kg)", "50 Pcs (2 kg)"],
    steps: [
      {
        title: "Heat the tawa",
        detail: "Pre-heat a dry pan or tawa on medium-high flame without oil.",
      },
      {
        title: "Flip for 30 seconds",
        detail:
          "Place chappathi for 15 seconds per side until light golden bubbles appear.",
      },
      {
        title: "Serve soft & warm",
        detail: "Brush with ghee if desired and enjoy homestyle softness.",
      },
    ],
    highlights: [
      "100% Whole Wheat — zero maida added",
      "Zero preservatives or dough softeners",
      "Stays soft for hours in lunchboxes",
    ],
    accentColor: "#265315",
  },
  {
    id: "poori",
    brandName: "Abhiram's Poori",
    category: "Poori",
    tagline: "Fresh Ready-to-Fry Wheat Poori",
    headline: "Golden, crispy pooris without the rolling hassle.",
    summary:
      "Evenly pressed whole wheat poori discs separated by food-grade parchment sheets. Drop straight into hot oil and watch them puff into light, crisp, golden pooris in just 15 seconds.",
    prepTime: "15 sec in Hot Oil",
    shelfLife: "5 Days (0°C – 5°C)",
    storage: "Refrigerated at 0°C – 5°C",
    keyIngredients: "Whole Wheat Flour, Semolina (Sooji), RO Water, Salt",
    packSizes: ["8 Pcs (250g)", "16 Pcs (500g)", "32 Pcs (1 kg)", "64 Pcs (2 kg)"],
    steps: [
      {
        title: "Heat cooking oil",
        detail: "Bring clean frying oil to medium-high heat in a kadai.",
      },
      {
        title: "Fry & gently press",
        detail:
          "Slide in a disc and gently press with a slotted ladle for 15 seconds.",
      },
      {
        title: "Drain & serve crisp",
        detail: "Puffs up golden and airy with noticeably low oil absorption.",
      },
    ],
    highlights: [
      "Uniform thickness for reliable puffing",
      "Low oil absorption blend",
      "Zero baking soda or artificial colours",
    ],
    accentColor: "#D98506",
  },
  {
    id: "dosa-batter",
    brandName: "Abhiram's Dosa Batter",
    category: "Dosa Batter",
    tagline: "Stone-Ground Fresh Dosa & Idli Batter",
    headline: "Authentic stone-ground fermentation, ready to pour.",
    summary:
      "Coarse-ground premium parboiled rice and whole urad dal blended with fenugreek seeds and RO-purified water, then naturally fermented in temperature-controlled batches for crisp dosas and soft idlis.",
    prepTime: "Ready to Pour",
    shelfLife: "5–6 Days (0°C – 5°C)",
    storage: "Refrigerated at 0°C – 5°C",
    keyIngredients: "Parboiled Rice, Whole Urad Dal, Fenugreek, RO Water",
    packSizes: ["250g Pouch", "500g Pouch", "1 kg Pouch", "2 kg Tub"],
    steps: [
      {
        title: "Stir gently",
        detail:
          "Allow chilled batter to settle 10 mins, add salt to taste if needed, and stir lightly.",
      },
      {
        title: "Spread on hot tawa",
        detail:
          "Pour a ladle onto a seasoned tawa and swirl into a thin crisp circle.",
      },
      {
        title: "Crisp golden finish",
        detail: "Drizzle ghee or oil around edges and fold once golden brown.",
      },
    ],
    highlights: [
      "100% naturally fermented — zero baking soda",
      "Works equally well for crisp Dosas & fluffy Idlis",
      "Ground daily with RO-purified water",
    ],
    accentColor: "#6B3E1D",
  },
];

/**
 * Three flagship products with dynamically selectable pack variants.
 * Under the default Products view, only these 3 cards appear.
 */
export const FALLBACK_PRODUCTS: Product[] = [
  {
    id: "abhirams-chappathi",
    brand_name: "Abhiram's Chappathi",
    name: "Half Cooked Chappathi",
    description:
      "Soft, lightly tawa-seared whole wheat chappathis from 100% chakki atta that puff fresh in 30 seconds.",
    category: "Chappathi",
    price: 65,
    unit: "12 Pieces · 500g",
    prep_time: "30 sec on tawa",
    shelf_life: "7 days chilled",
    storage: "0°C – 5°C refrigerated",
    highlights: [
      "100% Whole Wheat Atta (Zero Maida)",
      "Zero preservatives or dough softeners",
    ],
    image_url: "/images/chappathi.png",
    is_available: true,
    sort_order: 1,
    created_at: "2026-01-01T00:00:00.000Z",
    variants: [
      {
        sizeKey: "250g",
        label: "250g",
        unit: "6 Pieces · 250g",
        variantName: "Mini Trial Pouch",
        servingNote: "Light dinner portion for 1–2 people.",
        price: 35,
        unitRate: "₹5.83 / piece",
      },
      {
        sizeKey: "500g",
        label: "500g",
        unit: "12 Pieces · 500g",
        variantName: "Standard Everyday Pack",
        servingNote: "Everyday household pack with homestyle softness.",
        price: 65,
        unitRate: "₹5.42 / piece",
      },
      {
        sizeKey: "1kg",
        label: "1 kg",
        unit: "25 Pieces · 1 kg",
        variantName: "Family Value Pack",
        servingNote: "Best-value pack for weekly weekday meals & tiffins.",
        price: 120,
        unitRate: "₹4.80 / piece",
      },
      {
        sizeKey: "2kg",
        label: "2 kg",
        unit: "50 Pieces · 2 kg",
        variantName: "Bulk & Catering Pack",
        servingNote: "Uniformly sealed for hostels, hotels & catering.",
        price: 220,
        unitRate: "₹4.40 / piece",
      },
    ],
  },
  {
    id: "abhirams-poori",
    brand_name: "Abhiram's Poori",
    name: "Fresh Ready-to-Fry Poori",
    description:
      "Evenly pressed wheat & sooji poori discs with parchment separators that puff crisp and golden in 15 seconds.",
    category: "Poori",
    price: 70,
    unit: "16 Pieces · 500g",
    prep_time: "15 sec in hot oil",
    shelf_life: "5 days chilled",
    storage: "0°C – 5°C refrigerated",
    highlights: [
      "Low oil absorption wheat-sooji blend",
      "Non-stick parchment sheets between discs",
    ],
    image_url: "/images/poori.png",
    is_available: true,
    sort_order: 2,
    created_at: "2026-01-01T00:00:00.000Z",
    variants: [
      {
        sizeKey: "250g",
        label: "250g",
        unit: "8 Pieces · 250g",
        variantName: "Mini Breakfast Pack",
        servingNote: "Quick crisp morning breakfast for 1–2 people.",
        price: 38,
        unitRate: "₹4.75 / piece",
      },
      {
        sizeKey: "500g",
        label: "500g",
        unit: "16 Pieces · 500g",
        variantName: "Standard Classic Pack",
        servingNote: "Balanced family weekend breakfast pouch.",
        price: 70,
        unitRate: "₹4.38 / piece",
      },
      {
        sizeKey: "1kg",
        label: "1 kg",
        unit: "32 Pieces · 1 kg",
        variantName: "Family & Party Pack",
        servingNote: "Festive lunches & family gatherings without rolling.",
        price: 130,
        unitRate: "₹4.06 / piece",
      },
      {
        sizeKey: "2kg",
        label: "2 kg",
        unit: "64 Pieces · 2 kg",
        variantName: "HoReCa & Event Bulk Pack",
        servingNote: "High-volume catering & dining hall ready discs.",
        price: 240,
        unitRate: "₹3.75 / piece",
      },
    ],
  },
  {
    id: "abhirams-dosa-batter",
    brand_name: "Abhiram's Dosa Batter",
    name: "Stone-Ground Dosa Batter",
    description:
      "Silky, naturally fermented rice & whole urad dal batter ground with RO-purified water for crisp dosas and soft idlis.",
    category: "Dosa Batter",
    price: 50,
    unit: "500g · ~10 Dosas",
    prep_time: "Ready to pour",
    shelf_life: "5–6 days chilled",
    storage: "0°C – 5°C refrigerated",
    highlights: [
      "Traditional stone-ground (Zero baking soda)",
      "Crisp golden dosas & fluffy soft idlis",
    ],
    image_url: "/images/dosa-batter.png",
    is_available: true,
    sort_order: 3,
    created_at: "2026-01-01T00:00:00.000Z",
    variants: [
      {
        sizeKey: "250g",
        label: "250g",
        unit: "250g · ~5 Dosas",
        variantName: "Single-Meal Trial Pouch",
        servingNote: "Fresh mini pouch for quick single breakfasts.",
        price: 28,
        unitRate: "₹11.20 / 100g",
      },
      {
        sizeKey: "500g",
        label: "500g",
        unit: "500g · ~10 Dosas",
        variantName: "Standard Stand-up Pouch",
        servingNote: "Convenient everyday spouted stand-up pouch.",
        price: 50,
        unitRate: "₹10.00 / 100g",
      },
      {
        sizeKey: "1kg",
        label: "1 kg",
        unit: "1 kg · ~20 Dosas",
        variantName: "Family Everyday Pouch",
        servingNote: "20 crisp dosas or 24 pillowy idlis for the week.",
        price: 90,
        unitRate: "₹9.00 / 100g",
      },
      {
        sizeKey: "2kg",
        label: "2 kg",
        unit: "2 kg · ~40 Dosas",
        variantName: "Bulk Food-Grade Tub",
        servingNote: "Resealable 2 kg tub for large families & kitchens.",
        price: 170,
        unitRate: "₹8.50 / 100g",
      },
    ],
  },
];

function extractPackSizeKey(text: string): PackSizeKey | null {
  if (/\b250\s*g\b/i.test(text)) return "250g";
  if (/\b500\s*g\b/i.test(text)) return "500g";
  if (/\b1\s*kg\b/i.test(text)) return "1kg";
  if (/\b2\s*kg\b/i.test(text)) return "2kg";
  if (/\b10\s*(pieces|pcs)\b/i.test(text)) return "500g";
  if (/\b20\s*(pieces|pcs)\b/i.test(text)) return "1kg";
  if (/\b50\s*(pieces|pcs)\b/i.test(text)) return "2kg";
  return null;
}

/**
 * Scope any DB or fallback rows strictly to the 3 core categories (Chappathi, Poori,
 * Dosa Batter) and return one canonical card per product with rich pack variants.
 */
export function buildCoreCatalogProducts(rawProducts: Product[]): Product[] {
  const byCategory = new Map<ProductCategory, Product[]>();

  for (const row of rawProducts) {
    const category = normalizeProductCategory(row.category);
    if (!category) continue;
    const list = byCategory.get(category) ?? [];
    list.push({ ...row, category });
    byCategory.set(category, list);
  }

  return FALLBACK_PRODUCTS.map((base) => {
    const dbRows = byCategory.get(base.category);
    if (!dbRows || dbRows.length === 0) return base;

    const primaryDb = dbRows[0];
    const baseVariants: ProductVariant[] = (base.variants ?? []).map((variant) => {
      const matchedRow = dbRows.find(
        (r) => extractPackSizeKey(`${r.unit} ${r.name}`) === variant.sizeKey
      );
      if (!matchedRow) return variant;
      return {
        ...variant,
        unit: matchedRow.unit || variant.unit,
        price:
          typeof matchedRow.price === "number" ? matchedRow.price : variant.price,
      };
    });

    return {
      ...base,
      description: primaryDb.description || base.description,
      image_url: primaryDb.image_url || base.image_url,
      highlights:
        primaryDb.highlights && primaryDb.highlights.length > 0
          ? primaryDb.highlights
          : base.highlights,
      variants: baseVariants,
    };
  });
}

export function resolveVariantForPack(
  product: Product,
  packSize: PackFilterSelection
): ProductVariant {
  const variants = product.variants ?? [];
  const defaultVariant: ProductVariant = variants.find(
    (v) => v.sizeKey === "500g"
  ) ??
    variants[0] ?? {
      sizeKey: "500g",
      label: "500g",
      unit: product.unit,
      variantName: "Standard Pack",
      servingNote: product.description,
      price: product.price ?? 0,
      unitRate: "",
    };

  if (packSize === "all") return defaultVariant;
  return variants.find((v) => v.sizeKey === packSize) ?? defaultVariant;
}
