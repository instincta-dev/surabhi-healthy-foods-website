import type { Product, ProductBrand } from "@/types";

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

export interface BrandLineInfo {
  id: "chappathi" | "poori" | "dosa-batter";
  brandName: ProductBrand;
  category: "Chappathi" | "Poori" | "Dosa Batter";
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
    packSizes: ["10 Pieces (400g)", "20 Pieces (800g)", "50 Pieces Bulk Pack"],
    steps: [
      {
        title: "Heat the tawa",
        detail: "Pre-heat a dry pan or tawa on medium-high flame without oil.",
      },
      {
        title: "Flip for 30 seconds",
        detail: "Place chappathi for 15 seconds per side until light golden bubbles appear.",
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
    packSizes: ["10 Pieces (300g)", "20 Pieces (600g)"],
    steps: [
      {
        title: "Heat cooking oil",
        detail: "Bring clean frying oil to medium-high heat in a kadai.",
      },
      {
        title: "Fry & gently press",
        detail: "Slide in a disc and gently press with a slotted ladle for 15 seconds.",
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
    packSizes: ["1 kg Fresh Pouch", "2 kg Family Tub"],
    steps: [
      {
        title: "Stir gently",
        detail: "Allow chilled batter to settle 10 mins, add salt to taste if needed, and stir lightly.",
      },
      {
        title: "Spread on hot tawa",
        detail: "Pour a ladle onto a seasoned tawa and swirl into a thin crisp circle.",
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

// Fallback catalog when Supabase credentials are not yet connected
export const FALLBACK_PRODUCTS: Product[] = [
  {
    id: "chappathi-10",
    brand_name: "Abhiram's Chappathi",
    name: "Half Cooked Chappathi — Standard Pack",
    description:
      "Soft, lightly tawa-seared whole wheat chappathis crafted from 100% chakki-fresh wheat atta. Ready to puff on your tawa in 30 seconds.",
    category: "Chappathi",
    price: null,
    unit: "10 Pieces · 400g",
    prep_time: "30 seconds on hot tawa",
    shelf_life: "7 days refrigerated",
    storage: "Refrigerate at 0°C – 5°C",
    highlights: [
      "100% Whole Wheat Atta",
      "Zero Maida & Zero Preservatives",
      "Soft & Layered Texture",
    ],
    image_url: "/images/chappathi.png",
    is_available: true,
    sort_order: 1,
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "chappathi-20",
    brand_name: "Abhiram's Chappathi",
    name: "Half Cooked Chappathi — Family Pack",
    description:
      "Generous family-sized pack of hygienically prepared half-cooked whole wheat chappathis for weekday dinners and tiffins.",
    category: "Chappathi",
    price: null,
    unit: "20 Pieces · 800g",
    prep_time: "30 seconds on hot tawa",
    shelf_life: "7 days refrigerated",
    storage: "Refrigerate at 0°C – 5°C",
    highlights: [
      "Value Family Pack",
      "Zero Artificial Softeners",
      "Consistent Homestyle Size",
    ],
    image_url: "/images/chappathi.png",
    is_available: true,
    sort_order: 2,
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "chappathi-50",
    brand_name: "Abhiram's Chappathi",
    name: "Half Cooked Chappathi — Bulk & Catering Pack",
    description:
      "Uniformly rolled, food-grade sealed bulk chappathi packs built for restaurants, hostels, PGs, and catering kitchens.",
    category: "Chappathi",
    price: null,
    unit: "50 Pieces · 2 kg",
    prep_time: "30 seconds on hot tawa",
    shelf_life: "7 days refrigerated",
    storage: "Keep chilled at 0°C – 5°C",
    highlights: [
      "HoReCa & Bulk Ready",
      "Uniform Weight & Diameter",
      "Hygienic Batch Control",
    ],
    image_url: "/images/chappathi.png",
    is_available: true,
    sort_order: 3,
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "poori-10",
    brand_name: "Abhiram's Poori",
    name: "Fresh Ready-to-Fry Poori — Classic Pack",
    description:
      "Evenly rolled whole wheat poori discs prepared for quick deep-frying. Puffs up golden, light, and crispy in 15 seconds.",
    category: "Poori",
    price: null,
    unit: "10 Pieces · 300g",
    prep_time: "15 seconds in hot oil",
    shelf_life: "5 days refrigerated",
    storage: "Refrigerate at 0°C – 5°C",
    highlights: [
      "Evenly Rolled Wheat Discs",
      "Low Oil Absorption",
      "Crisp Golden Puff Every Time",
    ],
    image_url: "/images/poori.png",
    is_available: true,
    sort_order: 4,
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "poori-20",
    brand_name: "Abhiram's Poori",
    name: "Fresh Ready-to-Fry Poori — Family & Party Pack",
    description:
      "Ideal for weekend breakfasts and festive lunches. Layered cleanly with non-stick separators so you just fry and serve.",
    category: "Poori",
    price: null,
    unit: "20 Pieces · 600g",
    prep_time: "15 seconds in hot oil",
    shelf_life: "5 days refrigerated",
    storage: "Refrigerate at 0°C – 5°C",
    highlights: [
      "Non-Stick Layered Sheets",
      "No Chemical Improvers",
      "Festive & Weekend Favourite",
    ],
    image_url: "/images/poori.png",
    is_available: true,
    sort_order: 5,
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "batter-1kg",
    brand_name: "Abhiram's Dosa Batter",
    name: "Fresh Stone-Ground Dosa & Idli Batter — 1 kg Pouch",
    description:
      "Silky, naturally fermented batter stone-ground with premium rice, whole urad dal, and RO-purified water for crisp dosas and soft idlis.",
    category: "Dosa Batter",
    price: null,
    unit: "1 kg Stand-up Pouch",
    prep_time: "Ready to pour & cook",
    shelf_life: "5–6 days refrigerated",
    storage: "Refrigerate at 0°C – 5°C",
    highlights: [
      "Traditional Stone-Ground",
      "Naturally Fermented (Zero Soda)",
      "RO-Purified Water",
    ],
    image_url: "/images/dosa-batter.png",
    is_available: true,
    sort_order: 6,
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "batter-2kg",
    brand_name: "Abhiram's Dosa Batter",
    name: "Fresh Stone-Ground Dosa & Idli Batter — 2 kg Family Tub",
    description:
      "Large hygienic family pack for everyday South Indian breakfasts. Rich natural fermentation gives authentic aroma and golden crisp edges.",
    category: "Dosa Batter",
    price: null,
    unit: "2 kg Food-Grade Tub",
    prep_time: "Ready to pour & cook",
    shelf_life: "5–6 days refrigerated",
    storage: "Refrigerate at 0°C – 5°C",
    highlights: [
      "High Yield (~28 Dosas / 32 Idlis)",
      "Zero Preservatives",
      "Consistent Daily Fermentation",
    ],
    image_url: "/images/dosa-batter.png",
    is_available: true,
    sort_order: 7,
    created_at: "2026-01-01T00:00:00.000Z",
  },
];
