import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "projects");

fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();

async function captureHtml(name, htmlFile) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(`file://${path.join(__dirname, "mockups", htmlFile)}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(outDir, `${name}.png`),
    fullPage: false,
  });
  await page.close();
  console.log(`Captured ${name}.png`);
}

async function captureUrl(name, url, viewport, clip) {
  const page = await browser.newPage({ viewport });
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1500);
  const options = { path: path.join(outDir, `${name}.png`) };
  if (clip) options.clip = clip;
  await page.screenshot(options);
  await page.close();
  console.log(`Captured ${name}.png`);
}

await captureHtml("umt-home", "umt-home.html");
await captureHtml("umt-attendance", "umt-attendance.html");

await captureUrl("euclm-landing", "https://www.euclm.com", { width: 1280, height: 900 }, {
  x: 0, y: 0, width: 1280, height: 720,
});

const featuresPage = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await featuresPage.goto("https://www.euclm.com", { waitUntil: "networkidle", timeout: 60000 });
await featuresPage.waitForTimeout(1000);
await featuresPage.evaluate(() => window.scrollTo(0, 900));
await featuresPage.waitForTimeout(800);
await featuresPage.screenshot({
  path: path.join(outDir, "euclm-features.png"),
  clip: { x: 0, y: 0, width: 1280, height: 720 },
});
await featuresPage.close();
console.log("Captured euclm-features.png");

const pricingPage = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await pricingPage.goto("https://www.euclm.com", { waitUntil: "networkidle", timeout: 60000 });
await pricingPage.waitForTimeout(1000);
await pricingPage.evaluate(() => {
  const el = document.querySelector("#pricing") || [...document.querySelectorAll("h2")].find((h) => h.textContent?.includes("Pricing"));
  el?.scrollIntoView({ block: "start" });
});
await pricingPage.waitForTimeout(800);
await pricingPage.screenshot({
  path: path.join(outDir, "euclm-pricing.png"),
  clip: { x: 0, y: 0, width: 1280, height: 720 },
});
await pricingPage.close();
console.log("Captured euclm-pricing.png");

await browser.close();
