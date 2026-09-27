# XvsWeb

The XVS website, built with React, TypeScript and Vite.

```sh
npm install
npm run dev       # local site at http://localhost:5173
npm run lint
npm run build
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
  pageTitles.ts              browser tab names + search descriptions
  lib/emailjs.ts             sends the contact form

  components/
    navigation.ts            menu links, footer links, email, city  ← edit links here
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

## Services

All 24 services (6 groups) from the XVS Services Guide are in `src/pages/Services/content.ts`. The home page's "What XVS does" grid reads the same list, so each service is only written once. Link straight to an opened service with `/services#<service-id>`, e.g. `/services#billing-invoicing`.

## Contact form

The form sends through EmailJS. Follow [the EmailJS setup guide](docs/emailjs-setup.md) and put your IDs in `.env` (see `.env.example`).

## Hosting

Netlify (`public/_redirects`) and Vercel (`vercel.json`) fallback rules are included. Other hosts should serve `index.html` for every page address. The old `/products` and `/xvs` addresses redirect to `/services` and `/`.
