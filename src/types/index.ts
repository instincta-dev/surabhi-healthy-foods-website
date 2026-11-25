export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  unit: string;
  image_url: string | null;
  is_available: boolean;
  created_at: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  message: string;
  created_at?: string;
}

export type ProductCategory =
  | "Millets"
  | "Cold-pressed oils"
  | "Healthy snacks"
  | "Natural sweeteners"
  | "Health mixes";
