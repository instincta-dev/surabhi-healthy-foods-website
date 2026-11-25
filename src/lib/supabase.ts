import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

function isConfigured(): boolean {
  return Boolean(
    supabaseUrl &&
      !supabaseUrl.includes("your_supabase") &&
      supabaseAnonKey &&
      !supabaseAnonKey.includes("your_supabase")
  );
}

// Only create a real client when credentials are configured
let _client: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (!isConfigured()) return null;
  if (!_client) {
    _client = createClient(supabaseUrl, supabaseAnonKey);
  }
  return _client;
}

export { isConfigured as isSupabaseConfigured };
