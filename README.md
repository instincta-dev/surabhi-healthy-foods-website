# Surabhi Healthy Foods — Abhiram's Product Showcase

Official website for **Surabhi Healthy Foods**, manufacturers of the **Abhiram's** range of everyday Indian kitchen staples:

- **Abhiram's Chappathi** — Half Cooked Whole Wheat Chappathi
- **Abhiram's Poori** — Fresh Ready-to-Fry Wheat Poori
- **Abhiram's Dosa Batter** — Stone-Ground Fresh Dosa & Idli Batter

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Cache Components) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Backend / DB | Supabase (PostgreSQL + RLS) |
| Package Manager | Bun |
| Hosting | Vercel |
| Icons | Lucide React |
| Typography | Bricolage Grotesque + Inter (`next/font/google`) |

## Getting Started

### 1. Install dependencies

```bash
bun install
```

### 2. Set up Supabase

1. Create a project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** and execute [`supabase/schema.sql`](./supabase/schema.sql).
3. Add your Project URL and Anon Key in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

> Without Supabase configured, the application cleanly falls back to the built-in catalog in `src/lib/constants.ts`.

### 3. Run locally

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
public/images/              # Abhiram's logo and product visuals
src/
├── app/
│   ├── layout.tsx          # Root layout, Google Fonts, Header & Footer
│   ├── page.tsx            # Home page (Hero, 3 Brand Lines, Interactive Prep Guide)
│   ├── about/page.tsx      # About Surabhi Healthy Foods & 5-step process
│   ├── products/page.tsx   # Catalog, category tabs & comparison table
│   ├── contact/page.tsx    # Contact channels & Supabase enquiry form
│   └── globals.css         # Tailwind v4 @theme inline tokens
├── components/
│   ├── Header.tsx          # Responsive sticky navigation with logo lockup
│   ├── Footer.tsx          # Brand footer & navigation
│   ├── SignatureShowcase.tsx # Interactive prep guide tabs
│   ├── ProductsCatalog.tsx # Client category filtering
│   ├── ProductCard.tsx     # Pack detail card
│   ├── CategoryFilter.tsx  # Filter pills
│   └── ContactForm.tsx     # Enquiry form with product pre-selection
├── lib/
│   ├── supabase.ts         # Resilient Supabase client
│   ├── api.ts              # Catalog & enquiry submission helpers
│   └── constants.ts        # Brand metadata & fallback product catalog
└── types/index.ts          # Shared TypeScript interfaces
```

## Deploying to Vercel

1. Push the repository to GitHub.
2. Import into [Vercel](https://vercel.com) (configured via `vercel.json` to install and build with `bun`).
3. Configure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel Environment Variables.
4. Deploy.
