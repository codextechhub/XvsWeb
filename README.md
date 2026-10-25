# XvsWeb

The XVS website, built with React, TypeScript and Vite.

```sh
npm install
npm run dev       # local site at http://localhost:5173
npm run lint
npm run build     # also pre-renders every page, sitemap.xml and robots.txt (scripts/prerender.mjs)
npm test          # Playwright browser tests (first time: npx playwright install chromium)
```

## Where things live

```
public/
  logo.png, favicon.*        XVS shield (header logo + browser tab icon)
  images/xvs/                XVS screenshots used on the pages

src/
  App.tsx                    every page's address (routes)
  index.css                  colours, fonts, buttons, animations  ← change the look here
  pageTitles.ts              tab names, search descriptions, share image  ← SEO text here
  entry-server.tsx           renders pages to HTML at build time
  lib/analytics.ts           visitor analytics (switch on in .env: Plausible or GA4)
  lib/emailjs.ts             sends the contact form

  components/
    navigation.ts            menu links, footer links, email, WhatsApp number, social accounts  ← edit links here
    WhatsAppButton.tsx       green chat button (shows once a WhatsApp number is set)
    PageLayout.tsx           header + page + footer wrapper
    SiteHeader.tsx / SiteFooter.tsx / Logo.tsx
    BookDemoBanner.tsx       the navy "Book a demo" panel that ends most pages
    shared/                  small building blocks (Reveal, BrowserFrame, icons…)

  pages/
    Home/        HomePage.tsx · content.ts · home.css · sections/
    Services/    ServicesPage.tsx · content.ts · services.css · sections/
    About/       AboutPage.tsx · content.ts · about.css · sections/
    Contact/     ContactPage.tsx · ContactForm.tsx · content.ts · contact.css
    Legal/       Privacy + Terms placeholders
    NotFound/    404 page
```

Every page folder follows the same pattern:

- **`content.ts`**: all the words, numbers and image paths. To change copy, edit only this file.
- **`XxxPage.tsx`**: lists the sections in order. Move or delete a line to reorder or remove a section.
- **`sections/`**: one file per section (layout and animation only).
- **`xxx.css`**: that page's styles, in the same order as the sections.

Put words between `*asterisks*` in a heading to show them in the italic serif accent.

The menu's sliding highlight (speed, bounce, link sizes, colours) is tuned in `src/components/layout.css` under **NAV ANIMATION SETTINGS**. The moving background is tuned in `src/components/background.css`.

## Services

All 24 services (6 groups) from the XVS Services Guide are in `src/pages/Services/content.ts`. The home page's "What XVS does" grid reads the same list, so each service is only written once. Link straight to an opened service with `/services#<service-id>`, e.g. `/services#billing-invoicing`.

## Contact form

The form sends through EmailJS. Follow [the EmailJS setup guide](docs/emailjs-setup.md) and put your IDs in `.env` (see `.env.example`).

## Hosting

Netlify (`public/_redirects`) and Vercel (`vercel.json`) fallback rules are included. Other hosts should serve `index.html` for every page address. The old `/products` and `/xvs` addresses redirect to `/services` and `/`.

## Search, sharing and analytics

- **Pre-rendering:** `npm run build` writes each page as finished HTML with its own title,
  description, canonical link, share preview and Google structured data (FAQ, software,
  organisation), plus `sitemap.xml` and `robots.txt`. Each page is written as a folder
  with an `index.html` (`dist/about/index.html`), so every host can serve `/about`.
- **Service pages:** every service also has its own page, `/services/<id>`, titled the way
  schools search for it. Change those titles and "also known as" names in
  `src/pages/Services/search.ts`.
- **AI assistants:** the build writes `llms.txt` (a plain summary of XVS and every page) and
  names the AI crawlers in `robots.txt` so they are welcome.
- **Search Console:** set `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION` (see
  `.env.example`), deploy, verify, then submit `/sitemap.xml` in both.
- **Share picture:** `public/og-image.jpg` (1200 × 630), shown by WhatsApp, LinkedIn and X.
- **Analytics:** set `VITE_PLAUSIBLE_DOMAIN` or `VITE_GA4_ID` in `.env` (see `.env.example`).
  Demo requests, "Book a demo" clicks and WhatsApp clicks are recorded as events.
- **WhatsApp and social links:** fill in `COMPANY.whatsapp` and `SOCIAL_LINKS` in
  `src/components/navigation.ts`.

## Hosting on Render (static site)

Settings → Build & Deploy:

- **Build command:** `npm ci && npm run build`
- **Publish directory:** `dist`

Environment: set `SITE_URL` to the site's own domain (e.g. `https://xvs.codexng.com`), plus any of
the optional keys in `.env.example` (EmailJS, analytics, search console codes). Render only
reads them at build time, so redeploy after changing one.

Redirects/Rewrites, in this order (replace any single `/*` → `/index.html` rule: that one would
serve the home page's text at every address and undo the per-page search work):

| Source | Destination | Action |
| --- | --- | --- |
| `/products` | `/services` | Redirect |
| `/xvs` | `/` | Redirect |
| `/services/:id` | `/services/:id/index.html` | Rewrite |
| `/services` | `/services/index.html` | Rewrite |
| `/about` | `/about/index.html` | Rewrite |
| `/contact` | `/contact/index.html` | Rewrite |
| `/privacy` | `/privacy/index.html` | Rewrite |
| `/terms` | `/terms/index.html` | Rewrite |
| `/*` | `/404.html` | Rewrite |

Real files (images, videos, `sitemap.xml`, `llms.txt`…) are always served as they are; Render
only applies these rules where no file exists. A new page needs its own rewrite line here.
