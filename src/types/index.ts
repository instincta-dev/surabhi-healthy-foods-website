export type ProductBrand =
  | "Abhiram's Chappathi"
  | "Abhiram's Poori"
  | "Abhiram's Dosa Batter";

export type ProductCategory = "Chappathi" | "Poori" | "Dosa Batter";

export type PackSizeKey = "250g" | "500g" | "1kg" | "2kg";

export interface ProductVariant {
  sizeKey: PackSizeKey;
  label: string;
  unit: string;
  variantName: string;
  servingNote: string;
  price: number;
  unitRate: string;
}

export interface Product {
  id: string;
  brand_name: ProductBrand;
  name: string;
  description: string;
  category: ProductCategory;
  price: number | null;
  unit: string;
  prep_time: string;
  shelf_life: string;
  storage: string;
  highlights: string[];
  image_url: string | null;
  is_available: boolean;
  sort_order: number;
  created_at: string;
  variants?: ProductVariant[];
}

export interface ContactMessage {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  enquiry_type?: string;
  product_interest?: string;
  message: string;
  created_at?: string;
}
