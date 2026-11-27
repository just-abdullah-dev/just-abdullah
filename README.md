# Just Abdullah — Quiet Foundry Portfolio

Product-minded Full Stack Engineer & founder portfolio built with Next.js 14.

## Stack

- Next.js App Router
- Tailwind CSS
- Framer Motion (light, reduced-motion aware)
- Vercel Analytics + Google Analytics

## SEO

- Per-route metadata, Open Graph, Twitter cards
- `robots.txt` and `sitemap.xml`
- JSON-LD Person, WebSite, BreadcrumbList, CreativeWork, FAQ
- Indexable case studies; thin experiments (`quizical`, `tenzies`) are `noindex`

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` to your live domain for correct canonicals and sitemap URLs.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm start` — serve production build
