-- ============================================================================
-- Surabhi Healthy Foods — Abhiram's Brand Product Catalog & Enquiries Schema
-- Run this in your Supabase SQL Editor to set up or update the database
-- ============================================================================

-- ─── Products Table ───
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  brand_name TEXT NOT NULL CHECK (brand_name IN (
    'Abhiram''s Chappathi',
    'Abhiram''s Poori',
    'Abhiram''s Dosa Batter'
  )),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN (
    'Chappathi',
    'Poori',
    'Dosa Batter'
  )),
  price NUMERIC(10,2) CHECK (price IS NULL OR price >= 0),
  unit TEXT NOT NULL,
  prep_time TEXT NOT NULL DEFAULT '30 seconds',
  shelf_life TEXT NOT NULL DEFAULT '5–7 days refrigerated',
  storage TEXT NOT NULL DEFAULT 'Keep refrigerated at 0°C – 5°C',
  highlights TEXT[] NOT NULL DEFAULT '{}',
  image_url TEXT,
  is_available BOOLEAN DEFAULT TRUE,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ─── Contact Messages Table ───
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  enquiry_type TEXT DEFAULT 'Home Order',
  product_interest TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ─── Row Level Security ───
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Products are publicly readable" ON products;
CREATE POLICY "Products are publicly readable"
  ON products FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Anyone can insert contact messages" ON contact_messages;
CREATE POLICY "Anyone can insert contact messages"
  ON contact_messages FOR INSERT
  WITH CHECK (true);

-- ─── Indexes ───
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_available ON products(is_available);
CREATE INDEX IF NOT EXISTS idx_products_sort_order ON products(sort_order);
CREATE INDEX IF NOT EXISTS idx_contact_messages_read ON contact_messages(is_read);

-- ─── Seed Data for Abhiram's by Surabhi Healthy Foods ───
INSERT INTO products (
  brand_name,
  name,
  description,
  category,
  price,
  unit,
  prep_time,
  shelf_life,
  storage,
  highlights,
  image_url,
  sort_order
) VALUES
  (
    'Abhiram''s Chappathi',
    'Half Cooked Chappathi — Standard Pack',
    'Soft, lightly tawa-seared whole wheat chappathis crafted from 100% chakki-fresh wheat atta. Ready to puff on your tawa in just 30 seconds with homestyle softness.',
    'Chappathi',
    NULL,
    '10 Pieces · 400g',
    '30 seconds on hot tawa',
    '7 days refrigerated',
    'Refrigerate at 0°C – 5°C; bring to room temperature before heating',
    ARRAY['100% Whole Wheat Atta', 'Zero Maida & Zero Preservatives', 'Soft & Layered Texture'],
    '/images/chappathi.png',
    1
  ),
  (
    'Abhiram''s Chappathi',
    'Half Cooked Chappathi — Family Pack',
    'Generous family-sized pack of hygienically prepared half-cooked whole wheat chappathis. Ideal for busy weekday dinners, tiffins, and effortless family meals.',
    'Chappathi',
    NULL,
    '20 Pieces · 800g',
    '30 seconds on hot tawa',
    '7 days refrigerated',
    'Refrigerate at 0°C – 5°C; reseal pouch after opening',
    ARRAY['Value Family Pack', 'Zero Artificial Softeners', 'Consistent Homestyle Size'],
    '/images/chappathi.png',
    2
  ),
  (
    'Abhiram''s Chappathi',
    'Half Cooked Chappathi — Bulk & Catering Pack',
    'Uniformly rolled, food-grade sealed bulk chappathi packs built for restaurants, hostels, PGs, events, and institutional kitchens seeking reliable daily supply.',
    'Chappathi',
    NULL,
    '50 Pieces · 2 kg',
    '30 seconds on hot tawa',
    '7 days refrigerated',
    'Keep chilled at 0°C – 5°C; daily wholesale dispatch available',
    ARRAY['HoReCa & Bulk Ready', 'Uniform Weight & Diameter', 'Hygienic Batch Control'],
    '/images/chappathi.png',
    3
  ),
  (
    'Abhiram''s Poori',
    'Fresh Ready-to-Fry Poori — Classic Pack',
    'Evenly rolled whole wheat poori discs prepared for quick deep-frying. Puffs up golden, light, and crispy in 15 seconds with minimal oil absorption.',
    'Poori',
    NULL,
    '10 Pieces · 300g',
    '15 seconds in hot oil',
    '5 days refrigerated',
    'Keep refrigerated at 0°C – 5°C; fry directly from chilled or thawed',
    ARRAY['Evenly Rolled Wheat Discs', 'Low Oil Absorption', 'Crisp Golden Puff Every Time'],
    '/images/poori.png',
    4
  ),
  (
    'Abhiram''s Poori',
    'Fresh Ready-to-Fry Poori — Family & Party Pack',
    'Perfect for weekend breakfasts, festive lunches, and family gatherings. Skip the kneading and rolling — simply drop into hot oil and serve fresh puffed pooris.',
    'Poori',
    NULL,
    '20 Pieces · 600g',
    '15 seconds in hot oil',
    '5 days refrigerated',
    'Keep refrigerated at 0°C – 5°C; layered with food-grade separators',
    ARRAY['Non-Stick Layered Sheets', 'No Chemical Improvers', 'Festive & Weekend Favourite'],
    '/images/poori.png',
    5
  ),
  (
    'Abhiram''s Dosa Batter',
    'Fresh Stone-Ground Dosa & Idli Batter — 1 kg Pouch',
    'Silky, naturally fermented batter stone-ground with premium parboiled rice, whole urad dal, and RO-purified water. Delivers crisp golden dosas and pillowy soft idlis.',
    'Dosa Batter',
    NULL,
    '1 kg Stand-up Pouch',
    'Ready to pour & cook',
    '5–6 days refrigerated',
    'Store refrigerated at 0°C – 5°C; stir gently before pouring',
    ARRAY['Traditional Stone-Ground', 'Naturally Fermented (Zero Soda)', 'RO-Purified Water'],
    '/images/dosa-batter.png',
    6
  ),
  (
    'Abhiram''s Dosa Batter',
    'Fresh Stone-Ground Dosa & Idli Batter — 2 kg Family Tub',
    'Large hygienic family pack for daily South Indian breakfasts. Rich natural fermentation gives authentic aroma, golden crisp edges, and gentle digestibility.',
    'Dosa Batter',
    NULL,
    '2 kg Food-Grade Tub',
    'Ready to pour & cook',
    '5–6 days refrigerated',
    'Store refrigerated at 0°C – 5°C; close lid tightly after use',
    ARRAY['High Yield (~28 Dosas / 32 Idlis)', 'Zero Preservatives', 'Consistent Daily Fermentation'],
    '/images/dosa-batter.png',
    7
  )
ON CONFLICT DO NOTHING;
