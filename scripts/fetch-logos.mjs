/**
 * Fetch company logos from public favicon sources.
 *
 * LinkedIn company logos cannot be fetched automatically (auth required, no public API).
 * This script pulls favicons from company domains via Google's favicon service.
 *
 * Usage: node scripts/fetch-logos.mjs
 */
import { writeFileSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "logos");

const companies = [
  { slug: "visium", domain: "visium.com" },
  { slug: "hp", domain: "hp.com" },
  { slug: "nttdata", domain: "nttdata.com" },
];

mkdirSync(outDir, { recursive: true });

for (const { slug, domain } of companies) {
  const url = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  const response = await fetch(url);
  if (!response.ok) {
    console.warn(`Failed to fetch ${domain}: ${response.status}`);
    continue;
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  writeFileSync(path.join(outDir, `${slug}.png`), buffer);
  console.log(`Saved ${slug}.png from ${domain}`);
}
