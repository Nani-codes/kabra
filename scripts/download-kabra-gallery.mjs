import fs from "node:fs/promises";
import path from "node:path";
import https from "node:https";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");
const kabraRoot = path.resolve(projectRoot, "..", "www.kabragroup.in");
const outRoot = path.join(projectRoot, "public", "assets", "kabra", "gallery");

const PRODUCT_FILES = [
  "products1.html",
  "products2.html",
  "products3.html",
  "products4.html",
  "products5.html",
  "products6.html",
  "products7.html",
  "products8.html",
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`Request failed (${res.statusCode}): ${url}`));
        }
        const fileStream = fs
          .mkdir(path.dirname(dest), { recursive: true })
          .then(() => fs.writeFile(dest, Buffer.alloc(0)))
          .then(() => fs.open(dest, "w"));

        fileStream
          .then((fh) => {
            res.on("data", (chunk) => {
              fh.write(chunk);
            });
            res.on("end", () => {
              fh.close().then(resolve).catch(reject);
            });
          })
          .catch(reject);
      })
      .on("error", reject);
  });
}

async function main() {
  const urls = new Set();

  for (const file of PRODUCT_FILES) {
    const htmlPath = path.join(kabraRoot, file);
    let html;
    try {
      html = await fs.readFile(htmlPath, "utf8");
    } catch {
      continue;
    }

    const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
    let match;
    while ((match = imgRegex.exec(html))) {
      let src = match[1].trim();
      if (!src) continue;

      src = src.replace(/\\\\/g, "/").replace(/\\/g, "/");

      if (!/www\.kabragroup\.in\/gallery/i.test(src)) continue;

      let url;
      if (/^https?:\/\//i.test(src)) {
        url = new URL(src);
      } else {
        url = new URL(src, "https://www.kabragroup.in");
      }

      if (!url.pathname.toLowerCase().startsWith("/gallery")) continue;

      const relPath = url.pathname.replace(/^\/gallery\/?/i, "");
      if (!relPath) continue;

      urls.add({ url: url.toString(), relPath });
    }
  }

  console.log(`Found ${urls.size} gallery images to download`);

  const tasks = [];
  for (const { url, relPath } of urls) {
    const dest = path.join(outRoot, relPath);
    tasks.push(
      downloadFile(url, dest)
        .then(() => {
          console.log("Downloaded", url, "->", path.relative(projectRoot, dest));
        })
        .catch((err) => {
          console.warn("Failed to download", url, ":", err.message);
        })
    );
  }

  await Promise.all(tasks);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

