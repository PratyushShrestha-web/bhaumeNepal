# Bhaume

Nepal's next-generation marketplace — buy instantly, negotiate fairly, or win through live auctions, all in one trusted marketplace. This repo is the marketing/waitlist landing page.

**Live demo:** _add your deployed URL here after deploying_

## Tech stack

- **Next.js 15** (App Router, Server Actions)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for scroll/hover animations
- **Lucide React** for icons
- **Supabase** for the waitlist database
- **sonner** for toast notifications

## Folder structure

```
bhaume/
├─ app/
│  ├─ actions/waitlist.ts     # Server Action: validates + inserts into Supabase
│  ├─ layout.tsx              # Fonts, metadata, OpenGraph, viewport
│  ├─ page.tsx                # Assembles all landing page sections
│  ├─ globals.css             # Design tokens, glass/gradient utilities
│  ├─ opengraph-image.tsx     # Dynamic OG image (next/og)
│  ├─ robots.ts                # robots.txt
│  └─ sitemap.ts               # sitemap.xml
├─ components/
│  ├─ ui/                     # GlassCard, GradientBlobs, SectionHeading
│  ├─ Navbar.tsx
│  ├─ Hero.tsx
│  ├─ PhoneMockup.tsx          # Floating phone mockup used in the hero
│  ├─ Problem.tsx
│  ├─ Solution.tsx
│  ├─ HowItWorks.tsx
│  ├─ ComingSoon.tsx
│  ├─ Waitlist.tsx             # Form wired to the Server Action
│  ├─ FAQ.tsx
│  └─ Footer.tsx
├─ lib/
│  ├─ supabase.ts              # Supabase client factory
│  └─ utils.ts                 # cn() class-merging helper
├─ supabase/
│  └─ schema.sql               # Waitlist table + RLS policy
└─ public/
```

## 1. Installation

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
git clone <your-repo-url> bhaume
cd bhaume
npm install
```

## 2. Supabase setup

1. Create a free project at [supabase.com](https://supabase.com).
2. Open **SQL Editor** in your project and run the contents of [`supabase/schema.sql`](./supabase/schema.sql). This creates the `waitlist` table:

   ```sql
   create table if not exists public.waitlist (
     id uuid primary key default gen_random_uuid(),
     name text not null,
     email text not null unique,
     role text not null check (role in ('buyer', 'seller', 'both')),
     created_at timestamp with time zone default now()
   );
   ```

   It also enables Row Level Security and adds a policy that allows anonymous **inserts only** — the client can add a signup but can never read, edit, or delete existing rows.

3. Go to **Project Settings → API** and copy:
   - `Project URL`
   - `anon public` key

## 3. Environment variables

Copy the example file and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
NEXT_PUBLIC_SITE_URL=https://bhaume.com
```

`NEXT_PUBLIC_SITE_URL` is used to build absolute URLs for metadata, the sitemap, and robots.txt — set it to your production domain when you deploy.

## 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page hot-reloads as you edit files in `app/` and `components/`.

Other useful scripts:

```bash
npm run build      # production build
npm run start      # run the production build locally
npm run lint        # ESLint
npm run typecheck   # TypeScript, no emit
```

## 5. Deploy to Vercel

1. Push this repo to GitHub (see below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no build settings need to change.
4. Add the same environment variables from `.env.local` under **Project Settings → Environment Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SITE_URL` (your `https://<project>.vercel.app` URL, or custom domain)
5. Click **Deploy**. Vercel will build and give you a live URL.

Alternatively, via the CLI:

```bash
npm install -g vercel
vercel login
vercel        # preview deployment
vercel --prod # production deployment
```

## Performance & SEO notes

- Fonts are loaded via `next/font` (self-hosted, no layout shift).
- `opengraph-image.tsx` generates the social preview image at build/request time — no static asset to keep in sync.
- `robots.ts` / `sitemap.ts` are generated from `NEXT_PUBLIC_SITE_URL`, so they stay correct across environments.
- Animations use CSS transforms/opacity and `framer-motion`'s `whileInView` (`viewport={{ once: true }}`) so they run once and don't cost re-renders on repeat scroll.
- `prefers-reduced-motion` is respected globally (see `app/globals.css`).

## License

Proprietary — © Bhaume. All rights reserved.
