import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Resolves the absolute site URL used for Open Graph / Twitter meta tags.
// Priority:
//   1. VITE_SITE_URL         — manual override, e.g. for a custom domain
//   2. VERCEL_PROJECT_PRODUCTION_URL — set automatically by Vercel on prod builds
//   3. VERCEL_URL            — set automatically by Vercel on every build,
//                              including preview/branch deployments (each
//                              gets its own unique URL, so this makes
//                              previews share correct OG images too)
//   4. a hardcoded fallback, for local builds outside Vercel
function resolveSiteUrl() {
  const override = process.env.VITE_SITE_URL;
  if (override) return override.replace(/\/$/, "");

  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercelHost) return `https://${vercelHost}`;

  return "https://robert-nadin-portfolio.vercel.app";
}

// Injects the resolved site URL into index.html in place of __SITE_URL__.
function htmlSiteUrlPlugin() {
  const siteUrl = resolveSiteUrl();
  return {
    name: "html-site-url",
    transformIndexHtml(html) {
      return html.replaceAll("__SITE_URL__", siteUrl);
    },
  };
}

export default defineConfig({
  plugins: [react(), htmlSiteUrlPlugin()],
});
