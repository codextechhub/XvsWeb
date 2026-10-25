/**
 * Runs at the end of `npm run build`. Writes every page as finished HTML, so
 * search engines, AI assistants and link previews (WhatsApp, LinkedIn, X) see
 * real content:
 *
 *   dist/index.html, services/index.html, about/index.html, contact/index.html,
 *   privacy/index.html, terms/index.html, 404.html
 *                            each with its own title, description, canonical
 *                            link, share preview and Google structured data
 *   dist/services/<id>/index.html  one page per service, named for how schools search for it
 *
 * Each page is a folder with an index.html, so /about is served by every host
 * (Render does not map /about to about.html). Render's rewrite rules are in the README.
 *   dist/sitemap.xml         every public page, for search engines
 *   dist/robots.txt          lets search engines and AI assistants in, and points them at the sitemap
 *   dist/llms.txt            a plain summary of XVS and every page, for AI assistants
 *
 * Page text comes from src/pageTitles.ts and src/pages/Services/search.ts; the FAQ
 * from src/pages/Home/content.ts.
 * The site's address comes from SITE_URL, else the host's own address (Vercel or Render).
 * Search console ownership tags come from GOOGLE_SITE_VERIFICATION and BING_SITE_VERIFICATION.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const DIST = path.resolve("dist");
const SSR = path.resolve("dist-ssr/entry-server.js");

// ✏️ The address the site lives at. Used when nothing else says.
const FALLBACK_URL = "https://xvs.codexng.com";
const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const hostUrl = vercel ? `https://${vercel}` : process.env.RENDER_EXTERNAL_URL;
const SITE_URL = (process.env.SITE_URL || hostUrl || FALLBACK_URL).replace(/\/+$/, "");
// On Render the host's address is the onrender.com one: set SITE_URL to your own domain.
if (!process.env.SITE_URL) console.warn(`prerender: SITE_URL is not set, using ${SITE_URL}`);

// ✏️ Pages kept out of search results. Take privacy and terms out once they are published.
const NOINDEX = new Set(["notFound", "privacy", "terms"]);

const { render, PAGE_META, SHARE_IMAGE, COMPANY, SOCIAL_LINKS, FAQ, SERVICE_GROUPS, ALL_SERVICES, serviceMeta } = await import(
  pathToFileURL(SSR).href
);

// Proves to Google Search Console and Bing Webmaster Tools that the site is yours (see README).
const VERIFY = [
  ["google-site-verification", process.env.GOOGLE_SITE_VERIFICATION],
  ["msvalidate.01", process.env.BING_SITE_VERIFICATION],
].filter(([, value]) => value);

const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
const abs = (p) => new URL(p, `${SITE_URL}/`).href;
const attr = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const plain = (s) => s.replace(/\*/g, ""); // drop the *accent* markers
const jsonLd = (data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: COMPANY.name,
  url: `${SITE_URL}/`,
  logo: abs("/logo.png"),
  email: COMPANY.email,
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  ...(SOCIAL_LINKS.length ? { sameAs: SOCIAL_LINKS.map((link) => link.href) } : {}),
};

const crumbs = (...items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, item], i) => ({ "@type": "ListItem", position: i + 1, name, item })),
});

/** Google's structured data for a page. `entry` is set for a service's own page. */
function structuredData(key, entry) {
  const graph = [organization];

  if (entry) {
    const { service, group } = entry;
    const meta = serviceMeta(service);
    graph.push(
      {
        "@type": "Service",
        name: meta.heading,
        alternateName: [service.name, ...meta.also],
        serviceType: meta.heading,
        description: plain(`${service.promise} ${service.problem}`),
        audience: { "@type": "Audience", audienceType: service.forWho },
        areaServed: { "@type": "Country", name: "Nigeria" },
        provider: { "@id": organization["@id"] },
        url: abs(meta.path),
      },
      crumbs(["Home", `${SITE_URL}/`], ["Services", abs("/services")], [group.name, abs(`/services#${group.id}`)], [service.name, abs(meta.path)]),
    );
    return jsonLd({ "@context": "https://schema.org", "@graph": graph });
  }

  const meta = PAGE_META[key];
  if (key === "home") {
    graph.push(
      { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "XVS", url: `${SITE_URL}/`, publisher: { "@id": organization["@id"] } },
      {
        "@type": "SoftwareApplication",
        name: "XVS",
        alternateName: ["XVS school management software", "XVS school management system"],
        url: `${SITE_URL}/`,
        description: meta.description,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "School management software",
        operatingSystem: "Web browser, Android, iOS",
        image: abs(SHARE_IMAGE),
        publisher: { "@id": organization["@id"] },
        featureList: ALL_SERVICES.map((e) => serviceMeta(e.service).heading),
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    );
  }
  if (key === "services") {
    graph.push({
      "@type": "ItemList",
      name: "XVS services",
      itemListElement: ALL_SERVICES.map((e, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: serviceMeta(e.service).heading,
        url: abs(`/services/${e.service.id}`),
      })),
    });
  }
  if (meta.path && meta.path !== "/") {
    graph.push(crumbs(["Home", `${SITE_URL}/`], [meta.title.split(/ [-|] /)[0], abs(meta.path)]));
  }
  return jsonLd({ "@context": "https://schema.org", "@graph": graph });
}

