import { getSupabaseClient } from "./supabase";
import { FALLBACK_PRODUCTS } from "./constants";
import type { Product, ContactMessage } from "@/types";

export async function getProducts(): Promise<Product[]> {
  const client = getSupabaseClient();
  if (!client) return FALLBACK_PRODUCTS;

  const { data, error } = await client
    .from("products")
    .select("*")
    .eq("is_available", true)
    .order("sort_order", { ascending: true })
    .order("name", { ascending: true });

  if (error) {
    console.error("Error fetching products:", error);
    return FALLBACK_PRODUCTS;
  }

  return data && data.length > 0 ? data : FALLBACK_PRODUCTS;
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
    .order("sort_order", { ascending: true })
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

  return data && data.length > 0
    ? data
    : FALLBACK_PRODUCTS.filter(
        (p) => category === "All" || p.category === category
      );
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
