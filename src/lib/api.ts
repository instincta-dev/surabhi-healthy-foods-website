import { getSupabaseClient, isSupabaseConfigured } from "./supabase";
import { FALLBACK_PRODUCTS } from "./constants";
import type { Product, ContactMessage } from "@/types";

export async function getProducts(): Promise<Product[]> {
  const client = getSupabaseClient();
  if (!client) return FALLBACK_PRODUCTS;

  const { data, error } = await client
    .from("products")
    .select("*")
    .eq("is_available", true)
    .order("category", { ascending: true })
    .order("name", { ascending: true });

  if (error) {
    console.error("Error fetching products:", error);
    return FALLBACK_PRODUCTS;
  }

  return data ?? FALLBACK_PRODUCTS;
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  const client = getSupabaseClient();
  if (!client) {
    if (category === "All") return FALLBACK_PRODUCTS;
    return FALLBACK_PRODUCTS.filter((p) => p.category === category);
  }

  let query = client
    .from("products")
    .select("*")
    .eq("is_available", true)
    .order("name", { ascending: true });

  if (category !== "All") {
    query = query.eq("category", category);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching products:", error);
    return FALLBACK_PRODUCTS.filter(
      (p) => category === "All" || p.category === category
    );
  }

  return data ?? [];
}

export async function submitContactMessage(
  message: ContactMessage
): Promise<{ success: boolean; error?: string }> {
  const client = getSupabaseClient();
  if (!client) {
    // In dev without Supabase, just log and return success
    console.log("Contact form submission (dev mode):", message);
    return { success: true };
  }

  const { error } = await client.from("contact_messages").insert([message]);

  if (error) {
    console.error("Error submitting contact message:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
