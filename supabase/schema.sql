-- ==========================================================
-- Surabhi Healthy Foods — Supabase Schema
-- Run this in your Supabase SQL Editor to set up the database
-- ==========================================================

-- ─── Products Table ───
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN (
    'Millets',
    'Cold-pressed oils',
    'Healthy snacks',
    'Natural sweeteners',
    'Health mixes'
  )),
  price NUMERIC(10,2) NOT NULL CHECK (price >= 0),
  unit TEXT NOT NULL DEFAULT '500g',
  image_url TEXT,
  is_available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ─── Contact Messages Table ───
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ─── Row Level Security ───
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Public read access for products
CREATE POLICY "Products are publicly readable"
  ON products FOR SELECT
  USING (true);

-- Public insert for contact messages (anyone can submit the form)
CREATE POLICY "Anyone can insert contact messages"
  ON contact_messages FOR INSERT
  WITH CHECK (true);

-- ─── Indexes ───
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_available ON products(is_available);
CREATE INDEX IF NOT EXISTS idx_contact_messages_read ON contact_messages(is_read);

-- ─── Seed Data ───
INSERT INTO products (name, description, category, price, unit) VALUES
  ('Ragi Flour', 'Stone-ground finger millet, rich in calcium — perfect for rotis, dosas and porridge.', 'Millets', 120, '500g'),
  ('Foxtail Millet', 'A light, wholesome alternative to rice for everyday meals.', 'Millets', 110, '500g'),
  ('Barnyard Millet', 'Gluten-free, fiber-rich millet for upma, khichdi and more.', 'Millets', 130, '500g'),
  ('Little Millet', 'Tiny grains packed with nutrients — cook like rice, eat with any curry.', 'Millets', 125, '500g'),
  ('Groundnut Oil', 'Wood-pressed for natural aroma and taste in everyday cooking.', 'Cold-pressed oils', 350, '1L'),
  ('Coconut Oil', 'Pure, cold-pressed oil for cooking, hair and skin.', 'Cold-pressed oils', 300, '500ml'),
  ('Sesame Oil', 'Traditional gingelly oil — rich flavour, cold-pressed and unrefined.', 'Cold-pressed oils', 380, '500ml'),
  ('Millet Laddu', 'Traditional sweet bites made with millets, jaggery and nuts.', 'Healthy snacks', 250, '250g'),
  ('Roasted Mixture', 'Crunchy, roasted — not fried — for guilt-free snacking.', 'Healthy snacks', 180, '250g'),
  ('Murukku', 'Crispy, hand-rolled traditional savoury made with rice flour and spices.', 'Healthy snacks', 200, '250g'),
  ('Organic Jaggery', 'Chemical-free jaggery, a natural swap for refined sugar.', 'Natural sweeteners', 150, '500g'),
  ('Raw Honey', 'Unprocessed, pure honey sourced from local beekeepers.', 'Natural sweeteners', 450, '500g'),
  ('Jaggery Powder', 'Finely ground jaggery — dissolves easily in milk, tea and desserts.', 'Natural sweeteners', 160, '500g'),
  ('Multigrain Health Mix', 'A nourishing blend of grains and pulses for a strong start.', 'Health mixes', 280, '500g'),
  ('Ragi Malt', 'Ready-to-mix ragi porridge powder — just add hot milk or water.', 'Health mixes', 220, '500g'),
  ('Sathu Maavu', 'Traditional multi-grain health mix for infants and toddlers.', 'Health mixes', 300, '500g')
ON CONFLICT DO NOTHING;
