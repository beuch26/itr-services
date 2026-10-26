import type { APIRoute } from "astro";
import { siteConfig } from "../data/siteConfig";
import { blogArticles } from "../data/blog";

const pageFiles = Object.keys(import.meta.glob("./**/*.astro"));

export const GET: APIRoute = () => {
  const staticPaths = pageFiles
    .filter((file) => !file.includes("["))
    .map((file) => {
      const path = file.replace(/^\.\//, "").replace(/\.astro$/, "").replace(/(^|\/)index$/, "");
      return path ? `/${path}/` : "/";
    });

  const blogPaths = blogArticles.map((article) => `/blog/${article.slug}/`);

  const urls = [...staticPaths, ...blogPaths]
    .sort()
    .map((path) => `  <url><loc>${siteConfig.siteUrl}${path}</loc></url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
