import { getSupabaseClient } from "./supabase";
import {
  FALLBACK_PRODUCTS,
  buildCoreCatalogProducts,
  normalizeProductCategory,
} from "./constants";
import type { Product, ContactMessage } from "@/types";

const ALLOWED_DB_CATEGORIES = [
  "Chappathi",
  "Chapati",
  "Poori",
  "Dosa Batter",
];

export async function getProducts(): Promise<Product[]> {
  const client = getSupabaseClient();
  if (!client) return FALLBACK_PRODUCTS;

  const { data, error } = await client
    .from("products")
    .select("*")
    .eq("is_available", true)
    .in("category", ALLOWED_DB_CATEGORIES)
    .order("sort_order", { ascending: true })
    .order("name", { ascending: true });

  if (error) {
    console.error("Error fetching products:", error);
    return FALLBACK_PRODUCTS;
  }

  return data && data.length > 0
    ? buildCoreCatalogProducts(data as Product[])
    : FALLBACK_PRODUCTS;
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  const normalized =
    category === "All" ? "All" : normalizeProductCategory(category);

  if (category !== "All" && !normalized) {
    return [];
  }

  const allCore = await getProducts();
  if (normalized === "All") return allCore;
  return allCore.filter((p) => p.category === normalized);
}

export async function submitContactMessage(
  message: ContactMessage
): Promise<{ success: boolean; error?: string }> {
  const client = getSupabaseClient();
  if (!client) {
    console.log("Contact form submission (fallback dev mode):", message);
    return { success: true };
  }

  const { error } = await client.from("contact_messages").insert([
    {
      name: message.name,
      phone: message.phone,
      email: message.email || null,
      enquiry_type: message.enquiry_type || "Home Order",
      product_interest: message.product_interest || null,
      message: message.message,
    },
  ]);

  if (error) {
    console.error("Error submitting contact message:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
