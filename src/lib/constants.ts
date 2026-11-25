export const SITE_NAME = "Surabhi Healthy Foods";
export const SITE_DESCRIPTION =
  "Millets, cold-pressed oils, traditional snacks and natural sweeteners — made with simple ingredients and no shortcuts.";
export const SITE_URL = "https://surabhihealthyfoods.com";

export const CONTACT = {
  phone: "+91 XXXXX XXXXX",
  whatsapp: "+91XXXXXXXXXX",
  email: "hello@surabhihealthyfoods.com",
  address: "Your Shop Address, City, State, PIN",
  hours: "Mon – Sat, 9 AM – 7 PM",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
] as const;

export const PRODUCT_CATEGORIES = [
  "All",
  "Millets",
  "Cold-pressed oils",
  "Healthy snacks",
  "Natural sweeteners",
  "Health mixes",
] as const;

// Fallback products when Supabase is not configured
export const FALLBACK_PRODUCTS = [
  {
    id: "1",
    name: "Ragi Flour",
    description:
      "Stone-ground finger millet, rich in calcium — perfect for rotis, dosas and porridge.",
    category: "Millets",
    price: 120,
    unit: "500g",
    image_url: null,
    is_available: true,
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "2",
    name: "Foxtail Millet",
    description:
      "A light, wholesome alternative to rice for everyday meals.",
    category: "Millets",
    price: 110,
    unit: "500g",
    image_url: null,
    is_available: true,
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "3",
    name: "Groundnut Oil",
    description:
      "Wood-pressed for natural aroma and taste in everyday cooking.",
    category: "Cold-pressed oils",
    price: 350,
    unit: "1L",
    image_url: null,
    is_available: true,
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "4",
    name: "Coconut Oil",
    description: "Pure, cold-pressed oil for cooking, hair and skin.",
    category: "Cold-pressed oils",
    price: 300,
    unit: "500ml",
    image_url: null,
    is_available: true,
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "5",
    name: "Millet Laddu",
    description:
      "Traditional sweet bites made with millets, jaggery and nuts.",
    category: "Healthy snacks",
    price: 250,
    unit: "250g",
    image_url: null,
    is_available: true,
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "6",
    name: "Roasted Mixture",
    description:
      "Crunchy, roasted — not fried — for guilt-free snacking.",
    category: "Healthy snacks",
    price: 180,
    unit: "250g",
    image_url: null,
    is_available: true,
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "7",
    name: "Organic Jaggery",
    description:
      "Chemical-free jaggery, a natural swap for refined sugar.",
    category: "Natural sweeteners",
    price: 150,
    unit: "500g",
    image_url: null,
    is_available: true,
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "8",
    name: "Multigrain Health Mix",
    description:
      "A nourishing blend of grains and pulses for a strong start.",
    category: "Health mixes",
    price: 280,
    unit: "500g",
    image_url: null,
    is_available: true,
    created_at: "2026-01-01T00:00:00.000Z",
  },
];
