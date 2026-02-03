import fs from "node:fs";
import path from "node:path";

function safeJoinPublic(publicDir, requestedPath) {
  const normalized = path
    .normalize(requestedPath)
    .replace(/^(\.\.(\/|\\|$))+/, "");
  const full = path.join(publicDir, normalized);
  if (!full.startsWith(publicDir)) return null;
  return full;
}

function rewriteExternalAnchors(html) {
  return html.replace(/<a\b[^>]*>/gi, (tag) => {
    const hrefMatch = tag.match(/\shref\s*=\s*(["'])(.*?)\1/i);
    if (!hrefMatch) return tag;

    const quote = hrefMatch[1];
    const href = hrefMatch[2].trim();

    // Keep local / in-page / relative / email / phone links
    if (
      href === "" ||
      href.startsWith("#") ||
      href.startsWith("/") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    ) {
      return tag;
    }

    const isHttp = /^https?:\/\//i.test(href);
    const isProtocolRelative = /^\/\//.test(href);
    if (!isHttp && !isProtocolRelative) return tag; // relative like "shop/" or "index.html"

    // Convert links to the original WP demo into local routes.
    try {
      const url = new URL(isProtocolRelative ? `https:${href}` : href);
      if (url.hostname === "manufacturer.stylemixthemes.com") {
        let p = url.pathname || "/";
        if (p === "/industrial8" || p === "/industrial8/") {
          p = "/";
        } else if (p.startsWith("/industrial8/")) {
          p = `/${p.slice("/industrial8/".length)}`;
        } else {
          // Other demos on the same domain should not be linked out from this site.
          p = "#";
        }

        if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);

        const cleaned = tag
          .replace(/\shref\s*=\s*(["'])(.*?)\1/i, ` href=${quote}${p}${quote}`)
          .replace(/\s+target\s*=\s*(["'])(.*?)\1/gi, "");

        return cleaned;
      }
    } catch {
      // fall through
    }

    // Neutralize any other external link
    return tag
      .replace(/\shref\s*=\s*(["'])(.*?)\1/i, ` href=${quote}#${quote}`)
      .replace(/\s+target\s*=\s*(["'])(.*?)\1/gi, "");
  });
}

export async function getServerSideProps({ params, res }) {
  const publicDir = path.join(process.cwd(), "public");
  const slugParts = Array.isArray(params?.slug) ? params.slug : [];
  const reqPath = slugParts.join("/");

  const candidates = [];
  if (slugParts.length === 0) {
    candidates.push("index.html");
  } else {
    // Prefer directory index (e.g. /shop -> /shop/index.html)
    candidates.push(`${reqPath}/index.html`);
    // Also allow explicit html (e.g. /about.html)
    if (!reqPath.endsWith(".html")) candidates.push(`${reqPath}.html`);
    candidates.push(reqPath);
  }

  for (const rel of candidates) {
    const fullPath = safeJoinPublic(publicDir, rel);
    if (!fullPath) continue;

    try {
      const stat = fs.statSync(fullPath);
      if (!stat.isFile()) continue;

      let html = fs.readFileSync(fullPath, "utf8");

      // Remove Stylemix "theme demos" floating widget (hardcoded in the exported HTML).
      // This widget is irrelevant for a standalone site and adds external links/scripts.
      html = html.replace(
        /<div class="stm_theme_demos">[\s\S]*?<\/script>\s*/i,
        ""
      );

      // Remove/neutralize external links across the site (keep local routes).
      html = rewriteExternalAnchors(html);

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(html);
      return { props: {} };
    } catch {
      // try next candidate
    }
  }

  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("404 - Not Found");
  return { props: {} };
}

export default function StaticHtmlPage() {
  // Response is fully handled in getServerSideProps.
  return null;
}