function head(key, entry) {
  const { title, description, path: pagePath } = entry ? serviceMeta(entry.service) : PAGE_META[key];
  const url = abs(pagePath ?? "/");
  const image = abs(SHARE_IMAGE);
  return [
    `<title>${attr(title)}</title>`,
    `<meta name="description" content="${attr(description)}" />`,
    pagePath ? `<link rel="canonical" href="${url}" />` : "",
    NOINDEX.has(key) ? `<meta name="robots" content="noindex" />` : `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    ...VERIFY.map(([name, value]) => `<meta name="${name}" content="${attr(value)}" />`),
    `<meta property="og:title" content="${attr(title)}" />`,
    `<meta property="og:description" content="${attr(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="XVS: the platform your school runs on" />`,
    `<meta name="twitter:title" content="${attr(title)}" />`,
    `<meta name="twitter:description" content="${attr(description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    structuredData(key, entry),
  ]
    .filter(Boolean)
    .join("\n    ");
}

/** The built index.html with one page's head and content filled in. */
function page(pagePath, headHtml) {
  const html = template
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, headHtml)
    .replace('<div id="root"></div>', `<div id="root">${render(pagePath)}</div>`);
  if (html === template) throw new Error("prerender: index.html markers not found");
  return html;
}

// ── The pages ──
/** Writes a page as <path>/index.html (the home page as index.html). */
function writePage(pagePath, html) {
  const dir = path.join(DIST, pagePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}
const written = [];
for (const key of Object.keys(PAGE_META)) {
  const pagePath = PAGE_META[key].path;
  if (pagePath) writePage(pagePath, page(pagePath, head(key)));
  else fs.writeFileSync(path.join(DIST, "404.html"), page("/404", head(key)));
  written.push(pagePath ?? "404");
}
for (const entry of ALL_SERVICES) {
  const { path: pagePath } = serviceMeta(entry.service);
  writePage(pagePath, page(pagePath, head("service", entry)));
}
written.push(`${ALL_SERVICES.length} service pages`);

// ── sitemap.xml ──
const today = new Date().toISOString().slice(0, 10);
const listed = [
  ...Object.entries(PAGE_META)
    .filter(([key, meta]) => meta.path && !NOINDEX.has(key))
    .map(([key, meta]) => ({ loc: abs(meta.path), priority: key === "home" ? "1.0" : "0.8" })),
  ...ALL_SERVICES.map((entry) => ({ loc: abs(serviceMeta(entry.service).path), priority: "0.7" })),
];
const urls = listed.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod><priority>${u.priority}</priority></url>`);
fs.writeFileSync(
  path.join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
);

// ── robots.txt ──
// Search engines and AI assistants' crawlers are all welcome. Naming the AI ones
// makes that explicit for crawlers that only read their own section.
const AI_CRAWLERS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot",
  "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bingbot", "meta-externalagent", "CCBot",
];
const robots = ["User-agent: *\nAllow: /", ...AI_CRAWLERS.map((bot) => `User-agent: ${bot}\nAllow: /`)];
fs.writeFileSync(path.join(DIST, "robots.txt"), `${robots.join("\n\n")}\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

// ── llms.txt ──
// A plain-language map of the site that AI assistants read when answering
// questions such as "which school management software suits a Nigerian school?"
const serviceLines = (group) =>
  group.services
    .map((service) => {
      const meta = serviceMeta(service);
      return `- [${meta.heading}](${abs(meta.path)}): ${plain(service.promise)} Includes: ${service.benefits.join("; ")}.`;
    })
    .join("\n");
const llms = `# XVS

> ${PAGE_META.home.description}

XVS is made by ${COMPANY.name} in ${COMPANY.city}. It is web-based school management software for schools with one branch or many. It covers student and staff records, academic structure, timetables, attendance, results and report cards, school fees billing and online payment (Paystack or bank transfer), accounting, procurement and stock, approvals, audit history, and apps for parents and students that install on a phone from the browser.

Contact: ${COMPANY.email}. Book a demo: ${abs("/contact")}

## Main pages

- [Home](${abs("/")}): what XVS is and who it is for
- [Services](${abs("/services")}): all ${ALL_SERVICES.length} services in ${SERVICE_GROUPS.length} groups
- [About](${abs("/about")}): why CodeX built XVS
- [Book a demo](${abs("/contact")})

## Services

${SERVICE_GROUPS.map((group) => `### ${group.name}\n\n${plain(group.summary)}\n\n${serviceLines(group)}`).join("\n\n")}

## Questions schools ask

${FAQ.items.map((item) => `### ${item.q}\n\n${item.a}`).join("\n\n")}
`;
fs.writeFileSync(path.join(DIST, "llms.txt"), llms);

fs.rmSync(path.resolve("dist-ssr"), { recursive: true, force: true });
console.log(`prerender: ${written.join(", ")}, sitemap.xml, robots.txt, llms.txt for ${SITE_URL}`);
