# XvsWeb

React + TypeScript website built with Vite. The XVS homepage and supporting pages preserve the supplied CodeX HTML designs, including the animated consoles and showcase rails.

## Development

```sh
npm install
npm run dev
```

## Checks and production build

```sh
npm run lint
npm run build
npm run preview
npm test
```

Browser tests use Playwright Chromium (`npx playwright install chromium` on a new machine). They cover phone, tablet, and desktop widths, navigation, direct URLs, reduced motion, and form validation.

Routes: `/` and `/xvs` (XVS), `/products`, `/about`, `/contact`, `/privacy`, `/terms`, and a catch-all 404. Privacy and Terms are placeholders pending approved documents.

Forms validate their fields and send through EmailJS using separate contact and demo templates. Follow [the EmailJS setup guide](docs/emailjs-setup.md) for copy-and-paste HTML templates, dashboard settings, environment variables, and delivery checks.

Netlify (`public/_redirects`) and Vercel (`vercel.json`) SPA fallback rules are included. Other hosts should serve `index.html` for application routes.

The native React page markup and original animation logic live in `src/pages`. `scripts/import_reference.py` records the original import process; rerunning it replaces these generated pages and `src/reference.css`. Shared responsive refinements live in `src/App.css`.
