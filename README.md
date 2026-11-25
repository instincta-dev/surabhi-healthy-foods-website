# Surabhi Healthy Foods

A clean, minimal, professional website for **Surabhi Healthy Foods** — built with Next.js 15 (App Router), Tailwind CSS v4, TypeScript, Supabase, and Bun.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Backend / DB | [Supabase](https://supabase.com) (PostgreSQL) |
| Package Manager | [Bun](https://bun.sh) |
| Hosting | [Vercel](https://vercel.com) |
| Icons | [Lucide React](https://lucide.dev) |
| Fonts | Bricolage Grotesque + Inter (Google Fonts) |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) ≥ 1.0
- A [Supabase](https://supabase.com) project (free tier works)

### 1. Install dependencies

```bash
bun install
```

### 2. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the contents of [`supabase/schema.sql`](./supabase/schema.sql)
3. Copy your project URL and anon key from **Settings → API**

### 3. Configure environment variables

Copy `.env.local` and fill in your Supabase credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Run the dev server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Note:** The site works without Supabase configured — it falls back to built-in sample data for products.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Header + Footer)
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── products/page.tsx   # Products listing + category filter
│   ├── contact/page.tsx    # Contact info + form
│   └── globals.css         # Tailwind + custom theme
├── components/
│   ├── Header.tsx          # Sticky header with mobile nav
│   ├── Footer.tsx          # Site footer
│   ├── ProductCard.tsx     # Product display card
│   ├── CategoryFilter.tsx  # Category filter buttons
│   └── ContactForm.tsx     # Contact form with validation
├── lib/
│   ├── supabase.ts         # Supabase client
│   ├── api.ts              # Data fetching functions
│   └── constants.ts        # Site config & fallback data
└── types/
    └── index.ts            # TypeScript types
```

## Deploying to Vercel

1. Push this repo to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Add environment variables in Vercel project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy! Vercel auto-detects Next.js and Bun.

## Customization

- **Colors & fonts:** Edit the `@theme` block in [`src/app/globals.css`](./src/app/globals.css)
- **Contact info:** Update [`src/lib/constants.ts`](./src/lib/constants.ts)
- **Products:** Add/edit in Supabase dashboard or update the fallback data in `constants.ts`

## License

See [LICENSE](./LICENSE).
